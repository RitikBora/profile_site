/**
 * Standard page section: scroll-reveal, full-bleed top divider, and horizontal
 * padding so the divider meets the frame. `first` (hero) drops the border and
 * uses the taller top padding; `last` adds extra bottom padding.
 */
export function Section({
  id,
  first,
  last,
  className,
  children,
}: {
  id?: string;
  first?: boolean;
  last?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const padding = first
    ? "clamp(60px,10vw,116px) clamp(20px,5vw,40px) clamp(50px,7vw,80px)"
    : last
    ? "clamp(46px,7vw,80px) clamp(20px,5vw,40px) clamp(56px,8vw,96px)"
    : "clamp(46px,7vw,80px) clamp(20px,5vw,40px)";

  return (
    <section
      id={id}
      className={`rb-reveal${className ? ` ${className}` : ""}`}
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
