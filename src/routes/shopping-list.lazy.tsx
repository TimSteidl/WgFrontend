import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/shopping-list")({
  component: ShoppingList,
});

function ShoppingList() {
  return (
    <div>
      <h1>Shopping List</h1>
    </div>
  );
}
