import { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-End",
    icon: "Code2",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS", "Tailwind CSS"],
  },
  {
    title: "State & Data",
    icon: "Database",
    items: ["TanStack Query", "React Hook Form", "Redux Toolkit"],
  },
  {
    title: "Design & UX",
    icon: "Palette",
    items: ["Figma", "Responsive Design", "Accessibility", "Photoshop", "Illustrator"],
  },
  {
    title: "Tooling",
    icon: "Wrench",
    items: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

export const additionalSkills = ["Java", "SQL"];
