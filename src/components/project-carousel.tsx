"use client";

import { useEffect, useRef, useState } from "react";
import { Project } from "@/constants/projects";
import { ProjectCard } from "./project-card";
import { SectionLabel } from "./section-label";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * Horizontal "reel" of project cards with a live counter and prev/next arrows.
 * The home page's curated project highlight — holds the full set behind scroll.
 */
export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(`01–03 / ${pad(projects.length)}`);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const card = track.querySelector<HTMLElement>(".rb-pcard");
      if (!card) return;
      const cw = card.getBoundingClientRect().width + 18;
      const first = Math.round(track.scrollLeft / cw);
      const vis = Math.max(1, Math.round(track.clientWidth / cw));
      const total = projects.length;
      const last = Math.min(first + vis, total);
      setCount(`${pad(first + 1)}–${pad(last)} / ${pad(total)}`);
      setAtStart(track.scrollLeft <= 2);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [projects.length]);

  const scrollByDir = (dir: number) => {
    const t = trackRef.current;
    if (!t) return;
    t.scrollBy({ left: dir * t.clientWidth * 0.92, behavior: "smooth" });
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <SectionLabel>// projects</SectionLabel>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span className="rb-mono rb-dim" style={{ fontSize: 11 }}>
            {count}
          </span>
          <div style={{ display: "flex", gap: 7 }}>
            <button
              onClick={() => scrollByDir(-1)}
              aria-label="Previous"
              className={`rb-navbtn rb-mono ${!atStart ? "rb-active" : ""}`}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--foreground)",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              ←
            </button>
            <button
              onClick={() => scrollByDir(1)}
              aria-label="Next"
              className={`rb-navbtn rb-mono ${!atEnd ? "rb-active" : ""}`}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--foreground)",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
      <div id="rb-track" className="rb-track" ref={trackRef} style={{ marginTop: 8 }}>
        {projects.map((p) => (
          <ProjectCard key={p.idx} project={p} />
        ))}
      </div>
    </>
  );
}
