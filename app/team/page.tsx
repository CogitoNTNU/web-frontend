import { Metadata } from "next";
import TeamClient from "./team-client";

export const metadata: Metadata = {
  title: "Medlemmer",
};

export default function TeamPage() {
  return <TeamClient />;
}
