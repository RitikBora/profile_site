"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
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
  // At the top the bar is exactly the content-column width (56rem = max-w-4xl,
  // 896px) so its edges line up with the framed content; on scroll it contracts
  // to a floating pill. Driven in rem (not viewport %) so the top width always
  // equals the content and the shrink stays visible at wide/laptop viewports.
  const width = useTransform(scrollY, [0, 100], ["56rem", "44rem"]);
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
          maxWidth: "100%",
          // At the top the bar is transparent/borderless/shadowless so it blends
          // into the page; on scroll the glass bg + border + shadow smoothly fade
          // in as it contracts to a floating pill (and fade back out at the top).
          backgroundColor: scrolled
            ? "color-mix(in oklch, var(--background) 80%, transparent)"
            : "transparent",
          borderColor: scrolled ? "var(--border)" : "transparent",
          boxShadow: scrolled ? "var(--shadow-lg)" : "0 0 0 0 transparent",
          transition:
            "background-color 0.5s cubic-bezier(0.22,1,0.36,1), border-color 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
        className="flex items-center gap-3 rounded-full border py-2 pl-2 pr-2.5 backdrop-blur-md"
      >
        {/* wordmark */}
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/images/profile_photo.png"
            alt="Ritik Bora"
            className="h-9 w-9 shrink-0 rounded-full border border-border object-cover"
          />
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
                className="relative px-2 py-0.5"
              >
                {hovered === i && (
                  <motion.span
                    layoutId="rb-nav-hover"
                    className="absolute inset-0 rounded-md bg-accent"
                    transition={{ type: "spring", stiffness: 500, damping: 34 }}
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
                    className="absolute inset-x-2 -bottom-0.5 z-10 h-px bg-em"
                    transition={{ type: "spring", stiffness: 500, damping: 34 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
          <ThemeToggle />
      </motion.nav>
    </div>
  );
}
