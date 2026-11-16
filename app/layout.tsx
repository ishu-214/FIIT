import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Industry-Aligned Technical Courses & Specializations | FIIT 2.0",
  description:
    "Explore outcome-driven curricula engineered alongside regional engineering leads and hiring managers across Chennai and Vellore tech corridors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-slate-900 bg-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
