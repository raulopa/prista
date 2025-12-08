export interface Task {
  title: string;
  description?: string;
  
  // Aunque en DB es string, en el front es mejor limitar los valores
  status?: 'todo' | 'in-progress' | 'done'; 
  priority?: 'low' | 'medium' | 'high';
  
  // Relaciones
  clientId: number;       // Obligatorio según tu esquema
  projectId?: number;     // Opcional (una tarea puede no tener proyecto asignado)
  assignedToId?: number;  // Opcional (puede no tener usuario asignado aún)
}