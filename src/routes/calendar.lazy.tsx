import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/calendar")({
  component: Calendar,
});

function Calendar() {
  return (
    <div>
      <h1>Calendar</h1>
    </div>
  );
}
