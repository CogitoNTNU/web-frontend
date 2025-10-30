import { Metadata } from "next";
import ProjectPresentationsClient from "./project-presentations-client";

export const metadata: Metadata = {
  title: "Project Presentations",
};

export default function ProjectPresentationsPage() {
  return <ProjectPresentationsClient />;
}
