import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/tasks")({
  component: Tasks,
});

function Tasks() {
  return (
    <div>
      <h1>Tasks</h1>
    </div>
  );
}
