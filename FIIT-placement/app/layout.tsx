import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audited Placement Outcomes & Hiring Network | FIIT 2.0 Tech Education",
  description:
    "Explore transparent placement metrics, verified offer packages up to 18.4 LPA, and active recruitment pipelines with 140+ corporate partners across Tamil Nadu and Bengaluru.",
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
