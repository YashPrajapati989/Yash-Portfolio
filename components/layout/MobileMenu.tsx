"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Navigation } from "./Navigation";
import { slideInRightVariants, fadeVariants } from "@/lib/constants/animation";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string | null;
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Trap focus and prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Optional: basic focus trap logic could go here
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-[var(--z-mobile-menu)] bg-[var(--color-bg-overlay)] backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />

          {/* Sliding Menu Panel */}
          <motion.div
            ref={menuRef}
            variants={slideInRightVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="fixed right-0 top-0 bottom-0 z-[calc(var(--z-mobile-menu)+1)] flex w-[300px] max-w-[80vw] flex-col bg-[var(--color-bg-surface)] p-6 shadow-2xl md:hidden border-l border-[var(--color-border)]"
          >
            <div className="flex items-center justify-end mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close menu"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex-1 overflow-y-auto">
              <Navigation
                orientation="vertical"
                activeSection={activeSection}
                onItemClick={onClose}
                className="gap-8"
                itemClassName="w-full text-lg border-b border-[var(--color-border-muted)] pb-4 last:border-0"
              />
            </nav>
            
            <div className="mt-auto pt-8">
              <Button as="a" href="/resume.pdf" target="_blank" rel="noopener noreferrer" variant="primary" className="w-full">
                Resume
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
