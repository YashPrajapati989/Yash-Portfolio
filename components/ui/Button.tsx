'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Variant definitions via CVA
// ---------------------------------------------------------------------------
const buttonVariants = cva(
  // Base styles applied to every variant
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium rounded-lg',
    'transition-all duration-200 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'disabled:pointer-events-none disabled:opacity-50',
    'select-none whitespace-nowrap',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-violet-600 text-white shadow-md',
          'hover:bg-violet-700 hover:shadow-violet-500/30 hover:shadow-lg',
          'active:scale-[0.98]',
        ],
        secondary: [
          'bg-slate-800 text-slate-100 shadow-md dark:bg-slate-700',
          'hover:bg-slate-700 dark:hover:bg-slate-600',
          'active:scale-[0.98]',
        ],
        outline: [
          'border border-violet-500 text-violet-500 bg-transparent',
          'hover:bg-violet-500/10',
          'active:scale-[0.98]',
        ],
        ghost: [
          'text-slate-700 dark:text-slate-300 bg-transparent',
          'hover:bg-slate-100 dark:hover:bg-slate-800',
          'active:scale-[0.98]',
        ],
        link: [
          'text-violet-500 underline-offset-4 bg-transparent p-0 h-auto',
          'hover:underline hover:text-violet-400',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-5 text-sm',
        lg: 'h-12 px-7 text-base',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Show a loading spinner and disable interaction */
  loading?: boolean;
  /** Icon rendered before the label */
  leftIcon?: React.ReactNode;
  /** Icon rendered after the label */
  rightIcon?: React.ReactNode;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          leftIcon && <span aria-hidden="true">{leftIcon}</span>
        )}
        {children}
        {!loading && rightIcon && (
          <span aria-hidden="true">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
