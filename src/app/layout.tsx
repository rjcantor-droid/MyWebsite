import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; // <-- Import your Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Personal Portfolio", // <-- Change this
  description: "My personal portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* <-- Add it here */}
        <main className="container mx-auto p-4">{children}</main> {/* <-- Wrap children */}
      </body>
    </html>
  );
}