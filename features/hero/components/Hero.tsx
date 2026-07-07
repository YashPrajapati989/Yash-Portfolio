"use client";

import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Badge, Container, Heading, Section, Text } from "@/components/ui";
import { buttonVariants } from "@/components/ui/Button";
import { staggerContainerVariants } from "@/lib/constants/animation";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type Designation = {
  title: string;
};

type CursorParallax = {
  ref: React.RefObject<HTMLDivElement>;
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
  rawX: MotionValue<number>;
  rawY: MotionValue<number>;
};

const designations: Designation[] = [
  { title: "Data Scientist" },
  { title: "Data Analyst" },
  { title: "Machine Learning Engineer" },
  { title: "AI Developer" },
];

function useCursorParallax(maxShift = 10): CursorParallax {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  const rawX = useSpring(0, { stiffness: 260, damping: 26, mass: 0.65 });
  const rawY = useSpring(0, { stiffness: 260, damping: 26, mass: 0.65 });

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
  }, [maxShift, reducedMotion, rawX, rawY]);

  const tiltX = useTransform(rawY, (v) => v * -0.75);
  const tiltY = useTransform(rawX, (v) => v * 0.75);

  return { ref, tiltX, tiltY, rawX, rawY };
}

function ScrollIndicator() {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className="mt-8 flex flex-col items-center gap-3 select-none"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="text-[var(--color-text-secondary)] text-xs tracking-[0.18em] uppercase"
        aria-hidden="true"
      >
        Scroll
      </div>
      <div
        className="relative h-10 w-6 rounded-full border border-[var(--color-border-muted)] bg-[rgba(255,255,255,0.02)]"
        aria-hidden="true"
      >
        <motion.span
          className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--color-primary)] shadow-[0_0_18px_rgba(94,234,212,0.35)]"
          animate={reducedMotion ? undefined : { y: [0, 14, 0] }}
          transition={
            reducedMotion ? undefined : { duration: 1.55, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>
    </motion.div>
  );
}

function SocialIcons() {
  const icons = useMemo(
    () => [
      {
        label: "Email",
        href: "mailto:yashprajapati@gmail.com",
        icon: FaEnvelope,
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/yash-prajapati",
        icon: FaLinkedin,
      },
      {
        label: "GitHub",
        href: "https://github.com/YashPrajapati989",
        icon: FaGithub,
      },
    ],
    []
  );

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

function TypewriterDesignation() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (reducedMotion) {
      setIndex(0);
      setText(designations[0]?.title ?? "");
      setPhase("pausing");
      return;
    }

    const current = designations[index]?.title ?? "";
    const typingSpeed = 36; // ms per char
    const deleteSpeed = 22; // ms per char

    let t: number | undefined;

    if (phase === "typing") {
      if (text.length >= current.length) {
        setPhase("pausing");
        t = window.setTimeout(() => setPhase("deleting"), 1850);
      } else {
        t = window.setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typingSpeed);
      }
    } else if (phase === "pausing") {
      t = window.setTimeout(() => setPhase("deleting"), 1850);
    } else {
      if (text.length === 0) {
        const next = (index + 1) % designations.length;
        setIndex(next);
        setPhase("typing");
      } else {
        t = window.setTimeout(() => {
          setText(current.slice(0, Math.max(0, text.length - 1)));
        }, deleteSpeed);
      }
    }

    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [index, phase, reducedMotion, text.length]);

  const currentTitle = designations[index]?.title ?? "";

  return (
    <div className="relative">
      <div className="text-[length:12ch] text-xl sm:text-2xl font-bold">
        <span className="text-gradient bg-clip-text text-transparent [background-size:240%_auto]">
          {reducedMotion ? currentTitle : text}
        </span>
      </div>
    </div>
  );
}

