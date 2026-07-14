"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals its children (via an `rb-in` class the parent CSS animates) only once
 * the element itself scrolls into frame — not when some ancestor does. Used for
 * the // kind words testimonials so each one fires in place, not early.
 */
export function Reveal({
  className,
  style,
  amount = 0.35,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  amount?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.unobserve(el);
        }
      },
      { threshold: amount, rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount]);

  return (
    <div ref={ref} className={`${className ?? ""}${shown ? " rb-in" : ""}`} style={style}>
      {children}
    </div>
  );
}
