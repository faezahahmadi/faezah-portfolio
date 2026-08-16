import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Pill } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About — Faezah Ahmadi",
  description: "Frontend developer and Computer Science student building accessible web experiences.",
};

const values = [
  {
    title: "Precision over approximation",
    body: "I match designs exactly — spacing, breakpoints and states included — rather than settling for 'close enough'.",
  },
  {
    title: "Accessible by default",
    body: "Semantic markup, visible focus states and responsive layouts aren't an afterthought; they're part of how I build from the start.",
  },
  {
    title: "Technology with purpose",
    body: "My favorite projects solve a real problem for a real community, like connecting Afghan youth with opportunities.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Building interfaces with intention"
        description="A closer look at how I work and what drives the projects I choose to build."
      />

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <h2 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 500 }}>
                My story
              </h2>
              <p style={{ color: "var(--text-muted)", marginTop: "1rem", lineHeight: 1.8 }}>
                I&apos;m a frontend developer and third-year Computer Science student at the
                American University of Afghanistan (AUAF). My focus is building modern, accessible
                and responsive web applications with React, Next.js and TypeScript.
              </p>
              <p style={{ color: "var(--text-muted)", marginTop: "1rem", lineHeight: 1.8 }}>
                I enjoy turning complex problems into simple, intuitive interfaces — and I care
                about getting the small details exactly right: the breakpoint that doesn&apos;t
                quite match a design, the focus state that&apos;s easy to skip, the loading state
                nobody thinks about until it&apos;s missing.
              </p>
              <p style={{ color: "var(--text-muted)", marginTop: "1rem", lineHeight: 1.8 }}>
                Before development, I taught Computer Science, English and Science at a high
                school — an experience that shaped how I explain technical ideas clearly, whether
                that&apos;s in code comments, documentation, or a walkthrough with a client.
              </p>
            </div>
            <div className="md:col-span-2">
              <p
                className="font-label"
                style={{ fontSize: "0.78rem", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "0.9rem" }}
              >
                CURRENTLY FOCUSED ON
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "UI/UX"].map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16" style={{ background: "var(--bg-soft)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 500, marginBottom: "2rem" }}>
            How I approach my work
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {values.map((value) => (
              <div key={value.title} className="card p-6">
                <h3 className="font-label" style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                  {value.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: "0.75rem", lineHeight: 1.65 }}>
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
