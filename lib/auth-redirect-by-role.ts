import type { UserRole } from "@/types/auth.type";

export function redirectByRole(role?: UserRole) {
  switch (role) {
    case "ADMIN":
    case "SUPER_ADMIN":
      return "/admin/cms";
    case "USER":
      return "/dashboard";
    default:
      return "/";
  }
}