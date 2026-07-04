import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Variant definitions
// ---------------------------------------------------------------------------
const badgeVariants = cva(
  'inline-flex items-center justify-center font-medium rounded-full transition-colors',
  {
    variants: {
      variant: {
        default: [
          'bg-violet-100 text-violet-700',
          'dark:bg-violet-500/20 dark:text-violet-300',
        ],
        outline: [
          'border border-violet-500 text-violet-500 bg-transparent',
          'dark:border-violet-400 dark:text-violet-400',
        ],
        success: [
          'bg-emerald-100 text-emerald-700',
          'dark:bg-emerald-500/20 dark:text-emerald-300',
        ],
        warning: [
          'bg-amber-100 text-amber-700',
          'dark:bg-amber-500/20 dark:text-amber-300',
        ],
        danger: [
          'bg-red-100 text-red-700',
          'dark:bg-red-500/20 dark:text-red-300',
        ],
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function Badge({
  children,
  className,
  variant,
  size,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </span>
  );
}
