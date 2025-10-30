import { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "Om oss",
};

export default function AboutPage() {
  return <AboutClient />;
}
