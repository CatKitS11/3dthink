import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// import { magicLink } from "better-auth/plugins";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    // plugins: [
    //     magicLink({
    //         sendMagicLink: async ({ email, token, url }) => {
    //             // send email to user
    //             console.log(`Magic link sent to ${email}: ${url}`);
    //         }
    //     })
    // ],
    emailAndPassword: {
        enabled: true,
        autoSignIn: false, //defaults to true
    },
    socialProviders: { 
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
        // github: {
        //     clientId: process.env.GITHUB_CLIENT_ID as string,
        //     clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        // },
    },
    trustedOrigins: [
        "http://localhost:3000",
    ],
});