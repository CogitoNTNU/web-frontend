"use client";

import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import MemberCard from "../components/Member/Member";
import { useTeamData } from "../hooks/useTeamData";
import YearSemesterSelector from "../components/team/YearSemesterSelector";
import ProjectFilterChips from "../components/team/ProjectFilterChips";
import ProjectsGroupedView from "../components/team/ProjectsGroupedView";
import { motion } from "framer-motion";
import { Member } from "../lib/types";
import Footer from "../components/Footer/Footer";

const TeamPage: React.FC = () => {
  const {
    // state
    year,
    semester,
    projectFilter,
    selectorOpen,
    expandedSections,
    // data
    loading,
    yearsAvailable,
    activeProjects,
    groupedByProject,
    filteredFlatMembers,
    // actions
    setYear,
    setSemester,
    setProjectFilter,
    toggleSelector,
    closeSelector,
    nextSemester,
    prevSemester,
    nextDisabled,
    prevDisabled,
    toggleExpand,
  } = useTeamData();

  return (
    <>
      <Head>
        <title>Medlemmer - Cogito NTNU</title>
      </Head>
      <Navbar page="team" />

      {/* Banner & Year/Semester */}
      <YearSemesterSelector
        year={year}
        semester={semester}
        yearsAvailable={yearsAvailable}
        selectorOpen={selectorOpen}
        onToggleSelector={toggleSelector}
        onCloseSelector={closeSelector}
        onSelectYear={setYear}
        onSelectSemester={setSemester}
        onPrev={prevSemester}
        onNext={nextSemester}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />

      <main className="mx-auto -mt-4 sm:-mt-6 w-[94%] sm:w-[90%] rounded-b-3xl rounded-t-3xl bg-gray-lighter pb-14 pt-8 sm:pb-20 sm:pt-10 md:pt-14 lg:pt-16">
        {/* Project chips (only active projects) */}
        {activeProjects.length > 0 && (
          <ProjectFilterChips
            activeProjects={activeProjects}
            projectFilter={projectFilter}
            onSelect={(name) => setProjectFilter(name)}
          />
        )}

        {loading ? (
          <div className="flex items-center justify-center py-12 sm:py-20">
            <div className="h-8 w-8 sm:h-10 sm:w-10 animate-spin rounded-full border-4 border-blue-dark border-t-transparent" />
          </div>
        ) : (
          <div className="space-y-16 sm:space-y-20">
            {projectFilter == null ? (
              <ProjectsGroupedView
                grouped={groupedByProject}
                expandedSections={expandedSections}
                onToggleExpand={toggleExpand}
              />
            ) : (
              <SingleProjectView
                projectName={projectFilter}
                members={filteredFlatMembers}
              />
            )}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

interface FlatMember {
  member: Member;
  role: string;
}

const SingleProjectView = ({
  projectName,
  members,
}: {
  projectName: string;
  members: FlatMember[];
}) => {
  if (members.length === 0) {
    return (
      <p className="text-center text-gray-500 text-sm sm:text-base">
        No members in this project for the selected semester.
      </p>
    );
  }
  return (
    <section className="mx-auto w-full max-w-[1750px]">
      <header className="mb-4 text-blue-dark text-center px-2">
        <p className="font-semibold text-[22px] xs:text-[24px] tablet:text-[40px] tracking-wide">
          {projectName.toUpperCase()}
        </p>
      </header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 px-1"
      >
        {members.map(({ member }) => (
          <MemberCard key={member.order} member={member} />
        ))}
      </motion.div>
    </section>
  );
};
export default TeamPage;
