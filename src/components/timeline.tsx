"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TIMELINE, TimelineItem } from "@/constants/timeline";

/**
 * Vertical career timeline. Aceternity-inspired scroll mechanic: a faint track
 * with a green "beam" that fills top-to-bottom as you scroll through it, and
 * each entry blur-reveals as it enters view. Left-aligned, no side photos.
 */
export function Timeline({ items = TIMELINE }: { items?: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 55%"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="rb-timeline"
      style={{ position: "relative", marginTop: 26, paddingLeft: 28, display: "flex", flexDirection: "column", gap: 30 }}
    >
      {/* faint full-height track */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "var(--border)" }} />
      {/* green beam that fills as you scroll through the timeline */}
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 2,
          height: fillHeight,
          background: "var(--em)",
          boxShadow: "0 0 8px color-mix(in oklch, var(--em) 70%, transparent)",
        }}
      />
      {items.map((t) => (
        <motion.div
          key={t.date}
          className="rb-tnode"
          style={{ position: "relative" }}
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="rb-tdot" style={{ position: "absolute", left: -34, top: 5, width: 11, height: 11, borderRadius: "50%", background: "var(--border)" }} />
          <div className="rb-tdate rb-mono" style={{ fontSize: 11.5, color: "var(--muted-foreground)", letterSpacing: ".04em" }}>
            {t.date}
          </div>
          <div style={{ fontWeight: 600, fontSize: 17, marginTop: 5 }}>{t.title}</div>
          <div className="rb-mono rb-dim" style={{ fontSize: 11.5, marginTop: 4 }}>
            {t.org}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
