import React from "react";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { Card, Pill } from "@/components/ui/Card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card as="article" className="p-7 flex flex-col h-full">
      <div>
        <h3 className="font-display" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
          {project.name}
        </h3>
        <p className="font-label" style={{ color: "var(--gold)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
          {project.tagline}
        </p>
      </div>
      <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.65, marginTop: "1rem", flexGrow: 1 }}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
      <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mt-5 pt-5" style={{ borderTop: "1px solid var(--border)" }}>
        <Link
          href={`/projects/${project.slug}`}
          className="font-label flex items-center gap-1.5"
          style={{ fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", color: "var(--text)" }}
        >
          Case Study <ArrowUpRight size={14} />
        </Link>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label flex items-center gap-1.5"
            style={{ fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", color: "var(--text-muted)" }}
          >
            Live <ExternalLink size={14} />
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label flex items-center gap-1.5"
          style={{ fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", color: "var(--text-muted)" }}
        >
          <Github size={14} /> Code
        </a>
      </div>
    </Card>
  );
}
