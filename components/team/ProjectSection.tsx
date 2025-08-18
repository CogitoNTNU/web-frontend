"use client";
import { motion } from "framer-motion";
import MemberCard from "../../components/Member/Member";
import { Member, Project } from "../../lib/types";

interface ProjectSectionProps {
  project: Project;
  members: Member[];
}

const ProjectSection = ({ project, members }: ProjectSectionProps) => {
  if (!members || members.length === 0) {
    return (
      <section className="mx-auto w-full max-w-[1750px]">
        <header className="mb-4 text-blue-dark text-center px-2">
          <p className="font-semibold text-[22px] xs:text-[24px] tablet:text-[40px] tracking-wide">
            {project.name.toUpperCase()}
          </p>
        </header>
        <p className="text-center text-gray-500 text-sm sm:text-base">
          No members in this project for the selected semester.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-[1750px]">
      <header className="mb-4 text-blue-dark text-center px-2">
        <p className="font-semibold text-[22px] xs:text-[24px] tablet:text-[40px] tracking-wide">
          {project.name.toUpperCase()}
        </p>
        {project.description && (
          <p className="mx-auto max-w-3xl pb-2 text-[12px] xs:text-[13px] tablet:text-[16px] leading-relaxed text-gray-600">
            {project.description}
          </p>
        )}
      </header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 px-1"
      >
        {members.map((member) => (
          <MemberCard key={member.order} member={member} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectSection;
