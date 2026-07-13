"use client";

import { motion } from "motion/react";
import { TIMELINE, TimelineItem } from "@/constants/timeline";

/**
 * Vertical career timeline (newest-first). Each entry blur-reveals as it enters
 * view — the clone/template treatment. Static line, left-aligned, no photos.
 */
export function Timeline({ items = TIMELINE }: { items?: TimelineItem[] }) {
  return (
    <div
      className="rb-timeline"
      style={{ marginTop: 26, borderLeft: "2px solid var(--border)", paddingLeft: 26, display: "flex", flexDirection: "column", gap: 30 }}
    >
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
