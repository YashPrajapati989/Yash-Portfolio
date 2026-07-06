"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, ExternalLink, GitBranch, CheckCircle2, Clock, CircleDashed } from "lucide-react";
import { Container, Section, Heading, Text, Card, Badge } from "@/components/ui";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/constants/animation";
import { certifications, learningJourney, githubUsername } from "@/data/achievements";

export function Achievements() {
  return (
    <Section id="achievements" className="bg-[var(--color-bg-base)]">
      <Container>
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
            className="flex flex-col gap-4 items-center"
          >
            <motion.div variants={staggerItemVariants}>
              <Badge variant="outline" className="border-[var(--color-secondary)] text-[var(--color-secondary)]">
                Milestones
              </Badge>
            </motion.div>
            <motion.div variants={staggerItemVariants}>
              <Heading as="h2" className="text-3xl md:text-5xl font-bold tracking-tight">
                Achievements & Growth
              </Heading>
            </motion.div>
            <motion.div variants={staggerItemVariants}>
              <Text variant="muted" className="text-lg">
                Continuous learning, certifications, and open-source contributions
                that shape my engineering journey.
              </Text>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: GitHub Stats & Learning */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainerVariants}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* GitHub Stats */}
            <motion.div variants={staggerItemVariants}>
              <Card hover className="p-6 md:p-8 bg-[var(--color-bg-elevated)] border-[var(--color-border)] h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-surface)] text-[var(--color-text-primary)]">
                    <GitBranch className="h-5 w-5" />
                  </div>
                  <Heading as="h3" className="text-xl font-semibold">GitHub Activity</Heading>
                </div>
                
                <div className="w-full overflow-hidden rounded-lg border border-[var(--color-border)]/50 bg-[var(--color-bg-base)] p-6 md:p-8 flex flex-col items-center justify-center gap-6 text-center">
                  <div className="rounded-full bg-[var(--color-primary-muted)] p-4">
                    <GitBranch className="h-10 w-10 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <Heading as="h4" className="text-xl font-bold mb-2">@{githubUsername}</Heading>
                    <Text variant="muted" className="mb-6">
                      Explore my repositories, data analytics projects, and open-source contributions directly on GitHub.
                    </Text>
                    <a
                      href={`https://github.com/${githubUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-[var(--color-text-inverted)] font-semibold hover:bg-[var(--color-primary-hover)] transition-all shadow-[0_0_15px_rgba(94,234,212,0.3)]"
                    >
                      View GitHub Profile <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Learning Journey */}
            <motion.div variants={staggerItemVariants}>
              <Card hover className="p-6 md:p-8 bg-[var(--color-bg-elevated)] border-[var(--color-border)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-surface)] text-[var(--color-primary)]">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <Heading as="h3" className="text-xl font-semibold">Current Focus</Heading>
                </div>
                
                <ul className="flex flex-col gap-4">
                  {learningJourney.map((item) => (
                    <li key={item.id} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg-base)]/50 border border-[var(--color-border)]/50">
                      {item.status === "completed" && <CheckCircle2 className="h-5 w-5 text-[var(--color-success)] shrink-0" />}
                      {item.status === "in-progress" && <Clock className="h-5 w-5 text-[var(--color-primary)] shrink-0" />}
                      {item.status === "planned" && <CircleDashed className="h-5 w-5 text-[var(--color-text-muted)] shrink-0" />}
                      
                      <div className="flex flex-col">
                        <span className="font-medium text-[var(--color-text-primary)]">{item.topic}</span>
                        <span className="text-xs text-[var(--color-text-muted)] capitalize">{item.status.replace('-', ' ')}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column: Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainerVariants}
            className="lg:col-span-5"
          >
            <motion.div variants={staggerItemVariants} className="h-full">
              <Card hover className="p-6 md:p-8 bg-[var(--color-bg-elevated)] border-[var(--color-border)] h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-surface)] text-[var(--color-accent)]">
                    <Award className="h-5 w-5" />
                  </div>
                  <Heading as="h3" className="text-xl font-semibold">Certifications</Heading>
                </div>

                <div className="flex flex-col gap-4 flex-grow">
                  {certifications.map((cert) => (
                    <div 
                      key={cert.id} 
                      className="group relative flex flex-col p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] hover:border-[var(--color-accent)]/50 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <Heading as="h4" className="text-base font-medium pr-6">
                          {cert.title}
                        </Heading>
                        {cert.url && cert.url !== "#" && (
                          <a 
                            href={cert.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="absolute right-4 top-4 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                            aria-label={`View ${cert.title} certificate`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 mt-auto">
                        <Badge variant="secondary" className="bg-[var(--color-bg-base)] text-[var(--color-text-secondary)]">
                          {cert.issuer}
                        </Badge>
                        <span className="text-xs text-[var(--color-text-muted)] flex items-center before:content-['•'] before:mr-2">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
