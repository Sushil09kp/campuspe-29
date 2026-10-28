import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "CampusPe | Connect Students, Colleges & Employers Faster",
  description:
    "CampusPe is an AI-powered platform connecting students, colleges and employers. Find jobs, internships and colleges in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}