import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ProjectApply } from "../../lib/types";

interface ProjectModalProps {
  isOpen: boolean;
  setOpen: (boolean: boolean) => void;
  project: ProjectApply | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  setOpen,
  project,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 bg-black-transparent bg-black-default/40 flex items-center justify-center z-50 cursor-default px-4"
      aria-labelledby="project-modal-title"
      aria-modal="true"
      role="dialog"
      onClick={() => setOpen(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-3xl shadow-md p-8 max-w-2xl w-full relative "
        onClick={(e) => e.stopPropagation()} // Prevent click events on the modal content from closing the modal
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          onClick={() => setOpen(false)}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center mb-4">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src={`/Projects/ProjectLogos/${project.image}`}
              alt={project.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2
            id="project-modal-title"
            className="text-2xl font-medium text-center mb-4"
          >
            {project.name}
          </h2>
          <p className="text-gray-600 text-center mb-4">
            {project.description}
          </p>
        </div>
        <div className="text-left">
          <p className="mb-2">
            <strong>
              Prosjektleder{project.leaders.length > 1 ? "e" : ""}:
            </strong>{" "}
            {project.leaders.length > 1
              ? project.leaders.slice(0, -1).join(", ") +
                " og " +
                String(project.leaders.slice(-1))
              : project.leaders[0]}
          </p>
          {project.workload && (
            <p className="mb-2">
              <strong>Arbeidsmengde:</strong> {project.workload} timer
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
