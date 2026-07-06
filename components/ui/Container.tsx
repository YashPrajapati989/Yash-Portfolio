import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Tailwind max-width class. Defaults to max-w-6xl */
  maxWidth?: 'max-w-sm' | 'max-w-md' | 'max-w-lg' | 'max-w-xl' | 'max-w-2xl' | 'max-w-4xl' | 'max-w-5xl' | 'max-w-6xl' | 'max-w-7xl' | 'max-w-full';
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function Container({
  children,
  className,
  maxWidth = 'max-w-6xl',
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        maxWidth,
        className
      )}
    >
      {children}
    </div>
  );
}
