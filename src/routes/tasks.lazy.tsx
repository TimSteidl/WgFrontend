import { createLazyFileRoute } from "@tanstack/react-router";
import { KanbanPage } from "@/components/kanban-page.tsx";

export const Route = createLazyFileRoute("/tasks")({
  component: Tasks,
});

function Tasks() {
  return (
    <div>
      <KanbanPage />
    </div>
  );
}
