"use client"
import { ChartNoAxesCombinedIcon, ChartPieIcon, ChartSplineIcon, HashIcon, UsersIcon, ArrowRightLeftIcon, Clock9Icon, ClipboardListIcon, CrownIcon, SquareActivityIcon, CalendarClockIcon, Undo2Icon, SettingsIcon } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function DashboardSidebar() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authClient.signOut();
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <ChartNoAxesCombinedIcon />
                      <span className="font-semibold text-lg">Dashboard</span>
                    </a>
                  </SidebarMenuButton>
                  {/* <SidebarMenuBadge className='bg-primary/10 rounded-full'>5</SidebarMenuBadge> */}
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Features</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <ChartSplineIcon />
                      <span>Content Performance</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <UsersIcon />
                      <span>Audience Insight</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <ChartPieIcon />
                      <span>Engagement Metrics</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <HashIcon />
                      <span>Hashtag Performance</span>
                    </a>
                  </SidebarMenuButton>
                  {/* <SidebarMenuBadge className='bg-primary/10 rounded-full'>3</SidebarMenuBadge> */}
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <ArrowRightLeftIcon />
                      <span>Competitor Analysis</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <Clock9Icon />
                      <span>Campaign Tracking</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Profile</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <SquareActivityIcon />
                      <span>Real Time Monitoring</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <CalendarClockIcon />
                      <span>Schedule Post & Calendar</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <Undo2Icon />
                      <span>Report & Export</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <SettingsIcon />
                      <span>Settings & Integrations</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <UsersIcon />
                      <span>User Management</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <form className="flex justify-center mb-8 mx-8" action={handleLogout}>
          <Button className="w-full" type="submit">Log Out</Button>
        </form>
      </Sidebar>
  )
}