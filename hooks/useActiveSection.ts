"use client";

import { useState, useEffect } from "react";

/**
 * Tracks which section is currently in the viewport using IntersectionObserver.
 * Returns the `id` string of the active section, or null if none matches.
 *
 * @param sectionIds - ordered array of section HTML ids to observe
 * @param rootMargin - IntersectionObserver rootMargin (default accounts for navbar)
 */
export function useActiveSection(
  sectionIds: string[],
  rootMargin = "-80px 0px -40% 0px"
): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
}
