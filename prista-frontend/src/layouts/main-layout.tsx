import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/navbar";
import SideBar from "../components/sidebar/sidebar";
import { Button } from "../components/ui/button";
import ProjectsList from "../components/projects-grid/projects-grid";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

import { Input } from "../components/ui/input";

import { useState } from "react";
import { useCreateProject } from "../api/services/projects-service";
import { Project } from "../api/dtos/project-dto";
import { toast } from "sonner";

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [newProject, setNewProject] = useState(new Project(null));
  const { mutate: createProject, isPending } = useCreateProject();

  const handleSaveProject = () => {
    console.log(newProject.name);
    if (newProject.name == "" || newProject.name == null) {
      toast("Error", {
        description: "El nombre del proyecto no puede ser vacío",
      });
    } else {
      createProject(newProject, {
        onSuccess: () => setNewProject(newProject),
      });
    }
  };

  return (
    <main className="flex-1 w-full flex flex-col">
      <NavBar />
      <div className="relative z-0 flex">
        <div className="min-h-screen flex w-1/10 z-0 relative">
          <SideBar />
        </div>
        <div className="w-9/10 min-h-screen">
          <div
            id="dashboard-header"
            className="w-full  p-8 flex justify-between items-center"
          >
            <h2 className="text-xl font-bold">Dashboard</h2>
            <Button
              onClick={() => setIsOpen(true)}
              variant={"white"}
              className="bg-white! text-black! hover:!bg-gray-100! shadow-sm"
            >
              Añadir proyecto
            </Button>
          </div>

          <div className="w-full p-8 flex gap-8">
            <ProjectsList></ProjectsList>
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="[&>button]:hidden">
          <DialogHeader>
            <DialogTitle>Crear nuevo proyecto</DialogTitle>
            <Button
              variant="white"
              className="absolute top-2 right-2 p-1 text-black!"
              asChild
            >
              <DialogClose />
            </Button>
            <DialogDescription className="mt-4">
              <Input
                type="text"
                placeholder="Name"
                value={newProject.name}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    name: e.target.value,
                  })
                }
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant={"white"} onClick={handleSaveProject}>
              Guardar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Outlet />
    </main>
  );
}
