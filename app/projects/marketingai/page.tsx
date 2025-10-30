import { Metadata } from "next";
import MarketingAIClient from "./marketingai-client";

export const metadata: Metadata = {
  title: "Marketing AI",
};

export default function MarketingAIPage() {
  return <MarketingAIClient />;
}
