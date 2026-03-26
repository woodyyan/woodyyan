# Personal Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a production-ready personal homepage with an editorial minimal aesthetic, external portfolio section links, and lightweight SQLite-powered easter eggs.

**Architecture:** Use a Next.js 15 App Router application rendered on a self-hosted server. Keep homepage content configuration-driven and mostly static, while exposing a lightweight API route backed by SQLite for visitor counting. Separate visual components, content data, and persistence utilities so the site stays easy to maintain.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, self-hosted Node runtime, SQLite via node:sqlite

---

### Task 1: Initialize the application

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `.gitignore`
- Create: `README.md`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`

**Step 1:** Initialize a Next.js 15 + TypeScript project in the current workspace.
**Step 2:** Add Tailwind CSS and base linting configuration.
**Step 3:** Create the root app structure under `src/app`.
**Step 4:** Add a concise README describing local development and self-hosted deployment.

### Task 2: Build the homepage UI system

**Files:**
- Create: `src/components/site-header.tsx`
- Create: `src/components/hero.tsx`
- Create: `src/components/section-card.tsx`
- Create: `src/components/about-section.tsx`
- Create: `src/components/site-footer.tsx`
- Create: `src/components/visitor-badge.tsx`
- Create: `src/components/daily-note.tsx`
- Create: `src/components/section-grid.tsx`
- Create: `src/components/contact-links.tsx`

**Step 1:** Implement the editorial minimal layout with strong typography and large negative space.
**Step 2:** Build reusable section cards for Websites / Apps, Photography, and Songs.
**Step 3:** Add lightweight motion and hover feedback without overpowering the page.
**Step 4:** Make the page responsive for desktop and mobile.

### Task 3: Move content into configuration files

**Files:**
- Create: `src/content/site-content.ts`
- Create: `src/content/daily-notes.ts`
- Create: `src/content/site-meta.ts`

**Step 1:** Store hero copy, section metadata, and social links in typed config files.
**Step 2:** Store daily note candidates in one file.
**Step 3:** Store location and last-updated strings in a dedicated metadata file.

### Task 4: Add SQLite-backed visitor counting

**Files:**
- Create: `src/lib/db.ts`
- Create: `src/lib/visitor.ts`
- Create: `src/app/api/visitor/route.ts`
- Create: `data/.gitkeep`

**Step 1:** Initialize a SQLite database file under `data/` on first run.
**Step 2:** Create a simple schema for global stats.
**Step 3:** Implement a helper that increments the visitor count only when a cookie is missing.
**Step 4:** Expose an API route returning the visitor number to the client.

### Task 5: Polish metadata, assets, and deployment setup

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `public/og-image.jpg` or placeholder asset
- Create: `public/favicon.svg`

**Step 1:** Add metadata for SEO and social preview.
**Step 2:** Add a simple favicon aligned with the site tone.
**Step 3:** Leave deployment instructions for a self-hosted Node server.

### Task 6: Validate and initialize version control

**Files:**
- Modify: files above as needed

**Step 1:** Install dependencies.
**Step 2:** Run lint.
**Step 3:** Run a production build.
**Step 4:** Initialize Git in the workspace.
**Step 5:** Verify the site locally and keep the repo ready for the first commit.
