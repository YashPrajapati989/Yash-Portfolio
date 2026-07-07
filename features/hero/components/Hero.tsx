"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Badge, Container, Heading, Section, Text } from "@/components/ui";
import { buttonVariants } from "@/components/ui/Button";
import { staggerContainerVariants } from "@/lib/constants/animation";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type RoleItem = { role: string; sub: string };

type Vec2 = { x: number; y: number };

const techCards = [
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "Machine Learning",
  "Data Analytics",
  "Java",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "GitHub",
];

function useCursorParallax(maxShift = 12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  const rawX = useSpring(0, { stiffness: 220, damping: 26, mass: 0.7 });
  const rawY = useSpring(0, { stiffness: 220, damping: 26, mass: 0.7 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion) {
      rawX.set(0);
      rawY.set(0);
      return;
    }

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / Math.max(1, rect.width);
      const dy = (e.clientY - cy) / Math.max(1, rect.height);

      rawX.set(Math.max(-1, Math.min(1, dx)) * maxShift);
      rawY.set(Math.max(-1, Math.min(1, dy)) * maxShift);
    };

    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reducedMotion, maxShift, rawX, rawY]);

  const tiltX = useTransform(rawY, (v) => v * -0.85);
  const tiltY = useTransform(rawX, (v) => v * 0.85);

  return { ref, tiltX, tiltY, rawX, rawY };
}


function ScrollIndicator() {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className="mt-8 flex flex-col items-center gap-3 select-none"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="text-[var(--color-text-secondary)] text-xs tracking-[0.18em] uppercase"
        aria-hidden="true"
      >
        Explore More
      </div>
      <div
        className="relative h-10 w-6 rounded-full border border-[var(--color-border-muted)] bg-[rgba(255,255,255,0.02)]"
        aria-hidden="true"
      >
        <motion.span
          className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--color-primary)] shadow-[0_0_18px_rgba(94,234,212,0.35)]"
          animate={reducedMotion ? undefined : { y: [0, 14, 0] }}
          transition={
            reducedMotion
              ? undefined
              : { duration: 1.55, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>
    </motion.div>
  );
}

