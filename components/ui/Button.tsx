'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Variant definitions via CVA
// ---------------------------------------------------------------------------
export const buttonVariants = cva(
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
          'bg-[var(--color-primary)] text-[var(--color-text-inverted)] font-semibold shadow-md',
          'hover:bg-[var(--color-primary-hover)] hover:shadow-[0_0_20px_rgba(94,234,212,0.4)]',
          'active:scale-[0.98] transition-all duration-200',
        ],
        secondary: [
          'bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] border border-[var(--color-border)] shadow-md',
          'hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-bg-elevated)]',
          'active:scale-[0.98]',
        ],
        outline: [
          'border border-[var(--color-primary)]/60 text-[var(--color-primary)] bg-transparent',
          'hover:bg-[var(--color-primary-muted)] hover:border-[var(--color-primary)] hover:shadow-[0_0_16px_rgba(94,234,212,0.2)]',
          'active:scale-[0.98]',
        ],
        ghost: [
          'text-[var(--color-text-secondary)] bg-transparent',
          'hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)]',
          'active:scale-[0.98]',
        ],
        link: [
          'text-[var(--color-primary)] underline-offset-4 bg-transparent p-0 h-auto',
          'hover:underline hover:text-[var(--color-primary-hover)]',
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
