# Portfolio Revamp Spec

## Goal
Rebuild Jacob Wright's personal portfolio from scratch. Super simple, super clean. Minimal editorial design.

## Tech Stack
- Next.js 15 (App Router, TypeScript strict)
- Tailwind CSS 4
- No component libraries (raw Tailwind, keep it minimal)
- No 3D, no heavy animations — at most subtle CSS transitions
- No SCSS, no DaisyUI, no Vanta.js, no three.js
- Deploy target: Vercel (keep it simple)

## Design Direction
- Dark background (#0a0a0a or similar near-black), white/gray text
- Clean sans-serif typography (Inter or system font stack)
- Generous whitespace, minimal sections
- Mobile-first responsive
- NO hero images, NO profile photos for now
- Single-page scrolling layout
- Subtle hover states, nothing flashy

## Structure (top to bottom)

### 1. Header (sticky, minimal)
- Name "Jacob Wright" on left
- Nav links on right: About, Work, Contact
- Mobile: hamburger or just stack
- No logo, no resume button

### 2. Hero Section
- Large name: "Jacob Wright"
- One-liner: "Founder & builder. Currently building Castari (YC)."
- Small social links row: GitHub, X (@jehovahscript), LinkedIn (/in/jacob-c-wright/)
- That's it. Clean.

### 3. About Section
- Short bio paragraph:
  "I build AI infrastructure and products. Currently founder of Castari (YC W25) — hosting infrastructure for AI agents. Previously scaled AI systems at RunPod ($100M+ revenue), co-founded Proxy ($1M ARR year one), and built Sister to 2M+ users. Venture Partner at Contrary Capital. HF0 Fellow."
- Maybe a small "Currently" / "Previously" format
- Keep it to ~3-5 sentences max

### 4. Work Section
Clean list/grid of work, each with: name, one-line description, role, link if applicable.

Items (in order):
1. **Castari** — Hosting infrastructure for AI agents. YC W25. (castari.com) — Founder
2. **Open Animate** — Open-source creative suite for AI agents. (github.com/jacobcwright/open-animate) — Creator
3. **Sister** — AI beauty assistant. 2M+ users. (trysister.com) — Founder
4. **RunPod** — GPU cloud platform. Scaled to $100M+ revenue. (runpod.io) — Sr. Growth Engineer → FDE Manager
5. **Proxy** — Venture-backed startup. $1M annualized revenue year one. — Co-Founder & CTO
6. **Life Help** — Mental health platform implemented nationwide by LDS Church. — Co-Founder

### 5. Contact Section
- "Get in touch"
- Email: jacob@castari.com
- Cal link: cal.com (or just email)
- Social links again (GitHub, X, LinkedIn)
- No contact form

### 6. Footer
- "© 2026 Jacob Wright" 
- Minimal, maybe one line

## What to Remove
- Delete ALL old components (Hero.tsx, About.tsx, Projects.tsx, Contact.tsx, etc.)
- Delete old pages/index.tsx, pages/_app.js
- Delete styles/globals.scss
- Delete old public/img/* (we won't need the old photos)
- Delete the Vanta/three.js stuff
- Keep public/Jacob-Wright.pdf (resume) for now

## File Structure (App Router)
```
app/
  layout.tsx        # Root layout with metadata, font, dark bg
  page.tsx          # Single page with all sections
  globals.css       # Tailwind imports only
components/
  Header.tsx
  Hero.tsx  
  About.tsx
  Work.tsx
  Contact.tsx
  Footer.tsx
```

## Important
- TypeScript strict mode
- All content hardcoded (no CMS, no API calls)
- Accessible (semantic HTML, proper heading hierarchy)
- Fast — should score 95+ on Lighthouse
- The site should look like it belongs to a YC founder, not a college student
