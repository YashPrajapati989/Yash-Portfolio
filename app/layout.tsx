import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { PageWrapper } from "@/components/layout";
import { ChapterIndicator } from "@/components/ui/ChapterIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://yashprajapati-portfolio.netlify.app"; // Update with your real domain

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Yash Prajapati — Data Analyst & Business Analyst",
    template: "%s | Yash Prajapati",
  },
  description:
    "Results-driven Data Analyst (BSc Computer Science, CGPA 9.02) with 1+ year of experience in Python, SQL, PostgreSQL, and Excel-based analytics. Building KPI dashboards and surfacing actionable business insights.",
  keywords: [
    "Data Analyst",
    "Business Analyst",
    "Python",
    "SQL",
    "PostgreSQL",
    "Pandas",
    "KPI Dashboard",
    "React Native",
    "Flask",
    "Machine Learning",
    "Yash Prajapati",
    "Portfolio",
    "Ahmedabad",
  ],
  authors: [{ name: "Yash Prajapati", url: BASE_URL }],
  creator: "Yash Prajapati",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Yash Prajapati Portfolio",
    title: "Yash Prajapati — Data Analyst & Business Analyst",
    description:
      "Results-driven Data Analyst with expertise in Python, SQL, PostgreSQL and Excel analytics. Explore projects, skills, and experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Prajapati — Data Analyst Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Prajapati — Data Analyst & Business Analyst",
    description:
      "Results-driven Data Analyst with expertise in Python, SQL, PostgreSQL and Excel analytics. Explore projects, skills, and experience.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <PageWrapper>
            {children}
          </PageWrapper>
          <ChapterIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
