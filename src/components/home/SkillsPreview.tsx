import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { iconMap } from "@/lib/icon-map";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsPreview() {
  return (
    <section className="px-6 py-20" style={{ background: "var(--bg-soft)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <SectionHeading eyebrow="Skills" title="What I work with" />
          <Link
            href="/skills"
            className="font-label inline-flex items-center gap-1.5"
            style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--gold)", textDecoration: "none" }}
          >
            Full skill set <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon];
            return (
              <Card key={group.title} className="p-6">
                {Icon && <Icon size={20} color="var(--gold)" />}
                <h3 className="font-label" style={{ fontWeight: 600, marginTop: "0.9rem", marginBottom: "0.9rem" }}>
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                  {group.items.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
