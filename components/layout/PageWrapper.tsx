"use client";

import { motion } from "framer-motion";
import { ScrollProgress } from "./ScrollProgress";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { fadeVariants } from "@/lib/constants/animation";

export interface PageWrapperProps {
  children: React.ReactNode;
}

/**
 * Reusable layout wrapper for pages.
 * Handles overall layout structure: ScrollProgress, Navbar, Main Content, Footer.
 * Applies consistent padding to account for fixed navbar, and handles page entrance animations.
 */
export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      {/* 
        Main content wrapper. 
        pt-[var(--navbar-height)] ensures content is not hidden behind fixed navbar 
      */}
      <main className="flex min-h-screen flex-col pt-[var(--navbar-height)]">
        <motion.div
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex-1 flex flex-col"
        >
          {children}
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
