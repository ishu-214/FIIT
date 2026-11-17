import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calibrated Career Paths & Engineering Roadmaps | FIIT 2.0 Tech Education",
  description:
    "Explore structured end-to-end career roadmaps for Software Engineering, Cloud Architecture, Data Analytics, AI/ML, and Cybersecurity with verified hiring benchmarks in Tamil Nadu.",
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
