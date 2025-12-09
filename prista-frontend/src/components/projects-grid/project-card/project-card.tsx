import { FolderKanban } from "lucide-react";
import type { Project } from "../../../api/dtos/project-dto";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex items-center w-full p-4 rounded-md shadow-md hover:scale-101 transition-all hover:cursor-pointer">
      <FolderKanban></FolderKanban>
      <span className="ml-6 text-xl font-bold">{project.name}</span>
    </div>
  );
}
