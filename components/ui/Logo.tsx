import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LogoProps {
  /** Optional custom class name for the wrapper */
  className?: string;
  /** Optional click handler (useful for mobile menus to close on click) */
  onClick?: () => void;
}

/**
 * Premium personal brand logo.
 * Features a minimalist "YP" monogram inside a rounded square with a subtle cyan glow,
 * accompanied by the full name in a professional, flat typographic style.
 */
export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 focus-ring rounded-sm group select-none",
        className
      )}
      aria-label="Yash Prajapati - Home"
    >
      {/* Monogram Container */}
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-bg-surface)] border border-[rgba(94,234,212,0.2)] shadow-[0_0_12px_rgba(94,234,212,0.1)] transition-all duration-300 group-hover:border-[rgba(94,234,212,0.4)] group-hover:shadow-[0_0_16px_rgba(94,234,212,0.2)]">
        <span className="text-[var(--color-primary)] font-bold text-sm tracking-tighter leading-none mt-[1px]">
          YP
        </span>
      </div>

      {/* Name Typography */}
      <div className="text-lg font-semibold tracking-tight hidden sm:flex items-center">
        <span className="text-[var(--color-primary)] mr-1.5">Yash</span>
        <span className="text-[var(--color-text-primary)]">Prajapati</span>
      </div>
    </Link>
  );
}
