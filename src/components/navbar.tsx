"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  // Aceternity-style shrink: full width at the top, contracts to a pill on scroll.
  const width = useTransform(scrollY, [0, 100], ["100%", "78%"]);
  const y = useTransform(scrollY, [0, 100], [0, 6]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3">
      <motion.nav
        style={{
          width,
          y,
          maxWidth: 1180,
          background: "color-mix(in oklch, var(--background) 80%, transparent)",
          boxShadow: scrolled ? "var(--shadow-lg)" : "0 0 0 0 transparent",
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="flex items-center gap-3 rounded-full border border-border px-4 py-2 backdrop-blur-md"
      >
        {/* wordmark */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-em" />
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
          </span>
          <span className="whitespace-nowrap font-mono text-[12.5px] text-foreground">
            ritik-bora.dev
          </span>
        </Link>

        {/* nav links */}
        <div className="ml-auto flex items-center">
          {NAV_ITEMS.map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative px-3 py-1.5"
              >
                {hovered === i && (
                  <motion.span
                    layoutId="rb-nav-hover"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10 font-mono text-xs transition-colors",
                    active ? "text-em" : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.label}
                </span>
                {active && (
                  <motion.span
                    layoutId="rb-nav-active"
                    className="absolute inset-x-3 -bottom-0.5 z-10 h-px bg-em"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="ml-1">
          <ThemeToggle />
        </div>
      </motion.nav>
    </div>
  );
}
