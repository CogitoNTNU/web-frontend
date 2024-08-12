import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "../../lib/types";
interface ProjectModalProps {
  isOpen: boolean;
  setOpen: (boolean: boolean) => void;
  project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  setOpen,
  project,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full relative border-gray-darker border-2"
      >
        <div className="relative self-center w-16 h-16">
          <Image
            src={`/Projects/${project.image}`}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
        <p className="mb-4">{project.description}</p>
        <p>
          <strong>Leaders:</strong>{" "}
          {project.leaders.length > 1
            ? project.leaders.slice(0, -1).join(", ") +
              " og " +
              String(project.leaders.slice(-1))
            : project.leaders[0]}
        </p>
        <p>
          {project.workload && <strong>Workload:</strong>} {project.workload}
        </p>

        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => setOpen(false)}
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
      </motion.div>
    </div>
  );
};

export default ProjectModal;
