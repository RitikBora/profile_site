"use client";

import { useEffect, useState } from "react";
import { PROJECTS } from "@/constants/projects";
import { SectionLabel } from "@/components/section-label";
import { ProjectCarousel } from "@/components/project-carousel";

type TimelineItem = {
  date: string;
  title: string;
  org: string;
};

const TIMELINE: TimelineItem[] = [
  { date: "2024 — present", title: "Senior Software Engineer", org: "miniOrange" },
  { date: "2021 — 24", title: "Software Engineer", org: "miniOrange" },
  { date: "2020 — 21", title: "Software Developer Intern", org: "Copper Cloud" },
  { date: "2017 — 21", title: "B.E. E&TC", org: "Army Institute of Technology, Pune" },
];

const HERO_TEXT = "I build scalable web applications, end‑to‑end";
const EMAIL = "ritikbora2000@gmail.com";
const RESUME_URL = "https://drive.google.com/file/d/1W7bFQ3YLRe98T-NZwpWSKHS3hIjlG6He/view";
const GITHUB_URL = "https://github.com/RitikBora";
const LINKEDIN_URL = "https://www.linkedin.com/in/ritikbora";

export default function Home() {
  const [typed, setTyped] = useState("");

  // Typewriter hero
  useEffect(() => {
    let i = 0;
    let stepTimer: ReturnType<typeof setTimeout>;
    const tick = () => {
      setTyped(HERO_TEXT.slice(0, i));
      i++;
      if (i <= HERO_TEXT.length) stepTimer = setTimeout(tick, 30);
    };
    const startTimer = setTimeout(tick, 360);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(stepTimer);
    };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rb-reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rb-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="rb-root">
      {/* main fills the full 896px content column; horizontal padding lives on
          each section so the section divider lines run full-bleed to the frame. */}
      <main>
        <section
          id="top"
          className="rb-reveal"
          style={{ borderTop: 0, padding: "clamp(60px,10vw,116px) clamp(20px,5vw,40px) clamp(50px,7vw,80px)", scrollMarginTop: 72 }}
        >
          <div className="rb-mono" style={{ fontSize: 12, letterSpacing: ".18em", color: "var(--em)" }}>
            $ whoami
          </div>
          <h1
            style={{
              margin: "20px 0 0",
              fontWeight: 700,
              fontSize: "clamp(33px,5.6vw,58px)",
              lineHeight: 1.06,
              letterSpacing: "-.025em",
              textWrap: "balance",
            }}
          >
            <span>{typed}</span>
            <span className="rb-caret" />
          </h1>
          <div
            className="rb-mono"
            style={{
              marginTop: 26,
              fontSize: 12.5,
              color: "var(--muted-foreground)",
              display: "flex",
              flexDirection: "column",
              gap: 7,
            }}
          >
            <span>
              <span className="rb-dim">role</span>&nbsp;&nbsp;senior software developer, miniOrange
            </span>
            <span>
              <span className="rb-dim">exp&nbsp;</span>&nbsp;&nbsp;3+ years · MERN, Next.js, Java
            </span>
          </div>
        </section>

        <section
          id="about"
          className="rb-reveal"
          style={{ padding: "clamp(46px,7vw,80px) clamp(20px,5vw,40px)", borderTop: "1px solid var(--border)", scrollMarginTop: 72 }}
        >
          <SectionLabel>// about</SectionLabel>
          <div className="rb-about">
            <div className="rb-mono" style={{ fontSize: 14 }}>
              <div style={{ display: "grid", gridTemplateColumns: "104px 1fr", gap: 14, padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
                <span className="rb-dim">name</span>
                <span>Ritik Bora</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "104px 1fr", gap: 14, padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
                <span className="rb-dim">focus</span>
                <span>full&#8209;stack · MERN · Next.js</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "104px 1fr", gap: 14, padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
                <span className="rb-dim">domain</span>
                <span className="rb-em">cybersecurity</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "104px 1fr", gap: 14, padding: "14px 0" }}>
                <span className="rb-dim">based</span>
                <span>Pune, India</span>
              </div>
            </div>
            <img
              className="rb-photo"
              src="/images/about.png"
              alt="Ritik Bora"
              width={210}
              height={210}
              style={{
                width: 210,
                height: 210,
                borderRadius: 14,
                objectFit: "cover",
                transform: "rotate(3deg)",
                border: "4px solid var(--foreground)",
                boxShadow: "var(--shadow-xl)",
              }}
            />
          </div>
        </section>

        <section
          id="projects"
          className="rb-reveal"
          style={{ padding: "clamp(46px,7vw,80px) clamp(20px,5vw,40px)", borderTop: "1px solid var(--border)", scrollMarginTop: 72 }}
        >
          <ProjectCarousel projects={PROJECTS} />
        </section>

        <section
          id="career"
          className="rb-reveal"
          style={{ padding: "clamp(46px,7vw,80px) clamp(20px,5vw,40px)", borderTop: "1px solid var(--border)", scrollMarginTop: 72 }}
        >
          <SectionLabel>// career</SectionLabel>
          <div className="rb-timeline" style={{ marginTop: 26, borderLeft: "2px solid var(--border)", paddingLeft: 26, display: "flex", flexDirection: "column", gap: 30 }}>
            {TIMELINE.map((t) => (
              <div key={t.date} className="rb-tnode" style={{ position: "relative" }}>
                <span className="rb-tdot" style={{ position: "absolute", left: -34, top: 5, width: 11, height: 11, borderRadius: "50%", background: "var(--border)" }} />
                <div className="rb-tdate rb-mono" style={{ fontSize: 11.5, color: "var(--muted-foreground)", letterSpacing: ".04em" }}>
                  {t.date}
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginTop: 5 }}>{t.title}</div>
                <div className="rb-mono rb-dim" style={{ fontSize: 11.5, marginTop: 4 }}>
                  {t.org}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rb-reveal"
          style={{ padding: "clamp(46px,7vw,80px) clamp(20px,5vw,40px) clamp(56px,8vw,96px)", borderTop: "1px solid var(--border)", scrollMarginTop: 72 }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <SectionLabel>// contact</SectionLabel>
            <div className="rb-mono" style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 11, color: "var(--muted-foreground)" }}>
              <span className="rb-stat">
                <i></i>
                <b></b>
              </span>
              available for work
            </div>
          </div>
          <h2 style={{ margin: "22px 0 0", fontWeight: 700, fontSize: "clamp(30px,4.6vw,46px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
            Let&apos;s build something
            <br />
            <span className="rb-em">worth shipping.</span>
          </h2>
          <a
            className="rb-mono"
            href={`mailto:${EMAIL}`}
            style={{
              display: "inline-block",
              marginTop: 26,
              fontSize: "clamp(15px,2vw,19px)",
              color: "var(--foreground)",
              textDecoration: "none",
              borderBottom: "1px solid var(--em)",
              paddingBottom: 4,
            }}
          >
            {EMAIL} →
          </a>
          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={`mailto:${EMAIL}`}
              className="rb-cta-primary"
              style={{
                fontWeight: 600,
                fontSize: 13,
                padding: "11px 20px",
                borderRadius: 9,
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                textDecoration: "none",
              }}
            >
              hire me →
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rb-cta-ghost"
              style={{
                fontWeight: 600,
                fontSize: 13,
                padding: "11px 20px",
                borderRadius: 9,
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                textDecoration: "none",
              }}
            >
              résumé.pdf ↓
            </a>
          </div>
          <div style={{ marginTop: 36, paddingTop: 20, borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
            <a className="rb-foot rb-mono" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11 }}>
              github ↗
            </a>
            <a className="rb-foot rb-mono" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11 }}>
              linkedin ↗
            </a>
            <span className="rb-mono rb-dim" style={{ fontSize: 11, marginLeft: "auto" }}>
              pune, in · UTC+5:30
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
