import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turnul de Cafea — prăjitorie artizanală",
  description:
    "Magazin online de cafea de specialitate, cu navigare tip sidebar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
