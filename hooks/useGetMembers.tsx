import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Member, Project } from "../lib/types";

const fetchMembers = async (): Promise<Member[]> => {
  const { data } = await axios.get<Member[]>(
    `${process.env.endpoint}/api/members-by-type/`,
    { params: { member_type: "Alle Medlemmer" } }
  );
  return data;
};

const fetchProjects = async (): Promise<Project[]> => {
  const { data } = await axios.get<Project[]>(
    `${process.env.endpoint}/api/projects/`
  );
  return data;
};

export const useAllMembers = () =>
  useQuery({ queryKey: ["members"], queryFn: fetchMembers });

export const useAllProjects = () =>
  useQuery({ queryKey: ["projects"], queryFn: fetchProjects });
