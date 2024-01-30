import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { marketingAIQueryKeys } from "../lib/queryKeys";
import { GenerateImageParams, MarketingAIResponse } from "../lib/types";

const generateImage = async (
  params: GenerateImageParams
): Promise<MarketingAIResponse> => {
  console.log("params", params);

  const { data } = await axios.get<MarketingAIResponse>(
    `${process.env.endpoint}/api/projects/marketing-ai/`,
    { params }
  );
  console.log("data", data);

  return data;
};

export const useMarketingAIGenerateImage = (
  params: GenerateImageParams | null
) => {
  return useQuery<MarketingAIResponse, AxiosError>({
    queryKey: [marketingAIQueryKeys(params)],
    queryFn: () => generateImage(params),
    enabled: !!params,
    staleTime: Infinity,
    refetchInterval: Infinity,
    retry: false,
  });
};
