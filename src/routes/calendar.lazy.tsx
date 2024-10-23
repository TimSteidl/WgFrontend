import { createLazyFileRoute } from "@tanstack/react-router";
import { EnhancedCalendar } from "@/components/enhanced-calendar.tsx";

export const Route = createLazyFileRoute("/calendar")({
  component: Calendar,
});

function Calendar() {
  return (
    <div>
      <EnhancedCalendar />
    </div>
  );
}
