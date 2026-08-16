import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Faezah Ahmadi",
  description: "A selection of frontend projects built with React, Next.js and TypeScript.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        description="Each project includes a live demo, source code, and a short case study covering the problem, the goal, and the outcome."
      />
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </>
  );
}
