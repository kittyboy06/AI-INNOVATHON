# AI-INNOVATHON 2026 — System Architecture & Design Specification

This document records the validated design specification, architecture decisions, and non-functional requirements established during the brainstorming phase for the **AI-INNOVATHON 2026** web application.

---

## 1. Understanding Summary
* **Project Purpose:** Build a production-ready, highly responsive, single-page web app for **AI-INNOVATHON 2026**, an inter-college 8-hour AI hackathon organized by the Department of Artificial Intelligence & Machine Learning at Jerusalem College of Engineering.
* **Core Brand Identity:** Original, high-impact Star Wars-inspired space command-center aesthetic (electric cyan, deep space navy, holographic cards, telemetry grids) without infringing on copyrighted Star Wars logos, characters, or assets.
* **Target Audience:** Undergraduate (UG) and Postgraduate (PG) engineering and tech students across colleges, working in teams of 2–4 members.
* **Primary Conversion Goals:**
  1. Build credibility and excitement around the hackathon.
  2. Explain guidelines, timeline, rules, and benefits transparently.
  3. Direct attendees to register via the official Google Form (`GOOGLE_FORM_URL`).
  4. Onboard registered attendees into the official WhatsApp announcements community.
* **Strict Constraints & Accuracy Policy:**
  * Only authoritative data from event organizers is displayed.
  * No invented judges, sponsors, travel details, email addresses, or fake deadlines.
  * Highlight "Problem Statement Revealed On The Spot" prominently.
  * Transparently display both included perks (snacks, Wi-Fi, mentors, certificates) and non-provided items (**No Lunch**, **No Accommodation**, **No Swags**).
* **Explicit Non-Goals:**
  * No custom backend server or database (strictly NO Supabase, NO backend registration service).
  * No audio playback or ambient sound (100% silent, zero browser autoplay issues).
  * No heavy 3D WebGL / Three.js assets (preserves battery and mobile performance).

---

## 2. Assumptions
1. **Hosting & Deployment:** Static hosting on platforms such as Vercel, Netlify, or Cloudflare Pages with instantaneous edge delivery.
2. **Registration Integration:** Registration and UPI payment occur on Google Form; `GOOGLE_FORM_URL` placeholder is cleanly swapped in `eventConfig.ts`.
3. **Timezone:** All countdown calculations and schedule timings are pinned to India Standard Time (`Asia/Kolkata`, UTC+05:30).
4. **Browser Compatibility:** Modern evergreen browsers (Chrome, Safari, Firefox, Edge) with full mobile responsiveness (320px to 4K displays).

---

## 3. Decision Log

| ID | Topic | Decision | Alternatives Considered | Rationale |
|---|---|---|---|---|
| **D1** | **Tech Stack** | Vite + React + TypeScript + Tailwind CSS + Framer Motion | Next.js App Router, Astro, Vanilla JS | Ultra-fast client SPA, zero server maintenance, seamless static hosting, instant HMR. |
| **D2** | **Visual FX** | Lightweight HTML5 Canvas 2D Starfield + GPU-accelerated CSS Glows | Three.js / WebGL 3D, Pure CSS only | Delivers high visual polish at rock-solid 60fps on mobile without megabyte-heavy 3D bundle overhead. |
| **D3** | **Audio & SFX** | 100% Silent (No audio assets) | Ambient hum & laser click SFX with mute toggle | Eliminates browser autoplay blocks, avoids sound distraction, and keeps bundle minimal. |
| **D4** | **Data Architecture** | Centralized `src/config/eventConfig.ts` | Dispersed inline JSX strings, CMS, Markdown files | Organizers can update links, dates, or contacts in 10 seconds in a single typed configuration file. |
| **D5** | **Navigation Pattern** | Single-page narrative with sticky glassmorphism command bar & scrollspy | Multi-page React Router | Maximizes hackathon excitement and conversion momentum on mobile without route hops. |
| **D6** | **Countdown Mechanism** | 3-Phase IST Timezone-aware engine (Registration → Pre-event Kickoff → Mission Active) | Single static timer, client-local time | Prevents clock drift bugs, handles timezone differences gracefully, and guarantees no negative time displays. |

