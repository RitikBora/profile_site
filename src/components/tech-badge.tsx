"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { TECH_ICONS } from "@/constants/tech";

/**
 * Overlapping circular tech badge that expands to reveal the name on hover.
 * Width is spring-animated (like the template's framer-motion width animation),
 * not a CSS tween — snappy with a slight overshoot. Resolves its own icon so a
 * server component can render it by passing only the label string.
 */
export function TechBadge({ label }: { label: string }) {
  const Icon = TECH_ICONS[label];
  const [hovered, setHovered] = useState(false);
  const nameRef = useRef<HTMLSpanElement>(null);
  const [nameWidth, setNameWidth] = useState(0);

  useEffect(() => {
    if (nameRef.current) setNameWidth(nameRef.current.scrollWidth);
  }, [label]);

  if (!Icon) return null;

  return (
    <div
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative -mr-3 flex items-center rounded-full border border-border bg-accent p-1 transition-colors"
      style={{ color: hovered ? "var(--em)" : "var(--muted-foreground)", zIndex: hovered ? 10 : undefined }}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <motion.span
        initial={false}
        animate={{ width: hovered ? nameWidth : 0, opacity: hovered ? 1 : 0, marginLeft: hovered ? 6 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 26, mass: 0.7 }}
        className="rb-mono overflow-hidden whitespace-nowrap text-[11px]"
      >
        <span ref={nameRef} className="inline-block pr-0.5">
          {label}
        </span>
      </motion.span>
    </div>
  );
}
