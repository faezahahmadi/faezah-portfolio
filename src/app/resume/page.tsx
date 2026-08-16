import type { Metadata } from "next";
import { Download, Mail, Phone, MapPin } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Card";
import { siteConfig, contact } from "@/data/site";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Resume — Faezah Ahmadi",
  description: "Frontend developer resume — experience, education and skills.",
};

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title={`${siteConfig.name} — ${siteConfig.role}`}
        description="A summary of my experience, education and skills. Download the PDF for the full version."
      />

      <section className="px-6 pb-10">
        <div className="max-w-3xl mx-auto flex justify-center">
          {/* Replace /resume.pdf in /public with your actual resume file */}
          <Button href="/resume.pdf" download>
            Download PDF <Download size={16} />
          </Button>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto card p-8 sm:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6" style={{ borderBottom: "1px solid var(--border)" }}>
            <div>
              <h2 className="font-display" style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                {siteConfig.name}
              </h2>
              <p style={{ color: "var(--gold)", fontSize: "0.9rem", marginTop: "0.25rem" }}>{siteConfig.role}</p>
            </div>
            <div className="flex flex-col gap-1.5 items-start sm:items-end" style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1.5">
                <Mail size={13} /> {contact.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={13} /> {contact.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} /> {contact.location}
              </span>
            </div>
          </div>

          <div className="py-6" style={{ borderBottom: "1px solid var(--border)" }}>
            <p className="font-label" style={{ fontSize: "0.78rem", letterSpacing: "0.08em", color: "var(--gold)", marginBottom: "0.75rem" }}>
              SUMMARY
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.75, fontSize: "0.92rem" }}>
              Motivated frontend developer and third-year Computer Science student at the American
              University of Afghanistan (AUAF). Skilled in HTML, CSS, JavaScript, Tailwind CSS,
              React and Next.js, with a strong passion for building modern and user-friendly web
              applications.
            </p>
          </div>

          <div className="py-6" style={{ borderBottom: "1px solid var(--border)" }}>
            <p className="font-label" style={{ fontSize: "0.78rem", letterSpacing: "0.08em", color: "var(--gold)", marginBottom: "1rem" }}>
              EXPERIENCE
            </p>
            <div className="flex flex-col gap-5">
              {experience.map((item) => (
                <div key={item.role}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-label" style={{ fontWeight: 600, fontSize: "0.92rem" }}>
                      {item.role} · {item.org}
                    </h3>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{item.period}</span>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: "0.4rem" }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="py-6" style={{ borderBottom: "1px solid var(--border)" }}>
            <p className="font-label" style={{ fontSize: "0.78rem", letterSpacing: "0.08em", color: "var(--gold)", marginBottom: "1rem" }}>
              PROJECTS
            </p>
            <div className="flex flex-col gap-3">
              {projects.map((project) => (
                <div key={project.slug} className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 500 }}>{project.name}</h3>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{project.tech.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="py-6" style={{ borderBottom: "1px solid var(--border)" }}>
            <p className="font-label" style={{ fontSize: "0.78rem", letterSpacing: "0.08em", color: "var(--gold)", marginBottom: "1rem" }}>
              EDUCATION
            </p>
            <div className="flex flex-col gap-4">
              {education.map((edu) => (
                <div key={edu.title} className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                    {edu.title} <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>· {edu.org}</span>
                  </h3>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <p className="font-label" style={{ fontSize: "0.78rem", letterSpacing: "0.08em", color: "var(--gold)", marginBottom: "1rem" }}>
              SKILLS
            </p>
            <div className="flex flex-wrap gap-2">
              {skillGroups.flatMap((g) => g.items).map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
