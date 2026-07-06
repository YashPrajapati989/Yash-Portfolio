"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";

// ---------------------------------------------------------------------------
// Chapter registry — maps section id → chapter info
// ---------------------------------------------------------------------------
const chapters: Record<string, { number: string; label: string }> = {
  home:        { number: "01", label: "First Contact" },
  overview:    { number: "02", label: "Overview" },
  about:       { number: "03", label: "The Explorer" },
  skills:      { number: "04", label: "The Toolbox" },
  journey:     { number: "05", label: "The Journey" },
  projects:    { number: "06", label: "Mission Archive" },
  engineering: { number: "07", label: "Engineering" },
  contact:     { number: "08", label: "Next Chapter" },
};

const sectionIds = Object.keys(chapters);

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function ChapterIndicator() {
  const activeSection = useActiveSection(sectionIds);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted || !activeSection || !chapters[activeSection]) return null;

  const chapter = chapters[activeSection];

  return (
    <div
      className="fixed bottom-8 right-6 z-[var(--z-scroll-progress)] hidden lg:flex flex-col items-end gap-1"
      aria-hidden="true" // decorative only — not keyboard navigable
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          {/* Chapter label */}
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
              Chapter
            </span>
            <span className="text-sm font-mono font-medium text-[var(--color-text-secondary)]">
              {chapter.label}
            </span>
          </div>

          {/* Number badge */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-bg-elevated)] shadow-[var(--shadow-glow)]">
            <span className="text-sm font-mono font-bold text-[var(--color-primary)]">
              {chapter.number}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Vertical progress dots */}
      <div className="flex flex-col items-center gap-1.5 mt-3 mr-4">
        {sectionIds.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Jump to ${chapters[id]?.label ?? id} section`}
            className={`block h-1 rounded-full transition-all duration-300 ${
              id === activeSection
                ? "w-6 bg-[var(--color-primary)] shadow-[0_0_8px_rgba(94,234,212,0.6)]"
                : "w-1.5 bg-[var(--color-border)] hover:bg-[var(--color-text-muted)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
