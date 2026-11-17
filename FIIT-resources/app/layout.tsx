import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engineering Resources & Developer Playbooks | FIIT 2.0 Tech Education",
  description:
    "Free open-access technical cheat sheets, system design roadmaps, Tamil Nadu tech salary benchmark reports, and full-stack capstone blueprints curated by FIIT engineering mentors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen antialiased text-[#0B1528]">
        {children}
      </body>
    </html>
  );
}
