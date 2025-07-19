import axios from "axios";
import { Member, Project } from "../lib/types";
import { useQuery } from "@tanstack/react-query";
import { memberQueryKey } from "../lib/queryKeys";

// const getMembers = async (params: GetMembersType) => {
//   const { data } = await axios.get<MemberType[]>(
//     `${process.env.endpoint}/api/members-by-type/`,
//     {
//       params,
//     }
//   );
//
//   return data;
// };
//
// export const useGetMembers = (params: GetMembersType) => {
//   return useQuery<MemberType[]>({
//     queryKey: [memberQueryKey(params)],
//     queryFn: () => getMembers(params),
//     enabled: !!params,
//   });
// };

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
// const fetchMembers = async (): Promise<Member[]> => {
//   const { data } = await axios.get<Member[]>(
//     `${API_URL}/api/members-by-type/`,
//     { params: { member_type: "Alle Medlemmer" } }
//   );
//   return data;
// };
// const fetchProjects = async (): Promise<ProjectBrief[]> => {
//   const { data } = await axios.get<ProjectBrief[]>(`${API_URL}/api/projects/`);
//   return data;
// };

import membersMock from "../data/members.json";
import projectsMock from "../data/projects.json";

const fetchMembers = async () => membersMock as Member[];
const fetchProjects = async () => projectsMock as Project[];

export const useAllMembers = () =>
  useQuery({ queryKey: ["members"], queryFn: fetchMembers });
export const useAllProjects = () =>
  useQuery({ queryKey: ["projects"], queryFn: fetchProjects });
