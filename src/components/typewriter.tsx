"use client";

import { useEffect, useState } from "react";

/**
 * Types out `lines` one character at a time (flowing across the fixed line
 * breaks) with the blinking rb-caret. Each line is a nowrap block and keeps its
 * untyped remainder in-DOM (invisible), so width/height never reflow.
 */
export function Typewriter({
  lines,
  className,
  startDelay = 420,
  speed = 45,
}: {
  lines: string[];
  className?: string;
  startDelay?: number;
  speed?: number;
}) {
  const total = lines.reduce((sum, l) => sum + l.length, 0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    let step: ReturnType<typeof setTimeout>;
    const tick = () => {
      setCount(i);
      i++;
      if (i <= total) step = setTimeout(tick, speed);
    };
    const start = setTimeout(tick, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(step);
    };
  }, [total, startDelay, speed]);

  const done = count >= total;

  return (
    <>
      {lines.map((line, li) => {
        const start = lines.slice(0, li).reduce((sum, l) => sum + l.length, 0);
        const shownLen = Math.max(0, Math.min(line.length, count - start));
        const shown = line.slice(0, shownLen);
        const typingHere = count >= start && count < start + line.length;
        const showCaret = typingHere || (done && li === lines.length - 1);
        return (
          <span key={li} className={className} style={{ display: "block", whiteSpace: "nowrap" }}>
            {shown}
            {showCaret && <span className="rb-caret" />}
            <span aria-hidden style={{ opacity: 0 }}>
              {line.slice(shownLen)}
            </span>
          </span>
        );
      })}
    </>
  );
}
