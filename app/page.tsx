"use client";

import { motion } from "framer-motion";
import { Container, Section, Heading, Text, Button, Badge } from "@/components/ui";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/constants/animation";

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
  );
}
