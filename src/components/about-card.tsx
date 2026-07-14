/** About spec-sheet (key/value rows) + tilted photo. */
export function AboutCard() {
  return (
    <div className="rb-about">
      <div className="rb-mono" style={{ fontSize: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "104px 1fr", gap: 14, padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
          <span className="rb-dim">name</span>
          <span>Ritik Bora</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "104px 1fr", gap: 14, padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
          <span className="rb-dim">focus</span>
          <span>full&#8209;stack · MERN · Next.js</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "104px 1fr", gap: 14, padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
          <span className="rb-dim">domain</span>
          <span className="rb-em">cybersecurity</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "104px 1fr", gap: 14, padding: "14px 0" }}>
          <span className="rb-dim">based</span>
          <span>Pune, India</span>
        </div>
      </div>
      <img
        className="rb-photo"
        src="/images/about.png"
        alt="Ritik Bora"
        width={210}
        height={210}
        style={{
          width: 210,
          height: 210,
          borderRadius: 14,
          objectFit: "cover",
          transform: "rotate(3deg)",
          border: "4px solid var(--foreground)",
          boxShadow: "var(--shadow-xl)",
        }}
      />
    </div>
  );
}
