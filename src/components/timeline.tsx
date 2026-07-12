import { TIMELINE, TimelineItem } from "@/constants/timeline";

/** Vertical career timeline with dotted nodes. */
export function Timeline({ items = TIMELINE }: { items?: TimelineItem[] }) {
  return (
    <div
      className="rb-timeline"
      style={{ marginTop: 26, borderLeft: "2px solid var(--border)", paddingLeft: 26, display: "flex", flexDirection: "column", gap: 30 }}
    >
      {items.map((t) => (
        <div key={t.date} className="rb-tnode" style={{ position: "relative" }}>
          <span className="rb-tdot" style={{ position: "absolute", left: -34, top: 5, width: 11, height: 11, borderRadius: "50%", background: "var(--border)" }} />
          <div className="rb-tdate rb-mono" style={{ fontSize: 11.5, color: "var(--muted-foreground)", letterSpacing: ".04em" }}>
            {t.date}
          </div>
          <div style={{ fontWeight: 600, fontSize: 17, marginTop: 5 }}>{t.title}</div>
          <div className="rb-mono rb-dim" style={{ fontSize: 11.5, marginTop: 4 }}>
            {t.org}
          </div>
        </div>
      ))}
    </div>
  );
}
