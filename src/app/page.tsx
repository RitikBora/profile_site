"use client";

import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";
import { PROJECTS } from "@/constants/projects";
import { EMAIL, RESUME_URL } from "@/constants/site";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { AboutCard } from "@/components/about-card";
import { ProjectCarousel } from "@/components/project-carousel";
import { Socials } from "@/components/socials";

const HERO_LINE1 = "I build scalable web";
const HERO_LINE2 = "applications, end‑to‑end";
const HERO_LEN = HERO_LINE1.length + HERO_LINE2.length;

export default function Home() {
  const [count, setCount] = useState(0);

  // Typewriter hero — two fixed lines so the wrap point never reflows.
  useEffect(() => {
    let i = 0;
    let stepTimer: ReturnType<typeof setTimeout>;
    const tick = () => {
      setCount(i);
      i++;
      if (i <= HERO_LEN) stepTimer = setTimeout(tick, 30);
    };
    const startTimer = setTimeout(tick, 360);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(stepTimer);
    };
  }, []);

  const shown1 = HERO_LINE1.slice(0, Math.min(count, HERO_LINE1.length));
  const shown2 = count > HERO_LINE1.length ? HERO_LINE2.slice(0, count - HERO_LINE1.length) : "";
  const onLine2 = count >= HERO_LINE1.length;

  return (
    <div className="rb-root">
      {/* main fills the full 896px content column; horizontal padding lives on
          each Section so the divider lines run full-bleed to the frame. */}
      <main>
        <Section id="top" first>
          <div className="rb-mono" style={{ fontSize: 12, letterSpacing: ".18em", color: "var(--em)" }}>
            $ whoami
          </div>
          {/* Two fixed lines: each keeps its untyped remainder in-DOM (invisible)
              so line width + total height stay constant — no reflow as it types. */}
          <h1
            style={{
              margin: "20px 0 0",
              fontWeight: 700,
              fontSize: "clamp(33px,5.6vw,58px)",
              lineHeight: 1.06,
              letterSpacing: "-.025em",
            }}
          >
            <span style={{ display: "block", whiteSpace: "nowrap" }}>
              {shown1}
              {!onLine2 && <span className="rb-caret" />}
              <span aria-hidden style={{ opacity: 0 }}>{HERO_LINE1.slice(shown1.length)}</span>
            </span>
            <span style={{ display: "block", whiteSpace: "nowrap" }}>
              {shown2}
              {onLine2 && <span className="rb-caret" />}
              <span aria-hidden style={{ opacity: 0 }}>{HERO_LINE2.slice(shown2.length)}</span>
            </span>
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
              <span className="rb-dim">exp&nbsp;</span>&nbsp;&nbsp;5+ years · MERN, Next.js, Java, AWS
            </span>
          </div>
        </Section>

        <Section id="about">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <SectionLabel>// about</SectionLabel>
            <Link href="/about" className="rb-morelink">
              more about me →
            </Link>
          </div>
          <AboutCard />
        </Section>

        <Section id="projects">
          <ProjectCarousel projects={PROJECTS} />
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 18 }}>
            <Link href="/projects" className="rb-morelink">
              more projects →
            </Link>
          </div>
        </Section>

        <Section id="contact" last>
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
            <Link
              href="/contact"
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
              get in touch →
            </Link>
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
          <Socials />
        </Section>
      </main>
    </div>
  );
}
