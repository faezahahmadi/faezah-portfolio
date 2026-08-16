
✨ Personal Portfolio- Faezah Ahmadi 

A modern, responsive personal portfolio website built to showcase my work, skills, experience, education, and journey as a frontend developer.
The portfolio is designed not only as a personal website, but also as a demonstration of my frontend development, UI/UX, responsive design, accessibility, performance, and modern React/Next.js development skills.

🌐 Live Website

"View Live Portfolio" (YOUR_LIVE_WEBSITE_URL)
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

 ##About

This portfolio represents my work and development journey as a Computer Science student and frontend developer.

I enjoy transforming ideas and designs into responsive, accessible, and intuitive web experiences. My main focus is building modern interfaces using React, Next.js, TypeScript, and modern frontend technologies.

The website includes selected projects, technical skills, education, experience, certificates, and ways to connect with me.

##✨ Features

-  Modern and clean UI
-  Fully responsive design
-  Dark and light mode
-  Smooth animations and micro-interactions
-  Featured projects section
-  Detailed project case studies
-  Technical skills showcase
-  Experience and education timeline
-  Certificates section
-  Resume download
-  Contact section
-  GitHub and LinkedIn integration
-  Accessibility-focused interface
-  SEO-friendly pages
-  Performance optimized
-  Keyboard-friendly navigation
-  Mobile-first responsive layouts

##🚀 Getting Started

Prerequisites

Make sure you have installed:

- Node.js
- npm

You can verify your installation with:

node -v
npm -v

1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate to the project

cd YOUR_PROJECT_NAME

3. Install dependencies

npm install

4. Configure environment variables

Create a ".env.local" file if the project requires environment variables:

NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GITHUB_URL=
NEXT_PUBLIC_LINKEDIN_URL=

Do not commit sensitive credentials or API keys to the repository.

5. Start the development server

npm run dev

Open:

http://localhost:3000

6. Build for production

npm run build

7. Start the production build

npm run start

##📜 Available Scripts

Command| Description
"npm run dev"| Starts the development server
"npm run build"| Creates a production build
"npm run start"| Starts the production server
"npm run lint"| Runs ESLint

##🎨 Design Principles

The portfolio follows several design principles:

Clarity

Content is organized so visitors can quickly understand who I am, what I build, and what technologies I use.

Consistency

Reusable components, spacing, typography, colors, and interaction patterns are used throughout the application.

Responsiveness

The interface is designed to provide a consistent experience across mobile, tablet, laptop, and desktop screens.

Accessibility

The project aims to provide an accessible experience through semantic HTML, keyboard navigation, appropriate contrast, visible focus states, and accessible interactive components.

Performance

The application uses Next.js features and frontend optimization techniques to minimize unnecessary loading and improve the user experience.


##🤝 Contributions

This is a personal portfolio project, so the main purpose of the repository is to showcase my work.

Suggestions, feedback, and constructive improvements are welcome.
