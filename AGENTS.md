<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Somewhere In Progress — Agent Context

## Project Overview

Somewhere In Progress is an artistic interactive personal website built using:
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Bun

This is NOT a traditional portfolio or resume website.

The project focuses on:
- storytelling
- atmosphere
- cinematic interaction
- emotional design
- experimentation
- immersive layouts
- artistic engineering

The website should feel like:
"an interactive cinematic journal from a curious creative technologist."

---

# Development Philosophy

The project prioritizes:
- fast iteration
- experimentation
- enjoyable development
- progressive refinement
- learning through building

Do not over-engineer early.

The workflow should encourage:
- building
- testing
- redesigning
- refactoring
- experimentation

Momentum is more important than perfection.

---

# Core Technical Stack

## Framework
Next.js App Router

## Language
TypeScript

## Styling
Tailwind CSS

## Animation
Framer Motion

## Package Manager
Bun

---

# Architecture Rules

## Component Structure

Components should:
- remain modular
- stay reusable
- remain isolated
- support future animation systems

Avoid:
- giant monolithic components
- deeply nested logic
- duplicated layouts
- hardcoded styles

---

# Folder Structure

Preferred structure:

src/
├── app/
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   ├── motion/
│   ├── effects/
│   ├── typography/
│   └── ui/
├── content/
├── styles/
├── hooks/
├── utils/
├── lib/
├── constants/
└── types/

---

# Styling Rules

## Styling Philosophy

Prefer:
- clean composition
- readable layouts
- centralized systems
- reusable utility patterns

Avoid:
- inline magic values
- duplicated utility chains
- random spacing decisions
- inconsistent typography

---

# Design Token Centralization

Centralize:
- colors
- spacing
- motion
- typography
- shadows
- layout sizing

Future changes should be easy to apply globally.

---

# Motion Rules

Motion should:
- support storytelling
- guide attention
- feel atmospheric
- remain smooth and restrained

Avoid:
- excessive animation noise
- aggressive motion everywhere
- unnecessary looping animations

Build static layouts first.
Add motion later.

---

# Performance Rules

Prioritize:
- optimized images
- lazy loading where needed
- maintainable animations
- minimal unnecessary re-renders
- scalable component patterns

Avoid:
- heavy unoptimized effects early
- unnecessary client-side rendering
- animation overload

---

# Content Philosophy

The website should feel personal and expressive.

Content should communicate:
- curiosity
- creativity
- ambition
- humanity
- experimentation
- storytelling

Avoid generic resume-style wording.

Projects should feel like experiences, not cards.

---

# Hero Section Direction

The homepage hero should:
- use cinematic imagery or video
- contain expressive large typography
- support atmospheric overlays
- establish emotional tone immediately

Hero layouts should prioritize:
- composition
- layering
- typography hierarchy
- immersive visuals

---

# Interaction Direction

Potential future systems:
- interactive cursor
- smooth scrolling
- parallax
- floating overlays
- motion-triggered typography
- horizontal storytelling sections
- shader effects
- AI assistant
- 3D hover systems

Do not implement all systems immediately.

Introduce systems progressively.

---

# Code Style Rules

## Naming
Use clean, descriptive names.

Good:
HeroSection.tsx
FloatingOverlay.tsx

Bad:
HeroFinalV2.tsx

---

# File Size
Prefer smaller focused components.

Avoid giant files with mixed concerns.

---

# Reusability
Prefer composition over duplication.

Build reusable layout and motion primitives.

---

# Important Constraint

Do NOT optimize for perfection early.

Build quickly.
Iterate aggressively.
Refactor naturally.

The project should evolve organically.

---

# Creative Constraint

The website should not feel:
- corporate
- generic
- trend-chasing
- overly futuristic
- cluttered
- overly gamified

The website SHOULD feel:
- cinematic
- immersive
- expressive
- atmospheric
- experimental
- human

---

# Long-Term Direction

Potential future additions:
- AI assistant
- dynamic themes
- sound design
- photography journal
- travel storytelling
- experimental playground
- cinematic transitions
- shader systems
- interactive timelines

The architecture should remain flexible enough to support these systems later.

---

# Final Principle

Build systems that support creativity.

The goal is not perfect code immediately.

The goal is:
- learning
- experimentation
- expression
- craftsmanship
- growth through iteration