"use client";

import { useState, useEffect } from "react";

/**
 * Returns true when the window has been scrolled past a given threshold.
 * Used by Navbar to switch from transparent to blurred glass background.
 *
 * @param threshold - scroll Y pixel offset (default: 20)
 */
export function useScrolled(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Initialise from current scroll position (avoids stale state on mount)
    setScrolled(window.scrollY > threshold);

    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
