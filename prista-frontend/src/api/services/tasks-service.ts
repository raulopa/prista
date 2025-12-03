import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL : string = import.meta.env.VITE_API_URL;

const fetchTasks = async () => {
  const { data } = await axios.get(`${API_URL}/Tasks`);
  return data;
};

export const useTasks = () => {
  return useQuery({ queryKey: ["Tasks"], queryFn: fetchTasks });
};