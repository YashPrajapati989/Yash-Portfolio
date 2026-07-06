"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Layers, GitBranch } from "lucide-react";
import { Badge, Card, Container, Heading, Section, Text } from "@/components/ui";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/constants/animation";
import { projects, type Project } from "@/data/projects";

// ---------------------------------------------------------------------------
// Status badge config
// ---------------------------------------------------------------------------
const statusConfig = {
  completed: { label: "Completed", variant: "success" as const },
  "in-progress": { label: "In Progress", variant: "accent" as const },
  archived: { label: "Archived", variant: "muted" as const },
};

// ---------------------------------------------------------------------------
// Featured project card (hero treatment)
// ---------------------------------------------------------------------------
function FeaturedCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];

  return (
    <motion.div variants={staggerItemVariants} className="col-span-1 md:col-span-2">
      <Card
        hover
        className="relative overflow-hidden border border-[var(--color-primary)]/20 bg-[var(--color-bg-surface)] p-8 md:p-10"
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[var(--color-primary)]/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[var(--color-secondary)]/10 blur-3xl"
          aria-hidden
        />

        <div className="relative flex flex-col md:flex-row gap-10 items-start">
          {/* Left: content */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Top row */}
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant={status.variant}>{status.label}</Badge>
              <Badge variant="secondary">Featured</Badge>
              {project.tags.map((tag) => (
                <Badge key={tag} variant="muted" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <div>
              <Heading as="h3" gradient>{project.title}</Heading>
              <Text variant="small" className="mt-1 text-[var(--color-text-secondary)] font-medium">
                {project.subtitle}
              </Text>
            </div>

            {/* Description */}
            <Text variant="body" className="text-[var(--color-text-muted)] leading-relaxed">
              {project.description}
            </Text>

            {/* Problem / Outcome */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] p-4">
                <Text variant="small" className="font-mono uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Problem
                </Text>
                <Text variant="small" className="text-[var(--color-text-muted)] leading-relaxed">
                  {project.problem}
                </Text>
              </div>
              <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] p-4">
                <Text variant="small" className="font-mono uppercase tracking-wider text-[var(--color-success)] mb-2">
                  Outcome
                </Text>
                <Text variant="small" className="text-[var(--color-text-muted)] leading-relaxed">
                  {project.outcome}
                </Text>
              </div>
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 mt-2">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GitBranch className="h-4 w-4" aria-hidden />
                  GitHub
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  aria-label={`View ${project.title} live`}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Standard project card
// ---------------------------------------------------------------------------
function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];

  return (
    <motion.div variants={staggerItemVariants} className="group">
      <Card
        hover
        className="h-full flex flex-col gap-5 border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 hover:border-[var(--color-primary)]/40 transition-colors"
      >
        {/* Top row */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-bg-elevated)]">
            <Layers className="h-5 w-5 text-[var(--color-secondary)]" aria-hidden />
          </div>
          <Badge variant={status.variant}>{status.label}</Badge>
        </div>

        {/* Title */}
        <div className="flex-1">
          <Heading as="h4" className="mb-1">{project.title}</Heading>
          <Text variant="small" className="text-[var(--color-text-secondary)] font-medium mb-3">
            {project.subtitle}
          </Text>
          <Text variant="small" className="text-[var(--color-text-muted)] leading-relaxed">
            {project.description}
          </Text>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2 border-t border-[var(--color-border)]">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitBranch className="h-3.5 w-3.5" aria-hidden />
              GitHub
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              aria-label={`View ${project.title} live`}
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              Live Demo
            </a>
          )}
          {!project.links.github && !project.links.live && (
            <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              Links coming soon
            </span>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Main Section
// ---------------------------------------------------------------------------
export function MissionArchive() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" className="bg-[var(--color-bg-surface)]">
      <Container>
        {/* Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div variants={staggerItemVariants} className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[var(--color-primary)]" />
            <Text variant="small" className="font-mono tracking-widest uppercase text-[var(--color-primary)]">
              Chapter 6
            </Text>
            <span className="h-px w-8 bg-[var(--color-primary)]" />
          </motion.div>
          <motion.div variants={staggerItemVariants}>
            <Heading as="h2">Mission Archive</Heading>
          </motion.div>
          <motion.div variants={staggerItemVariants}>
            <Text variant="body" className="mt-4 text-[var(--color-text-muted)]">
              Each project is a completed mission — a real problem solved with purposeful engineering.
            </Text>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {featured.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
