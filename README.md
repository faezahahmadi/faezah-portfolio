✨ Personal Portfolio- Faezah Ahmadi

A modern, responsive personal portfolio website built to showcase my work, skills, experience, education, and journey as a frontend developer.
The portfolio is designed not only as a personal website, but also as a demonstration of my frontend development, UI/UX, responsive design, accessibility, performance, and modern React/Next.js development skills.

🌐 Live Website

"View Live Portfolio" https://faezah-portfolio-1.vercel.app
##🛠️ Tech Stack

Frontend

- Next.js
- React
- TypeScript
- JavaScript
- HTML5
- CSS3
- Tailwind CSS

UI & Animation

- Framer Motion
- Lucide React
- Responsive Design
- CSS Animations

State & Forms

- Zustand
- React Hook Form
- Zod

Data Visualization

- Recharts

Design

- Figma
- Adobe Illustrator
- Adobe Photoshop

Development Tools

- Git
- GitHub
- VS Code
- npm

Deployment

- Vercel

## Project structure

```
src/
├── app/                     # Routes (Next.js App Router)
│   ├── layout.tsx           # Root layout — nav, footer, theme provider
│   ├── page.tsx             # Home
│   ├── about/page.tsx
│   ├── skills/page.tsx
│   ├── projects/
│   │   ├── page.tsx         # Projects list
│   │   └── [slug]/page.tsx  # Project case study (dynamic route)
│   ├── experience/page.tsx
│   ├── education/page.tsx
│   ├── certificates/page.tsx
│   ├── blog/
│   │   ├── page.tsx         # Blog list
│   │   └── [slug]/page.tsx  # Blog post (dynamic route)
│   ├── contact/page.tsx
│   ├── resume/page.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css          # Design tokens, theme variables, shared classes
│
# ✨ Personal Portfolio — Faezah Ahmadi

**View Live Portfolio:** (YOUR_LIVE_WEBSITE_URL)

## **About**
I’m Faezah Ahmadi — a frontend developer and Computer Science student. I build responsive, accessible, and high-performance web interfaces using React, Next.js, and TypeScript. This portfolio showcases selected projects, technical skills, education, experience, and ways to connect.

## **Tech Stack**
- **Frontend:** Next.js, React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
- **UI & Animation:** Framer Motion, Lucide React, CSS animations, responsive design
- **State & Forms:** Zustand, React Hook Form, Zod
- **Data Visualization:** Recharts
- **Design:** Figma, Adobe Illustrator, Adobe Photoshop
- **Tools & Deployment:** Git, GitHub, VS Code, npm, Vercel

## **Project Structure**
A minimal overview of the repository layout:
```

src/
├── app/ # Routes (Next.js App Router)
├── components/ # UI components, layout, pages
├── data/ # Single source of truth (projects, skills, blog)
├── lib/ # Theme provider, utils, icon map
└── types/ # Shared TypeScript interfaces

```

## Editing content

You generally never need to touch a component to update content — everything
lives in `src/data/`:

- **New project** → add an entry to `src/data/projects.ts`. It automatically
  appears on `/projects` and gets its own case-study page at
  `/projects/[slug]`.
- **New blog post** → add an entry to `src/data/blog.ts`. Same pattern —
  `/blog` and `/blog/[slug]` update automatically. The two included posts are
  starters; replace the `content` arrays with your own writing.
- **Contact info, nav links** → `src/data/site.ts`.
- **Skills, education, experience, certificates** → their respective files in
  `src/data/`.

## Things to finish before deploying

1. **Resume PDF** — drop your actual resume at `public/resume.pdf` (the
   Download Resume buttons already point there).
2. **Certificate links** — add a `link` field to entries in
   `src/data/certificates.ts` once your certificate files/images are hosted
   (e.g. in `public/certificates/`).
3. **Contact form backend** — `ContactForm.tsx` currently simulates a
   submission. Wire the `onSubmit` handler up to a real backend: an API route
   (`src/app/api/contact/route.ts`), a service like Formspree or Resend, or
   your own email endpoint.
4. **Site URL** — update `url` in `src/data/site.ts` once you have a domain,
   so metadata, `sitemap.ts` and `robots.ts` are accurate.
5. **OG image** — consider adding `public/og-image.png` and referencing it in
   the `openGraph` metadata in `src/app/layout.tsx` for nicer link previews.

## Design system

Colors, fonts and the shared component classes (`.card`, `.btn-primary`,
`.pill`, `.thread`, etc.) live in `src/app/globals.css` as CSS custom
properties, themed via a `data-theme` attribute on `<html>`. Dark is the
default; toggling in the navbar flips `[data-theme="light"]` and persists the
choice to `localStorage`.

- **Display type:** Fraunces (headings)
- **Label/UI type:** Space Grotesk (eyebrows, nav, buttons, data)
- **Body type:** Inter

## Notes

- Built with Tailwind CSS v4 (CSS-first config via `@import "tailwindcss"` in
  `globals.css` — no `tailwind.config.ts` needed).
- `npm install` was not run in the environment this project was generated in
  (no network access), so dependency versions haven't been build-verified
  end-to-end. Run `npm install && npm run build` locally to confirm — if any
  package version needs a bump, `npm install <package>@latest` will resolve
  it without touching the rest of the code.
```
