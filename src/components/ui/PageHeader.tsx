import React from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-20">
      <div className="hero-bg-grid" />
      <div className="hero-glow" />
      <div className="max-w-4xl mx-auto relative text-center">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1
          className="font-display fade-up delay-1"
          style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1, fontWeight: 500 }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="fade-up delay-2 mx-auto"
            style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "36rem", marginTop: "1.25rem" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
