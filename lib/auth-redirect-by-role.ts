import type { UserRole } from "@/types/auth.type";

export function redirectByRole(role?: UserRole) {
  switch (role) {
    case "ADMIN":
      return "/admin/dashboard";
    case "USER":
      return "/dashboard";
    default:
      return "/";
  }
}