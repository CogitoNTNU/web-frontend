import React from "react";
import Image from "next/image";
import { ProjectApply } from "../../lib/types";

interface ProjectCardProps {
  project: ProjectApply;
  isSelected: boolean;
  priority: number | null;
  toggleSelection: (projectName: string) => void;
  onInfoClick: (project: ProjectApply) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isSelected,
  priority,
  toggleSelection,
  onInfoClick,
}) => {
  return (
    <div
      onClick={() => toggleSelection(project.name)}
      className="laptop:w-[335px] w-full"
    >
      <div
        className={`relative flex items-center gap-4 ${
          isSelected
            ? "bg-pink-default text-white transition-colors  "
            : "bg-gray-light"
        } rounded-xl px-4 py-2 my-2 hover:bg-pink-default hover:text-white cursor-pointer`}
      >
        <div className="relative w-16 h-16">
          <Image
            src={`/Projects/ProjectLogos/${project.image}`}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <div className="flex items-center justify-between w-full">
            <p className="font-semibold text-lg">{project.name}</p>
            {priority !== null && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-pink-default rounded-full w-10 h-10 flex items-center justify-center text-lg">
                <b>{priority}</b>
              </div>
            )}
          </div>
          {project.workload && (
            <div className="flex gap-2 text-sm text-gray-600">
              <p>{project.workload}</p>
              <p>timer</p>
            </div>
          )}
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            onInfoClick(project);
          }}
          className="hover:scale-110 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
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
  );
};

export default ProjectCard;
