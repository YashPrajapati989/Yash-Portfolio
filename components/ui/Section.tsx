import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type SectionSpacing = 'small' | 'medium' | 'large';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** HTML id — used for anchor navigation */
  id?: string;
  /** Vertical padding preset */
  spacing?: SectionSpacing;
}

// ---------------------------------------------------------------------------
// Spacing map
// ---------------------------------------------------------------------------
const spacingMap: Record<SectionSpacing, string> = {
  small: 'py-8 md:py-12',
  medium: 'py-16 md:py-24',
  large: 'py-24 md:py-32',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function Section({
  children,
  className,
  id,
  spacing = 'medium',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative w-full', spacingMap[spacing], className)}
    >
      {children}
    </section>
  );
}
