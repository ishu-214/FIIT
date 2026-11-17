import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "9 Regional Developer Hubs Across Tamil Nadu | FIIT 2.0 Branches",
  description:
    "Explore FIIT's 9 physical developer hubs across Avadi, Ambattur, RedHills, Tambaram, Kelambakkam, Iyyappanthangal, Chengalpattu, Vellore, and Tiruvannamalai.",
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
