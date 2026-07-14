"use client";

import { useEffect, useState } from "react";

type Segment = { text: string; className?: string };
type Line = string | Segment[];

/**
 * Types out `lines` one character at a time (flowing across the fixed line
 * breaks) with the blinking rb-caret. A line can be a plain string or an array
 * of {text, className} segments, so part of a line can be accented (e.g. green).
 * Each line is a nowrap block and keeps its untyped remainder in-DOM
 * (invisible), so width/height never reflow.
 */
export function Typewriter({
  lines,
  startDelay = 420,
  speed = 45,
}: {
  lines: Line[];
  startDelay?: number;
  speed?: number;
}) {
  const norm: Segment[][] = lines.map((l) =>
    typeof l === "string" ? [{ text: l }] : l
  );
  const total = norm.reduce(
    (sum, segs) => sum + segs.reduce((s, seg) => s + seg.text.length, 0),
    0
  );

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
  let offset = 0;

  return (
    <>
      {norm.map((segs, li) => (
        <span key={li} style={{ display: "block", whiteSpace: "nowrap" }}>
          {segs.map((seg, si) => {
            const segStart = offset;
            offset += seg.text.length;
            const segShown = Math.max(0, Math.min(seg.text.length, count - segStart));
            const typingHere = count >= segStart && count < segStart + seg.text.length;
            const isLast = li === norm.length - 1 && si === segs.length - 1;
            const showCaret = typingHere || (done && isLast);
            return (
              <span key={si} className={seg.className}>
                {seg.text.slice(0, segShown)}
                {showCaret && <span className="rb-caret" />}
                <span aria-hidden style={{ opacity: 0 }}>
                  {seg.text.slice(segShown)}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
}
