import { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Hjem",
};

export default function HomePage() {
  return <HomeClient />;
}
