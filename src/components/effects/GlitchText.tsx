"use client";

import { cn } from "@/lib/utils";

export default function GlitchText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={cn("glitch-text", className)} data-text={text}>
      {text}
    </span>
  );
}
