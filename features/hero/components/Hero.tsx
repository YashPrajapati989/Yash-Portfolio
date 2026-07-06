"use client";

import { motion } from "framer-motion";
import {
  Badge,
  Container,
  Heading,
  Section,
  Text,
} from "@/components/ui";
import { buttonVariants } from "@/components/ui/Button";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/constants/animation";
import { ArrowRight, Mail } from "lucide-react";

// ---------------------------------------------------------------------------
// Custom Animation Variants
// ---------------------------------------------------------------------------
const maskRevealVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: "0%", 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for premium feel
    } 
  },
};

export function Hero() {
  return (
    <Section id="home" className="flex min-h-[calc(100vh-var(--navbar-height))] items-center pt-0">
      <Container>
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6"
        >
          {/* Availability badge */}
          <motion.div variants={staggerItemVariants}>
            <Badge variant="success" className="px-3 py-1">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              Available for Opportunities
            </Badge>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden p-2 -m-2">
            <motion.div variants={maskRevealVariants}>
              <Heading as="h1" gradient className="tracking-tight">
                Hi, I&apos;m Yash Prajapati
              </Heading>
            </motion.div>
          </div>

          {/* Sub-heading / role description */}
          <div className="overflow-hidden p-2 -m-2">
            <motion.div variants={maskRevealVariants}>
              <Text variant="lead" className="max-w-xl mx-auto leading-relaxed text-[var(--color-text-secondary)]">
                Computer Science Student&nbsp;&middot;&nbsp;Aspiring Data
                Scientist&nbsp;&middot;&nbsp;Full Stack Developer
              </Text>
            </motion.div>
          </div>

          {/* CTA buttons */}
          <motion.div variants={staggerItemVariants} className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto justify-center">
            <a
              href="#projects"
              className={buttonVariants({ variant: "primary", size: "lg", className: "w-full sm:w-auto" })}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