---

## 4. System Architecture & Directory Layout

```
ai-innovathon-2026/
├── index.html                # Preloaded fonts, Open Graph tags, viewport configuration
├── package.json              # React 18/19, TypeScript, Tailwind CSS, Framer Motion, Lucide
├── tsconfig.json             # Strict TypeScript configuration
├── vite.config.ts            # Vite build configuration
├── src/
│   ├── main.tsx              # React DOM root mounting
│   ├── App.tsx               # App shell coordinating background, navbar, and sections
│   ├── index.css             # Tailwind layers, custom sci-fi HUD utilities, scanlines
│   ├── config/
│   │   └── eventConfig.ts    # Single source of truth for all event data & URLs
│   ├── types/
│   │   └── event.ts          # TypeScript models (Coordinators, Rules, Milestones, FAQ)
│   ├── utils/
│   │   └── countdown.ts      # Fixed-epoch IST countdown math
│   ├── components/
│   │   ├── background/
│   │   │   └── Starfield.tsx # Canvas 2D starfield with battery-aware auto-pause
│   │   ├── ui/
│   │   │   ├── HoloCard.tsx  # Angled sci-fi card with glassmorphism & corner accents
│   │   │   ├── GlowingButton.tsx # Neon-glow conversion buttons (Google Form, WhatsApp)
│   │   │   ├── SciFiBadge.tsx    # Telemetry microcopy pills ([CLASSIFIED], [ALLOWED])
│   │   │   └── CountdownTimer.tsx# Dynamic multi-phase IST countdown display
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Sticky HUD command bar with mobile slide drawer
│   │   │   └── Footer.tsx    # Official credits, quick links, and WhatsApp CTA
│   │   └── sections/         # Scoped modular sections
│   │       ├── Hero.tsx
│   │       ├── Highlights.tsx
│   │       ├── Mission.tsx
│   │       ├── Challenge.tsx # Encrypted holographic vault
│   │       ├── HowItWorks.tsx
│   │       ├── Timeline.tsx
│   │       ├── Prizes.tsx
│   │       ├── EligibilityBenefits.tsx
│   │       ├── Rules.tsx
│   │       ├── Submission.tsx
│   │       ├── RegistrationCTA.tsx
│   │       ├── Venue.tsx
│   │       ├── Clubs.tsx
│   │       ├── FAQ.tsx
│   │       └── Contact.tsx
```

---

## 5. Visual Design System & Styling Tokens

* **Color Palette:**
  * `void-950`: `#030712` (Void Black)
  * `space-900`: `#060d24` (Deep Space Navy)
  * `cyan-400`: `#00f2fe` / `cyan-500`: `#0ea5e9` (Holographic Blue/Cyan)
  * `violet-500`: `#8b5cf6` (Warp Energy Accent)
  * `amber-400`: `#f59e0b` (Telemetry Warning / Spot Problem Statement)
  * `emerald-400`: `#10b981` (WhatsApp Beacon & Status Indicators)
* **Typography:**
  * Display / Headings: Modern geometric sans with high-tech spacing (`Rajdhani` / `Orbitron` / system tech sans).
  * Body: `Inter` / `Plus Jakarta Sans` for maximum legibility and contrast.
* **Component Craft:**
  * Cyber-grid overlays with fine 1px gradient borders.
  * Chamfered corners on cards (`clip-path: polygon`).
  * Smooth entry animations using Framer Motion with reduced-motion fallbacks.

---

## 6. Verification & Quality Gates
* **Compilation:** Strict TypeScript verification (`tsc --noEmit`).
* **Bundle Build:** Production bundle generated with zero errors (`npm run build`).
* **Responsive Validation:** Tested on mobile (375px), tablet (768px), and desktop (1280px+).
* **Accessibility:** Contrast ratios verified (> 4.5:1), keyboard navigable accordion and links, alt texts provided.
