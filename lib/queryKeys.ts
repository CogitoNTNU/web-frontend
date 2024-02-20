import { GenerateImageParams, GetMembersType } from "./types";

// This section is for the query keys used in the getting members data
export const membersQueryKey = "members";
export const memberQueryKey = (member: GetMembersType) =>
  "member: " + member?.member_type;

// This section is for the query keys used in marketingAI project requests
export const marketingAIQueryKey = "marketingAI";
export const marketingAIQueryKeys = (prompt: GenerateImageParams) => {
  return "marketingAI: " + prompt?.prompt + ". Timestamp: " + prompt?.timestamp;
};