function AliveBackground() {
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
          className="absolute left-[-12%] top-[-25%] h-[640px] w-[640px] bg-[radial-gradient(circle_at_center,rgba(94,234,212,0.20),transparent_60%)]"
          animate={reducedMotion ? undefined : { x: [0, 70, 0], y: [0, 30, 0] }}
          transition={reducedMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-20%] top-[-10%] h-[660px] w-[660px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.20),transparent_58%)]"
          animate={reducedMotion ? undefined : { x: [0, -60, 0], y: [0, 20, 0] }}
          transition={reducedMotion ? undefined : { duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute inset-0 opacity-[0.085] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="absolute inset-0 opacity-[0.06] bg-[url('/file.svg')] mix-blend-overlay" />

      <motion.div
        className="absolute inset-0"
        animate={reducedMotion ? undefined : { opacity: [0.75, 1, 0.8] }}
        transition={reducedMotion ? undefined : { duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-1/2 top-[-35%] h-[170%] w-[2px] -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(94,234,212,0.45),transparent)] opacity-50" />
        <div className="absolute left-1/4 top-[-45%] h-[190%] w-[1px] bg-[linear-gradient(to_bottom,transparent,rgba(124,58,237,0.35),transparent)] opacity-45" />
        <div className="absolute right-1/4 top-[-45%] h-[190%] w-[1px] bg-[linear-gradient(to_bottom,transparent,rgba(94,234,212,0.30),transparent)] opacity-40" />
      </motion.div>

      <div className="absolute bottom-[-120px] left-[-12%] h-[330px] w-[560px] rounded-[32px] glass opacity-75 rotate-[-7deg]" />
      <div className="absolute bottom-[-160px] right-[-18%] h-[380px] w-[600px] rounded-[32px] glass opacity-65 rotate-[9deg]" />

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, idx) => {
          const left = (idx * 37) % 100;
          const top = (idx * 19) % 100;
          const size = 2 + (idx % 4);
          const delay = idx * 0.18;
          return (
            <motion.span
              key={idx}
              className="absolute rounded-full bg-[var(--color-primary)] shadow-[0_0_18px_rgba(94,234,212,0.25)]"
              style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, opacity: 0.2 }}
              initial={{ opacity: 0 }}
              animate={reducedMotion ? undefined : { opacity: [0.15, 0.35, 0.15], y: [0, -14, 0] }}
              transition={reducedMotion ? undefined : { duration: 3.8, repeat: Infinity, delay, ease: "easeInOut" }}
            />
          );
        })}
      </div>
    </div>
  );
}

type FloatingSignal = {
  label: string;
  tone: "cyan" | "violet" | "teal";
};

function toneToGradient(tone: FloatingSignal["tone"]) {
  if (tone === "violet") return "from-[rgba(124,58,237,0.0)] via-[rgba(124,58,237,0.65)] to-[rgba(124,58,237,0.0)]";
  if (tone === "teal") return "from-[rgba(94,234,212,0.0)] via-[rgba(34,211,238,0.65)] to-[rgba(94,234,212,0.0)]";
  return "from-[rgba(94,234,212,0.0)] via-[rgba(94,234,212,0.65)] to-[rgba(94,234,212,0.0)]";
}

