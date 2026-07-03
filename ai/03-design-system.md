# 🎨 Design System

**Project:** Yash Portfolio

**Version:** 1.0

---

# Purpose

This document defines the visual language of the Yash Portfolio.

Every interface, animation, component, and interaction must follow this design system.

The goal is consistency, scalability, accessibility, and a premium user experience.

---

# Design Philosophy

Design should communicate confidence through simplicity.

The interface should feel:

- Premium
- Modern
- Calm
- Intelligent
- Minimal
- Editorial
- Purposeful

Never design purely for decoration.

Every visual element must support the user experience.

---

# Design Principles

## Simplicity

Remove unnecessary complexity.

---

## Consistency

The same interaction should behave the same everywhere.

---

## Readability

Typography should always be easy to read.

---

## Balance

Use whitespace generously.

---

## Motion With Purpose

Animations should explain, not distract.

---

## Accessibility First

Beauty should never reduce usability.

---

# Color System

## Primary Background

```css
#09090B
```

---

## Secondary Background

```css
#111827
```

---

## Surface

```css
#18181B
```

---

## Glass Surface

```css
rgba(255,255,255,0.05)
```

---

## Border

```css
rgba(255,255,255,0.08)
```

---

## Primary Accent

Electric Blue

```css
#3B82F6
```

---

## Secondary Accent

Soft Cyan

```css
#22D3EE
```

---

## Highlight

Soft Violet

```css
#8B5CF6
```

---

## Success

```css
#22C55E
```

---

## Warning

```css
#FACC15
```

---

## Error

```css
#EF4444
```

---

# Typography

Primary Font

Geist

Fallback

Inter

Monospace

JetBrains Mono

---

# Font Scale

Hero

64px

Section Heading

48px

Sub Heading

32px

Card Title

24px

Body

18px

Small Text

16px

Caption

14px

---

# Font Weight

Regular

400

Medium

500

SemiBold

600

Bold

700

---

# Line Height

Heading

110%

Body

160%

Caption

150%

---

# Spacing System

Use an 8-point grid.

Allowed spacing values:

```
4
8
16
24
32
40
48
64
80
96
128
160
```

Avoid arbitrary spacing values.

---

# Border Radius

Small

12px

Medium

16px

Large

24px

Extra Large

32px

---

# Shadows

Cards

Soft shadow

Floating Elements

Medium shadow

Modals

Large shadow

Avoid harsh shadows.

---

# Glassmorphism

Opacity

5–10%

Blur

20–40px

Thin border

Subtle reflection

Never overuse glass effects.

---

# Grid System

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Maintain consistent gutters.

---

# Breakpoints

Mobile

<640px

Tablet

640–1024px

Laptop

1024–1440px

Desktop

1440px+

Ultra Wide

1920px+

---

# Buttons

Every button has:

Default

Hover

Active

Focus

Disabled

Loading

Avoid inconsistent button styles.

---

# Cards

Cards should contain:

Title

Description

Optional icon

Optional action

Soft shadow

Rounded corners

Glass surface

Hover interaction

---

# Icons

Use:

Lucide React

Icon Size

16

20

24

32

Maintain consistent stroke width.

---

# Motion Language

Animations should be:

Slow

Elegant

Smooth

Purposeful

Never abrupt.

---

# Motion Duration

Fast

150ms

Normal

300ms

Slow

500ms

Page Transition

700–1000ms

---

# Easing

Use natural easing.

Avoid linear animations.

---

# Hover Effects

Allowed:

Scale

Glow

Elevation

Border highlight

Subtle rotation

Avoid excessive movement.

---

# Scroll Behavior

Smooth scrolling.

Subtle parallax.

Fade-ins.

Section transitions.

Never create motion sickness.

---

# 3D Guidelines

Use Three.js only where meaningful.

Preferred uses:

Genesis

Hero

Project Highlights

Do not create decorative 3D objects without purpose.

---

# Imagery

Avoid stock photos.

Prefer:

Illustrations

Abstract geometry

3D objects

Blueprint graphics

Minimal technical visuals

---

# Accessibility

Minimum contrast ratio:

4.5:1

Support keyboard navigation.

Visible focus states.

Reduced motion preference.

Semantic HTML.

---

# Component States

Every interactive component should support:

Default

Hover

Focus

Pressed

Disabled

Loading

Error

Success

---

# Microinteractions

Use subtle feedback for:

Buttons

Links

Navigation

Cards

Forms

Scrolling

Microinteractions should feel responsive.

---

# Responsive Design

Design mobile-first.

Avoid hiding important content.

Layouts should adapt naturally.

---

# Empty States

Every empty state should:

Explain why it's empty.

Suggest the next action.

Maintain visual consistency.

---

# Loading States

Avoid generic spinners.

Prefer:

Skeletons

Progressive reveal

Content placeholders

Genesis animation

---

# Error States

Errors should:

Explain the problem.

Suggest a solution.

Remain visually calm.

---

# Animation Performance

Target:

60 FPS

Avoid layout thrashing.

Prefer transform and opacity.

Use GPU-friendly animations.

---

# Design Review Checklist

Before approving any screen:

- Consistent spacing
- Correct typography
- Accessible contrast
- Responsive layout
- Reusable components
- Clear hierarchy
- Smooth interactions
- Performance considered
- Motion has purpose
- Matches project identity

---

# Final Principle

A beautiful interface is not one with the most effects.

A beautiful interface is one where every detail feels intentional.