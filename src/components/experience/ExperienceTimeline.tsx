import React from "react";
import { Briefcase } from "lucide-react";
import { ExperienceItem } from "@/types";
import { Thread, ThreadNode } from "@/components/ui/ThreadNode";

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative pl-10">
      <Thread className="hidden sm:block" />
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.role + item.org} className="relative">
            <div className="hidden sm:block">
              <ThreadNode />
            </div>
            <div className="card p-7 flex gap-5">
              <div className="icon-btn" style={{ cursor: "default" }}>
                <Briefcase size={17} />
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-label" style={{ fontWeight: 600, fontSize: "1rem" }}>
                    {item.role}
                  </h3>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{item.org}</span>
                </div>
                <p className="font-label" style={{ color: "var(--gold)", fontSize: "0.78rem", marginTop: "0.35rem" }}>
                  {item.period}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.75rem", lineHeight: 1.65 }}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
