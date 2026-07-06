"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { containerClass, navbarHeight } from "@/lib/constants/spacing";
import { navbarVariants } from "@/lib/constants/animation";

import { Button, buttonVariants } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Navigation, navigationItems } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Track scroll for background transition
  const isScrolled = useScrolled(20);
  
  // Track active section for navigation highlight
  const sectionIds = navigationItems.map(item => item.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <motion.header
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 left-0 right-0 z-[var(--z-navbar)] w-full transition-all duration-300",
          isScrolled 
            ? "glass border-b" 
            : "bg-transparent border-transparent"
        )}
        style={{ height: navbarHeight }}
      >
        <div className={cn(containerClass, "flex h-full items-center justify-between")}>
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            <Navigation activeSection={activeSection} />
            
            <div className="flex items-center gap-4 border-l border-[var(--color-border-muted)] pl-6 ml-2">
              <ThemeToggle />
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "primary", size: "sm" })}>
                Resume
              </a>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Open main menu"
              className="w-10 h-10 p-0 text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)]"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
