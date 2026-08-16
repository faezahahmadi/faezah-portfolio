import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Pill } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const focusAreas = ["React", "Next.js", "TypeScript", "UI/UX"];

export function AboutPreview() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3">
            <SectionHeading eyebrow="About" title="A developer who cares about the details" />
            <p style={{ color: "var(--text-muted)", marginTop: "1.1rem", lineHeight: 1.75 }}>
              I&apos;m a third-year Computer Science student at the American University of
              Afghanistan, focused on building modern, accessible and responsive web applications.
              I enjoy turning complex problems into simple, intuitive interfaces — and I care about
              getting the small details exactly right.
            </p>
            <Link
              href="/about"
              className="font-label inline-flex items-center gap-1.5 mt-5"
              style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--gold)", textDecoration: "none" }}
            >
              More about me <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="md:col-span-2">
            <p
              className="font-label"
              style={{ fontSize: "0.78rem", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "0.9rem" }}
            >
              CURRENTLY FOCUSED ON
            </p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
