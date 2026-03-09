import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import type { UserRole } from "@/type/auth.type";

export async function requireRole(role: UserRole) {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }

  if (session.user?.role !== role) {
    console.log("User role:", session.user?.role);
  }

  return session;
}