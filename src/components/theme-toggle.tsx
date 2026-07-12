"use client";

import { useEffect, useState } from "react";

/**
 * Sun/moon toggle. Reads the initial theme from the `dark` class that the
 * pre-hydration bootstrap script (in layout.tsx) applies, then keeps it in
 * sync with <html> + localStorage.
 */
export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("rb-theme", next ? "dark" : "light");
    } catch (e) {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-border bg-transparent text-foreground transition-colors hover:bg-accent"
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
