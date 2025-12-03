import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL : string = import.meta.env.VITE_API_URL;

const fetchClients = async () => {
  const { data } = await axios.get(`${API_URL}/clients`);
  return data;
};

export const useClients = () => {
  return useQuery({ queryKey: ["clients"], queryFn: fetchClients });
};