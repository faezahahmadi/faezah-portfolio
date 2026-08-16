import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Pill } from "@/components/ui/Card";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return { title: `${post.title} — Faezah Ahmadi`, description: post.excerpt };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="px-6 pt-40 pb-24">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="font-label inline-flex items-center gap-1.5"
          style={{ fontSize: "0.85rem", color: "var(--text-muted)", textDecoration: "none", marginBottom: "1.5rem" }}
        >
          <ArrowLeft size={14} /> All posts
        </Link>
        <p className="font-label" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
          {formatDate(post.date)} · {post.readTime}
        </p>
        <h1 className="font-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 500, marginTop: "0.6rem" }}>
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
        <div className="divider" style={{ margin: "2rem 0" }} />
        <div className="flex flex-col gap-5">
          {post.content.map((paragraph, i) => (
            <p key={i} style={{ color: "var(--text-muted)", lineHeight: 1.85, fontSize: "1.02rem" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
