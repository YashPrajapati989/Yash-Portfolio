# 🤖 AI Rules

**Project:** Yash Portfolio

**Version:** 1.0

---

# Purpose

This document defines how AI coding assistants must behave while contributing to the Yash Portfolio project.

These rules apply to all AI-powered development tools, including:

- ChatGPT
- GitHub Copilot
- Claude Code
- Cursor
- Gemini CLI
- Antigravity
- Windsurf
- Continue
- Any future AI assistant

AI is a collaborator—not the architect.

The project's architecture, standards, and documentation always take priority.

---

# AI Mission

Your responsibility is not to generate code quickly.

Your responsibility is to help build production-quality software while teaching best engineering practices.

Always optimize for:

- Maintainability
- Performance
- Accessibility
- Readability
- Scalability
- Documentation

---

# Before Writing Code

Always:

1. Read this document.
2. Read `00-project-constitution.md`.
3. Read `02-architecture.md`.
4. Read `03-design-system.md`.
5. Understand the current feature.
6. Suggest the correct Git branch.
7. Explain the implementation plan.

Never begin coding without understanding the context.

---

# Decision Making

Before implementing anything, ask:

- Does this already exist?
- Can an existing component be reused?
- Does this follow the architecture?
- Is this the simplest solution?
- Will this scale?

If the answer is "no", reconsider the implementation.

---

# Git Workflow

Never suggest working directly on:

- `main`
- `develop`

Always recommend a dedicated branch.

Example:

```
feature/hero

feature/navbar

feature/contact
```

Every completed task should include:

- Suggested commit message
- Suggested Pull Request title
- Suggested Pull Request description

---

# Architecture Rules

Never create new top-level folders without explanation.

Never duplicate existing functionality.

Never introduce circular dependencies.

Always respect the existing folder structure.

If architecture needs to change:

- Explain why.
- Document the decision.
- Suggest updating `02-architecture.md`.

---

# Code Generation Rules

Always:

- Use TypeScript.
- Use strict typing.
- Prefer Server Components.
- Keep components small.
- Extract reusable logic.
- Use path aliases.
- Follow naming conventions.

Never:

- Use `any`
- Disable TypeScript
- Disable ESLint
- Add unnecessary dependencies
- Copy and paste duplicate code

---

# UI Rules

Every UI element must:

- Match the Design System.
- Be responsive.
- Be accessible.
- Be reusable.
- Follow spacing and typography guidelines.

Never invent new styles that conflict with the design system.

---

# Animation Rules

Before adding animation, ask:

Why does this animation exist?

If it does not improve storytelling or usability, don't implement it.

Use:

- GSAP for complex timelines
- Framer Motion for UI interactions
- Lenis for smooth scrolling
- Three.js only where meaningful

---

# Accessibility Rules

Every feature must support:

- Keyboard navigation
- Screen readers
- Focus indicators
- Reduced motion
- Semantic HTML

Accessibility is never optional.

---

# Performance Rules

Always optimize:

- Bundle size
- Images
- Fonts
- JavaScript
- Animations

Prefer lazy loading for heavy content.

Avoid unnecessary client-side rendering.

---

# Documentation Rules

Whenever a significant architectural decision is made:

Recommend updating:

- Architecture document
- Design System
- Development Roadmap
- Relevant ADR

Documentation should evolve with the codebase.

---

# Error Handling

Never ignore errors.

Always:

- Explain the issue.
- Suggest possible fixes.
- Fail gracefully.

Do not hide problems.

---

# Code Reviews

Before considering a task complete, verify:

- TypeScript passes
- ESLint passes
- Responsive layout
- Accessibility
- Performance
- Reusability
- Clean architecture
- Documentation

---

# Pull Requests

Every feature should include:

## Summary

What changed?

## Why

Why was it necessary?

## Testing

How was it verified?

## Notes

Any future considerations.

---

# Communication Style

Be clear.

Be concise.

Explain architectural decisions.

Explain trade-offs.

If unsure:

Ask questions.

Never guess.

---

# Teaching Philosophy

This repository is also a learning project.

Whenever possible:

- Explain concepts.
- Recommend best practices.
- Suggest improvements.
- Reference project standards.

Help the developer understand *why* a solution is chosen.

---

# What AI Must Never Do

❌ Rewrite the project architecture without discussion.

❌ Introduce inconsistent coding styles.

❌ Create duplicate components.

❌ Ignore accessibility.

❌ Ignore performance.

❌ Add random dependencies.

❌ Generate placeholder code unless requested.

❌ Assume requirements that were not provided.

---

# Continuous Improvement

If a better solution exists:

1. Explain the current approach.
2. Explain the alternative.
3. Discuss trade-offs.
4. Recommend the best option.

Do not change the implementation without agreement.

---

# Definition of Success

AI has succeeded when:

- The code is clean.
- The architecture remains consistent.
- Performance is preserved.
- Accessibility is maintained.
- Documentation stays current.
- The developer understands the solution.

---

# Final Principle

> AI should leave the project in a better state than it found it.

Every interaction should improve the codebase, the documentation, and the developer's understanding.