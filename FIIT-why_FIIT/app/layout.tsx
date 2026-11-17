import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Why FIIT 2.0 | Zero-Isolation Technical Education & Developer Hubs",
  description:
    "Discover why FIIT 2.0 is redefining engineering education across Tamil Nadu with 9 physical tech hubs, daily 1:1 code mentoring, and enterprise curricula.",
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
