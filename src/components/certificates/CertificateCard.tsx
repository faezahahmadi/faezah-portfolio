import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { Certificate } from "@/types";
import { Card } from "@/components/ui/Card";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  const content = (
    <Card className="p-6 flex items-start gap-4 h-full">
      <div className="icon-btn" style={{ cursor: "default" }}>
        <Award size={17} color="var(--gold)" />
      </div>
      <div>
        <h3 className="font-label" style={{ fontWeight: 600, fontSize: "0.95rem" }}>
          {certificate.name}
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.35rem" }}>
          {certificate.org}
        </p>
        <p className="font-label" style={{ color: "var(--gold)", fontSize: "0.76rem", marginTop: "0.4rem" }}>
          {certificate.period}
        </p>
        {certificate.link && (
          <span
            className="font-label inline-flex items-center gap-1"
            style={{ fontSize: "0.8rem", color: "var(--text)", marginTop: "0.75rem" }}
          >
            View certificate <ExternalLink size={13} />
          </span>
        )}
      </div>
    </Card>
  );

  if (certificate.link) {
    return (
      <a href={certificate.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block", height: "100%" }}>
        {content}
      </a>
    );
  }

  return content;
}
