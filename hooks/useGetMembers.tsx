import axios from "axios";
import { GetMembersType, MemberType } from "../lib/types";
import { useQuery } from "@tanstack/react-query";
import { memberQueryKey } from "../lib/queryKeys";

const getMembers = async (params: GetMembersType) => {
  const { data } = await axios.get<MemberType[]>(
    `${process.env.endpoint}/api/members-by-type/`,
    {
      params,
    }
  );

  return data;
};

export const useGetMembers = (params: GetMembersType) => {
  return useQuery<MemberType[]>({
    queryKey: [memberQueryKey(params)],
    queryFn: () => getMembers(params),
    enabled: !!params,
  });
};
