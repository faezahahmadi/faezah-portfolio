import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Faezah Ahmadi",
  description: "Notes on frontend development, projects and lessons learned.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes & articles"
        description="Thoughts on frontend development, project write-ups, and things I've learned building for real users."
      />
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
