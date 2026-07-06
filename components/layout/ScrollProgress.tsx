"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Apply a spring physics smoothing to the scroll value
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[calc(var(--z-navbar)+1)] bg-[var(--color-primary)] origin-left"
      style={{ scaleX }}
    />
  );
}
