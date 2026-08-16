import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { contact, navLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="px-6 py-12" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 pb-10">
          <div>
            <span className="font-display" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
              {siteConfig.name}
            </span>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.75rem", lineHeight: 1.6 }}>
              {siteConfig.description}
            </p>
          </div>
          <div>
            <p className="font-label" style={{ fontSize: "0.78rem", letterSpacing: "0.08em", color: "var(--gold)", marginBottom: "0.9rem" }}>
              SITE
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "0.85rem", color: "var(--text-muted)", textDecoration: "none" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-label" style={{ fontSize: "0.78rem", letterSpacing: "0.08em", color: "var(--gold)", marginBottom: "0.9rem" }}>
              CONNECT
            </p>
            <div className="flex items-center gap-3">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href={`mailto:${contact.email}`} className="icon-btn" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="divider" />
        <p className="font-label" style={{ fontSize: "0.78rem", color: "var(--text-muted)", paddingTop: "1.5rem" }}>
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
