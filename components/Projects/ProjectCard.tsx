import React from "react";
import { Project } from "../../lib/types";

interface ProjectCardProps {
  project: Project;
  isSelected: boolean;
  priority: number | null;
  toggleSelection: (projectName: string) => void;
  onInfoClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isSelected,
  priority,
  toggleSelection,
  onInfoClick,
}) => {
  return (
    <button onClick={() => toggleSelection(project.name)} className="w-full">
      <div
        className={`relative flex justify-between items-center gap-2 bg-gray-light rounded-3xl px-4 py-2 my-2 hover:bg-gray-default cursor-pointer ${
          isSelected ? "bg-blue-100" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <p>{project.name}</p>
          {project.workload && (
            <div className="flex gap-2">
              <p>{project.workload}</p>
              <p>timer</p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {priority !== null && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {priority}
            </div>
          )}
          <div
            onClick={(e) => {
              e.stopPropagation();
              onInfoClick(project);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;
