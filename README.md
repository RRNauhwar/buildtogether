# Build Together

A modern, premium, responsive landing website for **Build Together** — a software development and AI consulting agency. Designed to feel comparable to Linear, Vercel, Stripe, and Framer.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** build tooling
- **Tailwind CSS 3** design system
- **Framer Motion** animations
- **Lucide React** icons
- **React Router** routing
- **React Hook Form** form validation
- **React CountUp** animated counters
- **Lenis** smooth scrolling
- **React Intersection Observer** scroll triggers

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (default `http://localhost:5173`).

### Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Hero, Services, Process, Testimonials, Contact, ...
│   └── ui/            # Button, Reveal, SectionHeading, Logo, ScrollToTop
├── hooks/             # useLenis, useActiveSection
├── lib/               # data.ts (content), utils.ts (helpers)
├── pages/             # Home.tsx
├── App.tsx            # App shell + routing
├── main.tsx           # Entry point
└── index.css          # Design tokens + global styles
```

## Features

- **Sections:** Hero with animated dashboard, client logo marquee, About, 6 Services, Industries grid, animated stat counters, 6-step Process timeline, auto-sliding Testimonials, Blog, FAQ accordion, gradient CTA, and a validated Contact form.
- **Design system:** White canvas, blue gradient primary (`#2563EB`), 20px rounded corners, soft shadows, generous whitespace, Inter typography.
- **Animations:** Fade/slide reveals, staggered cards, hover lift, button ripple, floating gradient blobs, animated background grid, smooth scrolling.
- **Responsive:** Optimized for desktop, tablet, and mobile.
- **SEO:** Meta tags, Open Graph, Twitter cards, JSON-LD structured data, semantic HTML.
- **Accessibility:** Keyboard navigation, ARIA labels, focus states, skip link, reduced-motion support.

## Customization

- Update all copy, services, testimonials, and contact details in `src/lib/data.ts`.
- Adjust brand colors, shadows, and animations in `tailwind.config.js`.
- Wire the contact form submission to your API/email service in `src/components/sections/Contact.tsx`.
