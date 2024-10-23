import { Outlet, createRootRoute } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";

export const Route = createRootRoute({
  component: Home,
});

function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className={"m-2 border-b justify-between flex p-1"}>
          <SidebarTrigger variant={"outline"} />
          <ModeToggle />
        </div>
        <Outlet />
        <Toaster />
      </main>
    </SidebarProvider>
  );
}
