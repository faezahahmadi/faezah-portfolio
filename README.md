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

````

## **Features**
- **Modern, clean UI:** Minimal, component-driven design
- **Responsive:** Mobile-first layouts for all screen sizes
- **Dark & light mode:** System-aware theme with toggle and persistence
- **Animations:** Smooth micro-interactions with Framer Motion
- **Content:** Featured projects, case studies, skills, experience, education, certificates
- **Contact & Resume:** Downloadable resume and contact form (React Hook Form + validation)
- **Accessibility:** Semantic HTML, keyboard navigation, visible focus states, good contrast
- **SEO & Performance:** Optimized for fast load and search engines

## **Getting Started**
Prerequisites:
- Node.js and npm installed — verify with:
```bash
node -v
npm -v
````

Quick start:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_NAME
npm install
npm run dev
# Open http://localhost:3000
```

Environment (optional):

- Create `.env.local` if needed:

```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GITHUB_URL=
NEXT_PUBLIC_LINKEDIN_URL=
```

Build & run (production):

```bash
npm run build
npm run start
```

## **Available Scripts**

- **`npm run dev`**: Starts the development server
- **`npm run build`**: Creates a production build
- **`npm run start`**: Starts the production server
- **`npm run lint`**: Runs ESLint

## **Design Principles**

- **Clarity:** Content organized for quick understanding
- **Consistency:** Reusable components, consistent spacing & typography
- **Responsiveness:** Works well across mobile, tablet, and desktop
- **Accessibility:** Semantic markup, focus states, keyboard support
- **Performance:** Optimized assets and Next.js best practices

## **Contributions**

This is a personal portfolio. Suggestions and constructive feedback are welcome — open an issue or PR with proposed improvements.

## **Contact**

- **LinkedIn:** (YOUR_LINKEDIN_URL)
- **GitHub:** (YOUR_GITHUB_URL)
- **Email:** (YOUR_EMAIL_ADDRESS)

---

If you’d like, I can replace the placeholders with your real links and a one-line project description for the top of the README.
