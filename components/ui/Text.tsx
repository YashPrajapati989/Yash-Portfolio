import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    color: {
      primary: "text-[var(--color-text-primary)]",
      secondary: "text-[var(--color-text-secondary)]",
      muted: "text-[var(--color-text-muted)]",
      accent: "text-[var(--color-primary)]",
      inherit: "",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    leading: {
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
    },
  },
  defaultVariants: {
    size: "base",
    color: "secondary",
    weight: "normal",
    leading: "relaxed",
  },
});

type TextElement = "p" | "span" | "div" | "label" | "small" | "strong" | "em";

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  /** HTML element to render */
  as?: TextElement;
}

/**
 * Flexible text component for paragraphs and inline text.
 * Supports full color, size, weight, and leading variants.
 */
const Text = forwardRef<HTMLElement, TextProps>(
  ({ className, as: Tag = "p", size, color, weight, leading, ...props }, ref) => (
    // @ts-expect-error — polymorphic ref typing
    <Tag
      ref={ref}
      className={cn(textVariants({ size, color, weight, leading }), className)}
      {...props}
    />
  )
);

Text.displayName = "Text";

export { Text, textVariants };
