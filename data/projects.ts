import { ProjectType } from "../lib/types";
import SudokuLogo from "../public/Projects/SudokuSolver/SudokoSolverLogo.png";
import MarketingAILogo from "../public/Projects/MarketingAILogo.png";
import CatMatch from "../public/Projects/CatMatch/CatMatch.png";

export const CogitoProjects: Array<ProjectType> = [
  {
    image: SudokuLogo,
    laptopDesc:
      "SudokuSolver, the perfect program to effortlessly solve sudokus!",
    phoneDesc: "Sudoku made easy",
    link: "https://sudoku-solver-sudokusolver.vercel.app",
    github: "https://github.com/CogitoNTNU/SudokuSolver",
    leaders: Array<string>("Andreas Jonsterhaug", "Afras Mansoor"),
    new: true,
  },
  {
    image: MarketingAILogo,
    laptopDesc:
      "Marketing AI is a powerful marketing tool made to conquer all social platforms!",
    phoneDesc: "Marketing done right!",
    link: "/projects/marketingai",
    github: "https://github.com/CogitoNTNU/MarketingAI",
    leaders: Array<string>("Kristoffer Olaisen", "Sverre Nystad"),
    new: false,
  },
  {
    image: CatMatch,
    laptopDesc:
      "CatMatch, the purrfect website for finding the right cats for you!",
    phoneDesc: "The purrfect cats!",
    link: "https://catmatch.rosby.no",
    github: "https://github.com/CogitoNTNU/CatMatch",
    leaders: Array<string>("Ulrik Røsby"),
    new: false,
  },
];
