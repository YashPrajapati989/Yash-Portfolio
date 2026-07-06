"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container, Section, Heading, Text, Card } from "@/components/ui";
import { buttonVariants } from "@/components/ui/Button";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/constants/animation";
import { contactInfo, socialLinks } from "@/data/contact";

export function Contact() {
  return (
    <Section id="contact" className="bg-[var(--color-bg-base)] border-t border-[var(--color-border)]/50 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-2xl h-[400px] bg-[var(--color-primary)]/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariants}
          className="flex flex-col items-center text-center max-w-2xl mx-auto gap-8 relative z-10"
        >
          {/* Header */}
          <div className="flex flex-col gap-4 items-center">
            <motion.div variants={staggerItemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-success)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-success)]"></span>
                </span>
                <span className="text-xs font-medium text-[var(--color-text-secondary)]">{contactInfo.availability}</span>
              </div>
            </motion.div>
            
            <motion.div variants={staggerItemVariants}>
              <Heading as="h2" className="text-4xl md:text-6xl font-bold tracking-tight">
                Let&apos;s Build Something
              </Heading>
            </motion.div>
            
            <motion.div variants={staggerItemVariants}>
              <Text variant="muted" className="text-lg">
                Currently looking for a Data/Business Analyst internship or remote opportunities. My inbox is always open.
              </Text>
            </motion.div>
          </div>

          {/* Primary CTA */}
          <motion.div variants={staggerItemVariants} className="mt-4">
            <a 
              href={`mailto:${contactInfo.email}`}
              className={buttonVariants({ variant: "primary", size: "lg", className: "px-10 h-14 text-lg rounded-xl" })}
            >
              <Mail className="h-5 w-5 mr-2" />
              Say Hello
            </a>
          </motion.div>

          {/* Contact Details Cards */}
          <motion.div variants={staggerItemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8">
            <Card className="flex flex-col items-center gap-3 p-6 bg-[var(--color-bg-surface)] border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors">
              <div className="p-3 rounded-full bg-[var(--color-bg-elevated)] text-[var(--color-primary)]">
                <Mail className="h-5 w-5" />
              </div>
              <a href={`mailto:${contactInfo.email}`} className="font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors">
                {contactInfo.email}
              </a>
            </Card>
            
            <Card className="flex flex-col items-center gap-3 p-6 bg-[var(--color-bg-surface)] border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors">
              <div className="p-3 rounded-full bg-[var(--color-bg-elevated)] text-[var(--color-primary)]">
                <Phone className="h-5 w-5" />
              </div>
              <a href={`tel:${contactInfo.phone.replace(/\\s/g, '')}`} className="font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors">
                {contactInfo.phone}
              </a>
            </Card>
          </motion.div>

          {/* Social & Location */}
          <motion.div variants={staggerItemVariants} className="flex flex-col sm:flex-row items-center justify-between w-full mt-12 pt-8 border-t border-[var(--color-border)]/50 gap-4">
            <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm">
              <MapPin className="h-4 w-4" />
              {contactInfo.location}
            </div>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                    aria-label={`${social.platform} Profile`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </Section>
  );
}
