import { useDraggable } from "@dnd-kit/core";
import { Task } from "@/models/task.ts";
import { CSS } from "@dnd-kit/utilities";

interface DraggableKanbanPanelProps {
  task: Task;
}

export function DraggableKanbanPanel(props: DraggableKanbanPanelProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.task.id,
    data: props.task,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <div className="bg-white p-3 rounded-lg shadow-sm mb-4" draggable>
        <h3 className="text-sm font-semibold mb-1">Task 3</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This is a description for task 3.
        </p>
      </div>
    </button>
  );
}
