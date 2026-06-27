# L'Épicure — Luxury Restaurant Website

This project was created as part of my web development journey under **Ali Builds X**. The goal was to build a premium, animated restaurant website that feels different from a typical restaurant landing page.

L'Épicure is a fictional fine-dining restaurant presented through a cinematic dark visual style, a bronze-and-cream color palette, elegant typography, interactive motion, and a fully responsive one-page experience.

## How This Website Was Built

### 1. Concept planning

The process started by planning the experience before writing code. I focused on a few questions:

- What would make this restaurant website memorable?
- What should the first “wow” moment be?
- How should the homepage feel after the opening interaction?
- Which sections are essential to the dining story?

That led to the central concept:

> **“Dig in to begin”** — an interactive, food-themed reveal animation.

### 2. Intro animation prototype

A standalone HTML, CSS, and JavaScript prototype was created for the intro animation. It explored:

- a full-screen dark textured paper/menu overlay,
- a centered plate of food,
- a metallic fork cursor,
- a proximity-based reveal trigger,
- a torn-paper split animation,
- and a tap/click fallback for touch devices.

The prototype became the visual and interaction reference for the final React `IntroReveal` component. The finished component also supports keyboard activation, Escape, safe scroll restoration, and reduced-motion preferences.

### 3. UI/UX direction with Google Stitch

Google Stitch was used to establish the homepage's visual direction:

- luxury dark restaurant atmosphere,
- cinematic hero imagery,
- bronze accents and cream typography,
- chef's tasting journey,
- à la carte menu preview,
- story and gallery sections,
- reservation form,
- and a detailed footer.

The generated design was treated as a visual reference rather than copied directly. The final interface was rebuilt as structured, reusable components.

### 4. First working build with Antigravity

Antigravity was used to create the first working Next.js version. This established:

- component-based page sections,
- reusable menu and gallery data,
- responsive layouts,
- intersection-based scroll reveals,
- mobile navigation,
- menu category controls,
- reservation form state,
- and the initial `IntroReveal` integration point.

The homepage was assembled first, then the cinematic intro was integrated and refined.

### 5. Engineering polish with Codex

Codex was used for the final review and engineering polish. This pass focused on:

- TypeScript correctness,
- accessibility and semantic HTML,
- mobile navigation behavior,
- reliable scroll locking and cleanup,
- reservation form validation,
- reduced-motion support,
- visible keyboard focus states,
- responsive image sizing,
- layout checks across desktop, tablet, and mobile,
- removal of unused code and packages,
- and lint/build verification.

The final quality checks pass:

```bash
npm run lint
npm run build
```

## Main Features

1. Interactive intro reveal animation
2. Cinematic full-screen hero section
3. Seven-course chef's tasting journey
4. Interactive à la carte menu categories
5. Restaurant story and chef philosophy
6. Responsive food and atmosphere gallery
7. Validated reservation request form
8. Responsive navigation and footer

## Tech Stack

- **Next.js 16.2.9**
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS 4**
- Next.js Image and Font optimization
- Custom CSS animations
- Intersection Observer API

## Project Structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── IntroReveal.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   └── sections/
│       ├── Gallery.tsx
│       ├── Hero.tsx
│       ├── MenuPreview.tsx
│       ├── Reservation.tsx
│       ├── Story.tsx
│       └── TastingJourney.tsx
├── data/
│   ├── courses.ts
│   ├── footer.ts
│   ├── gallery.ts
│   └── menu.ts
└── hooks/
    └── useIntersection.ts
```

## Run Locally

```bash
git clone https://github.com/alibuildsx/lepicure-restaurant-website.git
cd lepicure-restaurant-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## What I Learned

Through this project, I practiced:

- planning an experience before coding,
- turning a creative concept into an interactive interface,
- using AI tools across design, prototyping, implementation, and review,
- translating visual references into maintainable components,
- building responsive interfaces with Next.js and Tailwind CSS,
- improving accessibility and keyboard behavior,
- and polishing generated code into a cleaner frontend project.

## Future Improvements

- Connect reservations to a real booking backend
- Add confirmation emails and availability handling
- Add a CMS for menu and gallery content
- Replace placeholder policy and legal links
- Add higher-resolution custom restaurant imagery
- Add richer page transitions and scroll storytelling

## Current Limitation

The reservation form currently demonstrates the frontend interaction and validation flow. It is not connected to a live restaurant booking system.
