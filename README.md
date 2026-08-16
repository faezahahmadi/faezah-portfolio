# Faezah Ahmadi — Portfolio

A personal portfolio built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

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
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── ui/                   # Button, Card, Pill, SectionHeading, PageHeader, ThreadNode
│   ├── home/                 # Hero, AboutPreview, SkillsPreview, FeaturedProjects, CtaSection
│   ├── projects/              # ProjectCard, ProjectGrid
│   ├── experience/            # ExperienceTimeline
│   ├── education/             # EducationTimeline
│   ├── certificates/          # CertificateCard
│   ├── blog/                  # BlogCard
│   └── contact/                # ContactForm (React Hook Form + Yup)
│
├── data/                     # Single source of truth — edit these files to update content
│   ├── site.ts               # Name, contact info, nav links
│   ├── skills.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── certificates.ts
│   └── blog.ts
│
├── lib/
│   ├── theme-provider.tsx     # Dark/light mode context (persists to localStorage)
│   ├── icon-map.ts            # Maps icon name strings from data files to lucide components
│   └── utils.ts
│
└── types/
    └── index.ts               # Shared TypeScript interfaces
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
