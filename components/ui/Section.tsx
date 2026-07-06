import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { sectionPadding } from "@/lib/constants/spacing";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Alternate background for visual separation between sections */
  alternate?: boolean;
  /** Remove default vertical padding */
  noPadding?: boolean;
  /** HTML id — used for anchor navigation */
  id?: string;
}

/**
 * Full-width section wrapper providing consistent vertical rhythm.
 * Use the `id` prop so the Navbar can scroll-spy to highlight active sections.
 */
const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, alternate = false, noPadding = false, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "relative w-full",
        alternate ? "bg-[var(--color-bg-surface)]" : "bg-[var(--color-bg-base)]",
        !noPadding && sectionPadding,
        className
      )}
      {...props}
    />
  )
);

Section.displayName = "Section";

export { Section };