function AiWorkspaceScene({ tiltX, tiltY, rawX, rawY }: { tiltX: MotionValue<number>; tiltY: MotionValue<number>; rawX: MotionValue<number>; rawY: MotionValue<number>; }) {
  const reducedMotion = useReducedMotion();
  const uid = useId();

  const signals: FloatingSignal[] = useMemo(
    () => [
      { label: "SQL", tone: "cyan" },
      { label: "Python", tone: "teal" },
      { label: "Power BI", tone: "violet" },
      { label: "AI", tone: "cyan" },
      { label: "Machine Learning", tone: "violet" },
      { label: "Data Viz", tone: "teal" },
    ],
    []
  );

  const ringRot = reducedMotion ? undefined : { rotate: [0, 360] };

  return (
    <div className="relative mx-auto h-[480px] w-[480px] max-w-[88vw]">
      {/* Outer holographic frame */}
      <motion.div
        className="absolute inset-0 rounded-[36px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.03)] shadow-[0_40px_110px_rgba(0,0,0,0.65)]"
        style={{ transformStyle: "preserve-3d", rotateX: tiltX, rotateY: tiltY }}
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 rounded-[36px] overflow-hidden">
          <motion.div
            className="absolute inset-[-35%] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(94,234,212,0.0),rgba(94,234,212,0.48),rgba(124,58,237,0.40),rgba(94,234,212,0.0))]"
            style={{ filter: "blur(10px)", opacity: 0.95 }}
            animate={ringRot}
            transition={reducedMotion ? undefined : { duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Glowing rings */}
        <div className="absolute inset-0 pointer-events-none">
          {[0, 1, 2].map((i) => (
            <motion.div
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{ transformStyle: "preserve-3d", rotateX: tiltX, rotateY: tiltY }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.12, duration: 0.8, ease: "easeOut" }}
              // Tailwind conditional gradients
            >
              <div
                className={
                  i === 0
                    ? "h-full w-full rounded-full border-[1px] border-[rgba(94,234,212,0.22)] [box-shadow:0_0_40px_rgba(94,234,212,0.22)]"
                    : i === 1
                      ? "h-full w-full rounded-full border-[1px] border-[rgba(124,58,237,0.22)] [box-shadow:0_0_40px_rgba(124,58,237,0.20)]"
                      : "h-full w-full rounded-full border-[1px] border-[rgba(34,211,238,0.20)] [box-shadow:0_0_40px_rgba(34,211,238,0.18)]"
                }
              />
              {reducedMotion ? null : (
                <motion.div
                  className="absolute inset-[10%] rounded-full border border-[rgba(255,255,255,0.10)]"
                  animate={{ rotate: i % 2 === 0 ? [0, 360] : [0, -360] }}
                  transition={{ duration: 7 + i * 0.6, repeat: Infinity, ease: "linear" }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Portrait centerpiece */}
        <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.03)] overflow-hidden shadow-[0_22px_70px_rgba(0,0,0,0.55)]">
          <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(circle_at_50%_30%,black,transparent_65%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.22),transparent_60%)]" />
          </div>

          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.18)_35%,transparent_60%)]" />

          <div className="absolute inset-0">
            <motion.div
              className="h-full w-full"
              style={{
                transformStyle: "preserve-3d",
                rotateX: tiltX,
                rotateY: tiltY,
              }}
              aria-hidden="true"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/profile/yash-profile.png.jpg"
              alt="Yash Prajapati portrait"
              width={420}
              height={420}
              priority
              className="h-[84%] w-[84%] object-cover object-center rounded-[22px] drop-shadow-[0_0_28px_rgba(94,234,212,0.20)]"
            />
          </div>
        </div>

        {/* Floating signal cards */}
        <div className="absolute inset-0 pointer-events-none">
          {signals.map((s, i) => {
            const angle = (i / signals.length) * Math.PI * 2;
            const radiusX = 210;
            const radiusY = 140;
            const x = Math.cos(angle) * radiusX;
            const y = Math.sin(angle) * radiusY;
            const z = (i % 3) * 18;
            const delay = 0.95 + i * 0.06;
            const grad = toneToGradient(s.tone);

            return (
              <motion.div
                key={s.label}
                className="absolute left-1/2 top-1/2"
                style={{ transformStyle: "preserve-3d", transform: `translate3d(${x}px, ${y}px, ${z}px)` }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={{ delay, duration: 0.75, ease: "easeOut" }}
              >
                <div className="relative rounded-[18px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] backdrop-blur-[18px] px-4 py-2">
                  <div
                    className={
                      "absolute inset-0 rounded-[18px] opacity-0 transition-opacity duration-300 " +
                      "bg-[radial-gradient(circle_at_30%_20%,rgba(94,234,212,0.22),transparent_55%)]"
                    }
                  />
                  <div className="relative">
                    <div className="text-[13px] font-semibold tracking-wide text-[var(--color-text-primary)]">{s.label}</div>
                    <div className={`mt-1 h-[1px] w-14 bg-gradient-to-r ${grad} opacity-80`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connected data network (SVG) */}
        <svg
          className="absolute inset-0 pointer-events-none"
          viewBox="0 0 480 480"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`${uid}-line`} x1="0" y1="0" x2="480" y2="480">
              <stop offset="0%" stopColor="rgba(94,234,212,0.0)" />
              <stop offset="35%" stopColor="rgba(94,234,212,0.65)" />
              <stop offset="70%" stopColor="rgba(124,58,237,0.35)" />
              <stop offset="100%" stopColor="rgba(124,58,212,0.0)" />
            </linearGradient>
            <filter id={`${uid}-glow`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {Array.from({ length: 11 }).map((_, idx) => {
            const a = (idx * 37) % 360;
            const r1 = 120 + (idx % 4) * 22;
            const r2 = 160 + (idx % 5) * 18;
            const x1 = 240 + Math.cos((a * Math.PI) / 180) * r1;
            const y1 = 240 + Math.sin((a * Math.PI) / 180) * (r1 * 0.72);
            const x2 = 240 + Math.cos(((a + 60) * Math.PI) / 180) * r2;
            const y2 = 240 + Math.sin(((a + 60) * Math.PI) / 180) * (r2 * 0.72);
            const opacity = 0.18 + (idx % 4) * 0.05;
            return (
              <motion.line
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={`url(#${uid}-line)`}
                strokeWidth={1.1 + (idx % 3) * 0.3}
                opacity={opacity}
                filter={`url(#${uid}-glow)`}
                initial={reducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
                animate={
                  reducedMotion
                    ? undefined
                    : { pathLength: 1, opacity: [opacity * 0.7, opacity, opacity * 0.75] }
                }
                transition={
                  reducedMotion
                    ? undefined
                    : {
                        duration: 1.8 + (idx % 3) * 0.35,
                        delay: 1.2 + idx * 0.08,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }
                }
              />
            );
          })}
        </svg>

        {/* Cursor-reactive lighting mask */}
        <motion.div
          className="absolute inset-0 rounded-[36px]"
          style={{
            background:
              "radial-gradient(380px 260px at 50% 35%, rgba(94,234,212,0.20), transparent 60%), radial-gradient(340px 250px at 45% 60%, rgba(124,58,237,0.16), transparent 62%)",
            transformStyle: "preserve-3d",
          }}
          animate={reducedMotion ? undefined : { opacity: [0.85, 1, 0.9] }}
          transition={reducedMotion ? undefined : { duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Foreground particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 22 }).map((_, idx) => {
            const left = (idx * 23) % 100;
            const top = (idx * 41) % 100;
            const size = 2 + (idx % 4) * 0.75;
            const delay = idx * 0.11;
            const drift = 18 + (idx % 5) * 10;

            return (
              <motion.span
                key={idx}
                className="absolute rounded-full bg-[var(--color-primary)]"
                style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, opacity: 0.18 }}
                initial={{ opacity: 0, y: 0 }}
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: [0.12, 0.35, 0.12],
                        y: [0, -drift, 0],
                      }
                }
                transition={
                  reducedMotion
                    ? undefined
                    : { duration: 4 + (idx % 4) * 0.35, repeat: Infinity, delay, ease: "easeInOut" }
                }
              />
            );
          })}
        </div>

        {/* Parallax shift */}
        <motion.div
          className="absolute inset-0 rounded-[36px] pointer-events-none"
          style={{
            transformStyle: "preserve-3d",
            x: rawX,
            y: rawY,
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Mouse-reactive micro legend */}
      <div className="absolute -bottom-1 left-1/2 w-full -translate-x-1/2 px-6">
        <div className="flex items-center justify-center gap-2 text-[12px] text-[var(--color-text-muted)]">
          <span className="inline-block h-[7px] w-[7px] rounded-full bg-[var(--color-primary)] shadow-[0_0_16px_rgba(94,234,212,0.35)]" />
          <span>Live AI workspace · responsive to your cursor</span>
        </div>
      </div>
    </div>
  );
}

