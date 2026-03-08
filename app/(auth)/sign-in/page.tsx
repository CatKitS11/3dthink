"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import Login from "@/components/login";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Email/Password Sign In
    const handleEmailSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const { error } = await authClient.signIn.email({
            email,
            password,
        });

        if (error) {
            setError(error.message || "Sign in failed");
        }
        setLoading(false);
    };

    // OAuth Sign In
    const handleOAuthSignIn = async (provider: "google" | "github") => {
        setLoading(true);
        await authClient.signIn.social({
            provider,
            callbackURL: "/dashboard", // redirect หลัง login สำเร็จ
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950">
            <Login />
        </div>
    );
}