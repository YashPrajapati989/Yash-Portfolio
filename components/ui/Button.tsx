import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles shared across all variants
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium rounded-lg",
    "transition-all duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]",
    "disabled:pointer-events-none disabled:opacity-40",
    "select-none cursor-pointer",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--color-primary)] text-[var(--color-text-inverted)]",
          "hover:bg-[var(--color-primary-hover)]",
          "shadow-[0_0_0_0_rgba(94,234,212,0)]",
          "hover:shadow-[0_0_16px_rgba(94,234,212,0.35)]",
          "active:scale-[0.98]",
        ],
        secondary: [
          "bg-[var(--color-secondary)] text-white",
          "hover:bg-[var(--color-secondary-hover)]",
          "active:scale-[0.98]",
        ],
        outline: [
          "border border-[var(--color-border)] bg-transparent",
          "text-[var(--color-text-primary)]",
          "hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
          "hover:bg-[var(--color-primary-muted)]",
        ],
        ghost: [
          "bg-transparent text-[var(--color-text-secondary)]",
          "hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)]",
        ],
        danger: [
          "bg-[var(--color-danger)] text-white",
          "hover:opacity-90",
          "active:scale-[0.98]",
        ],
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Renders as the specified HTML element (e.g. 'a' for links) */
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

/**
 * Polymorphic button component with CVA variants.
 * Supports primary, secondary, outline, ghost and danger styles.
 */
const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, as: Tag = "button", ...props }, ref) => {
    return (
      // @ts-expect-error — polymorphic ref typing
      <Tag
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
