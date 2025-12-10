import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL : string = import.meta.env.VITE_API_URL;

const fetchTasks = async () => {
  const { data } = await axios.get(`${API_URL}/tasks`);
  return data;
};

export const useTasks = () => {
  return useQuery({ queryKey: ["tasks"], queryFn: fetchTasks });
};

const fetchTaskByProject = async (projectId : number) => {
  const { data } = await axios.get(`${API_URL}/tasks/projects/${projectId}`);
  return data;
};

export const useTasksByProjects = (projectId: number) => {
  return useQuery({
    queryKey: ["projectId", projectId],
    queryFn: () => fetchTaskByProject(projectId),
    enabled: !!projectId,
  });
};