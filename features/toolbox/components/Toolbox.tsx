"use client";

import { motion } from "framer-motion";
import { Badge, Card, Container, Heading, Section, Text } from "@/components/ui";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/constants/animation";
import { skillCategories } from "@/data/skills";

export function Toolbox() {
  return (
    <Section id="skills" className="bg-[var(--color-bg-surface)]">
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
              Chapter 4
            </Text>
            <span className="h-px w-8 bg-[var(--color-primary)]" />
          </motion.div>
          <motion.div variants={staggerItemVariants}>
            <Heading as="h2">The Toolbox</Heading>
          </motion.div>
          <motion.div variants={staggerItemVariants}>
            <Text variant="body" className="mt-4 text-[var(--color-text-muted)]">
              I focus on understanding core programming principles rather than memorizing syntax. 
              Here are the technologies I reach for when solving problems.
            </Text>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={staggerItemVariants}>
              <Card glass className="h-full border-[var(--color-border)] bg-[var(--color-bg-surface)]/40 hover:border-[var(--color-primary)]/40 transition-colors">
                <div className="flex flex-col h-full gap-6">
                  <div className="flex flex-col gap-2">
                    <Heading as="h4">{category.title}</Heading>
                    <Text variant="small" className="text-[var(--color-text-secondary)]">
                      {category.description}
                    </Text>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-[var(--color-bg-elevated)] border-[var(--color-border)] text-[var(--color-text-primary)]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
