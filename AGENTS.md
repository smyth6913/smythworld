# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A modern single-page corporate website for "SmythWorld IT Solutions". Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Icons | Lucide React |
| Language | TypeScript 5.9 |
| Deployment | Netlify |

## Directory Structure

```
├── public/                # Static assets
├── src/
│   ├── routes/            # File-based routing (TanStack Router)
│   │   ├── __root.tsx     # Root layout wrapper
│   │   └── index.tsx      # Main single-page landing page
│   ├── styles.css         # Global CSS with Tailwind and CSS variables
│   └── router.tsx         # TanStack Router setup
├── .gitignore             
├── AGENTS.md              # Documentation for AI agents
├── README.md              # Project information and setup instructions
├── netlify.toml           # Netlify deployment configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration with plugins
```

## Key Architecture & Design Decisions

### Single-Page Navigation
The entire site is built into `src/routes/index.tsx` using section anchors (`#services`, `#about`, `#contact`). Navigation relies on standard DOM scrolling `scrollIntoView` coupled with `html { scroll-behavior: smooth }` inside `src/styles.css`.

### Theming
The theme relies on CSS custom properties defined in `src/styles.css` using Tailwind v4's `@theme` directive, utilizing colors like `--color-corporate-dark` for the primary background and `--color-accent` for CTAs. 

### Styling
- Tailwind CSS utility classes are used exclusively for layout and appearance.
- Lucide React is used for all iconography.

## Conventions
- **Naming**: React components use PascalCase. Hooks/utilities use camelCase.
- **Styling**: Favor standard Tailwind classes with responsive variants (`md:`, `lg:`). Use `group` and `group-hover` for card interactions.
- **TypeScript**: Strict mode is enabled.
