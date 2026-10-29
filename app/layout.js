import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://campuspe-29.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "CampusPe | Connect Students, Colleges & Employers Faster",
  description:
    "CampusPe is an AI-powered platform connecting students, colleges and employers. Find jobs, internships and colleges in one place.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CampusPe | Connect Students, Colleges & Employers Faster",
    description:
      "Find jobs, internships and colleges in one place with CampusPe.",
    url: SITE_URL,
    siteName: "CampusPe",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "CampusPe | Connect Students, Colleges & Employers Faster",
    description:
      "Find jobs, internships and colleges in one place with CampusPe.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CampusPe",
  url: SITE_URL,
  description:
    "AI-powered platform connecting students, colleges and employers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}