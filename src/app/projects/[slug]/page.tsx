import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Pill } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} — Faezah Ahmadi`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const caseStudy = [
    { label: "Problem", body: project.problem },
    { label: "Goal", body: project.goal },
    { label: "Outcome", body: project.outcome },
  ];

  return (
    <>
      <section className="relative overflow-hidden px-6 pt-40 pb-16">
        <div className="hero-bg-grid" />
        <div className="hero-glow" />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/projects"
            className="font-label inline-flex items-center gap-1.5"
            style={{ fontSize: "0.85rem", color: "var(--text-muted)", textDecoration: "none", marginBottom: "1.5rem" }}
          >
            <ArrowLeft size={14} /> All projects
          </Link>
          <p className="eyebrow">{project.year}</p>
          <h1 className="font-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 500 }}>
            {project.name}
          </h1>
          <p style={{ color: "var(--gold)", marginTop: "0.5rem", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem" }}>
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-7">
            {project.live && (
              <Button href={project.live} external>
                Live Demo <ExternalLink size={16} />
              </Button>
            )}
            <Button href={project.github} external variant="secondary">
              <Github size={16} /> View Code
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.02rem" }}>
            {project.description}
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            {caseStudy.map((section) => (
              <div key={section.label} className="card p-6">
                <p className="font-label" style={{ fontSize: "0.75rem", letterSpacing: "0.08em", color: "var(--gold)", marginBottom: "0.6rem" }}>
                  {section.label.toUpperCase()}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
