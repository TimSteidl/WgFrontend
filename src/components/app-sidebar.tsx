import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import {
  Bell,
  Calendar1Icon,
  HomeIcon,
  KanbanIcon,
  ShoppingBag,
} from "lucide-react";
import { AppSidebarFooter } from "@/components/app-sidebar-footer.tsx";

export function AppSidebar() {
  return (
    <Sidebar collapsible={"icon"} variant={"sidebar"}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Bell className={"mr-2 h-4 w-4"} />
            Wg Manager
          </SidebarGroupLabel>
          <SidebarGroupContent className={"pt-4"}>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to={"/"}>
                    <HomeIcon />
                    Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to={"/tasks"}>
                    <KanbanIcon />
                    Tasks
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to={"/calendar"}>
                    <Calendar1Icon />
                    Calendar
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to={"/tasks"}>
                    <ShoppingBag />
                    Shopping List
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <AppSidebarFooter />
    </Sidebar>
  );
}
