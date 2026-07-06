import type { Variants, Transition } from "framer-motion";

/** Default spring transition for smooth, natural motion */
export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

/** Default ease transition */
export const easeTransition: Transition = {
  duration: 0.3,
  ease: [0.25, 0.1, 0.25, 1],
};

/** Fade in from below — used for section entrances */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Fade in — used for overlays and modals */
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

/** Slide in from the right — used for mobile menu */
export const slideInRightVariants: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Stagger container — staggers children animations */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Individual stagger child */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Scale in — for icon transitions */
export const scaleVariants: Variants = {
  initial: { scale: 0, rotate: -90, opacity: 0 },
  animate: { scale: 1, rotate: 0, opacity: 1, transition: { duration: 0.2 } },
  exit: { scale: 0, rotate: 90, opacity: 0, transition: { duration: 0.15 } },
};

/** Navbar animation — slides down from top */
export const navbarVariants: Variants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};
