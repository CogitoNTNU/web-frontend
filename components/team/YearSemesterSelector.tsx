"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiChevronDown } from "react-icons/fi";

export interface YearSemesterSelectorProps {
  year: number;
  semester: "Spring" | "Fall";
  yearsAvailable: number[];
  selectorOpen: boolean; // mobile dropdown state
  onToggleSelector: () => void;
  onCloseSelector: () => void; // (hook handles outside click)
  onSelectYear: (y: number) => void;
  onSelectSemester: (s: "Spring" | "Fall") => void;
  onPrev: () => void;
  onNext: () => void;
  nextDisabled: boolean;
  prevDisabled: boolean;
  /** Optional banner image override */
  bannerSrc?: string;
  /** Optional title override (defaults to MEMBERS) */
  titleLabel?: string;
}

const CURRENT_YEAR = new Date().getFullYear();

const YearSemesterSelector: React.FC<YearSemesterSelectorProps> = ({
  year,
  semester,
  yearsAvailable,
  selectorOpen,
  onToggleSelector,
  onSelectYear,
  onSelectSemester,
  onPrev,
  onNext,
  nextDisabled,
  prevDisabled,
  bannerSrc = "/Team/Alle.jpg",
  titleLabel = "MEMBERS",
}: YearSemesterSelectorProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const activeBtn = wrapperRef.current.querySelector(
      "button[data-active='true']"
    ) as HTMLButtonElement | null;
    if (activeBtn && selectorOpen) {
      activeBtn.scrollIntoView({ block: "nearest", inline: "center" });
    }
  }, [year, selectorOpen]);

  return (
    <div className="relative h-[720px] xs:h-[580px] sm:h-[620px] w-full select-none">
      <Image
        src={bannerSrc}
        alt="Cogito banner"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-dark/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-4 sm:bottom-6 flex items-start justify-center px-3">
        <div
          id="year-semester-selector"
          className="group relative flex flex-col items-center w-full max-w-5xl"
          ref={wrapperRef}
        >
          {/* Top Row: Navigation + Title */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onPrev}
              aria-label="Previous semester"
              className={
                "hidden sm:inline-flex rounded-full p-2 text-white backdrop-blur transition " +
                (prevDisabled
                  ? "cursor-not-allowed opacity-30"
                  : "bg-white/10 hover:bg-white/20")
              }
              disabled={prevDisabled}
            >
              <FiArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Title acts as toggle on mobile */}
            <button
              type="button"
              onClick={onToggleSelector}
              className="relative cursor-pointer rounded-2xl bg-[radial-gradient(circle_at_30%_40%,#ffffff33,#0d47a1_90%)] px-6 py-4 sm:px-10 sm:py-6 text-center shadow-xl backdrop-blur-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <h1 className="text-[34px] xs:text-[38px] sm:text-[42px] tablet:text-[70px] laptop:text-[80px] font-extrabold tracking-wide text-white flex items-center gap-3 select-none">
                <span className="leading-none">
                  {titleLabel} <span className="text-blue-400">{year}</span>
                </span>
                <span className="sm:hidden inline-flex text-white">
                  <FiChevronDown
                    className={
                      "h-5 w-5 transition-transform " +
                      (selectorOpen ? "rotate-180" : "rotate-0")
                    }
                  />
                </span>
              </h1>
            </button>

            <button
              onClick={onNext}
              aria-label="Next semester"
              disabled={nextDisabled}
              className={
                "hidden sm:inline-flex rounded-full p-2 text-white backdrop-blur transition " +
                (nextDisabled
                  ? "bg-white/5 opacity-30"
                  : "bg-white/10 hover:bg-white/20")
              }
            >
              <FiArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Dropdown wrapper: hover on desktop, toggle on mobile */}
          <div
            className={
              "mt-3 flex flex-col items-center transition-all duration-300 w-full " +
              // Desktop (hover reveal)
              "sm:pointer-events-none sm:opacity-0 sm:group-hover:pointer-events-auto sm:group-hover:opacity-100 " +
              // Mobile (state driven)
              (selectorOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0")
            }
          >
            {/* Years Row */}
            <div className="flex flex-wrap justify-center gap-4 rounded-2xl bg-black/55 px-4 py-3 text-l font-medium text-white shadow-lg backdrop-blur-xl sm:gap-8 sm:px-8">
              {yearsAvailable.map((y) => {
                const active = y === year;
                return (
                  <button
                    key={y}
                    data-active={active || undefined}
                    onClick={() => onSelectYear(y)}
                    className={
                      "relative pb-1 px-1 transition " +
                      (active ? "text-white" : "text-white/70 hover:text-white")
                    }
                  >
                    {y}
                    <span
                      className={
                        "relative pb-1 px-1 transition " +
                        (active
                          ? "text-white"
                          : "text-white/70 hover:text-white")
                      }
                    />
                  </button>
                );
              })}
            </div>

            {/* Semester Row */}
            <div className="mt-2 flex gap-2 rounded-full bg-black/55 px-3 py-2 text-[10px] font-semibold text-white shadow-lg backdrop-blur-xl sm:mt-3 sm:gap-3 sm:px-6 sm:py-2 sm:text-xs">
              {(["Spring", "Fall"] as const).map((s) => {
                // Disable future (Fall) if we're still in Spring of current year
                const disabledFuture =
                  (year === CURRENT_YEAR &&
                    s === "Fall" &&
                    semester === "Spring") ||
                  year > CURRENT_YEAR;
                const active = s === semester;
                return (
                  <button
                    key={s}
                    disabled={disabledFuture}
                    onClick={() => !disabledFuture && onSelectSemester(s)}
                    className={
                      "rounded-full px-3 py-1 sm:px-4 transition " +
                      (active
                        ? "bg-white text-blue-dark"
                        : "bg-white/10 hover:bg-white/20") +
                      (disabledFuture ? " cursor-not-allowed opacity-30" : "")
                    }
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
  );
};

export default YearSemesterSelector;
