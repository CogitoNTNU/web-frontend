"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import MemberCard from "../components/Member/Member";
import { Member, Project } from "../lib/types";
import { useAllMembers, useAllProjects } from "../hooks/useGetMembers";

/* ---------- Icons ---------- */
const ArrowLeft = () => (
  <svg
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
    className="h-5 w-5 sm:h-6 sm:w-6"
  >
    <path
      d="M15 19l-7-7 7-7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ArrowRight = () => (
  <svg
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
    className="h-5 w-5 sm:h-6 sm:w-6"
  >
    <path
      d="M9 5l7 7-7 7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-5 w-5 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
    stroke="currentColor"
    fill="none"
  >
    <path
      d="M6 9l6 6 6-6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------- Helpers ---------- */
const CURRENT_YEAR = new Date().getFullYear();
const FOUNDING_YEAR = 2019;
const getCurrentSemester = (): "Spring" | "Fall" =>
  new Date().getMonth() + 1 <= 6 ? "Spring" : "Fall";
const Spinner = () => (
  <div className="flex items-center justify-center py-12 sm:py-20">
    <div className="h-8 w-8 sm:h-10 sm:w-10 animate-spin rounded-full border-4 border-blue-dark border-t-transparent" />
  </div>
);

/* ---------- Filter chip ---------- */
function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition md:px-5 md:py-2.5 ${active ? "bg-blue-dark text-white" : "bg-white text-blue-dark hover:bg-blue-dark/10"}`}
    >
      {label}
    </button>
  );
}

/* ---------- Main Component ---------- */
export default function TeamPage() {
  const [semester, setSemester] = useState<"Spring" | "Fall">(
    getCurrentSemester()
  );
  const [year, setYear] = useState<number>(CURRENT_YEAR);
  const [projectFilter, setProjectFilter] = useState<string | null>(null);
  const [selectorOpen, setSelectorOpen] = useState(false); // mobile toggle for year/semester selector

  const { data: members, isLoading: membersLoading } = useAllMembers();
  const { data: projects } = useAllProjects();

  // Close selector when clicking outside on mobile
  const handleClickOutside = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest?.("#year-semester-selector")) setSelectorOpen(false);
  }, []);
  useEffect(() => {
    if (selectorOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [selectorOpen, handleClickOutside]);

  // Years shown in selector
  const yearsAvailable = useMemo(() => {
    if (!members) return [] as number[];
    const years = new Set<number>();
    members.forEach((m) =>
      m.project_memberships.forEach((pm) => years.add(pm.year))
    );
    return [...years].filter((y) => y <= CURRENT_YEAR).sort((a, b) => a - b);
  }, [members]);

  /* ----- Navigation logic ----- */
  const nextDisabled = semester === "Fall" && year >= CURRENT_YEAR;
  const prevDisabled = semester === "Spring" && year <= FOUNDING_YEAR;
  const prevSemester = () => {
    if (prevDisabled) return;
    if (semester === "Spring") {
      setSemester("Fall");
      setYear((y) => y - 1);
    } else {
      setSemester("Spring");
    }
  };
  const nextSemester = () => {
    if (nextDisabled) return;
    if (semester === "Fall") {
      setSemester("Spring");
      setYear((y) => y + 1);
    } else {
      setSemester("Fall");
    }
  };

  // Members with at least one membership in current year+semester
  const semesterMembers = useMemo(() => {
    if (!members) return [] as Member[];
    return members.filter((m) =>
      m.project_memberships.some(
        (pm) => pm.year === year && pm.semester === semester
      )
    );
  }, [members, year, semester]);

  // Active project IDs
  const activeProjectIds = useMemo(() => {
    const ids = new Set<number>();
    semesterMembers.forEach((m) =>
      m.project_memberships.forEach((pm) => {
        if (pm.year === year && pm.semester === semester)
          ids.add(pm.project.id);
      })
    );
    return ids;
  }, [semesterMembers, year, semester]);

  // Active projects
  const activeProjects: Project[] = useMemo(() => {
    if (!projects) return [];
    return projects.filter((p) => activeProjectIds.has(p.id));
  }, [projects, activeProjectIds]);

  // Reset project filter if no longer valid
  useEffect(() => {
    if (projectFilter && !activeProjects.some((p) => p.name === projectFilter))
      setProjectFilter(null);
  }, [projectFilter, activeProjects]);

  // Grouped projects
  const groupedByProject = useMemo(() => {
    if (!semesterMembers || !activeProjects)
      return [] as {
        project: Project;
        members: { member: Member; role: string }[];
      }[];
    const map = new Map<
      number,
      { project: Project; members: { member: Member; role: string }[] }
    >();
    semesterMembers.forEach((member) => {
      member.project_memberships.forEach((pm) => {
        if (
          pm.year === year &&
          pm.semester === semester &&
          activeProjectIds.has(pm.project.id)
        ) {
          const fullProject =
            activeProjects.find((p) => p.id === pm.project.id) ||
            projects?.find((p) => p.id === pm.project.id);
          if (!fullProject) return;
          const entry = { member, role: pm.role || member.title };
          const bucket = map.get(fullProject.id);
          if (bucket) {
            if (!bucket.members.some((mb) => mb.member.order === member.order))
              bucket.members.push(entry);
          } else {
            map.set(fullProject.id, { project: fullProject, members: [entry] });
          }
        }
      });
    });
    return activeProjects
      .filter((p) => map.has(p.id))
      .map((p) => ({
        project: p,
        members: map
          .get(p.id)!
          .members.sort((a, b) => a.member.order - b.member.order),
      }));
  }, [
    semesterMembers,
    activeProjects,
    activeProjectIds,
    year,
    semester,
    projects,
  ]);

  // Flat list for single project mode
  const filteredFlatMembers = useMemo(() => {
    if (!semesterMembers || !projectFilter)
      return [] as { member: Member; role: string }[];
    return semesterMembers
      .flatMap((member) =>
        member.project_memberships
          .filter(
            (pm) =>
              pm.year === year &&
              pm.semester === semester &&
              pm.project.name === projectFilter
          )
          .map((pm) => ({ member, role: pm.role || member.title }))
      )
      .sort((a, b) => a.member.order - b.member.order);
  }, [semesterMembers, year, semester, projectFilter]);

  /* ---------- Render ---------- */
  return (
    <>
      <Head>
        <title>Medlemmer - Cogito NTNU</title>
      </Head>
      <Navbar page="team" />
      {/* Banner */}
      <div className="relative h-[280px] xs:h-[320px] sm:h-80 w-full select-none">
        <Image
          src="/Team/Alle.jpg"
          alt="Cogito banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-dark/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-4 sm:bottom-6 flex items-start justify-center px-3">
          <div
            id="year-semester-selector"
            className="group relative flex flex-col items-center w-full max-w-5xl"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={prevSemester}
                aria-label="Previous semester"
                className={`hidden sm:inline-flex rounded-full p-2 text-white backdrop-blur ${prevDisabled ? "cursor-not-allowed opacity-30" : "bg-white/10 hover:bg-white/20"}`}
                disabled={prevDisabled}
              >
                <ArrowLeft />
              </button>

              {/* Title acts as toggle on small screens */}
              <button
                type="button"
                onClick={() => setSelectorOpen((o) => !o)}
                className="relative cursor-pointer rounded-2xl bg-[radial-gradient(circle_at_30%_40%,#ffffff33,#0d47a1_90%)] px-6 py-4 sm:px-10 sm:py-6 text-center shadow-xl backdrop-blur-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <h1 className="text-[34px] xs:text-[38px] sm:text-[42px] tablet:text-[70px] laptop:text-[80px] font-extrabold tracking-wide text-white flex items-center gap-3">
                  <span className="leading-none">
                    MEMBERS <span className="text-blue-400">{year}</span>
                  </span>
                  <span className="sm:hidden inline-flex text-white">
                    <ChevronDown open={selectorOpen} />
                  </span>
                </h1>
              </button>

              <button
                onClick={nextSemester}
                aria-label="Next semester"
                disabled={nextDisabled}
                className={`hidden sm:inline-flex rounded-full p-2 text-white backdrop-blur ${nextDisabled ? "bg-white/5 opacity-30" : "bg-white/10 hover:bg-white/20"}`}
              >
                <ArrowRight />
              </button>
            </div>

            {/* Selector: hover on desktop, toggle on mobile */}
            <div
              className={`mt-3 flex flex-col items-center transition-all duration-300 sm:pointer-events-none sm:opacity-0 sm:group-hover:pointer-events-auto sm:group-hover:opacity-100 ${selectorOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} w-full`}
            >
              <div className="flex flex-wrap justify-center gap-4 rounded-2xl bg-black/55 px-4 py-3 text-sm font-medium text-white shadow-lg backdrop-blur-xl sm:gap-8 sm:px-8">
                {yearsAvailable.map((y) => {
                  const active = y === year;
                  return (
                    <button
                      key={y}
                      onClick={() => {
                        setYear(y);
                      }}
                      className={`relative pb-1 transition px-1 ${active ? "text-white" : "text-white/70 hover:text-white"}`}
                    >
                      {y}
                      <span
                        className={`absolute left-0 right-0 -bottom-1 mx-auto h-[3px] w-full rounded-full bg-white transition ${active ? "opacity-100" : "opacity-0 sm:group-hover:opacity-40"}`}
                      />
                    </button>
                  );
                })}
              </div>
              <div className="mt-2 flex gap-2 rounded-full bg-black/55 px-3 py-2 text-[10px] font-semibold text-white shadow-lg backdrop-blur-xl sm:mt-3 sm:gap-3 sm:px-6 sm:py-2 sm:text-xs">
                {(["Spring", "Fall"] as const).map((s) => {
                  const disabledFuture =
                    (year === CURRENT_YEAR &&
                      s === "Fall" &&
                      getCurrentSemester() === "Spring") ||
                    year > CURRENT_YEAR;
                  const active = s === semester;
                  return (
                    <button
                      key={s}
                      disabled={disabledFuture}
                      onClick={() => !disabledFuture && setSemester(s)}
                      className={`rounded-full px-3 py-1 sm:px-4 transition ${active ? "bg-white text-blue-dark" : "bg-white/10 hover:bg-white/20"} ${disabledFuture ? "cursor-not-allowed opacity-30" : ""}`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main section */}
      <main className="mx-auto -mt-4 sm:-mt-6 w-[94%] sm:w-[90%] rounded-b-3xl rounded-t-3xl bg-gray-lighter pb-14 pt-8 sm:pb-20 sm:pt-10 md:pt-14 lg:pt-16">
        {/* Project chips */}
        {activeProjects.length > 0 && (
          <div className="relative mx-auto mb-10 sm:mb-12 w-full max-w-full overflow-x-auto scrollbar-hide">
            {/* Edge fade gradients */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-gray-lighter to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-gray-lighter to-transparent" />
            <div className="flex w-max gap-2 px-4 pr-8 sm:gap-3 sm:px-6">
              <FilterChip
                label="All Projects"
                active={projectFilter == null}
                onClick={() => setProjectFilter(null)}
              />
              {activeProjects.map((p) => (
                <FilterChip
                  key={p.id}
                  label={p.name}
                  active={projectFilter === p.name}
                  onClick={() => setProjectFilter(p.name)}
                />
              ))}
            </div>
          </div>
        )}

        {membersLoading ? (
          <Spinner />
        ) : (
          <div className="space-y-16 sm:space-y-20">
            {projectFilter == null ? (
              groupedByProject.length === 0 ? (
                <p className="text-center text-gray-500 text-sm sm:text-base">
                  No project members found for this semester.
                </p>
              ) : (
                groupedByProject.map((group) => (
                  <section
                    key={group.project.id}
                    className="mx-auto w-full max-w-[1750px]"
                  >
                    <header className="mb-4 text-blue-dark text-center px-2">
                      <p className="font-semibold text-[22px] xs:text-[24px] tablet:text-[40px] tracking-wide">
                        {group.project.name.toUpperCase()}
                      </p>
                      {group.project.description && (
                        <p className="mx-auto max-w-3xl pb-2 text-[12px] xs:text-[13px] tablet:text-[16px] leading-relaxed text-gray-600">
                          {group.project.description}
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
                      {group.members.map(({ member }) => (
                        <MemberCard
                          key={member.order + "-p-" + group.project.id}
                          member={member}
                        />
                      ))}
                    </motion.div>
                  </section>
                ))
              )
            ) : (
              <section className="mx-auto w-full max-w-[1750px]">
                {filteredFlatMembers.length === 0 ? (
                  <p className="text-center text-gray-500 text-sm sm:text-base">
                    No members in this project for the selected semester.
                  </p>
                ) : (
                  <>
                    <header className="mb-4 text-blue-dark text-center px-2">
                      <p className="font-semibold text-[22px] xs:text-[24px] tablet:text-[40px] tracking-wide">
                        {projectFilter?.toUpperCase()}
                      </p>
                      {projects?.find((p) => p.name === projectFilter)
                        ?.description && (
                        <p className="mx-auto max-w-3xl pb-2 text-[12px] xs:text-[13px] tablet:text-[16px] leading-relaxed text-gray-600">
                          {
                            projects.find((p) => p.name === projectFilter)!
                              .description
                          }
                        </p>
                      )}
                    </header>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 px-1"
                    >
                      {filteredFlatMembers.map(({ member }) => (
                        <MemberCard key={member.order} member={member} />
                      ))}
                    </motion.div>
                  </>
                )}
              </section>
            )}
          </div>
        )}
      </main>
    </>
  );
}

/* Utility (optional): hide scrollbars for horizontal chip scroll */
// Add to your global CSS if not already:
// .scrollbar-hide::-webkit-scrollbar { display: none; }
// .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
