import type { Project } from "../../api/dtos/project-dto";
import { useTasksByProjects } from "../../api/services/tasks-service";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { Draggable } from "../ui/draggable";
import { Droppable } from "../ui/droppable";

interface KanbanProps {
  project: Project;
}
export const Kanban: React.FC<KanbanProps> = ({ project }) => {
    const [parent, setParent] = useState(null);
    const { data, isLoading, error } = useTasksByProjects(project.id);
    const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;

   function handleDragEnd(over : any) {
    setParent(over ? over.id : null);
  }
  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error cargando las tareas del proyecto {project.id}</p>;

  return (
    <DndContext>
      <div className="w-full max-h-full flex content-between">
        {!parent ? draggable : null}
        <div className="w-1/3 h-full">
          <Droppable id="droppable-1"></Droppable>
        </div>
        <div className="w-1/3 h-full">
          <Droppable  id="droppable-2"></Droppable>
        </div>
        <div className="w-1/3 h-full">
          <Droppable  id="droppable-3"></Droppable>
        </div>
      </div>
    </DndContext>
  );
};
