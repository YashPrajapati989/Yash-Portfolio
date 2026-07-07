# TODO — Award-winning Yash Portfolio redesign

## Milestone 1 — IA wiring + remove Toolbox
- [ ] Remove `Toolbox` lazy-loaded section from `app/page.tsx`.
- [ ] Ensure page includes exactly: Home, About, Education, Skills, Experience, Projects, Contact.
- [ ] Verify/align section IDs with navbar items (`#home`, `#about`, `#skills`, `#projects`, `#experience`, `#contact`).

## Milestone 2 — Premium Navbar + logo
- [ ] Redesign `components/ui/Logo.tsx` (remove current “YP” monogram; make premium personal logo w/ subtle animation).
- [ ] Update `components/layout/Navbar.tsx` + `components/layout/Navigation.tsx` to: floating glass, backdrop blur, animated active indicator, shrink on scroll.

## Milestone 3 — Cinematic Hero + Three.js intelligence scene
- [ ] Replace placeholder avatar in `features/hero/components/Hero.tsx` with the professional image (use correct asset path).
- [ ] Implement required hero visuals: neural network, particles, glowing rings, rotating gradient sphere, subtle 3D bg, moving light effects.
- [ ] Add Three.js / React Three Fiber scene (lazy-loaded + reduced-motion safe).
- [ ] Replace role UI with typing-effect cycling through: Data Analyst, AI Engineer, Machine Learning Enthusiast, SQL Developer.
- [ ] Implement magnetic buttons + deeper mouse parallax for hero.

## Milestone 4 — Skills ecosystem (replace Toolbox completely)
- [ ] Replace current toolbox-based skills section with interactive skill ecosystem/galaxy.
- [ ] Use exact skill list: Python, SQL, Power BI, Tableau, Excel, Machine Learning, Deep Learning, TensorFlow, Scikit-learn, Pandas, NumPy, Git, GitHub, Next.js, React, TypeScript, Tailwind CSS.
- [ ] Hover reveals proficiency + projects + experience.

## Milestone 5 — Education + Projects + Experience + Contact
- [ ] Build Education: interactive vertical timeline with milestones + institution logos.
- [ ] Projects: premium showcase with laptop/mobile mockups, previews, 3D hover, GitHub + Live Demo buttons.
- [ ] Experience: timeline with animated cards, metrics.
- [ ] Contact: premium glass form, animated send button, success animation, map.

## Milestone 6 — Motion, scrolling, and performance
- [ ] Add Lenis smooth scrolling integration (and ensure it coexists with Framer GSAP).
- [ ] Add GSAP + ScrollTrigger reveal animations per section.
- [ ] Ensure Framer Motion page transitions.
- [ ] Lighthouse tuning to target 95+.

## Milestone 7 — Git workflow
- [ ] Create branch `blackboxai/milestone-1-ia` for Milestone 1 and push after completion.
- [ ] Continue with branches per milestone using the existing workflow.

