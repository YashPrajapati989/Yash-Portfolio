import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Variant definitions
// ---------------------------------------------------------------------------
const textVariants = cva('', {
  variants: {
    variant: {
      body: 'text-base leading-7 text-slate-700 dark:text-slate-300',
      lead: 'text-lg sm:text-xl leading-8 text-slate-600 dark:text-slate-400 font-medium',
      small: 'text-sm leading-6 text-slate-600 dark:text-slate-400',
      muted: 'text-sm leading-6 text-slate-400 dark:text-slate-500',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function Text({ children, className, variant, ...props }: TextProps) {
  return (
    <p
      className={cn(textVariants({ variant }), className)}
      {...props}
    >
      {children}
    </p>
  );
}
