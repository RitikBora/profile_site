"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

type DocumentWithViewTransitions = Document & {
  startViewTransition?: (cb: () => void | Promise<void>) => {
    ready: Promise<void>;
    finished: Promise<void>;
  };
};

/**
 * Sun/moon toggle. Uses the View Transitions API for a circular clip-reveal
 * expanding from the click point (adapted from the linkedin project). Falls
 * back to an instant switch when unsupported or reduced-motion is on.
 */
export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const applyTheme = (next: boolean) => {
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("rb-theme", next ? "dark" : "light");
    } catch (e) {}
  };

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = !dark;
    const doc =
      typeof document !== "undefined"
        ? (document as DocumentWithViewTransitions)
        : null;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!doc?.startViewTransition || reduced) {
      applyTheme(next);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    // Scope the root-transition override to this toggle only (route cross-fades
    // keep their default animation).
    doc.documentElement.classList.add("theme-vt");
    const transition = doc.startViewTransition(() => {
      flushSync(() => applyTheme(next));
    });

    transition.ready.then(() => {
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );
      doc.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 450,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });

    transition.finished.finally(() => {
      doc.documentElement.classList.remove("theme-vt");
    });
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-transparent text-foreground transition-colors hover:bg-accent"
    >
      {!dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
        </svg>
      )}
    </button>
  );
}
