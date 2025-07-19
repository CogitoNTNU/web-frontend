"use client";

import ProjectSection from "./ProjectSection";
import { Project } from "../../lib/types";

interface MemberRole {
  member: any;
  role: string;
}
interface Group {
  project: Project;
  members: MemberRole[];
}
interface Props {
  grouped: Group[];
  expandedSections: Record<number, boolean>;
  onToggleExpand: (id: number) => void;
  limit?: number;
}
export default function ProjectsGroupedView({
  grouped,
  expandedSections,
  onToggleExpand,
  limit = 40,
}: Props) {
  if (grouped.length === 0)
    return (
      <p className="text-center text-gray-500 text-sm sm:text-base">
        No project members found for this semester.
      </p>
    );
  return (
    <>
      {grouped.map((g) => (
        <ProjectSection
          key={g.project.id}
          project={g.project}
          members={g.members}
          expanded={!!expandedSections[g.project.id]}
          onToggle={() => onToggleExpand(g.project.id)}
          limit={limit}
        />
      ))}
    </>
  );
}
