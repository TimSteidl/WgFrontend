import { createLazyFileRoute } from "@tanstack/react-router";
import { ProfileCard } from "@/components/profile-card.tsx";

export const Route = createLazyFileRoute("/profile")({
  component: Profile,
});

function Profile() {
  return (
    <div>
      <ProfileCard />
    </div>
  );
}
