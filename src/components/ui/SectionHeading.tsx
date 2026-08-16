import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className="font-display"
        style={{ fontSize: "1.8rem", fontWeight: 500, marginBottom: description ? "0.75rem" : "0" }}
      >
        {title}
      </h2>
      {description && (
        <p style={{ color: "var(--text-muted)", maxWidth: "38rem", lineHeight: 1.7 }}>
          {description}
        </p>
      )}
    </div>
  );
}
