# AI-INNOVATHON 2026

Production-ready web application for **AI-INNOVATHON 2026**, an inter-college 8-hour AI hackathon organized by the **Department of Artificial Intelligence & Machine Learning, Jerusalem College of Engineering**.

Designed with a high-voltage Star Wars-inspired space command-center aesthetic, original cyber-holographic interfaces, and a lightweight Canvas 2D starfield running at a steady 60fps.

---

## 🚀 One-Click Deploy to Vercel

The project is fully pre-configured for **Vercel** with zero extra setup needed.

### Option A: Via GitHub & Vercel Dashboard (Recommended)
1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: AI-INNOVATHON 2026 production web app"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Vercel will automatically detect:
   * **Framework Preset:** `Vite`
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
5. Click **Deploy**. Your site will be live on an edge CDN in under 60 seconds!

### Option B: Via Vercel CLI
If you have the Vercel CLI installed:
```bash
# Login to Vercel (if not already logged in)
npx vercel login

# Deploy preview
npx vercel

# Deploy directly to production
npx vercel --prod
```

---

## ⚙️ Event Configuration (Single Source of Truth)

All event dates, fees, coordinator phone numbers, WhatsApp community links, and Google Form URLs are centralized in:

📂 [`src/config/eventConfig.ts`](file:///d:/Projects/Hackathon/AI-INNOVATHON/src/config/eventConfig.ts)

### How to update the Registration Google Form URL:
Open `src/config/eventConfig.ts` and replace the placeholder in `urls.googleForm`:

```ts
export const EVENT_CONFIG = {
  // ...
  urls: {
    // Replace with your real Google Form URL:
    googleForm: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
    whatsappGroup: "https://chat.whatsapp.com/DQwMuhNTDNKDlfbTgI06cH",
    googleMaps: "https://maps.app.goo.gl/Jbj6Cb1UEZbQmmFp9",
  },
  // ...
};
```

---

## 🛠️ Local Development & Commands

```bash
# Install dependencies
npm install

# Start local development server (with HMR)
npm run dev

# Run TypeScript verification & production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🛰️ Core Features

* **3-Phase IST Timezone Countdown:** Automatically progresses from *Registration Closes In* to *The Mission Begins In* to *Mission In Progress* without clock drift.
* **Canvas 2D Starfield:** Battery-aware animated deep space starfield with automatic tab-visibility pausing and reduced-motion fallback.
* **Classified Holographic Vault:** Encrypted teaser for *"Problem Statement Revealed On The Spot"*.
* **Interactive Venue Radar & Embedded Google Map:** Live embedded Google Map with direct navigation link to Jerusalem College of Engineering.
* **Collapsible 2-Column FAQ Grid:** High-tech searchable accordion with Expand All / Collapse All controls.
* **Click-to-Call Coordinators:** Direct phone actions for student and faculty leads.
* **Mandatory WhatsApp Integration:** Prominent community access buttons.
