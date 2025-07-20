import { useState, useMemo, useEffect } from "react";
import { useAllMembers, useAllProjects } from "./useGetMembers";
import { Member, Project } from "../lib/types";

const CURRENT_YEAR = new Date().getFullYear();
const FOUNDING_YEAR = 2018;
const HALF_YEAR = 6; // June

const getCurrentSemester = (): "Spring" | "Fall" =>
  new Date().getMonth() + 1 <= HALF_YEAR ? "Spring" : "Fall";

type SemesterTuple = { year: number; semester: "Spring" | "Fall" };

function compareSemesters(a: SemesterTuple, b: SemesterTuple) {
  if (a.year !== b.year) return a.year - b.year;
  if (a.semester === b.semester) return 0;
  return a.semester === "Spring" ? -1 : 1; // Spring before Fall
}

function getLastOccupiedSemester(members?: Member[]): SemesterTuple | null {
  if (!members || members.length === 0) return null;
  let latest: SemesterTuple | null = null;

  for (const m of members) {
    for (const pm of m.project_memberships) {
      if (pm.year > CURRENT_YEAR) continue; // ignore future
      const candidate: SemesterTuple = { year: pm.year, semester: pm.semester };
      if (!latest || compareSemesters(candidate, latest) > 0) {
        latest = candidate;
      }
    }
  }
  return latest;
}

export function useTeamData() {
  const { data: members, isLoading: membersLoading } = useAllMembers();
  const { data: projects } = useAllProjects();

  // Start with "now"; we will snap to last occupied if needed after load.
  const [semester, setSemester] = useState<"Spring" | "Fall">(
    getCurrentSemester()
  );
  const [year, setYear] = useState<number>(CURRENT_YEAR);

  const [projectFilter, setProjectFilter] = useState<string | null>(null);
  const [selectorOpen, setSelectorOpen] = useState(false);

  /* Snap to last occupied semester if current selection has no members or is after the last */
  useEffect(() => {
    if (!members) return;

    const last = getLastOccupiedSemester(members);
    if (!last) return;

    const currentHasMembers = members.some((m) =>
      m.project_memberships.some(
        (pm) => pm.year === year && pm.semester === semester
      )
    );

    const currentIsAfterLast = compareSemesters({ year, semester }, last) > 0;

    if (
      (!currentHasMembers || currentIsAfterLast) &&
      (year !== last.year || semester !== last.semester)
    ) {
      setYear(last.year);
      setSemester(last.semester);
    }
  }, [members, year, semester]);

  const yearsAvailable = useMemo(() => {
    if (!members) return [] as number[];
    const years = new Set<number>();
    members.forEach((m) =>
      m.project_memberships.forEach((pm) => {
        if (pm.year <= CURRENT_YEAR) years.add(pm.year);
      })
    );
    return Array.from(years).sort((a, b) => a - b);
  }, [members]);

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

  /* Members that have *any* membership in selected semester/year */
  const semesterMembers = useMemo(() => {
    if (!members) return [] as Member[];
    return members.filter((m) =>
      m.project_memberships.some(
        (pm) => pm.year === year && pm.semester === semester
      )
    );
  }, [members, year, semester]);

  /* Active project IDs for selected semester */
  const activeProjectIds = useMemo(() => {
    const ids = new Set<number>();
    semesterMembers.forEach((m) =>
      m.project_memberships.forEach((pm) => {
        if (pm.year === year && pm.semester === semester) {
          ids.add(pm.project.id);
        }
      })
    );
    return ids;
  }, [semesterMembers, year, semester]);

  const activeProjects: Project[] = useMemo(() => {
    if (!projects) return [];
    return projects.filter((p) => activeProjectIds.has(p.id));
  }, [projects, activeProjectIds]);

  useEffect(() => {
    if (
      projectFilter &&
      !activeProjects.some((p) => p.name === projectFilter)
    ) {
      setProjectFilter(null);
    }
  }, [projectFilter, activeProjects]);

  const groupedByProject = useMemo(() => {
    if (!semesterMembers || !activeProjects) {
      return [] as { project: Project; members: Member[] }[];
    }

    const map = new Map<number, { project: Project; members: Member[] }>();

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

          const bucket = map.get(fullProject.id);
          if (bucket) {
            if (!bucket.members.some((mb) => mb.order === member.order)) {
              bucket.members.push(member);
            }
          } else {
            map.set(fullProject.id, {
              project: fullProject,
              members: [member],
            });
          }
        }
      });
    });

    return activeProjects
      .filter((p) => map.has(p.id))
      .map((p) => ({
        project: p,
        members: map.get(p.id)!.members.sort((a, b) => a.order - b.order),
      }));
  }, [
    semesterMembers,
    activeProjects,
    activeProjectIds,
    year,
    semester,
    projects,
  ]);

  /**
   * FILTERED FLAT MEMBERS
   * Returns plain Member[] for a chosen project (was returning wrapper objects).
   */
  const filteredFlatMembers = useMemo(() => {
    if (!semesterMembers || !projectFilter) return [] as Member[];
    return semesterMembers
      .filter((member) =>
        member.project_memberships.some(
          (pm) =>
            pm.year === year &&
            pm.semester === semester &&
            pm.project.name === projectFilter
        )
      )
      .sort((a, b) => a.order - b.order);
  }, [semesterMembers, year, semester, projectFilter]);

  const toggleSelector = () => setSelectorOpen((o) => !o);
  const closeSelector = () => setSelectorOpen(false);

  return {
    year,
    semester,
    projectFilter,
    selectorOpen,
    loading: membersLoading,
    yearsAvailable,
    activeProjects,
    groupedByProject,
    filteredFlatMembers,
    setYear,
    setSemester,
    setProjectFilter,
    toggleSelector,
    closeSelector,
    nextSemester,
    prevSemester,
    nextDisabled,
    prevDisabled,
  };
}
