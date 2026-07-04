# 🌳 Git Workflow

**Project:** Yash Portfolio

**Version:** 1.0

---

# Purpose

This document defines the Git workflow used throughout the project.

Every feature, bug fix, documentation update, and refactor must follow this workflow.

The objective is to maintain a clean Git history, encourage small and focused changes, and simulate a professional software development process.

---

# Git Philosophy

Git is more than version control.

It documents the evolution of the project.

A clean commit history should tell the story of how the portfolio was built.

Every commit should have a clear purpose.

---

# Branch Strategy

The repository follows a simplified Git Flow model.

```
main
│
└── develop
    │
    ├── feature/project-setup
    ├── feature/design-system
    ├── feature/genesis
    ├── feature/navbar
    ├── feature/hero
    ├── feature/explorer
    ├── feature/toolbox
    ├── feature/journey
    ├── feature/mission-archive
    ├── feature/engineering-process
    ├── feature/achievements
    ├── feature/contact
    ├── feature/footer
    ├── feature/mobile
    ├── feature/seo
    ├── feature/performance
    └── feature/blog
```

---

# Branch Responsibilities

## main

Production-ready code only.

Never commit directly.

Protected branch.

---

## develop

Integration branch.

Every completed feature merges here first.

---

## feature/*

One feature per branch.

Examples:

```
feature/hero

feature/contact

feature/navbar
```

Never mix multiple features.

---

## fix/*

Bug fixes only.

Examples:

```
fix/mobile-navbar

fix/hero-animation
```

---

## docs/*

Documentation only.

Examples

```
docs/readme

docs/design-system
```

---

## refactor/*

Architecture improvements without changing functionality.

Example

```
refactor/navigation
```

---

## chore/*

Maintenance work.

Examples

```
chore/eslint

chore/dependencies

chore/github-actions
```

---

# Feature Development Workflow

```
develop

↓

Create feature branch

↓

Implement feature

↓

Commit changes

↓

Push branch

↓

Open Pull Request

↓

Review

↓

Merge into develop

↓

Delete feature branch
```

---

# Creating a Feature

```
git checkout develop

git pull origin develop

git checkout -b feature/hero
```

---

# Keeping Feature Branch Updated

```
git checkout develop

git pull

git checkout feature/hero

git merge develop
```

---

# Commit Strategy

Commit frequently.

Small commits.

Logical commits.

Avoid giant commits.

---

# Conventional Commits

Always follow:

```
type(scope): description
```

---

## feat

New feature.

```
feat(hero): create hero layout
```

---

## fix

Bug fix.

```
fix(nav): resolve mobile menu issue
```

---

## docs

Documentation.

```
docs(ai): add architecture guide
```

---

## style

Formatting only.

```
style(button): improve spacing
```

---

## refactor

Improve code without changing behavior.

```
refactor(layout): simplify root layout
```

---

## perf

Performance improvements.

```
perf(hero): lazy load 3D scene
```

---

## test

Testing.

```
test(contact): add validation tests
```

---

## chore

Maintenance.

```
chore(deps): update dependencies
```

---

# Pull Requests

Every feature should have its own Pull Request.

Template:

## Summary

Explain what changed.

---

## Why

Explain why the change was needed.

---

## Screenshots

If UI changed.

---

## Testing

Describe how it was tested.

---

## Checklist

- Code reviewed
- ESLint passes
- TypeScript passes
- Responsive
- Accessible
- Documentation updated

---

# Merge Strategy

Use:

```
Squash and Merge
```

Reason:

Cleaner Git history.

One commit represents one completed feature.

---

# Branch Protection

Protect:

main

Rules:

- Require Pull Request
- Prevent direct pushes
- Require passing checks
- Require up-to-date branch before merge

---

# Release Workflow

```
feature/*

↓

develop

↓

Testing

↓

main

↓

Production
```

---

# GitHub Issues

Every task should begin with an Issue.

Example:

```
#12 Build Hero Section
```

Issue includes:

- Description
- Acceptance Criteria
- References
- Labels
- Milestone

---

# Labels

Recommended labels:

- feature
- bug
- enhancement
- documentation
- accessibility
- performance
- design
- testing
- refactor
- good first issue

---

# Milestones

Milestone 1

Project Setup

---

Milestone 2

Design System

---

Milestone 3

Genesis

---

Milestone 4

Hero

---

Milestone 5

Explorer

---

Milestone 6

Toolbox

---

Milestone 7

Journey

---

Milestone 8

Mission Archive

---

Milestone 9

Engineering Process

---

Milestone 10

Achievements

---

Milestone 11

Contact

---

Milestone 12

Launch

---

# GitHub Project Board

Suggested columns:

```
Backlog

↓

Ready

↓

In Progress

↓

Review

↓

Testing

↓

Done
```

---

# Code Review Checklist

Before merging:

- Feature complete
- No TypeScript errors
- No ESLint errors
- Responsive
- Accessible
- No duplicated code
- Uses existing components
- Performance reviewed
- Documentation updated

---

# Commit Frequency

Prefer:

5–15 meaningful commits per feature.

Avoid:

One huge commit containing everything.

---

# Commit Messages

Good:

```
feat(hero): add animated introduction

fix(contact): validate email input

docs(git): update branching strategy
```

Bad:

```
update

changes

fix

final

done
```

---

# Repository Hygiene

Delete merged feature branches.

Keep README updated.

Keep documentation synchronized.

Review stale Issues regularly.

---

# Definition of Done

A branch is complete when:

- Feature works as expected.
- Pull Request approved.
- Checks pass.
- Documentation updated.
- Merged into develop.
- Branch deleted.

---

# Final Principle

> Git is the story of the project.

Every branch, commit, and Pull Request should help future contributors understand how and why the project evolved.