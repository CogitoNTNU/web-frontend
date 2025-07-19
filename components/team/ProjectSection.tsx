"use client";
import { motion } from "framer-motion";
import MemberCard from "../../components/Member/Member";
import { Member, Project } from "../../lib/types";
interface MemberRole {
  member: Member;
  role: string;
}
interface Props {
  project: Project;
  members: MemberRole[];
  expanded: boolean;
  onToggle: () => void;
  limit: number;
}
export default function ProjectSection({
  project,
  members,
  expanded,
  onToggle,
  limit,
}: Props) {
  const limited = !expanded && members.length > limit;
  const visible = limited ? members.slice(0, limit) : members;
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 px-1"
      >
        {visible.map(({ member }) => (
          <MemberCard key={member.order + "-p-" + project.id} member={member} />
        ))}
      </motion.div>
      {members.length > limit && (
        <div className="flex justify-center">
          <button
            onClick={onToggle}
            className="mt-6 rounded-full bg-blue-dark px-5 py-2 text-xs font-medium text-white shadow hover:bg-blue-600"
          >
            {expanded ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </section>
  );
}
