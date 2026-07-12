/**
 * Small mono section label, e.g. `// about`, `// projects`.
 * Uses the same dim color as `rb-dim` so it matches the existing sections.
 */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rb-mono rb-dim" style={{ fontSize: 12, letterSpacing: ".16em" }}>
      {children}
    </div>
  );
}
