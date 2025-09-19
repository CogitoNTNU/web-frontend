import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "./providers";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Cogito",
    default: "Cogito",
  },
  description: "Your app description",
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
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
