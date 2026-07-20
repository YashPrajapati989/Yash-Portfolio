"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from "framer-motion";
import { Container, Section, Text } from "@/components/ui";
import { buttonVariants } from "@/components/ui/Button";
import { ArrowRight, Download, MoveDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// ==========================================
// 1. DATA & CONSTANTS
// ==========================================

const ROLES = [
  "Data Scientist",
  "Machine Learning Engineer",
  "Data Analyst",
  "AI Developer",
];

const SKILLS = [
  "Python", "SQL", "Power BI", "Excel",
  "Machine Learning", "Data Analytics",
  "Java", "JavaScript", "React", "Next.js",
  "Git", "GitHub"
];

// ==========================================
// 2. CUSTOM HOOKS
// ==========================================

function useCursorParallax(maxShift = 15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  const rawX = useSpring(0, { stiffness: 150, damping: 20, mass: 0.5 });
  const rawY = useSpring(0, { stiffness: 150, damping: 20, mass: 0.5 });

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      // Normalized coordinates between -1 and 1
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

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

  // Inverse tilt based on mouse position
  const tiltX = useTransform(rawY, (v) => v * -1.2);
  const tiltY = useTransform(rawX, (v) => v * 1.2);

  return { ref, tiltX, tiltY, rawX, rawY };
}

// ==========================================
// 3. BACKGROUND COMPONENTS
// ==========================================

function BackgroundMesh() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base Dark Layer */}
      <div className="absolute inset-0 bg-[#07090E]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-screen pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDIiIGhlaWdodD0iNDAyIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+')]"/>

      {/* Animated Glowing Aurora Blobs */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-primary)] blur-[140px] mix-blend-screen"
          animate={reducedMotion ? {} : {
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[10%] -right-[10%] w-[45%] h-[60%] rounded-full bg-[var(--color-secondary)] blur-[140px] mix-blend-screen opacity-70"
          animate={reducedMotion ? {} : {
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-[#1F4B8B] blur-[160px] mix-blend-screen opacity-50"
          animate={reducedMotion ? {} : {
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Glass Panels */}
      <div className="absolute bottom-[-10%] -left-[10%] w-[40%] h-[50%] bg-white/[0.01] border border-white/[0.05] rounded-[40px] backdrop-blur-[2px] transform -rotate-12 pointer-events-none" />
      <div className="absolute -top-[10%] right-[5%] w-[30%] h-[40%] bg-white/[0.01] border border-white/[0.05] rounded-[40px] backdrop-blur-[2px] transform rotate-6 pointer-events-none" />
    </div>
  );
}

// ==========================================
// 4. ANIMATED ROLE
// ==========================================

function DynamicRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[40px] md:h-[50px] overflow-hidden relative w-full mt-2">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ y: 40, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -40, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-start"
        >
          <span className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-text-secondary)] tracking-wide">
            {ROLES[index]}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ==========================================
// 5. FLOATING CARDS & RIGHT COLUMN
// ==========================================

function TechCard({ skill, index, total, rawX, rawY }: { skill: string; index: number; total: number; rawX: MotionValue<number>; rawY: MotionValue<number> }) {
  const reducedMotion = useReducedMotion();
  
  // Arrange in 2 concentric rings
  const isOuter = index >= total / 2;
  const localIndex = isOuter ? index - total / 2 : index;
  const localTotal = total / 2;
  
  const angle = (localIndex / localTotal) * Math.PI * 2;
  const radius = isOuter ? 250 : 160;
  
  // Base position
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  // Create a staggered z-depth based on index
  const z = (index % 3 - 1) * 60; // -60, 0, 60

  // Animation variants
  const floatAnimation = reducedMotion ? {} : {
    y: [y - 15, y + 15, y - 15],
    x: [x - 5, x + 5, x - 5],
    rotate: [0, 3, -3, 0],
    transition: {
      duration: 8 + (index % 4) * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.2
    } as any
  };

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        transformStyle: "preserve-3d",
        z: z, // Base static depth
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2 + index * 0.08, duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        animate={floatAnimation}
        style={{
          // Apply rawX and rawY with a multiplier based on depth to increase parallax effect
          x: useTransform(rawX, v => x + v * (isOuter ? 1.5 : 0.8)),
          y: useTransform(rawY, v => y + v * (isOuter ? 1.5 : 0.8)),
        }}
        className="relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] whitespace-nowrap overflow-hidden group hover:border-[var(--color-primary)]/50 hover:bg-white/[0.05] transition-colors duration-300"
      >
        <span className="relative z-10 text-xs sm:text-sm font-medium tracking-wide text-white/90 group-hover:text-white transition-colors">
          {skill}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      </motion.div>
    </motion.div>
  );
}

function InteractivePortrait({ tiltX, tiltY, rawX, rawY }: { tiltX: MotionValue<number>; tiltY: MotionValue<number>; rawX: MotionValue<number>; rawY: MotionValue<number> }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center perspective-[1200px]">
      
      {/* 3D Container */}
      <motion.div
        className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-[4/5] lg:aspect-square flex items-center justify-center"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        
        {/* Animated Gradient Ring Behind Image */}
        <motion.div
          className="absolute inset-0 -m-6 sm:-m-8 rounded-[40px] opacity-40 blur-[30px]"
          style={{ transform: "translateZ(-50px)" }}
          animate={reducedMotion ? {} : {
            background: [
              "conic-gradient(from 0deg, var(--color-primary), var(--color-secondary), var(--color-primary))",
              "conic-gradient(from 360deg, var(--color-primary), var(--color-secondary), var(--color-primary))"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Centerpiece Image Frame */}
        <div 
          className="relative w-[75%] sm:w-[70%] lg:w-[80%] aspect-[3/4] rounded-[32px] p-2 overflow-hidden shadow-2xl shadow-[var(--color-primary-muted)] group"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Glass border inner glow */}
          <div className="absolute inset-0 rounded-[32px] border border-white/20 bg-white/5 backdrop-blur-xl group-hover:bg-white/10 transition-colors duration-500" />
          
          <div className="relative w-full h-full rounded-[24px] overflow-hidden">
            <Image
              src="/images/profile/yash-profile.png.jpg"
              alt="Yash Prajapati"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            
            {/* Image Overlay lighting */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 opacity-60" />
            
            {/* Hover glare effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                x: useTransform(rawX, [-15, 15], ["-50%", "50%"]),
                y: useTransform(rawY, [-15, 15], ["-50%", "50%"])
              }}
            />
          </div>
        </div>

        {/* Orbiting Tech Cards */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block" style={{ transformStyle: "preserve-3d" }}>
          {SKILLS.map((skill, idx) => (
            <TechCard 
              key={skill} 
              skill={skill} 
              index={idx} 
              total={SKILLS.length} 
              rawX={rawX} 
              rawY={rawY} 
            />
          ))}
        </div>

      </motion.div>
    </div>
  );
}


// ==========================================
// 6. MAIN HERO COMPONENT
// ==========================================

export function Hero() {
  const { ref, tiltX, tiltY, rawX, rawY } = useCursorParallax(20);
  const reducedMotion = useReducedMotion();

  // Entrance animations config
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <Section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden pt-24 pb-16 lg:pt-0 lg:pb-0">
      
      {/* 1. Background Layers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <BackgroundMesh />
      </motion.div>

      <Container className="relative z-10 w-full h-full flex flex-col justify-center">
        
        {/* Parallax Container wrapping the grid */}
        <div 
          ref={ref} 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full min-h-[calc(100vh-8rem)]"
        >
          
          {/* LEFT COLUMN: Content */}
          <motion.div 
            className="flex flex-col items-start text-left max-w-2xl lg:col-span-5 xl:col-span-6 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[var(--color-primary-muted)] border border-[var(--color-primary)]/20 text-[var(--color-primary)] text-sm font-semibold tracking-widest uppercase shadow-[0_0_20px_rgba(94,234,212,0.15)]">
                Hello, I am
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="mb-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 drop-shadow-lg">
                YASH
                <br className="hidden sm:block" />
                <span className="sm:ml-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
                  PRAJAPATI
                </span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={itemVariants} className="w-full mb-6">
              <DynamicRole />
            </motion.div>

            {/* Value Prop & Description */}
            <motion.div variants={itemVariants} className="mb-10">
              <p className="text-lg md:text-xl font-medium text-white/90 mb-3 leading-relaxed">
                Building intelligent systems that turn messy signals into precise decisions.
              </p>
              <Text variant="muted" className="text-base md:text-lg max-w-lg leading-relaxed">
                Engineered for speed, accuracy, and undeniable business impact. I design and deploy end-to-end data pipelines and machine learning architectures.
              </Text>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
              <a
                href="#projects"
                className={buttonVariants({
                  variant: "primary",
                  size: "lg",
                  className: "group w-full sm:w-auto relative overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(94,234,212,0.25)] hover:shadow-[0_0_50px_rgba(94,234,212,0.4)]"
                })}
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  View My Work
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite] pointer-events-none" />
              </a>

              <a
                href="/resume.pdf"
                download
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "group w-full sm:w-auto backdrop-blur-md bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-[var(--color-primary)]/50 transition-all hover:scale-105"
                })}
              >
                <span className="flex items-center gap-2 font-semibold">
                  Download Resume
                  <Download className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
                </span>
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              {[
                { label: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/yash-prajapati" },
                { label: "GitHub", icon: FaGithub, href: "https://github.com/YashPrajapati989" },
                { label: "Email", icon: FaEnvelope, href: "mailto:yashprajapati@gmail.com" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/10 text-white/70 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(94,234,212,0.15)]"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Interactive Portrait */}
          <div className="w-full flex justify-center items-center h-full lg:col-span-7 xl:col-span-6 mt-12 lg:mt-0">
            <InteractivePortrait tiltX={tiltX} tiltY={tiltY} rawX={rawX} rawY={rawY} />
          </div>

        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-semibold hidden sm:block">Explore More</span>
        <motion.div 
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-11 sm:w-8 sm:h-12 rounded-full border border-white/20 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5 hover:border-white/40 transition-colors"
        >
          <motion.div className="w-1 h-2 sm:h-3 bg-[var(--color-primary)] rounded-full shadow-[0_0_10px_rgba(94,234,212,0.8)]" />
        </motion.div>
      </motion.div>

      {/* Global Shimmer Keyframe */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </Section>
  );
}
