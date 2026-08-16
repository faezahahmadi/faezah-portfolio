import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "kaaryab-afghanistan",
    name: "KaarYab Afghanistan",
    tagline: "Opportunity-finder platform for Afghan youth",
    year: "2025 — 2026",
    description:
      "A responsive web application that aggregates jobs, scholarships, internships, courses, training and volunteer opportunities into one structured, searchable interface.",
    problem:
      "Opportunities for Afghan youth — jobs, scholarships, internships — are scattered across many different sources, making them hard to discover and easy to miss.",
    goal:
      "Build a single, well-organized platform where opportunities can be browsed, filtered and tracked, with a clean interface that works well on any device.",
    outcome:
      "A production Next.js application with structured opportunity listings, a component-driven UI, and a codebase organized for future growth as more opportunity types are added.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://kaaryab-afghanistan-liart.vercel.app/",
    github: "https://github.com/faezahahmadi/kaaryab-afghanistan",
    featured: true,
  },
  {
    slug: "goal-tracker",
    name: "Goal Tracker",
    tagline: "Personal goal & habit tracking app",
    year: "2025",
    description:
      "Helps users create, manage and track personal goals with progress bars, streaks and XP-based motivation.",
    problem:
      "Tracking personal goals over time is easy to abandon without visible progress or a sense of momentum.",
    goal:
      "Design a lightweight tracker that makes progress visible and rewarding, while supporting both English and Persian speakers.",
    outcome:
      "A React application with streak tracking, an XP system for motivation, and full RTL/LTR support so it works naturally in both English and Persian.",
    tech: ["React", "MUI"],
    live: "https://goal-tracker-1.vercel.app/",
    github: "https://github.com/faezahahmadi/Goal-Tracker-1",
  },
  {
    slug: "product-catalog",
    name: "Product Catalog",
    tagline: "Modern storefront with cart & filtering",
    year: "2025",
    description:
      "A product store application with theme toggling, layout switching, a full filter system and a working shopping cart.",
    problem:
      "Ecommerce interfaces need to manage complex, interdependent state — filters, cart contents, quantities and totals — without becoming hard to maintain.",
    goal:
      "Practice combining multiple state-management approaches cleanly in one application: local UI state, global app state, and server-style data fetching.",
    outcome:
      "A storefront using Context API for UI state, Redux Toolkit for cart state, and React Query for data — with add/remove, quantity controls and live total calculation.",
    tech: ["React", "Context API", "Redux Toolkit", "React Query"],
    live: "https://product-catalog-mu-eight.vercel.app",
    github: "https://github.com/faezahahmadi/product-Catalog",
  },
  {
    slug: "javascript-fundamentals",
    name: "JavaScript Fundamentals",
    tagline: "Vanilla JS mini-project collection",
    year: "2024",
    description:
      "A collection of pure HTML, CSS and vanilla JavaScript mini-projects built to demonstrate core programming fundamentals.",
    problem:
      "Frameworks can hide what's actually happening under the hood — DOM manipulation, events, and state without a library to manage it.",
    goal:
      "Build a set of small, focused projects using nothing but vanilla JavaScript to strengthen core fundamentals before leaning further into frameworks.",
    outcome:
      "A growing collection of standalone mini-projects, each demonstrating a specific JavaScript or DOM concept.",
    tech: ["JavaScript", "HTML5", "CSS"],
    github: "https://github.com/faezahahmadi/JavaScript",
  },
];
