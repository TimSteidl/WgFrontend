import { Outlet, createRootRoute } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import { AppSidebar } from "@/components/app-sidebar.tsx";

export const Route = createRootRoute({
  component: Home,
});

function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className={"pl-4"}>
          <SidebarTrigger />
        </div>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
