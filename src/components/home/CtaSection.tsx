import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contact } from "@/data/site";

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div
        className="max-w-4xl mx-auto text-center card p-12"
        style={{ background: "linear-gradient(135deg, var(--bg-card), var(--bg-soft))" }}
      >
        <h2 className="font-display" style={{ fontSize: "2rem", fontWeight: 500 }}>
          Let&apos;s build something worth using.
        </h2>
        <p style={{ color: "var(--text-muted)", marginTop: "0.75rem", maxWidth: "30rem", marginLeft: "auto", marginRight: "auto" }}>
          Open to frontend roles, freelance work, and collaborations on projects with real
          community impact.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button href="/contact">
            Get in Touch <ArrowUpRight size={16} />
          </Button>
          <Button href={`mailto:${contact.email}`} variant="secondary">
            <Mail size={16} /> Email Me
          </Button>
        </div>
      </div>
    </section>
  );
}
