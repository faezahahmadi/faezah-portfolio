import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).length ? projects.filter((p) => p.featured) : projects.slice(0, 2);
  const rest = projects.filter((p) => !featured.includes(p)).slice(0, 2);
  const shown = [...featured, ...rest].slice(0, 4);

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <SectionHeading eyebrow="Featured Work" title="Things I've built" />
          <Link
            href="/projects"
            className="font-label inline-flex items-center gap-1.5"
            style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--gold)", textDecoration: "none" }}
          >
            All projects <ArrowUpRight size={15} />
          </Link>
        </div>
        <ProjectGrid projects={shown} />
      </div>
    </section>
  );
}
