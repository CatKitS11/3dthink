"use client"

import { useEffect } from "react"
import { authClient } from "@/lib/auth-client"
import { redirectByRole } from "@/lib/auth-redirect-by-role"
import { useRouter } from "next/navigation"
import type { UserRole } from "@/types/auth.type"

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const run = async () => {
      const session = await authClient.getSession()
      const role = session?.data?.user?.role

      router.replace(redirectByRole(role as UserRole))
    }

    run()
  }, [])

  return <p>Signing you in...</p>
}