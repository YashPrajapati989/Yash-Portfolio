# 🏗️ Software Architecture

**Project Name:** Yash Portfolio

**Version:** 1.0

---

# Purpose

This document defines the software architecture of the Yash Portfolio project.

Every new feature, component, page, and service must follow these architectural principles.

The primary goals are:

- Scalability
- Maintainability
- Reusability
- Performance
- Simplicity

---

# Architecture Philosophy

The application follows a modular, feature-driven architecture.

Instead of organizing by file type alone, the project is organized by responsibility.

Every folder should have a single responsibility.

---

# Project Structure

```
Yash-Portfolio/
│
├── .ai/
├── .github/
├── app/
├── assets/
├── components/
├── config/
├── content/
├── contexts/
├── data/
├── docs/
├── features/
├── hooks/
├── lib/
├── providers/
├── public/
├── scripts/
├── services/
├── styles/
├── tests/
└── types/
```

---

# Folder Responsibilities

## app/

Contains Next.js App Router.

Responsibilities:

- Layout
- Routing
- Metadata
- Loading UI
- Error pages
- API routes

Never place business logic here.

---

## components/

Contains reusable UI components.

Examples:

- Button
- Card
- Section Title
- Navigation
- Footer
- Modal

These components should not contain business logic.

---

## features/

Contains feature-specific logic.

Example:

```
features/

hero/

components/

hooks/

types/

utils/

constants/
```

Every major feature owns its implementation.

---

## lib/

Reusable helper code.

Examples:

- Utility functions
- Constants
- SEO helpers
- Animation helpers
- Validation

No React components belong here.

---

## hooks/

Reusable React hooks.

Examples:

- useScroll()
- useTheme()
- useMouse()
- useLenis()

Hooks should remain independent.

---

## providers/

Global Providers.

Examples:

Theme Provider

Analytics Provider

Lenis Provider

Future global providers belong here.

---

## config/

Centralized configuration.

Examples:

Navigation

Site Metadata

Social Links

SEO

Animations

Avoid hardcoding configuration.

---

## services/

Responsible for external communication.

Examples:

GitHub API

Contact API

Analytics

Future CMS

Services should never contain UI.

---

## data/

Static TypeScript data.

Examples:

Projects

Skills

Timeline

Social Links

---

## content/

Markdown or MDX content.

Examples:

Projects

Case Studies

Blog

Articles

---

## public/

Static assets served by Next.js.

Examples:

Images

Videos

Models

Robots

Favicons

Never import business logic here.

---

## styles/

Global CSS.

Theme variables.

Animations.

Tailwind overrides.

---

## tests/

All automated tests.

Examples:

Component Tests

Integration Tests

Future E2E Tests

---

# Feature Architecture

Each feature should remain self-contained.

Example

```
hero/

components/

hooks/

constants/

types/

utils/

animations/
```

Never mix Hero logic with Contact logic.

---

# Component Architecture

Every component should have one responsibility.

Bad

Hero.tsx

(900 lines)

Good

Hero

↓

HeroContent

↓

HeroBackground

↓

HeroButtons

↓

HeroAnimation

↓

HeroStats

Small components are easier to maintain.

---

# Rendering Strategy

Prefer Server Components.

Use Client Components only when necessary.

Use "use client" only if required.

Examples

Need state

Need animation

Need browser APIs

Otherwise remain Server Components.

---

# State Management

Priority

1. Local State

↓

2. URL State

↓

3. Context

↓

4. External Library (only if required)

Avoid unnecessary global state.

---

# Data Flow

```
Configuration

↓

Content

↓

Feature Logic

↓

UI Components

↓

Page
```

The flow should remain one-directional.

---

# Dependency Rules

Allowed

Page

↓

Feature

↓

Component

↓

Utility

Not Allowed

Utility

↓

Feature

Component

↓

Page

Avoid circular dependencies.

---

# Naming Conventions

Components

PascalCase

```
HeroCard.tsx
```

Hooks

camelCase

```
useScroll.ts
```

Utilities

camelCase

```
formatDate.ts
```

Constants

UPPER_CASE

```
SITE_NAME
```

Folders

kebab-case

```
mission-archive/
```

---

# Import Order

1.

React

2.

Next.js

3.

Third-party libraries

4.

Internal aliases

5.

Relative imports

6.

CSS

Keep imports consistent.

---

# Path Aliases

Prefer

```
@/components

@/features

@/lib

@/hooks

@/config

@/types
```

Avoid deep relative imports.

---

# Error Handling

Never silently ignore errors.

Provide meaningful messages.

Log useful information.

Fail gracefully.

---

# Performance Guidelines

Lazy load:

3D

Heavy animations

Videos

Large components

Dynamic import where appropriate.

---

# Security

Never expose secrets.

Never commit API keys.

Use environment variables.

Validate all user input.

---

# Scalability

The project should support future additions:

Blog

CMS

Admin Dashboard

API

Dark/Light themes

Multiple languages

Without major restructuring.

---

# Architecture Decision Records

Whenever architecture changes:

Create a new ADR.

Example

```
docs/

adr/

001-use-nextjs.md

002-use-tailwind.md

003-use-r3f.md
```

Every major decision should be documented.

---

# Architecture Checklist

Before merging code verify:

✓ Correct folder

✓ Correct naming

✓ No duplicated logic

✓ Reusable component

✓ Performance considered

✓ Accessibility considered

✓ Documentation updated

✓ TypeScript passes

✓ ESLint passes

---

# Final Principle

Architecture should make future development easier, not more complicated.

If adding a feature feels difficult, improve the architecture before adding more code.