import { useNavigate, useParams } from "react-router-dom";
import { useProject } from "../api/services/projects-service";
import { Undo2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Kanban } from "../components/kanban/kanban";
import type { Project } from "../api/dtos/project-dto";

export default function ProjectPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const projectId = Number(id);

  const { data, isLoading, error } = useProject(projectId);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error cargando proyecto</p>;

  return (
    <div className="w-full p-4">
      <div className="flex items-center flex-col p-8">
        <div className="w-full pb-4 flex justify-between items-center">
          <div className="flex">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="bg-transparent! hover:outline-0!"
            >
              <Undo2 />
            </Button>
            <h2 className="font-bold text-2xl">{data.name}</h2>
          </div>
        </div>

        <Kanban project={data as Project}></Kanban>
      </div>
    </div>
  );
}
