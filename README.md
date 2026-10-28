# CampusPe Landing Page

A responsive landing page for **CampusPe**, built from a Figma design as part of the Frontend Developer Intern assignment.

- **Live site:** https://campuspe-29.vercel.app
- **GitHub repo:** https://github.com/Sushil09kp/campuspe-29

## Tech stack

- Next.js 16 (App Router), React, JavaScript
- Plain CSS and CSS Modules (no Tailwind)
- `next/font` for Inter and Lora
- Deployed on Vercel (auto-deploys on every push to `main`)

## How to run

```bash
git clone https://github.com/Sushil09kp/campuspe-29.git
cd campuspe-29
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## Page sections

1. Navbar (mobile hamburger menu under 768px)
2. Hero with floating cards and three option cards
3. Stats
4. Partners (auto-scrolling marquee, pauses on hover)
5. Opportunity Discovery (filter chips)
6. Try it live (resume upload with validation and drag and drop)
7. For Colleges
8. For Employers
9. App Interface (5 phones, active state, dots)
10. Download App
11. Still have questions? (contact CTA)
12. Ready for what's next? + Footer

## Reusable components

Each component lives in `app/components/<Name>/` with its own CSS Module.

| Component | Purpose |
|---|---|
| `Button` | Primary and outline variants, sm/md/lg sizes, renders a link or a button |
| `SectionHeader` | Eyebrow, title with highlight, description, left or center align |
| `FeatureSection` | Data-driven section used for Colleges and Employers, with a tinted option |
| `OptionCard` | Hero cards with icon, badge, feature list and CTA |
| `Icons` | Inline SVG icons using `currentColor` |
| `SocialIcon` | Social links in the footer |
| `PhoneMock` | CSS phone mockup used in app sections |

Content for repeated sections lives in `app/data/` (`features.js`, `footer.js`) and is rendered with `.map()`.

## Interactions and states

- Every CTA has hover (lift and shadow), `:focus-visible` (ring for keyboard users) and `:active` (press) states.
- Hero: staggered fade-in on load, floating cards, gradient text shimmer, hover on the pill and cards.
- Upload box: drag and drop, file type and size validation, `aria-live` messages.
- `prefers-reduced-motion` is respected for animations and transitions.

## Visual issues found in the design and fixed

- "Checkout Our App Interface Look" changed to "Check Out Our App Interface Look".
- Brand name was written as both "CampusPe" and "Campuspe". Now it is always "CampusPe".
- "Recruiters discover your College" changed to "college".
- Footer copyright was missing the (c) symbol. Added.
- An internal note box in the footer ("Separate user, institution...") was removed.
- Dash in "Tier 1 - Tier 3" corrected.
- Typos in the Hero floating cards fixed (for example "that got you hired").
- Very small, low-contrast text (8 to 10px) made larger and easier to read.
- Heading styles were inconsistent between sections. Unified with shared styles.
- In the design, floating Hero cards overlap the heading. They are hidden below 1000px to avoid overlap on small screens.

## Known limitations (honest note)

Some assets are still placeholders and not yet replaced with the exported Figma files:

- Logo is text instead of the Figma logo
- Partner logos are text
- Phone mockups are built with CSS
- App Store and Google Play badges are text buttons
- Illustrations inside the Hero option cards are not added
- Colours and fonts are close to the design but not copied exactly from Figma Inspect

## Possible next steps

- Export real logo, phone mockups and badges from Figma and use `next/image`
- Technical SEO: canonical URL, `robots.txt`, `sitemap.xml`, JSON-LD
- Lighthouse pass (Performance, Accessibility, SEO)
