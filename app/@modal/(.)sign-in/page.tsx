"use client";

import Login from "@/components/login";
import { useRouter } from "next/navigation";

export default function SignInModal() {
    const router = useRouter();

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={() => router.back()}>
                <div
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Login />
                </div>
            </div>
        </>
    );
}