import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { SkillsPreview } from "@/components/home/SkillsPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <FeaturedProjects />
      <CtaSection />
    </>
  );
}
