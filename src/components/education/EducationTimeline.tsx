import React from "react";
import { GraduationCap } from "lucide-react";
import { EducationItem } from "@/types";
import { Thread, ThreadNode } from "@/components/ui/ThreadNode";

export function EducationTimeline({ items }: { items: EducationItem[] }) {
  return (
    <div className="relative pl-10">
      <Thread className="hidden sm:block" />
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <div key={item.title} className="relative">
            <div className="hidden sm:block">
              <ThreadNode />
            </div>
            <div className="card p-6 flex gap-5">
              <div className="icon-btn" style={{ cursor: "default" }}>
                <GraduationCap size={17} />
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-label" style={{ fontWeight: 600, fontSize: "0.98rem" }}>
                    {item.title}
                  </h3>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{item.org}</span>
                </div>
                <p className="font-label" style={{ color: "var(--gold)", fontSize: "0.76rem", marginTop: "0.3rem" }}>
                  {item.period}
                </p>
                {item.detail && (
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: "0.6rem" }}>
                    {item.detail}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
