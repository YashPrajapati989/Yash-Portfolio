"use client";

import { motion } from "framer-motion";
import { Container, Heading, Section, Text } from "@/components/ui";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/constants/animation";

export function About() {
  return (
    <Section id="about">
      <Container>
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text content */}
            <div className="flex flex-col gap-6">
              <motion.div variants={staggerItemVariants}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-px w-8 bg-[var(--color-primary)]" />
                  <Text variant="small" className="font-mono tracking-widest uppercase text-[var(--color-primary)]">
                    Chapter 3
                  </Text>
                </div>
                <Heading as="h2">The Explorer</Heading>
              </motion.div>
              
              <motion.div variants={staggerItemVariants}>
                <Text variant="lead" className="leading-relaxed">
                  I believe that great software is built through a combination of engineering discipline, deep curiosity, and an appreciation for craftsmanship.
                </Text>
              </motion.div>
              
              <motion.div variants={staggerItemVariants}>
                <Text variant="body" className="leading-relaxed">
                  My approach isn&apos;t just about writing code that works; it&apos;s about building systems that are resilient, maintainable, and delightful to use. I treat every project as an opportunity to push the boundaries of what I know and to refine my process. 
                </Text>
              </motion.div>
            </div>

            {/* Visual element (Glassmorphism cards) */}
            <motion.div 
              variants={staggerItemVariants}
              className="relative grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Card 1 */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-surface)]/50 backdrop-blur-md p-6 flex flex-col justify-between min-h-[200px] hover:border-[var(--color-primary)]/50 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary)] to-transparent opacity-50" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                  <Text variant="small" className="font-mono uppercase text-[var(--color-primary)]">Mindset</Text>
                </div>
                <div>
                  <Heading as="h5" className="mb-2">Curiosity-Driven</Heading>
                  <Text variant="muted">Focusing on understanding the &quot;why&quot; before the &quot;how.&quot;</Text>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-surface)]/50 backdrop-blur-md p-6 flex flex-col justify-between min-h-[200px] hover:border-[var(--color-accent)]/50 transition-colors sm:translate-y-8">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-50" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  <Text variant="small" className="font-mono uppercase text-[var(--color-accent)]">Process</Text>
                </div>
                <div>
                  <Heading as="h5" className="mb-2">Craftsmanship</Heading>
                  <Text variant="muted">Building with attention to detail, accessibility, and performance.</Text>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
