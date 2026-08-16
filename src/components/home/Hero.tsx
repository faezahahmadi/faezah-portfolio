import React from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-28">
      <div className="hero-bg-grid" />
      <div className="hero-glow" />
      <div className="max-w-4xl mx-auto relative text-center">
        <p className="eyebrow fade-up">
          {siteConfig.role} · {siteConfig.location}
        </p>
        <h1
          className="font-display fade-up delay-1"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)", lineHeight: 1.08, fontWeight: 500 }}
        >
          I build interfaces that turn
          <br />
          <span style={{ color: "var(--gold)", fontStyle: "italic" }}>ideas into opportunities.</span>
        </h1>
        <p
          className="fade-up delay-2 mx-auto"
          style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "34rem", marginTop: "1.5rem" }}
        >
          Thoughtful, performant and accessible web experiences — built with React, Next.js and
          TypeScript, and shaped by clean, deliberate interface design.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10 fade-up delay-3">
          <Button href="/projects">
            View Projects <ArrowUpRight size={16} />
          </Button>
          <Button href="/resume" variant="secondary">
            View Resume <Download size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
