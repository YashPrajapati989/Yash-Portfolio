# 💻 Coding Standards

**Project:** Yash Portfolio

**Version:** 1.0

---

# Purpose

This document defines the coding standards for the Yash Portfolio project.

The goal is to ensure that every file, component, function, and commit follows a consistent, maintainable, and production-ready style.

These standards apply to all contributors, including AI assistants.

---

# Core Principles

Every piece of code should be:

- Readable
- Maintainable
- Predictable
- Reusable
- Performant
- Accessible
- Well documented

Always optimize for clarity over cleverness.

---

# Language

Primary Language

- TypeScript

Never use JavaScript for application code.

---

# TypeScript Rules

Always use strict mode.

Never use:

```ts
any
```

Prefer:

```ts
unknown
```

or proper interfaces.

Use explicit return types for exported functions.

Use interfaces for object shapes.

Use type aliases where appropriate.

---

# File Naming

Use:

PascalCase

For:

```
HeroSection.tsx
Navbar.tsx
Button.tsx
```

Use:

camelCase

For:

```
formatDate.ts

calculateScore.ts

useScroll.ts
```

Use:

kebab-case

For folders.

Example

```
mission-archive/

engineering-process/
```

---

# Component Rules

Every component should:

Have one responsibility.

Be reusable.

Be easy to test.

Remain under approximately 200 lines whenever possible.

Split large components into smaller components.

---

# Component Structure

Example

```tsx
Imports

Types

Constants

Component

Helper Functions

Export
```

Maintain consistent ordering.

---

# Props

Always define props using interfaces.

Example

```ts
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}
```

Avoid inline prop types.

---

# Functions

Prefer small functions.

One function should perform one task.

Avoid nested logic.

Extract repeated logic into utilities.

---

# Hooks

Custom hooks belong inside:

```
hooks/
```

Feature-specific hooks belong inside:

```
features/<feature>/hooks/
```

Never place hooks inside utility folders.

---

# Constants

Store reusable values inside:

```
lib/constants/
```

Never hardcode repeated strings.

Example

```
SITE_NAME

SOCIAL_LINKS

NAV_ITEMS
```

---

# Utilities

Utility functions belong inside:

```
lib/utils/
```

Utilities must:

Be pure.

Avoid side effects.

Remain framework independent whenever possible.

---

# Imports

Import order:

1. React

2. Next.js

3. Third-party libraries

4. Internal aliases

5. Relative imports

6. Styles

Example

```tsx
import Link from "next/link";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import "./hero.css";
```

---

# Path Aliases

Always prefer:

```
@/components

@/features

@/hooks

@/lib

@/config

@/types
```

Avoid deep relative imports like:

```
../../../../../
```

---

# Styling

Use Tailwind CSS.

Avoid inline styles.

Extract repeated classes into reusable components when appropriate.

---

# Comments

Write comments only when necessary.

Good comments explain **why**, not **what**.

Avoid obvious comments.

Bad:

```ts
// Increment counter
counter++;
```

Good:

```ts
// Delay rendering until client hydration to avoid mismatch.
```

---

# Error Handling

Never ignore errors.

Provide meaningful error messages.

Handle loading, success, and failure states.

Fail gracefully.

---

# Accessibility

Every interactive element must include:

- Keyboard support
- Focus state
- Proper ARIA attributes
- Semantic HTML

Never use:

```html
<div onclick="...">
```

Prefer:

```html
<button>
```

---

# Performance

Avoid unnecessary re-renders.

Use:

- React.memo (only when beneficial)
- Dynamic imports
- Lazy loading
- Server Components

Optimize images.

Avoid unnecessary state.

---

# State Management

Preference order:

1. Local State

↓

2. URL State

↓

3. Context

↓

4. External libraries (only if required)

---

# Forms

Validate every input.

Never trust client-side data.

Provide clear validation messages.

---

# Environment Variables

Never hardcode:

API keys

Tokens

Secrets

Always use:

```
.env.local
```

Commit only:

```
.env.example
```

---

# Git Commit Convention

Use Conventional Commits.

Examples

```
feat(hero): add hero section

fix(nav): resolve mobile menu issue

docs(ai): update coding standards

refactor(button): simplify button variants

style(card): improve hover effect

test(hero): add unit tests
```

---

# Pull Requests

Every PR should include:

- Purpose
- Summary
- Testing notes
- Screenshots (if UI changes)
- Checklist

---

# Code Review Checklist

Before merging:

- TypeScript passes
- ESLint passes
- Responsive verified
- Accessibility checked
- No duplicated logic
- No unnecessary files
- Proper naming
- Clean imports
- Reusable code
- Documentation updated

---

# AI Rules

AI must:

- Explain architectural decisions.
- Avoid creating duplicate code.
- Reuse existing components.
- Suggest improvements.
- Ask before making assumptions.

AI must never:

- Disable linting.
- Ignore TypeScript errors.
- Introduce `any`.
- Change architecture without explanation.

---

# Definition of Done

A task is complete only if:

- Code works correctly.
- Tests pass (where applicable).
- TypeScript passes.
- ESLint passes.
- Responsive on all supported devices.
- Accessible.
- Performance reviewed.
- Documentation updated.
- Commit follows Conventional Commits.

---

# Final Principle

> Code is written once but read many times.

Always optimize for the next developer—including your future self.