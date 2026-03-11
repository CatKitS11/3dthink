import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import type { UserRole } from "@/types/auth.type";

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

export function isGuest() {
  return requireRole("GUEST");
}

export function isUserRole(role?: UserRole) {
  return role === "USER";
}

export function isAdminRole(role?: UserRole) {
  return role === "ADMIN" || role === "SUPER_ADMIN";
}


export function isSuperAdminRole(role?: UserRole) {
  return role === "SUPER_ADMIN";
}