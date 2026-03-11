"use server"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { UserRole } from "@/types/auth.type";
import { redirect } from "next/navigation";
import { isUserRole } from "@/lib/auth-guard";
import { getSession } from "@/lib/session";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

  const role = (await getSession())?.user?.role as UserRole;
  console.log("role:", role);


  // Redirect if user doesn't have user role
  if (!isUserRole(role)) {
    redirect("/");

  }

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex-1">{children}</main>
    </SidebarProvider>
  )
}