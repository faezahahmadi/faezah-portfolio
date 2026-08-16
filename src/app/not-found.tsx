import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-28">
      <div className="hero-bg-grid" />
      <div className="hero-glow" />
      <div className="max-w-2xl mx-auto relative text-center">
        <p className="eyebrow">404</p>
        <h1 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 500 }}>
          This page wandered off somewhere.
        </h1>
        <p style={{ color: "var(--text-muted)", marginTop: "1rem" }}>
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">
            <Home size={16} /> Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
