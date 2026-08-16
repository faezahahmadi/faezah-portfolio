export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  goal: string;
  outcome: string;
  tech: string[];
  live?: string;
  github: string;
  featured?: boolean;
  year: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  description: string;
}

export interface EducationItem {
  title: string;
  org: string;
  period: string;
  detail?: string;
}

export interface Certificate {
  name: string;
  org: string;
  period: string;
  link?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