function FloatingTechCards({}: { cursorX: any; cursorY: any }) {
  const reducedMotion = useReducedMotion();

  const positions = useMemo(() => {
    return techCards.map((label, i) => {
      const angle = (i / techCards.length) * Math.PI * 2;
      const radius = 120 + (i % 3) * 34;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * (radius * 0.62);
      return { label, i, x, y, depth: (i % 5) - 2 };
    });
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      {positions.map(({ label, i, x, y, depth }) => (
        <motion.div
          key={label}
          className="absolute left-1/2 top-1/2"
          style={{ transform: `translate3d(${x}px, ${y}px, ${depth * 12}px)` }}
          initial={{ opacity: 0, scale: 0.9, rotateX: 25, rotateY: -18 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
          transition={{
            delay: 1.55 + i * 0.03,
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            className="group relative rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] px-3 py-2 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-[18px]"
            style={{ transformStyle: "preserve-3d" }}
            whileHover={
              reducedMotion
                ? undefined
                : { y: -4, transition: { duration: 0.2 } }
            }
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_20%,rgba(94,234,212,0.22),transparent_55%)] group-hover:opacity-100" />
            <div
              className="relative text-[13px] font-semibold tracking-wide text-[var(--color-text-primary)]"
              style={{ transform: "translateZ(0)" }}
            >
              {label}
            </div>
            <div className="relative mt-1 h-[1px] w-14 bg-gradient-to-r from-[rgba(94,234,212,0.0)] via-[rgba(94,234,212,0.55)] to-[rgba(124,58,237,0.0)] opacity-70" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function ProfilePresentation({ tiltX, tiltY }: { tiltX: any; tiltY: any }) {
  const reducedMotion = useReducedMotion();
  const avatarSrc = "/window.svg"; // placeholder

  return (
    <motion.div
      className="relative mx-auto h-[420px] w-[420px] max-w-[86vw]"
      style={{ transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.95, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      whileHover={
        reducedMotion
          ? undefined
          : { y: -2, transition: { duration: 0.25, ease: "easeOut" } }
      }
    >
      <div className="absolute inset-0 rounded-[32px] glass" />

      <motion.div
        className="absolute inset-0 rounded-[32px] border border-[rgba(94,234,212,0.18)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 rounded-[32px] overflow-hidden">
          <motion.div
            className="absolute inset-[-40%] rounded-[32px] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(94,234,212,0.0),rgba(94,234,212,0.45),rgba(124,58,237,0.35),rgba(94,234,212,0.0))]"
            style={{ filter: "blur(8px)", opacity: 0.95 }}
            animate={reducedMotion ? undefined : { rotate: [0, 360] }}
            transition={
              reducedMotion
                ? undefined
                : { duration: 6.5, repeat: Infinity, ease: "linear" }
            }
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-[-40%] rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(94,234,212,0.22),transparent_55%)]"
        style={{ transformStyle: "preserve-3d", rotateX: tiltX, rotateY: tiltY }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.03)] shadow-[0_22px_70px_rgba(0,0,0,0.55)] overflow-hidden"
        style={{ transformStyle: "preserve-3d", rotateX: tiltX, rotateY: tiltY }}
        whileHover={
          reducedMotion
            ? undefined
            : { boxShadow: "0 28px 90px rgba(0,0,0,0.62)", transition: { duration: 0.3, ease: "easeOut" } }
        }
      >
        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(0deg,rgba(255,255,255,0.04),rgba(255,255,255,0.0))]" />
        <div className="absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(circle_at_50%_30%,black,transparent_65%)]">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.18),transparent_60%)]"
            animate={reducedMotion ? undefined : { opacity: [0.7, 1, 0.8] }}
            transition={
              reducedMotion ? undefined : { duration: 3.4, repeat: Infinity, ease: "easeInOut" }
            }
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={avatarSrc}
            alt="Profile"
            width={420}
            height={420}
            priority
            className="h-[78%] w-[78%] object-contain drop-shadow-[0_0_22px_rgba(94,234,212,0.20)]"
          />
        </div>

        <motion.div
          className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_35%,transparent_60%)] opacity-0"
          whileHover={reducedMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          aria-hidden="true"
        />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 16 }).map((_, idx) => {
          const left = (idx * 37) % 100;
          const top = (idx * 19) % 100;
          const size = 3 + (idx % 4);
          const delay = idx * 0.12;
          return (
            <motion.span
              key={idx}
              className="absolute rounded-full bg-[var(--color-primary)] shadow-[0_0_18px_rgba(94,234,212,0.25)]"
              style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, opacity: 0.25 }}
              initial={{ y: 10, opacity: 0 }}
              animate={reducedMotion ? undefined : { y: [-2, -14, -2], opacity: [0.18, 0.38, 0.18] }}
              transition={
                reducedMotion ? undefined : { duration: 3.2, repeat: Infinity, delay, ease: "easeInOut" }
              }
            />
          );
        })}
      </div>
    </motion.div>
  );
}

function HeroBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0 bg-[var(--gradient-hero)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="absolute inset-0">
        <motion.div
          className="absolute left-[-10%] top-[-30%] h-[600px] w-[600px] bg-[radial-gradient(circle_at_center,rgba(94,234,212,0.18),transparent_60%)]"
          animate={reducedMotion ? undefined : { x: [0, 70, 0], y: [0, 30, 0] }}
          transition={reducedMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-20%] top-[-10%] h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_58%)]"
          animate={reducedMotion ? undefined : { x: [0, -60, 0], y: [0, 20, 0] }}
          transition={reducedMotion ? undefined : { duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="absolute inset-0 opacity-[0.06] bg-[url('/file.svg')] mix-blend-overlay" />

      <motion.div
        className="absolute inset-0"
        animate={reducedMotion ? undefined : { opacity: [0.7, 1, 0.8] }}
        transition={reducedMotion ? undefined : { duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-1/2 top-[-30%] h-[160%] w-[2px] -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(94,234,212,0.45),transparent)] opacity-50" />
        <div className="absolute left-1/4 top-[-40%] h-[180%] w-[1px] bg-[linear-gradient(to_bottom,transparent,rgba(124,58,237,0.35),transparent)] opacity-45" />
        <div className="absolute right-1/4 top-[-40%] h-[180%] w-[1px] bg-[linear-gradient(to_bottom,transparent,rgba(94,234,212,0.30),transparent)] opacity-40" />
      </motion.div>

      <div className="absolute bottom-[-120px] left-[-10%] h-[320px] w-[520px] rounded-[32px] glass opacity-80 rotate-[-6deg]" />
      <div className="absolute bottom-[-160px] right-[-16%] h-[360px] w-[560px] rounded-[32px] glass opacity-70 rotate-[8deg]" />
    </div>
  );
}

