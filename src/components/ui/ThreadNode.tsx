import React from "react";
import { cn } from "@/lib/utils";

export function ThreadNode({ active = true }: { active?: boolean }) {
  return (
    <span className="thread-node-wrap" aria-hidden="true">
      <span className={cn("thread-node", active && "thread-node-active")} />
    </span>
  );
}

export function Thread({ className }: { className?: string }) {
  return <div className={cn("thread", className)} aria-hidden="true" />;
}
