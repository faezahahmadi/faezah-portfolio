import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
}

export function Card({ children, className, hover = true, as = "div" }: CardProps) {
  const Component = as;
  return (
    <Component className={cn("card", hover && "card-hover", className)}>{children}</Component>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

export function Divider() {
  return <hr className="divider" />;
}
