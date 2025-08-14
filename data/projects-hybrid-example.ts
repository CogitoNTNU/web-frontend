import { ProjectType } from "../lib/types";

// Example of how to use the hybrid feature for SudokuSolver
export const HybridExampleProject: ProjectType = {
  name: "SudokuSolver",
  github: "https://github.com/CogitoNTNU/SudokuSolver",
  img: "/Projects/Articles/sudokusolver/0.png",
  playable: false, // Set to false when using hybrid
  hybrid: true, // This indicates it's both playable and readable
  playableUrl: "https://sudoku-solver-theta-wine.vercel.app", // Direct link to playable version
  released: true,
  url: "/projects/sudokusolver", // Link to article/documentation
};

// Alternative approach: You could also handle this in the component
// by checking if both a demo link exists in the article data