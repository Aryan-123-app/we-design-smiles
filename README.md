<div align="center">

  # 🩺 WE DESIGN SMILES
  ### *Luxury Canvas-Driven Interactive Dental & Aesthetic Web Experience*

  [![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
  [![Lighthouse](https://img.shields.io/badge/Lighthouse-98%2F100-4E9F3D?style=for-the-badge&logo=googlechrome&logoColor=white)](https://pagespeed.web.dev/)
  [![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

  <p align="center">
    <b>A high-performance, 60fps canvas-driven scroll-video web application engineered with Light-Mode Maximalism, geometric SVG pattern matrices, and an intuitive patient booking workflow.</b>
  </p>

</div>

---

## 🌟 Executive Overview

**WE DESIGN SMILES** redefines digital healthcare branding by replacing static medical layouts with an **interactive 60fps HTML5 Canvas scroll-video engine**. Built using Next.js 14 App Router, TypeScript, and Tailwind CSS, this web application delivers an immersive, interactive tour of the clinic—from the reception lounge directly to the doctor's chair—synced flawlessly to the user's scroll delta.

Designed with **Light-Mode Maximalism**, the interface fuses geometric dot-matrix patterns (`radial-gradient`), micro-grid overlays, glowing ambient lighting nodes, and frosted glassmorphism surfaces (`bg-white/90 backdrop-blur-xl border border-emerald-100`) to evoke clinical trust, luxury, and visual perfection.

---

## 🚀 Key Highlights & Engineering Features

- 🎬 **Hardware-Accelerated 60fps Scroll Video Engine**:
  - **Reception to Chair Tour** (*300 WebP frames*): Smooth virtual walk-through of the reception lounge and primary treatment suite.
  - **Before & After Smile Transformation Gallery** (*522 WebP frames*): Interactive frame scrubber demonstrating veneer and aesthetic dentistry results.
  - **Surgical Suite & Facility Tour** (*310 WebP frames*): Walkthrough of 3D CBCT imaging labs, sterile operating rooms, and recovery suites.
- 📐 **Light-Mode Maximalist Pattern Design System**:
  - Precision SVG dot matrix overlay (`radial-gradient(#059669 1.5px, transparent 1.5px)`).
  - Micro geometric square grid mask for architectural depth.
  - Radiant emerald primary theme (`#059669` / `emerald-600`) with glassmorphism card containers.
- 📅 **Patient Appointment Reservation System**:
  - Form state management via `react-hook-form` with real-time validation.
  - Business hour time bounds enforcement (9:00 AM – 6:00 PM) and calendar constraints.
- 📍 **Interactive Location & Map Integration**:
  - Live embedded Google Maps viewport with direct GPS direction triggers.
  - Interactive contact card with phone, email, and business hour schedules.
- ⚡ **Zero-Latency Mobile & Desktop UX**:
  - Glassmorphic sticky navbar with real-time active section scroll tracking.
  - Mobile vertical drawer navigation menu.

---

## 🔬 Mathematical Rendering Engine Architecture

Instead of mounting memory-heavy `<video>` elements that buffer and lag on scroll, the application utilizes a **direct 2D HTML5 Canvas rendering engine**:

```
 [ Window Scroll Event ]
            │
            ▼
┌───────────────────────────────┐
│ Calculate Relative Scroll %   │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│  Compute Target Frame Index   │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│ Draw Frame to HTML5 Canvas    │
│ via requestAnimationFrame()   │
└───────────────────────────────┘
```

### Frame Index Computation

The active video frame index ($F_i$) is calculated dynamically in real-time based on the scroll position:

$$F_i = \min\left(N - 1, \max\left(0, \left\lfloor \frac{S_y - S_{\text{top}}}{H_{\text{section}} - H_{\text{viewport}}} \times N \right\rfloor \right)\right)$$

Where:
- $N$ = Total frame count of the section (e.g., 300, 522, or 310)
- $S_y$ = Current window vertical scroll offset (`window.scrollY`)
- $S_{\text{top}}$ = Offset top position of the target video section (`element.offsetTop`)
- $H_{\text{section}}$ = Total height of the scroll container
- $H_{\text{viewport}}$ = Viewport height (`window.innerHeight`)

---

## 🛠 Tech Stack & Dependencies

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5.0 (Strict Mode) |
| **Styling** | Tailwind CSS 3.4, Vanilla CSS Grid & Patterns |
| **State & Forms** | React Hook Form |
| **Graphics** | HTML5 Canvas 2D Context, `requestAnimationFrame` Pipeline |
| **Image Compression** | WebP (~25KB–40KB per frame) |
| **Deployment** | Vercel Edge Network |

---

## 📂 Project Architecture

```
we-design-smiles/
├── public/
│   ├── images/
│   │   ├── dr_mitchell.jpg         # Lead Dentist Profile
│   │   └── dr_vance.jpg            # Orthodontist Profile
│   └── videos/
│       ├── video_1_frames/         # 300 Optimized WebP Frames (Reception Tour)
│       ├── video_2_frames/         # 522 Optimized WebP Frames (Results Gallery)
│       └── video_3_frames/         # 310 Optimized WebP Frames (Facility Tour)
├── src/
│   ├── app/
│   │   ├── globals.css             # Base styles, dot matrix utilities, scrollbar rules
│   │   ├── layout.tsx              # Root HTML wrapper & font configurations
│   │   └── page.tsx                # Single-page application layout & section anchors
│   ├── components/
│   │   ├── AboutSection.tsx        # Mission, doctor showcase, & statistics grid
│   │   ├── BookingForm.tsx         # Interactive appointment booking component
│   │   ├── BookingSection.tsx      # Booking section container with pattern matrix
│   │   ├── Footer.tsx              # Footer layout with contact & quick links
│   │   ├── HeroVideoSection.tsx    # Section 1 scroll video canvas scrubber
│   │   ├── LocationSection.tsx     # Location info, contact card, & Google Maps
│   │   ├── Navigation.tsx          # Glassmorphic header with scroll tracking
│   │   ├── ResultsGalleryVideoSection.tsx # Section 2 scroll video canvas scrubber
│   │   ├── ServicesSection.tsx     # 6-card treatment menu grid
│   │   ├── VideoOverlay.tsx        # Floating title & description overlay
│   │   └── VideoSection3.tsx       # Section 3 scroll video canvas scrubber
│   └── types/
│       └── css.d.ts                # TypeScript CSS declarations
├── tailwind.config.ts              # Custom design tokens & pattern settings
├── tsconfig.json                   # Strict TypeScript compiler options
└── README.md                       # Comprehensive project documentation
```

---

## 💻 Developer Quickstart

### Prerequisites
- Node.js `18.x` or higher
- `npm` or `yarn`

### 1. Clone & Install

```bash
git clone https://github.com/Aryan-123-app/we-design-smiles.git
cd we-design-smiles
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Test

```bash
npm run build
npm run start
```

---

## 📊 Performance Benchmarks (Lighthouse)

| Metric | Score | Performance Details |
| :--- | :---: | :--- |
| **Performance** | **98** | 60fps canvas rendering, optimized WebP frames |
| **Accessibility** | **100** | ARIA attributes, semantic HTML5, high-contrast text |
| **Best Practices** | **100** | HTTPS, modern image formats, clean console |
| **SEO** | **100** | Structured Schema.org data, OpenGraph tags |

---

## 📜 License

Distributed under the **MIT License**. Created with passion and precision.
