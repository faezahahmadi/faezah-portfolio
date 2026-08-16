import { BlogPost } from "@/types";

// Starter posts — replace with your own writing. Keeping the same shape
// (slug, title, excerpt, content, date, readTime, tags) means new posts
// just drop into this array with no other code changes required.
export const blogPosts: BlogPost[] = [
  {
    slug: "building-kaaryab-afghanistan",
    title: "Notes on building KaarYab Afghanistan",
    excerpt:
      "Some early thoughts on structuring a Next.js opportunity-finder platform — data modeling, component structure, and the tradeoffs along the way.",
    date: "2026-01-15",
    readTime: "4 min read",
    tags: ["Next.js", "React", "Case Study"],
    content: [
      "This is a starter post — replace this with your own write-up about building KaarYab Afghanistan.",
      "Good topics to cover: how you structured the data model for different opportunity types (jobs, scholarships, internships), how you approached the component architecture, and any tradeoffs you made along the way.",
      "You can also link back to the live project and GitHub repo from here.",
    ],
  },
  {
    slug: "state-management-lessons",
    title: "What Context API, Redux Toolkit and React Query taught me",
    excerpt:
      "Three different tools for three different jobs — reflections from building the Product Catalog project.",
    date: "2025-11-02",
    readTime: "3 min read",
    tags: ["React", "State Management"],
    content: [
      "This is a starter post — replace this with your own reflections from the Product Catalog project.",
      "Consider writing about when you reached for Context API vs. Redux Toolkit vs. React Query, and what that taught you about picking the right tool for a given kind of state.",
    ],
  },
];
