# WE DESIGN SMILES – Luxury Interactive Dental Clinic Web Application

![License](https://img.shields.io/badge/License-MIT-emerald.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg)

**WE DESIGN SMILES** is a state-of-the-art, interactive web application engineered for high-end dental and aesthetic clinics. Combining **HTML5 Canvas 60fps video-scrubbing walkthroughs**, **light-mode maximalist pattern overlays**, and an **intuitive patient booking workflow**, it offers a world-class digital experience that converts clinic visitors into loyal patients.

---

## 🌟 Key Features

- 🎬 **60fps Canvas-Based Scroll-Video Walkthroughs**:
  - **Reception-to-Chair Tour** (300 WebP frames): Walk patients through the welcoming reception lounge into the state-of-the-art treatment suite.
  - **Before & After Smile Transformation Gallery** (522 WebP frames): Interactive scroll-scrubbing demonstrating cosmetic dentistry & veneer results.
  - **Clinic Facility & Flow Walkthrough** (310 WebP frames): Showcases sterile surgical suites, 3D CBCT imaging labs, and calming recovery lounges.
- ✨ **Light Mode Maximalist Design System**:
  - Geometric dot matrix SVG patterns (`radial-gradient`) and subtle grid line masks.
  - Frosted glassmorphism cards with vibrant Emerald Green accent highlights (`emerald-600` / `#059669`).
  - Smooth micro-interactions, responsive typography hierarchy, and glowing ambient background lighting orbs.
- 📅 **Patient Appointment Booking Engine**:
  - Built with `react-hook-form` featuring instant validation.
  - Date and business-hour time picker restrictions (9:00 AM – 6:00 PM).
  - Service selection dropdown (Veneers, Whitening, Implants, General Care, Consultation).
- 📍 **Location & Google Maps Integration**:
  - Full clinic address, contact details, business hours, and Google Maps iframe viewport.
  - Direct "Get Directions" deep-link action.
- 📱 **100% Mobile & Tablet Responsive**:
  - Sticky glassmorphic navbar with dynamic section scroll tracking and vertical mobile drawer navigation.

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Vanilla CSS animations, SVG Pattern overlays
- **Forms**: React Hook Form
- **Graphics & Rendering**: HTML5 2D Canvas Context with `requestAnimationFrame` and image preloading
- **Icons & Graphics**: Heroicons inline SVG & custom vectors

---

## 📂 Repository Structure

```
.
├── public/
│   ├── images/
│   │   ├── dr_mitchell.jpg         # Lead dentist profile image
│   │   └── dr_vance.jpg            # Orthodontist profile image
│   └── videos/
│       ├── video_1_frames/         # 300 optimized WebP frames (Reception to Chair)
│       ├── video_2_frames/         # 522 optimized WebP frames (Results Gallery)
│       └── video_3_frames/         # 310 optimized WebP frames (Facility Tour)
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind imports & custom scrollbar rules
│   │   ├── layout.tsx              # Root HTML layout & font declarations
│   │   └── page.tsx                # Main single-page app layout with section anchors
│   ├── components/
│   │   ├── AboutSection.tsx        # Clinic history, mission, stats, & team profiles
│   │   ├── BookingForm.tsx         # Interactive appointment reservation form
│   │   ├── BookingSection.tsx      # Form wrapper section with pattern backdrop
│   │   ├── Footer.tsx              # Footer layout with hours, quick links, legal text
│   │   ├── HeroVideoSection.tsx    # Section 1 scroll video canvas scrubber
│   │   ├── LocationSection.tsx     # Location details, hours, contact, & Google Maps
│   │   ├── Navigation.tsx          # Sticky header navbar with active scroll tracking
│   │   ├── ResultsGalleryVideoSection.tsx # Section 2 scroll video canvas scrubber
│   │   ├── ServicesSection.tsx     # 6-card treatment menu grid
│   │   ├── VideoOverlay.tsx        # Apple-style floating title & description overlay
│   │   └── VideoSection3.tsx       # Section 3 scroll video canvas scrubber
│   └── types/
│       └── css.d.ts                # TypeScript declarations for custom CSS modules
├── Quotation.md                    # Official project cost breakdown & quotation
├── README.md                       # Comprehensive project documentation
├── package.json                    # Project dependencies & scripts
├── tailwind.config.ts              # Tailwind design tokens & extension settings
└── tsconfig.json                   # TypeScript compiler configuration
```

---

## 🚀 Quick Start & Installation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### 1. Clone the Repository

```bash
git clone https://github.com/Aryan-123-app/we-design-smiles.git
cd we-design-smiles
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🎯 Video Frame Scrubber Mechanics

The interactive video walkthroughs utilize a custom HTML5 canvas rendering engine:

1. **Preloading Pipeline**:
   Frames (`frame_0001.webp` through `frame_XXXX.webp`) are loaded asynchronously into memory upon section entry.
2. **Scroll Synchronization**:
   The active frame index is computed using:
   $$\text{Frame Index} = \min\left(\text{Total Frames} - 1, \max\left(0, \left\lfloor \frac{\text{Scroll Y} - \text{Section Top}}{\text{Section Height} - \text{Viewport Height}} \times \text{Total Frames} \right\rfloor \right)\right)$$
3. **Canvas Drawing**:
   The canvas automatically maintains aspect ratio and draws the active image frame using `ctx.drawImage()`, offering silky 60fps performance without full video DOM element buffering issues.

---

## 🎨 Design System Tokens (Light Mode Maximalism)

- **Primary Accent**: Emerald Green (`#059669` / `emerald-600`)
- **Background Layer**: `bg-slate-50` with geometric dot matrix (`radial-gradient(#059669 1.5px, transparent 1.5px)`)
- **Card Surfaces**: Frosted glass `bg-white/90 backdrop-blur-xl border border-emerald-100`
- **Typography**: Sans-serif system font stack (Inter / System UI) with high-contrast `slate-900` headings and `slate-600` body copy.

---

## 🚀 Building for Production

To create an optimized production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

---

## 📄 Documentation & Commercial Quotation

For full pricing details, implementation phases, and client quotation documentation, see [`Quotation.md`](./Quotation.md).

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.
