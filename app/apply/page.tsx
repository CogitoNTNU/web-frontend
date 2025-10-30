import { Metadata } from "next";
import ApplyClient from "./apply-client";

export const metadata: Metadata = {
  title: "Meld deg på",
};

export default function ApplyPage() {
  return <ApplyClient />;
}
