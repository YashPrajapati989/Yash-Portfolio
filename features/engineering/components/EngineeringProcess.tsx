"use client";

import { motion } from "framer-motion";
import { Container, Section, Heading, Text, Card, Badge } from "@/components/ui";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/constants/animation";
import { engineeringProcess } from "@/data/engineering";

export function EngineeringProcess() {
  return (
    <Section id="engineering" className="bg-[var(--color-bg-surface)]">
      <Container>
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
            className="flex flex-col gap-4 items-center"
          >
            <motion.div variants={staggerItemVariants}>
              <Badge variant="outline" className="border-[var(--color-primary)] text-[var(--color-primary)]">
                The Process
              </Badge>
            </motion.div>
            <motion.div variants={staggerItemVariants}>
              <Heading as="h2" className="text-3xl md:text-5xl font-bold tracking-tight">
                How I Build
              </Heading>
            </motion.div>
            <motion.div variants={staggerItemVariants}>
              <Text variant="muted" className="text-lg">
                A systematic approach to problem-solving, moving from abstract ideas
                to robust, production-ready solutions.
              </Text>
            </motion.div>
          </motion.div>
        </div>

        {/* Process Grid */}
        <div className="relative">
          {/* Central connecting line (desktop only) */}
          <div className="absolute left-1/2 top-8 bottom-8 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[var(--color-primary)]/50 via-[var(--color-border)] to-transparent lg:block" aria-hidden="true" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainerVariants}
            className="flex flex-col gap-8 lg:gap-16"
          >
            {engineeringProcess.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  variants={staggerItemVariants}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Central Node / Icon */}
                  <div className="absolute left-8 lg:left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-bg-elevated)] shadow-[var(--shadow-glow)] backdrop-blur-sm">
                    <Icon className="h-8 w-8 text-[var(--color-primary)]" />
                    {/* Number badge */}
                    <div className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-bold text-[var(--color-text-inverted)] shadow-md">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Connecting line (mobile only) */}
                  <div className="absolute left-8 top-16 bottom-[-32px] w-px -translate-x-1/2 bg-gradient-to-b from-[var(--color-primary)]/50 to-transparent lg:hidden" aria-hidden="true" />

                  {/* Content Card */}
                  <div className="w-full pl-20 lg:w-1/2 lg:pl-0">
                    <Card hover className="p-6 md:p-8 bg-[var(--color-bg-elevated)]/50 backdrop-blur-sm border-[var(--color-border)]/50 relative overflow-hidden group">
                      
                      {/* Decorative glow inside card */}
                      <div className="absolute -inset-x-4 -top-4 h-24 bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

                      <div className="relative z-10 flex flex-col gap-4">
                        <Heading as="h3" className="text-xl md:text-2xl font-semibold">
                          {step.title}
                        </Heading>
                        <Text variant="muted" className="leading-relaxed">
                          {step.description}
                        </Text>

                        {/* Skills/Tools Badges */}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {step.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-[var(--color-bg-base)] text-[var(--color-text-secondary)] border-[var(--color-border)]">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