function SocialIcons() {
  const icons = [
    { label: "Email", href: "mailto:yashprajapati@gmail.com", icon: FaEnvelope },
    { label: "LinkedIn", href: "https://linkedin.com/in/yash-prajapati", icon: FaLinkedin },
    { label: "GitHub", href: "https://github.com/YashPrajapati989", icon: FaGithub },
  ];

  return (
    <div className="flex items-center gap-3">
      {icons.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.03)] text-[var(--color-text-primary)] shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-[18px] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(94,234,212,0.35)] hover:shadow-[0_0_22px_rgba(94,234,212,0.12)]"
          aria-label={label}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </div>
  );
}

export function Hero() {
  const cursor = useCursorParallax(12);
  const reducedMotion = useReducedMotion();

  const roleCycle: RoleItem[] = useMemo(
    () => [
      { role: "Data Analyst", sub: "KPI dashboards • SQL insights" },
      { role: "Business Analyst", sub: "Process clarity • impact mapping" },
      { role: "AI Enthusiast", sub: "ML pipelines • smart automation" },
    ],
    []
  );

  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    if (reducedMotion) return;
    const t = window.setInterval(() => {
      setRoleIndex((p) => (p + 1) % roleCycle.length);
    }, 3200);
    return () => window.clearInterval(t);
  }, [reducedMotion, roleCycle.length]);

  const activeRole = roleCycle[roleIndex];

  return (
    <Section id="home" className="relative flex min-h-[calc(100vh-var(--navbar-height))] items-center pt-0">
      <HeroBackground />

      <Container>
        <motion.div
          ref={cursor.ref}
          className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={reducedMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        >
          {/* LEFT */}
          <div className="lg:col-span-6">
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              <motion.div
                className="w-fit"
                initial={{ opacity: 0, y: 10 }}
                animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Badge variant="success" className="px-3 py-1">
                  <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-[var(--color-success)] animate-pulse" />
                  Available for Opportunities
                </Badge>
              </motion.div>

              <motion.div
                className="flex flex-col gap-4"
                initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
                animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Heading as="h1" gradient className="tracking-tight">
                      Hi, I&apos;m <span className="text-[inherit]">Yash</span> Prajapati
                    </Heading>
                  </motion.div>
                </div>

                <motion.div
                  initial={reducedMotion ? undefined : { y: 18, opacity: 0 }}
                  animate={reducedMotion ? undefined : { y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                    <div className="text-[var(--color-text-secondary)] text-sm uppercase tracking-[0.22em]">
                      Role
                    </div>
                    <div className="relative">
                      <motion.div
                        key={activeRole.role}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="text-xl sm:text-2xl font-bold"
                      >
                        <span className="text-gradient bg-clip-text text-transparent [background-size:200%_auto]">
                          {activeRole.role}
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  <div className="mt-2">
                    <Text
                      variant="lead"
                      className="text-[var(--color-text-secondary)] max-w-xl !leading-relaxed"
                    >
                      {activeRole.sub}
                    </Text>
                  </div>
                </motion.div>

                <motion.div
                  initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
                  animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                >
                  <Text
                    variant="lead"
                    className="text-[var(--color-text-secondary)] max-w-xl !leading-relaxed"
                  >
                    Turning messy data into decision-grade intelligence—fast, accurate, and built for real-world teams.
                  </Text>
                </motion.div>
              </motion.div>

              <motion.div
                initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
                animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <a
                  href="#projects"
                  className={buttonVariants({
                    variant: "primary",
                    size: "lg",
                    className:
                      "group w-full sm:w-auto transition-all duration-300 hover:shadow-[0_0_28px_rgba(94,234,212,0.35)]",
                  })}
                >
                  View My Work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="/resume.pdf" // placeholder
                  download
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className:
                      "group w-full sm:w-auto transition-all duration-300 hover:border-[rgba(94,234,212,0.7)]",
                  })}
                >
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  Download Resume
                </a>
              </motion.div>

              <motion.div
                initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
                animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              >
                <SocialIcons />
              </motion.div>
            </motion.div>

            <ScrollIndicator />
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[460px]">
              <FloatingTechCards cursorX={cursor.rawX} cursorY={cursor.rawY} />
              <ProfilePresentation tiltX={cursor.tiltX} tiltY={cursor.tiltY} />
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

