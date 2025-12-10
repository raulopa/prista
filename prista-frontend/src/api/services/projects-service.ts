import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const API_URL : string = import.meta.env.VITE_API_URL;

const fetchProjects = async () => {
  const { data } = await axios.get(`${API_URL}/projects`);
  return data;
};

const fetchProject = async (id: number) => {
  const { data } = await axios.get(`${API_URL}/projects/${id}`);
  return data;
};

const createProjectRequest = async (project: any) => {
  const { data } = await axios.post(`${API_URL}/projects`, project);
  return data;
};

export const useProjects = () => {
  return useQuery({ 
    queryKey: ["projects"], 
    queryFn: fetchProjects 
  });
};

export const useProject = (id: number) => {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => fetchProject(id),
    enabled: !!id,
  });
};



export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProjectRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (error) => {
      console.error("Error al crear:", error);
    }
  });
};
