"use client";

import { Badge, Card, Container, Heading, Section, Text } from "@/components/ui";
import { ArrowRight, Briefcase, Code2, FolderKanban } from "lucide-react";

const previewCards = [
  {
    icon: <FolderKanban className="h-7 w-7 text-[var(--color-secondary)]" aria-hidden />,
    title: "Projects",
    description:
      "Full-stack apps, data science notebooks, and open-source contributions — built with React, Next.js, Python, and more.",
    badge: "6+ Projects",
    badgeVariant: "default" as const,
    href: "#projects",
  },
  {
    icon: <Code2 className="h-7 w-7 text-[var(--color-primary)]" aria-hidden />,
    title: "Skills",
    description:
      "Proficient in Python, TypeScript, SQL, and machine learning frameworks. Comfortable across the full web development stack.",
    badge: "20+ Technologies",
    badgeVariant: "success" as const,
    href: "#skills",
  },
  {
    icon: <Briefcase className="h-7 w-7 text-[var(--color-accent)]" aria-hidden />,
    title: "Experience",
    description:
      "Internships, academic projects, and community involvement that shaped my engineering mindset and problem-solving skills.",
    badge: "3+ Roles",
    badgeVariant: "accent" as const,
    href: "#experience",
  },
];

export function Overview() {
  return (
    <Section id="overview" className="bg-[var(--color-bg-surface)]">
      <Container>
        {/* Section label */}
        <div className="text-center mb-12">
          <Heading as="h2">What I Do</Heading>
          <Text variant="body" className="mt-3 text-[var(--color-text-muted)]">
            A quick look at the work and experience I&apos;ve built up so far.
          </Text>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group focus-visible:outline-none focus-ring rounded-2xl block h-full"
              aria-label={`Go to ${card.title} section`}
            >
              <Card hover className="h-full flex flex-col gap-4 p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors bg-[var(--color-bg-surface)] shadow-[var(--shadow-md)]">
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-bg-elevated)] group-hover:bg-[var(--color-primary-muted)] transition-colors">
                    {card.icon}
                  </div>
                  <Badge variant={card.badgeVariant}>
                    {card.badge}
                  </Badge>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2 flex-1 mt-2">
                  <Heading as="h4">{card.title}</Heading>
                  <Text variant="small" className="leading-relaxed text-[var(--color-text-secondary)]">{card.description}</Text>
                </div>

                {/* Subtle arrow hint */}
                <div className="flex items-center gap-1.5 text-[var(--color-primary)] text-sm font-medium mt-4 group-hover:translate-x-1 transition-transform">
                  Explore
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
