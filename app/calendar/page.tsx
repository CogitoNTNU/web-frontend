import { Metadata } from "next";
import CalendarClient from "./calendar-client";

export const metadata: Metadata = {
  title: "Kalender",
};

export default function CalendarPage() {
  return <CalendarClient />;
}
