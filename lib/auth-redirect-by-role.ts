import type { UserRole } from "@/types/auth.type";

export function redirectByRole(role?: UserRole) {
  switch (role) {
    case "ADMIN":
    case "SUPER_ADMIN":
      return "/admin/dashboard";
    case "USER":
      return "/dashboard";
    default:
      return "/";
  }
}