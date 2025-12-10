import type { Project } from "../../api/dtos/project-dto";
import type { Task } from "../../api/dtos/task-dto";
import { useTasksByProjects } from "../../api/services/tasks-service";

export function Kanban(project: Project) {
  const { data, isLoading, error } = useTasksByProjects(project.id);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error cargando las tareas del proyecto {project.id}</p>;

  return <div>
    {data.map((t : Task) => {
        return <div>{t.title}</div>
    })}
  </div>;
}
