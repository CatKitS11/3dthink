"use server"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { getSession } from "@/lib/session"
import { UserRole } from "@/types/auth.type";
import { redirect } from "next/navigation";
import { isAdminRole } from "@/lib/auth-guard";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const role = (await getSession())?.user?.role as UserRole;
  
  // Redirect if user doesn't have admin role
  if (!isAdminRole(role)) {
    redirect("/");
  }
  
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex-1">{children}</main>
    </SidebarProvider>
  )
}