// import { requireRole } from "@/lib/auth-guard";
// import type { UserRole } from "@/type/auth.type";
// import Test3DComponent from "@/components/test3d";

import { requireRole } from "@/lib/auth-guard";
import type { UserRole } from "@/types/auth.type";
import Test3DComponent from "@/components/test3d";
 
export default async function Test3DPage() {
  // ✅ Server-side auth check
  const session = await requireRole("USER" as UserRole);
  
  // ✅ Pass user data ถ้าจำเป็น
  return <Test3DComponent user={session.user} />;
}