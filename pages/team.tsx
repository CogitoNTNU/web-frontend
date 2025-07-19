"use client";

import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import { useTeamData } from "../hooks/useTeamData";
import YearSemesterSelector from "../components/team/YearSemesterSelector";
import ProjectFilterChips from "../components/team/ProjectFilterChips";
import { Project } from "../lib/types";
import Footer from "../components/Footer/Footer";
import ProjectSection from "../components/team/ProjectSection";

const TeamPage: React.FC = () => {
  const {
    // state
    year,
    semester,
    projectFilter,
    selectorOpen,
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
              groupedByProject.length === 0 ? (
                <p className="text-center text-gray-500 text-sm sm:text-base">
                  No project members found for this semester.
                </p>
              ) : (
                groupedByProject.map((g) => (
                  <ProjectSection
                    key={g.project.id}
                    project={g.project}
                    members={g.members}
                  />
                ))
              )
            ) : (
              <ProjectSection
                project={{
                  ...(activeProjects.find(
                    (p) => p.name === projectFilter
                  ) as Project),
                }}
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

export default TeamPage;
