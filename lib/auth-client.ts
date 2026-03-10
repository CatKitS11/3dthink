import { createAuthClient } from "better-auth/react"
import "dotenv/config";
import { inferAdditionalFields } from "better-auth/client/plugins"
import type { auth } from "@/lib/auth";

export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.NEXT_PUBLIC_APP_URL as string,
    plugins: [inferAdditionalFields<typeof auth>()],
})

export const { signIn: login, signUp: signup, signOut: logout, useSession } = authClient;