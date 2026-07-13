"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TIMELINE, TimelineItem } from "@/constants/timeline";

/**
 * Vertical career timeline (newest-first). Clone/template treatment: fires once
 * when the timeline enters view, then cascades every line in with staggered
 * blur-fade delays (animationIndex * step). Static line, left-aligned.
 */
export function Timeline({ items = TIMELINE }: { items?: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  // Running index so every line across every entry cascades in sequence.
  let step = 0;
  const nextDelay = () => step++ * 0.09;

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: -6, filter: "blur(8px)" },
    animate: {
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : -6,
      filter: isInView ? "blur(0px)" : "blur(8px)",
    },
    transition: { duration: 0.35, delay, ease: "easeInOut" as const },
  });

  return (
    <div
      ref={ref}
      className="rb-timeline"
      style={{ marginTop: 26, borderLeft: "2px solid var(--border)", paddingLeft: 26, display: "flex", flexDirection: "column", gap: 30 }}
    >
      {items.map((t) => {
        const dateDelay = nextDelay();
        const titleDelay = nextDelay();
        const orgDelay = nextDelay();
        return (
          <div key={t.date} className="rb-tnode" style={{ position: "relative" }}>
            <span className="rb-tdot" style={{ position: "absolute", left: -34, top: 5, width: 11, height: 11, borderRadius: "50%", background: "var(--border)" }} />
            <motion.div className="rb-tdate rb-mono" style={{ fontSize: 11.5, color: "var(--muted-foreground)", letterSpacing: ".04em" }} {...reveal(dateDelay)}>
              {t.date}
            </motion.div>
            <motion.div style={{ fontWeight: 600, fontSize: 17, marginTop: 5 }} {...reveal(titleDelay)}>
              {t.title}
            </motion.div>
            <motion.div className="rb-mono rb-dim" style={{ fontSize: 11.5, marginTop: 4 }} {...reveal(orgDelay)}>
              {t.org}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
