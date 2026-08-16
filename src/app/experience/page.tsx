import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { experience } from "@/data/experience";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience — Faezah Ahmadi",
  description: "Where I've worked and what I've built along the way.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader eyebrow="Experience" title="Where I've worked" />
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <ExperienceTimeline items={experience} />
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "2rem" }}>
            Beyond formal roles, most of my recent growth comes from independent React, Next.js and
            JavaScript projects — all documented on{" "}
            <Link
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label inline-flex items-center gap-1"
              style={{ color: "var(--gold)", textDecoration: "underline" }}
            >
              GitHub <ArrowUpRight size={13} />
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
