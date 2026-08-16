"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { useTheme } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ background: "color-mix(in srgb, var(--bg) 82%, transparent)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span className="diamond-mark">
            <span>FA</span>
          </span>
          <span className="font-display" style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text)" }}>
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className="font-label"
                style={{
                  fontSize: "0.85rem",
                  color: isActive ? "var(--text)" : "var(--text-muted)",
                  textDecoration: "none",
                  position: "relative",
                  paddingBottom: "0.35rem",
                  borderBottom: isActive ? "2px solid var(--gold)" : "2px solid transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/resume" className="btn-secondary hidden sm:inline-flex" style={{ padding: "0.6rem 1.1rem", fontSize: "0.8rem" }}>
            Resume
          </Link>
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className={cn("icon-btn", "lg:hidden")}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="lg:hidden px-6 pb-6 flex flex-col gap-1"
          style={{ borderTop: "1px solid var(--border)" }}
          aria-label="Mobile"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-label"
                style={{
                  padding: "0.85rem 0",
                  fontSize: "0.92rem",
                  color: isActive ? "var(--gold)" : "var(--text)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
