"use client";

import { motion } from "framer-motion";
import { Container, Section, Heading, Text, Button, Badge } from "@/components/ui";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/constants/animation";
import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  Section,
  Text,
} from "@/components/ui";
import {
  ArrowRight,
  Briefcase,
  Code2,
  FolderKanban,
  Mail,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Preview card data
// ---------------------------------------------------------------------------
const previewCards = [
  {
    icon: <FolderKanban className="h-7 w-7 text-violet-500" aria-hidden />,
    title: "Projects",
    description:
      "Full-stack apps, data science notebooks, and open-source contributions — built with React, Next.js, Python, and more.",
    badge: "6+ Projects",
    badgeVariant: "default" as const,
    href: "#projects",
  },
  {
    icon: <Code2 className="h-7 w-7 text-fuchsia-500" aria-hidden />,
    title: "Skills",
    description:
      "Proficient in Python, TypeScript, SQL, and machine learning frameworks. Comfortable across the full web development stack.",
    badge: "20+ Technologies",
    badgeVariant: "success" as const,
    href: "#skills",
  },
  {
    icon: <Briefcase className="h-7 w-7 text-pink-500" aria-hidden />,
    title: "Experience",
    description:
      "Internships, academic projects, and community involvement that shaped my engineering mindset and problem-solving skills.",
    badge: "3+ Roles",
    badgeVariant: "warning" as const,
    href: "#experience",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function Home() {
  return (
    <>
      <Section id="home" className="flex min-h-[calc(100vh-var(--navbar-height))] items-center pt-0">
        <Container>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            {/* Availability Badge */}
            <motion.div variants={staggerItemVariants} className="mb-8">
              <Badge variant="default" className="px-4 py-1.5 text-sm">
                <span className="relative flex h-2.5 w-2.5 mr-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-primary)]"></span>
                </span>
                Available for Opportunities
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={staggerItemVariants}>
              <Heading as="h1" level="h1" className="mb-6 tracking-tight">
                Hi, I'm <span className="text-[var(--color-primary)] text-gradient">Yash Prajapati</span>
              </Heading>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={staggerItemVariants}>
              <Text size="xl" color="secondary" className="mb-10 max-w-2xl mx-auto leading-relaxed">
                Computer Science Student, Aspiring Data Scientist, and Full Stack Developer building beautiful, scalable, and accessible digital experiences.
              </Text>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={staggerItemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button as="a" href="#projects" size="lg" className="w-full sm:w-[160px]">
                View Projects
              </Button>
              <Button as="a" href="#contact" variant="outline" size="lg" className="w-full sm:w-[160px]">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
    <main className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}
      <Section spacing="large" id="hero">
        <Container>
          <div className="flex flex-col items-center text-center gap-6">
            {/* Availability badge */}
            <Badge variant="success" size="md">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Opportunities
            </Badge>

            {/* Main heading */}
            <Heading as="h1" gradient>
              Hi, I&apos;m Yash Prajapati
            </Heading>

            {/* Sub-heading / role description */}
            <Text variant="lead" className="max-w-xl">
              Computer Science Student&nbsp;&middot;&nbsp;Aspiring Data
              Scientist&nbsp;&middot;&nbsp;Full Stack Developer
            </Text>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                id="cta-view-projects"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Mail className="h-4 w-4" />}
                id="cta-contact"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Preview cards — Projects / Skills / Experience                      */}
      {/* ------------------------------------------------------------------ */}
      <Section spacing="medium" id="overview">
        <Container>
          {/* Section label */}
          <div className="text-center mb-12">
            <Heading as="h2">What I Do</Heading>
            <Text variant="muted" className="mt-3">
              A quick look at the work and experience I&apos;ve built up so far.
            </Text>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-2xl"
                aria-label={`Go to ${card.title} section`}
              >
                <Card hover padding="lg" className="h-full flex flex-col gap-4">
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                      {card.icon}
                    </div>
                    <Badge variant={card.badgeVariant} size="sm">
                      {card.badge}
                    </Badge>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2 flex-1">
                    <Heading as="h3">{card.title}</Heading>
                    <Text variant="small">{card.description}</Text>
                  </div>

                  {/* Subtle arrow hint */}
                  <div className="flex items-center gap-1 text-violet-500 text-sm font-medium mt-auto">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
