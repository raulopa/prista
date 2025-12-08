import { useProjects } from "../api/services/projects-service";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";

export default function HomePage() {

   const { data: projects, isLoading, error } = useProjects();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar proyectos</p>;

   return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project :any) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.subtitle}</CardDescription>
          </CardHeader>

          <CardContent>
            <p>{project.description}</p>
          </CardContent>

          <CardFooter>
            {/* Aquí puedes poner botones, links, etc. */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
