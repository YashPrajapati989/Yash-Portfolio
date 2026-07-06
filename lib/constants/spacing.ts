/**
 * Spacing scale constants aligned with Tailwind CSS v4 spacing scale.
 * Used for consistent padding, margins, and gaps across the design system.
 */
export const spacing = {
  /** 4px */
  xs: "1",
  /** 8px */
  sm: "2",
  /** 12px */
  md: "3",
  /** 16px */
  base: "4",
  /** 24px */
  lg: "6",
  /** 32px */
  xl: "8",
  /** 48px */
  "2xl": "12",
  /** 64px */
  "3xl": "16",
  /** 80px */
  "4xl": "20",
  /** 96px */
  "5xl": "24",
  /** 128px */
  "6xl": "32",
} as const;

/** Section vertical padding */
export const sectionPadding = "py-20 md:py-28 lg:py-32";

/** Container max-width + horizontal padding */
export const containerClass = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

/** Navbar height used for offsetting scroll targets */
export const navbarHeight = 80;
