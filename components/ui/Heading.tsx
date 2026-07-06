import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-bold leading-tight tracking-tight text-[var(--color-text-primary)]",
  {
    variants: {
      level: {
        h1: "text-4xl sm:text-5xl lg:text-6xl",
        h2: "text-3xl sm:text-4xl lg:text-5xl",
        h3: "text-2xl sm:text-3xl",
        h4: "text-xl sm:text-2xl",
        h5: "text-lg sm:text-xl",
        h6: "text-base sm:text-lg",
      },
      gradient: {
        true: "text-gradient",
        false: "",
      },
      muted: {
        true: "text-[var(--color-text-muted)]",
        false: "",
      },
    },
    defaultVariants: {
      level: "h2",
      gradient: false,
      muted: false,
    },
  }
);

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  /** HTML heading element to render. Defaults to h2 */
  as?: HeadingLevel;
}

/**
 * Semantic heading component with a full typographic scale.
 * The `as` prop controls the HTML element, `level` controls visual size.
 */
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as, level, gradient, muted, ...props }, ref) => {
    const Tag = as ?? (level as HeadingLevel) ?? "h2";
    return (
      <Tag
        ref={ref}
        className={cn(headingVariants({ level, gradient, muted }), className)}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
