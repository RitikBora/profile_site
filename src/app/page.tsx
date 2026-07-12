"use client";

import { useEffect, useState } from "react";
import { PROJECTS } from "@/constants/projects";
import { EMAIL, RESUME_URL } from "@/constants/site";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { AboutCard } from "@/components/about-card";
import { ProjectCarousel } from "@/components/project-carousel";
import { Timeline } from "@/components/timeline";
import { Socials } from "@/components/socials";

const HERO_TEXT = "I build scalable web applications, end‑to‑end";

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
          each Section so the divider lines run full-bleed to the frame. */}
      <main>
        <Section id="top" first>
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
        </Section>

        <Section id="about">
          <SectionLabel>// about</SectionLabel>
          <AboutCard />
        </Section>

        <Section id="projects">
          <ProjectCarousel projects={PROJECTS} />
        </Section>

        <Section id="career">
          <SectionLabel>// career</SectionLabel>
          <Timeline />
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
          <Socials />
        </Section>
      </main>
    </div>
  );
}
