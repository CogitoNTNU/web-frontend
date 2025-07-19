"use client";

import { Project } from "../../lib/types";

interface Props {
  activeProjects: Project[];
  projectFilter: string | null;
  onSelect: (name: string | null) => void;
}

export default function ProjectFilterChips({
  activeProjects,
  projectFilter,
  onSelect,
}: Props) {
  return (
    <div className="relative mx-auto mb-10 sm:mb-12 w-full max-w-full overflow-x-auto scrollbar-hide">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-gray-lighter to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-gray-lighter to-transparent" />
      <div className="flex w-max gap-2 px-4 pr-8 sm:gap-3 sm:px-6 justify-center mx-auto">
        <Chip
          label="All Projects"
          active={projectFilter == null}
          onClick={() => onSelect(null)}
        />
        {activeProjects.map((p) => (
          <Chip
            key={p.id}
            label={p.name}
            active={projectFilter === p.name}
            onClick={() => onSelect(p.name)}
          />
        ))}
      </div>
    </div>
  );
}

const Chip = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition md:px-5 md:py-2.5 ${active ? "bg-blue-dark text-white" : "bg-white text-blue-dark hover:bg-blue-dark/10"}`}
    >
      {label}
    </button>
  );
};
