"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { GoogleIcon, GithubIcon } from "@/components/icon";
import SignUp from "@/components/signup";

export default function SignUpPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const { error } = await authClient.signUp.email({
            name,
            email,
            password,
        });

        if (error) {
            setError(error.message || "Sign up failed");
        }
        setLoading(false);
    };

    const handleOAuthSignIn = async (provider: "google" | "github") => {
        setLoading(true);
        await authClient.signIn.social({
            provider,
            callbackURL: "/dashboard",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950">
            <SignUp />
        </div>
    );
}