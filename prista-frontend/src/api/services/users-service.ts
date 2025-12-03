import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL : string = import.meta.env.VITE_API_URL;

const fetchUsers = async () => {
  const { data } = await axios.get(`${API_URL}/Users`);
  return data;
};

export const useUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: fetchUsers });
};