import { useProjects } from "../../api/services/projects-service";
import ProjectCard from "./project-card/project-card";

export default function ProjectsList() {

  const { data, isLoading, isError, error } = useProjects();

  if (isLoading) return <div>Cargando proyectos...</div>;
  if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
          {data.map((d:any) => {
            return <ProjectCard project={d} ></ProjectCard>
          })}
        </div>
    );
}