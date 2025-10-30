import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "./providers";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Cogito",
    default: "Cogito NTNU",
  },
  description:
    "Cogito NTNU er en teknisk studentorganisasjon for kunstig intelligens. Hvert semester har vi prosjekter som hvem som helst kan være med på for å få praktisk erfaring ved siden av studiene.",
  icons: {
    icon: "/cogito_white.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
