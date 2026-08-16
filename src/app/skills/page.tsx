import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { skillGroups, additionalSkills } from "@/data/skills";
import { iconMap } from "@/lib/icon-map";

export const metadata: Metadata = {
  title: "Skills — Faezah Ahmadi",
  description: "Tools and technologies I use to build frontend applications.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="What I work with"
        description="Frontend tooling, state management, design and the tools I rely on day to day."
      />
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillGroups.map((group) => {
              const Icon = iconMap[group.icon];
              return (
                <Card key={group.title} className="p-6">
                  {Icon && <Icon size={20} color="var(--gold)" />}
                  <h3 className="font-label" style={{ fontWeight: 600, marginTop: "0.9rem", marginBottom: "0.9rem" }}>
                    {group.title}
                  </h3>
                  <ul className="flex flex-col gap-2" style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "var(--gold)",
                            display: "inline-block",
                            flexShrink: 0,
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          <div className="card p-6 mt-6 flex items-center gap-3">
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              <span className="font-label" style={{ fontWeight: 600, color: "var(--text)" }}>
                Also comfortable with:
              </span>{" "}
              {additionalSkills.join(", ")} — from coursework at AUAF.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
