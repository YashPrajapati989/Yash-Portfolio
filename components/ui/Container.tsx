import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { containerClass } from "@/lib/constants/spacing";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Remove max-width constraint */
  fluid?: boolean;
}

/**
 * Responsive max-width container with consistent horizontal padding.
 * Wraps content to keep it centered and readable on all screen sizes.
 */
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, fluid = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(fluid ? "w-full px-4 sm:px-6 lg:px-8" : containerClass, className)}
      {...props}
    />
  )
);

Container.displayName = "Container";

export { Container };
