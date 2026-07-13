/**
 * Small mono section label, e.g. `// about`, `// projects`.
 * Green accent to match the hero `$ whoami` prompt.
 */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rb-mono" style={{ fontSize: 12, letterSpacing: ".16em", color: "var(--em)" }}>
      {children}
    </div>
  );
}
