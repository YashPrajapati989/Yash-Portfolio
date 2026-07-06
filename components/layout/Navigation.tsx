"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavigationItem {
  name: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export interface NavigationProps {
  /** The id of the currently active section */
  activeSection: string | null;
  /** Optional callback fired when a link is clicked */
  onItemClick?: () => void;
  /** Custom class for the wrapper list */
  className?: string;
  /** Custom class for individual list items */
  itemClassName?: string;
  /** Layout direction */
  orientation?: "horizontal" | "vertical";
}

/**
 * Reusable navigation list component.
 * Maps over standard portfolio sections and highlights the active one.
 */
export function Navigation({
  activeSection,
  onItemClick,
  className,
  itemClassName,
  orientation = "horizontal",
}: NavigationProps) {
  return (
    <ul
      className={cn(
        "flex",
        orientation === "horizontal" ? "flex-row items-center gap-6" : "flex-col items-start gap-4",
        className
      )}
    >
      {navigationItems.map((item) => {
        // Strip the '#' for comparison
        const sectionId = item.href.replace("#", "");
        const isActive = activeSection === sectionId || (activeSection === null && item.name === "Home");

        return (
          <li key={item.name} className={cn("w-full md:w-auto", itemClassName)}>
            <Link
              href={item.href}
              onClick={onItemClick}
              className={cn(
                "block text-sm font-medium transition-colors duration-200",
                isActive
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