function HeroStats() {
  const reducedMotion = useReducedMotion();

  const items = useMemo(
    () => [
      { label: "Projects", value: 20 },
      { label: "Technologies", value: 10 },
      { label: "Internships", value: 4 },
      { label: "Commitment", value: 100 },
    ],
    []
  );

  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((it, idx) => {
        const isPercent = it.label === "Commitment";
        return (
          <div key={it.label} className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[18px] px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
            <motion.div
              className="text-[var(--color-text-primary)] font-semibold"
              initial={{ opacity: 0, y: 6 }}
              animate={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + idx * 0.08, duration: 0.6, ease: "easeOut" }}
            >
              {reducedMotion ? (
                <span className="text-3xl">{it.value}{isPercent ? "%" : "+"}</span>
              ) : (
                <AnimatedCounter target={it.value} suffix={isPercent ? "%" : "+"} />
              )}
            </motion.div>
            <div className="mt-2 text-xs tracking-[0.14em] uppercase text-[var(--color-text-muted)]">
              {it.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setValue(target);
      return;
    }

    const duration = 900; // ms
    const start = performance.now();

    let rafId: number | undefined;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [reducedMotion, target]);

  return (
    <span className="text-3xl">
      {value}
      {suffix}
    </span>
  );
}

function HeroCTA() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href="#projects"
        className={buttonVariants({
          variant: "primary",
          size: "lg",
          className:
            "group w-full sm:w-auto transition-all duration-300 hover:shadow-[0_0_28px_rgba(94,234,212,0.35)] relative overflow-hidden",
        })}
      >
        <span className="relative inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgba(11,15,25,0.6)] shadow-[0_0_0_rgba(0,0,0,0)]" aria-hidden="true" />
          Explore My Work
        </span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(180px 80px at 30% 0%, rgba(255,255,255,0.28), transparent 60%)",
          }}
        />
      </a>

      <a
        href="/resume.pdf"
        download
        className={buttonVariants({
          variant: "outline",
          size: "lg",
          className:
            "group w-full sm:w-auto transition-all duration-300 hover:border-[rgba(94,234,212,0.75)] relative overflow-hidden",
        })}
      >
        <span className="relative inline-flex items-center gap-2">
          <span className="rounded-full border border-[rgba(94,234,212,0.55)] px-2 py-1 text-[11px] text-[rgba(94,234,212,0.95)] bg-[rgba(94,234,212,0.08)]" aria-hidden="true">PDF</span>
          Download Resume
        </span>
        <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(120deg, transparent 0%, rgba(94,234,212,0.25) 35%, transparent 60%)",
          }}
        />
      </a>
    </div>
  );
}

