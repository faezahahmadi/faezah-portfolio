import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { EducationTimeline } from "@/components/education/EducationTimeline";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "Education — Faezah Ahmadi",
  description: "Academic background and coursework.",
};

export default function EducationPage() {
  return (
    <>
      <PageHeader eyebrow="Education" title="How I got here" />
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <EducationTimeline items={education} />
        </div>
      </section>
    </>
  );
}
