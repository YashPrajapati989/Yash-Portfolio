import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  /** Rendered HTML element and default size */
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  /** Apply an animated gradient text effect */
  gradient?: boolean;
}

// ---------------------------------------------------------------------------
// Size map — maps heading level to Tailwind typography classes
// ---------------------------------------------------------------------------
const sizeMap: Record<HeadingLevel, string> = {
  h1: 'text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]',
  h2: 'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight',
  h3: 'text-2xl sm:text-3xl font-bold leading-snug',
  h4: 'text-xl sm:text-2xl font-semibold leading-snug',
  h5: 'text-lg sm:text-xl font-semibold leading-normal',
  h6: 'text-base sm:text-lg font-semibold leading-normal',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function Heading({
  as: Tag = 'h2',
  children,
  className,
  gradient = false,
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        'text-slate-900 dark:text-white',
        sizeMap[Tag],
        gradient && [
          'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500',
          'bg-clip-text text-transparent',
        ],
        className
      )}
    >
      {children}
    </Tag>
  );
}
