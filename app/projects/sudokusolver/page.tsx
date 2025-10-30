import { Metadata } from "next";
import SudokuSolverClient from "./sudokusolver-client";

export const metadata: Metadata = {
  title: "Sudoku Solver",
};

export default function SudokuSolverPage() {
  return <SudokuSolverClient />;
}
