"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/sign-in");
    };

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-950">
                <p className="text-white">Loading...</p>
            </div>
        );
    }

    if (!session) {
        router.push("/sign-in");
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950">
            <div className="text-center space-y-6">
                <h1 className="text-3xl font-bold text-white">
                    Welcome, {session.user.name}! 🎉
                </h1>
                <p className="text-zinc-400">Email: {session.user.email}</p>
                
                {session.user.image && (
                    <img
                        src={session.user.image}
                        alt="Profile"
                        className="w-20 h-20 rounded-full mx-auto"
                    />
                )}

                <button
                    onClick={handleSignOut}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
}