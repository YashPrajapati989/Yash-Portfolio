import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LenisProvider } from "@/providers/LenisProvider";
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

export const metadata: Metadata = {
  title: "Yash Prajapati — Portfolio",
  description:
    "Computer Science student, aspiring data scientist, and full stack developer. Explore my projects, skills, and experience.",
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
          <LenisProvider>
            <PageWrapper>
              {children}
            </PageWrapper>
            <ChapterIndicator />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
