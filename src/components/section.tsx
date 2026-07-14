"use client";

import { useEffect, useRef } from "react";

/**
 * Standard page section: self-revealing on scroll (adds `rb-in` when it enters
 * the viewport), full-bleed top divider, and horizontal padding so the divider
 * meets the frame. `first` (hero) drops the border and uses the taller top
 * padding; `last` adds extra bottom padding.
 */
export function Section({
  id,
  first,
  last,
  noReveal,
  className,
  children,
}: {
  id?: string;
  first?: boolean;
  last?: boolean;
  /** Skip the section-level fade-in reveal (children can animate on their own). */
  noReveal?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (noReveal) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rb-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [noReveal]);

  const padding = first
    ? "clamp(60px,10vw,116px) clamp(20px,5vw,40px) clamp(50px,7vw,80px)"
    : last
    ? "clamp(46px,7vw,80px) clamp(20px,5vw,40px) clamp(56px,8vw,96px)"
    : "clamp(46px,7vw,80px) clamp(20px,5vw,40px)";

  return (
    <section
      ref={ref}
      id={id}
      className={`${noReveal ? "" : "rb-reveal"}${className ? ` ${className}` : ""}`.trim()}
      style={{
        padding,
        borderTop: first ? 0 : "1px solid var(--border)",
        scrollMarginTop: 72,
      }}
    >
      {children}
    </section>
  );
}
