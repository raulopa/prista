import { FolderKanban } from "lucide-react";
import type { Project } from "../../../api/dtos/project-dto";
import { useNavigate } from "react-router-dom";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
 const navigate = useNavigate();

   const openProject = () => {
    navigate(`/project/${project.id}`);
  };


  return (
    <div onClick={openProject} className="flex items-center w-full p-4 rounded-md shadow-md hover:scale-101 transition-all hover:cursor-pointer">
      <FolderKanban></FolderKanban>
      <span className="ml-6 text-xl font-bold">{project.name}</span>
    </div>
  );
}
