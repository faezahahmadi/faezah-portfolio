import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/types";
import { Card, Pill } from "@/components/ui/Card";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <Card as="article" className="p-7 flex flex-col h-full">
        <p className="font-label" style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
          {formatDate(post.date)} · {post.readTime}
        </p>
        <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: 600, marginTop: "0.6rem" }}>
          {post.title}
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65, marginTop: "0.75rem", flexGrow: 1 }}>
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
        <span
          className="font-label inline-flex items-center gap-1.5 mt-5"
          style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--gold)" }}
        >
          Read post <ArrowUpRight size={14} />
        </span>
      </Card>
    </Link>
  );
}
