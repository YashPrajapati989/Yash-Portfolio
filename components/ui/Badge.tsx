import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1",
    "rounded-full px-2.5 py-0.5",
    "text-xs font-medium",
    "border",
    "transition-colors duration-200",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--color-primary-muted)]",
          "text-[var(--color-primary)]",
          "border-[rgba(94,234,212,0.25)]",
        ],
        secondary: [
          "bg-[rgba(124,58,237,0.12)]",
          "text-[var(--color-secondary)]",
          "border-[rgba(124,58,237,0.25)]",
        ],
        accent: [
          "bg-[rgba(245,158,11,0.12)]",
          "text-[var(--color-accent)]",
          "border-[rgba(245,158,11,0.25)]",
        ],
        success: [
          "bg-[rgba(34,197,94,0.12)]",
          "text-[var(--color-success)]",
          "border-[rgba(34,197,94,0.25)]",
        ],
        danger: [
          "bg-[rgba(239,68,68,0.12)]",
          "text-[var(--color-danger)]",
          "border-[rgba(239,68,68,0.25)]",
        ],
        muted: [
          "bg-[var(--color-bg-elevated)]",
          "text-[var(--color-text-muted)]",
          "border-[var(--color-border)]",
        ],
        outline: [
          "bg-transparent",
          "text-[var(--color-text-secondary)]",
          "border-[var(--color-border)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Small status / label badge with multiple color variants.
 */
const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  )
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
