"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { scaleVariants } from "@/lib/constants/animation";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder button of the same size to prevent layout shift
    return <div className="h-10 w-10" />;
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative overflow-hidden rounded-full hover:bg-[var(--color-bg-elevated)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            variants={scaleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="h-5 w-5 text-[var(--color-text-secondary)]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            variants={scaleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="h-5 w-5 text-[var(--color-text-secondary)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}
