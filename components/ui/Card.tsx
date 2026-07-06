'use client';

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  /** Enable subtle lift + shadow animation on hover */
  hover?: boolean;
  /** Apply glassmorphism backdrop effect */
  glass?: boolean;
  /** Override the default padding */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

// ---------------------------------------------------------------------------
// Padding map
// ---------------------------------------------------------------------------
const paddingMap = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      hover = false,
      glass = false,
      padding = 'md',
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          hover
            ? { y: -4, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.15)' }
            : undefined
        }
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className={cn(
          // Base
          'rounded-2xl border',
          // Default look
          !glass && 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm',
          // Glassmorphism
          glass && [
            'bg-white/10 dark:bg-white/5',
            'border-white/20 dark:border-white/10',
            'backdrop-blur-md',
            'shadow-xl shadow-black/10',
          ],
          // Hover cursor
          hover && 'cursor-pointer',
          // Padding
          paddingMap[padding],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
