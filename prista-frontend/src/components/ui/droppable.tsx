import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  id: string;
  children?: React.ReactNode;
}

export const Droppable: React.FC<DroppableProps> = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`p-4 min-h-[200px] border rounded ${
        isOver ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      {children}
    </div>
  );
};
