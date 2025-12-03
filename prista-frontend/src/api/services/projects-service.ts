import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL : string = import.meta.env.VITE_API_URL;

const fetchProjects = async () => {
  const { data } = await axios.get(`${API_URL}/Projects`);
  return data;
};

export const useProjects = () => {
  return useQuery({ queryKey: ["projects"], queryFn: fetchProjects });
};