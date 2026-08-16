
# 🌐 Personal Portfolio — **Faezah Ahmadi**

A **modern, responsive personal portfolio website** built to showcase my **work, skills, experience, education, and journey as a frontend developer**.  
This portfolio is designed not only as a personal website, but also as a demonstration of my expertise in **frontend development, UI/UX, responsive design, accessibility, performance, and modern React/Next.js development**.

👉 **[View Live Portfolio](https://faezah-portfolio-1.vercel.app)**

---

## 🛠️ **Tech Stack**

- Next.js, React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS  
- **UI & Animation:** Framer Motion, Lucide React, CSS animations, responsive design  
- **Development Tools:** Git, GitHub, VS Code, npm  
- **Deployment:** Vercel  

---

## 📂 **Project Structure**

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
```

Additional directories:
- `src/components/` → UI components, layouts, pages  
- `src/data/` → Single source of truth (projects, skills, blog, site info)  
- `src/lib/` → Theme provider, utilities, icon map  
- `src/types/` → Shared TypeScript interfaces  

---

## ✏️ **Editing Content**

You generally never need to touch a component to update content — everything lives in `src/data/`:

- **New project** → Add entry to `src/data/projects.ts` → auto-appears on `/projects` with its own case-study page.  
- **New blog post** → Add entry to `src/data/blog.ts` → auto-appears on `/blog` with its own post page.  
- **Contact info & nav links** → `src/data/site.ts`.  
- **Skills, education, experience, certificates** → Their respective files in `src/data/`.  

---

## 🚀 **Things to Finish Before Deploying**

1. **Resume PDF** → Place your resume at `public/resume.pdf` (Download Resume buttons already point here).  
2. **Certificate links** → Add `link` field in `src/data/certificates.ts` once hosted (e.g., `public/certificates/`).  
3. **Contact form backend** → Wire `ContactForm.tsx` to a real backend (API route, Formspree, Resend, or custom email endpoint).  
4. **Site URL** → Update `url` in `src/data/site.ts` for accurate metadata, `sitemap.ts`, and `robots.ts`.  
5. **OG image** → Add `public/og-image.png` and reference it in `openGraph` metadata in `src/app/layout.tsx`.  

---

## 🎨 **Design System**

- **Colors, fonts, shared classes** → Defined in `src/app/globals.css` as CSS custom properties.  
- **Theme toggle** → Dark mode default; navbar toggle flips `[data-theme="light"]` and persists via `localStorage`.  

**Typography:**
- **Display type:** Plus Jakarta Sans (headings)  
- **Body type:** Inter  

---

## 📌 **Notes**

- Built with **Tailwind CSS v4** (CSS-first config via `@import "tailwindcss"` in `globals.css` — no `tailwind.config.ts` needed).  
- Run `npm install && npm run build` locally to confirm dependencies.  
- If any package version needs a bump:  
  ```bash
  npm install <package>@latest
  ```





