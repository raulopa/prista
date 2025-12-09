export interface Task {
  title: string;
  description?: string;
  
  status?: 'todo' | 'in-progress' | 'done'; 
  priority?: 'low' | 'medium' | 'high';
  
  clientId: number;       
  projectId?: number;
  assignedToId?: number;
}