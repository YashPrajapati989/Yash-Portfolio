import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  [
    "rounded-xl border transition-all duration-300",
    "border-[var(--color-border)]",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--color-bg-surface)]",
          "shadow-[var(--shadow-md)]",
        ],
        elevated: [
          "bg-[var(--color-bg-elevated)]",
          "shadow-[var(--shadow-lg)]",
        ],
        glass: [
          "glass",
          "shadow-[var(--shadow-md)]",
        ],
        outline: [
          "bg-transparent",
          "border-[var(--color-border)]",
        ],
      },
      interactive: {
        true: [
          "cursor-pointer",
          "hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]",
          "hover:border-[var(--color-primary)]",
        ],
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      interactive: false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

/**
 * Surface card component with optional glass morphism and hover interactivity.
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, interactive }), className)}
      {...props}
    />
  )
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pb-0", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "p-6 pt-0 flex items-center gap-2",
        className
      )}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardContent, CardFooter, cardVariants };
