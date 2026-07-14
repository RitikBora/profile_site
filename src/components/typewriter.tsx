"use client";

import { useEffect, useState } from "react";

/**
 * Types out `text` one character at a time with the blinking rb-caret. Keeps the
 * untyped remainder in-DOM (invisible) so width/height never reflow.
 */
export function Typewriter({
  text,
  className,
  startDelay = 420,
  speed = 45,
}: {
  text: string;
  className?: string;
  startDelay?: number;
  speed?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    let step: ReturnType<typeof setTimeout>;
    const tick = () => {
      setCount(i);
      i++;
      if (i <= text.length) step = setTimeout(tick, speed);
    };
    const start = setTimeout(tick, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(step);
    };
  }, [text, startDelay, speed]);

  const shown = text.slice(0, count);

  return (
    <span className={className} style={{ display: "block", whiteSpace: "nowrap" }}>
      {shown}
      <span className="rb-caret" />
      <span aria-hidden style={{ opacity: 0 }}>
        {text.slice(shown.length)}
      </span>
    </span>
  );
}