function HeroLeft() {
  return (
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge variant="success" className="px-3 py-1">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-[var(--color-success)] animate-pulse" />
            AI · Data Science · Engineering
          </Badge>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Heading as="h1" gradient className="tracking-tight">
                HI, I&apos;M <span className="text-[inherit]">YASH</span> PRASJAPATI
              </Heading>
            </motion.div>
          </div>

          <div className="pt-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
              <div className="text-[var(--color-text-secondary)] text-sm uppercase tracking-[0.22em]">
                Specialization
              </div>
              <TypewriterDesignation />
            </div>

            <div className="mt-3">
              <Text
                variant="lead"
                className="text-[var(--color-text-secondary)] max-w-xl !leading-relaxed"
              >
                Building intelligent systems that turn messy signals into decisions—engineered for speed, accuracy, and business impact.
              </Text>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <HeroCTA />
          <HeroStats />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <SocialIcons />
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </div>
  );
}

export function Hero() {
  const cursor = useCursorParallax(12);
  const reducedMotion = useReducedMotion();

  return (
    <Section id="home" className="relative flex min-h-[100vh] items-stretch">
      <AliveBackground />

      <Container>
        <motion.div
          ref={cursor.ref}
          className="relative grid w-full grid-cols-1 items-center gap-10 pt-[18px] pb-[26px] lg:grid-cols-12 lg:gap-12"
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={reducedMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        >
          <HeroLeft />

          <div className="lg:col-span-6 flex items-center justify-center">
            <AiWorkspaceScene tiltX={cursor.tiltX} tiltY={cursor.tiltY} rawX={cursor.rawX} rawY={cursor.rawY} />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}


