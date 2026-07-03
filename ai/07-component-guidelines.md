# 🧩 Component Guidelines

**Project:** Yash Portfolio

**Version:** 1.0

---

# Purpose

This document defines the standards for creating, organizing, and maintaining React components throughout the project.

The goal is to build a reusable, scalable, and maintainable component library.

---

# Philosophy

A component should do one thing and do it well.

Components should be:

- Reusable
- Predictable
- Accessible
- Easy to maintain
- Easy to test
- Small and focused

If a component tries to solve multiple unrelated problems, split it.

---

# Component Hierarchy

```
Page

↓

Feature

↓

Section

↓

Reusable Component

↓

UI Primitive
```

Example

```
Home Page

↓

Hero Feature

↓

Hero Content

↓

Button

↓

Icon
```

---

# Folder Structure

Every feature should organize components like this:

```
features/

hero/

components/

Hero.tsx

HeroTitle.tsx

HeroCTA.tsx

HeroBackground.tsx

HeroStats.tsx
```

Reusable components belong inside:

```
components/
```

Never duplicate components across features.

---

# Component Categories

## UI Components

Generic building blocks.

Examples

- Button
- Card
- Badge
- Avatar
- Dialog
- Tooltip

---

## Layout Components

Responsible for positioning.

Examples

- Container
- Section
- Grid
- Stack
- Wrapper

---

## Shared Components

Used across multiple features.

Examples

- Navbar
- Footer
- ThemeToggle
- SocialLinks

---

## Feature Components

Only used inside one feature.

Examples

```
HeroBackground

ExplorerTimeline

MissionCard

JourneyNode
```

---

# Naming Convention

Use PascalCase.

Good

```
HeroCard.tsx

ProjectGrid.tsx

AnimatedHeading.tsx
```

Bad

```
hero.tsx

card.tsx

new.tsx
```

Names should clearly describe the component's purpose.

---

# Component Size

Recommended limits:

- Small: <100 lines
- Medium: 100–200 lines
- Large: 200–300 lines

If a component exceeds ~300 lines, evaluate whether it should be split.

---

# Component Template

```tsx
// Imports

// Types

// Constants

// Component

// Helper functions (if needed)

export default Component;
```

Keep a consistent order across all files.

---

# Props

Always use interfaces.

Example

```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}
```

Never use inline object types for complex props.

---

# Children

Prefer composition over excessive props.

Good

```tsx
<Card>
  <CardHeader />
  <CardContent />
</Card>
```

Avoid giant prop objects when composition is cleaner.

---

# State

Keep state as close as possible to where it is used.

Avoid unnecessary global state.

Lift state only when multiple components genuinely need it.

---

# Styling

Use Tailwind CSS.

Do not use inline styles unless absolutely necessary.

Prefer reusable utility classes and variants.

---

# Variants

When a component has multiple visual styles, use variants.

Example

```
Button

↓

Primary

Secondary

Outline

Ghost

Danger
```

Avoid creating separate components for minor visual differences.

---

# Accessibility

Every interactive component must support:

- Keyboard navigation
- Visible focus state
- Screen readers
- Semantic HTML
- ARIA attributes where necessary

Buttons should always use `<button>` unless a different semantic element is required.

---

# Animation

Animation should be optional.

Do not tightly couple components to animation libraries.

Wrap animated behavior where possible instead of embedding it everywhere.

---

# Error Handling

Components should gracefully handle:

- Empty states
- Missing data
- Loading states
- Error states

Never assume data always exists.

---

# Performance

Avoid unnecessary re-renders.

Use memoization only when it provides measurable benefit.

Lazy-load heavy components when appropriate.

---

# Reusability Checklist

Before creating a new component, ask:

- Does this already exist?
- Can an existing component be extended?
- Can I compose existing components?

Reuse before creating.

---

# Documentation

Complex reusable components should include:

- Purpose
- Props
- Usage example
- Notes

This can be added through Storybook or Markdown documentation in the future.

---

# Testing

Reusable components should be testable.

Focus on:

- Rendering
- User interaction
- Accessibility
- Edge cases

---

# Review Checklist

Before merging a new component:

- Single responsibility
- Proper naming
- Accessible
- Responsive
- Reusable
- Typed with TypeScript
- No duplicated logic
- Performance considered
- Documentation updated (if needed)

---

# Example Component Tree

```
Hero

├── HeroBackground
├── HeroContent
│   ├── HeroTitle
│   ├── HeroSubtitle
│   └── HeroCTA
├── HeroStats
└── HeroScrollIndicator
```

This keeps each file focused and easy to maintain.

---

# Final Principle

> Components are the building blocks of the application.

A well-designed component should be easy to understand, easy to reuse, and easy to replace without affecting the rest of the system.