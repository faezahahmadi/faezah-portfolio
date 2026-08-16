import { NavLink } from "@/types";

export const siteConfig = {
  name: "Faezah Ahmadi",
  role: "Frontend Developer",
  location: "Herat Province, Afghanistan",
  description:
    "Frontend developer building thoughtful, performant and accessible web experiences with React, Next.js and TypeScript.",
  url: "https://faezahahmadi.dev",
};

export const contact = {
  email: "faezahahmadi96@gmail.com",
  phone: "+93 79 091 1510",
  location: "Herat Province, Afghanistan",
  linkedin: "https://www.linkedin.com/in/faezah-ahmadi-dev",
  github: "https://github.com/faezahahmadi",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Certificates", href: "/certificates" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
