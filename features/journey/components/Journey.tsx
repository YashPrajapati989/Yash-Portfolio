"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Star, MapPin, Calendar } from "lucide-react";
import { Badge, Container, Heading, Section, Text } from "@/components/ui";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/constants/animation";
import { journeyEntries, type JourneyType } from "@/data/journey";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const typeConfig: Record<
  JourneyType,
  { icon: React.ReactNode; color: string; borderColor: string; bgColor: string; badgeVariant: "default" | "secondary" | "accent" }
> = {
  education: {
    icon: <GraduationCap className="h-5 w-5" aria-hidden />,
    color: "text-[var(--color-primary)]",
    borderColor: "border-[var(--color-primary)]",
    bgColor: "bg-[var(--color-primary-muted)]",
    badgeVariant: "default",
  },
  experience: {
    icon: <Briefcase className="h-5 w-5" aria-hidden />,
    color: "text-[var(--color-secondary)]",
    borderColor: "border-[var(--color-secondary)]",
    bgColor: "bg-[rgba(124,58,237,0.12)]",
    badgeVariant: "secondary",
  },
  milestone: {
    icon: <Star className="h-5 w-5" aria-hidden />,
    color: "text-[var(--color-accent)]",
    borderColor: "border-[var(--color-accent)]",
    bgColor: "bg-[rgba(245,158,11,0.12)]",
    badgeVariant: "accent",
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function Journey() {
  return (
    <Section id="journey">
      <Container>
        {/* Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.div variants={staggerItemVariants} className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[var(--color-primary)]" />
            <Text variant="small" className="font-mono tracking-widest uppercase text-[var(--color-primary)]">
              Chapter 5
            </Text>
            <span className="h-px w-8 bg-[var(--color-primary)]" />
          </motion.div>
          <motion.div variants={staggerItemVariants}>
            <Heading as="h2">The Journey</Heading>
          </motion.div>
          <motion.div variants={staggerItemVariants}>
            <Text variant="body" className="mt-4 text-[var(--color-text-muted)]">
              Every milestone shaped the engineer I am becoming. Here&apos;s the path so far.
            </Text>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central spine — hidden on mobile */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent hidden md:block"
            aria-hidden
          />

          {/* Mobile spine */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent md:hidden"
            aria-hidden
          />

          <div className="flex flex-col gap-12">
            {journeyEntries.map((entry, index) => {
              const config = typeConfig[entry.type];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${entry.year}-${entry.title}`}
                  variants={staggerItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={index}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card — takes up 45% on each side */}
                  <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-10" : "md:pl-10"} pl-14 md:pl-0`}>
                    <div
                      className={`relative rounded-2xl border bg-[var(--color-bg-surface)]/60 backdrop-blur-md p-6 hover:border-[var(--color-primary)]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(94,234,212,0.06)] ${config.borderColor}/30 border`}
                    >
                      {/* Top row: year badge + type badge */}
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                        <div className="flex items-center gap-1.5 text-[var(--color-text-muted)]">
                          <Calendar className="h-3.5 w-3.5" aria-hidden />
                          <span className="text-xs font-mono">{entry.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {entry.current && (
                            <Badge variant="success" className="text-xs px-2 py-0.5">
                              <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-success)] animate-pulse" />
                              Current
                            </Badge>
                          )}
                          <Badge variant={config.badgeVariant} className="text-xs px-2 py-0.5 capitalize">
                            {entry.type}
                          </Badge>
                        </div>
                      </div>

                      {/* Title */}
                      <Heading as="h4" className="mb-1">{entry.title}</Heading>

                      {/* Organization + location */}
                      <div className="flex items-center gap-1.5 text-[var(--color-text-secondary)] mb-3">
                        <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        <Text variant="small" className="font-medium">
                          {entry.organization} · {entry.location}
                        </Text>
                      </div>

                      {/* Description */}
                      <Text variant="small" className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                        {entry.description}
                      </Text>

                      {/* Tags */}
                      {entry.tags && entry.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Central node — desktop only */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10 h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-lg">
                    <span className={config.color}>{config.icon}</span>
                  </div>

                  {/* Mobile node */}
                  <div className="md:hidden absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-lg">
                    <span className={config.color}>{config.icon}</span>
                  </div>

                  {/* Empty spacer for alternating layout */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
