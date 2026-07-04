# 🎬 Animation Guidelines

**Project:** Yash Portfolio

**Version:** 1.0

---

# Purpose

This document defines the animation philosophy, standards, and implementation guidelines for the Yash Portfolio.

Animations should enhance storytelling, guide attention, and improve the overall user experience without sacrificing performance or accessibility.

---

# Animation Philosophy

Animation exists to communicate.

Every animation must answer one question:

> "Why does this animation exist?"

If no meaningful answer exists, don't animate it.

---

# Core Principles

Animations should be:

- Purposeful
- Smooth
- Elegant
- Fast
- Consistent
- Accessible
- Performant

Avoid unnecessary visual effects.

---

# Animation Goals

Animations should help users:

- Understand navigation
- Focus attention
- Understand hierarchy
- Feel continuity
- Enjoy interactions

Never animate simply because it looks cool.

---

# Technology Stack

Primary

- GSAP

Secondary

- Framer Motion

Smooth Scrolling

- Lenis

3D Motion

- React Three Fiber
- Drei

---

# Library Responsibilities

## GSAP

Use for:

- Hero animations
- ScrollTrigger
- Timelines
- Complex sequences
- Text reveals

---

## Framer Motion

Use for:

- Component transitions
- Hover effects
- Cards
- Buttons
- Small interactions

---

## Lenis

Use for:

- Smooth scrolling
- Scroll synchronization

Never replace browser behavior unnecessarily.

---

## Three.js

Use only when it adds value.

Examples

- Genesis
- Hero Intelligence Core
- Interactive visualizations

Avoid decorative 3D objects.

---

# Motion Hierarchy

Page

↓

Section

↓

Component

↓

Microinteraction

Animations should follow this hierarchy.

---

# Animation Timing

Microinteraction

150–200ms

Hover

200–300ms

Card Reveal

300–500ms

Section Reveal

500–700ms

Hero Timeline

700–1200ms

Page Transition

700–1000ms

Never create unnecessarily long animations.

---

# Easing

Preferred

- easeOut
- easeInOut
- Power2
- Power3

Avoid:

- Linear
- Elastic (unless intentional)
- Bounce for professional UI

---

# Entrance Animations

Allowed

- Fade
- Slide
- Scale
- Blur reveal
- Clip-path reveal

Avoid excessive rotation or spinning.

---

# Exit Animations

Should feel natural.

Keep exits shorter than entrances.

---

# Scroll Animations

Use scroll to:

- Reveal content
- Trigger storytelling
- Create subtle depth

Avoid tying every element to scroll.

---

# Stagger Animations

Recommended delay:

50–100ms

Stagger groups, not entire pages.

---

# Hover Interactions

Allowed

- Elevation
- Glow
- Scale (subtle)
- Border highlight
- Shadow

Avoid:

- Large scaling
- Continuous movement
- Flashing

---

# Button Animations

Buttons should provide feedback through:

- Hover
- Active
- Focus
- Loading

Keep interactions subtle.

---

# Navigation

Navbar should:

- Appear smoothly
- Hide/reveal naturally
- Never jump

Mobile menu should:

- Fade
- Slide
- Lock background scroll

---

# Hero Section

Hero should create a memorable first impression.

Recommended sequence:

1. Background appears
2. Intelligence Core activates
3. Headline reveals
4. Subtitle fades in
5. CTA buttons appear
6. Scroll indicator animates

---

# Section Transitions

Sections should connect naturally.

Use:

- Fade
- Translate
- Opacity
- Mask reveal

Avoid abrupt cuts.

---

# Microinteractions

Apply to:

- Links
- Buttons
- Cards
- Icons
- Navigation
- Form fields

These interactions should feel responsive, not distracting.

---

# 3D Motion

3D scenes should:

- Load lazily
- Maintain 60 FPS
- Pause when off-screen
- Respect reduced motion preferences

Never block page interaction.

---

# Performance Guidelines

Target:

- 60 FPS
- No layout shifts
- GPU-accelerated transforms

Animate:

- transform
- opacity

Avoid animating:

- width
- height
- top
- left
- margin

---

# Accessibility

Respect:

prefers-reduced-motion

Provide alternatives for users who disable animations.

Critical information must never rely solely on animation.

---

# Loading Animations

Use:

- Skeleton screens
- Progressive reveals
- Soft fade-ins

Avoid long loading sequences.

---

# Animation Documentation

Complex animations should include:

- Purpose
- Trigger
- Duration
- Library used
- Performance considerations

Document them in `docs/` if needed.

---

# Review Checklist

Before approving an animation:

- Purpose is clear
- Smooth at 60 FPS
- Accessible
- Doesn't block interaction
- Doesn't cause layout shifts
- Responsive
- Uses the appropriate library
- Consistent with design system

---

# Anti-Patterns

Avoid:

❌ Animating everything on scroll

❌ Excessive parallax

❌ Infinite decorative animations

❌ Flashing elements

❌ Long delays

❌ Large rotations

❌ Motion without purpose

---

# Final Principle

> Great motion is almost invisible.

Users should remember how smooth and intuitive the experience felt—not the animation itself.