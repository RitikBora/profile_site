"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  idx: string;
  n: string;
  desc: string;
  tech: string[];
  img: string;
  url: string;
};

type TimelineItem = {
  date: string;
  title: string;
  org: string;
};

const PROJECTS: Project[] = [
  {
    idx: "01",
    n: "Crypto Screener & Exchange",
    desc: "Track and trade across global crypto markets — all in one hub.",
    tech: ["Next.js", "Web3", "shadcn"],
    img: "/images/xchange.png",
    url: "https://xchange.ritikboradev.com/",
  },
  {
    idx: "02",
    n: "MeetWise",
    desc: "Smart, seamless video meetings built for real collaboration.",
    tech: ["WebRTC", "WebSockets", "React"],
    img: "/images/meetwise.png",
    url: "https://meetwise.ritikboradev.com/",
  },
  {
    idx: "03",
    n: "ChessMates",
    desc: "Peer-to-peer realtime chess, right in the browser.",
    tech: ["React", "WebSockets"],
    img: "/images/chess.png",
    url: "https://chess.ritikboradev.com/",
  },
  {
    idx: "04",
    n: "TokenForge",
    desc: "Effortless token creation and airdrop distribution for Web3.",
    tech: ["React", "Web3", "dApps"],
    img: "/images/token_forge.png",
    url: "https://tokenforge.ritikboradev.com/",
  },
];

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

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Home() {
  const [typed, setTyped] = useState("");
  const trackRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(`01–03 / ${pad(PROJECTS.length)}`);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

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

  // Projects carousel
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const card = track.querySelector<HTMLElement>(".rb-pcard");
      if (!card) return;
      const cw = card.getBoundingClientRect().width + 18;
      const first = Math.round(track.scrollLeft / cw);
      const vis = Math.max(1, Math.round(track.clientWidth / cw));
      const total = PROJECTS.length;
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
  }, []);

  const scrollByDir = (dir: number) => {
    const t = trackRef.current;
    if (!t) return;
    t.scrollBy({ left: dir * t.clientWidth * 0.92, behavior: "smooth" });
  };

  return (
    <div className="rb-root">
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "0 clamp(20px,5vw,40px)" }}>
        <section
          id="top"
          className="rb-reveal"
          style={{ borderTop: 0, padding: "clamp(60px,10vw,116px) 0 clamp(50px,7vw,80px)", scrollMarginTop: 72 }}
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
          style={{ padding: "clamp(46px,7vw,80px) 0", borderTop: "1px solid var(--border)", scrollMarginTop: 72 }}
        >
          <div className="rb-mono" style={{ fontSize: 12, letterSpacing: ".16em", color: "color-mix(in oklch,var(--foreground) 42%,var(--background))" }}>
            // about
          </div>
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
          style={{ padding: "clamp(46px,7vw,80px) 0", borderTop: "1px solid var(--border)", scrollMarginTop: 72 }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div className="rb-mono" style={{ fontSize: 12, letterSpacing: ".16em", color: "color-mix(in oklch,var(--foreground) 42%,var(--background))" }}>
              // projects
            </div>
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
          <div id="rb-track" className="rb-track" ref={trackRef} style={{ marginTop: 22 }}>
            {PROJECTS.map((p) => (
              <a key={p.idx} className="rb-pcard" href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="rb-thumb">
                  <img src={p.img} alt={p.n} />
                </div>
                <div style={{ padding: "15px 15px 16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 9 }}>
                    <span className="rb-mono rb-em" style={{ fontSize: 10.5, fontWeight: 500 }}>
                      {p.idx}
                    </span>
                    <span className="rb-ptitle" style={{ fontWeight: 600, fontSize: 14.5, lineHeight: 1.25 }}>
                      {p.n}
                    </span>
                    <span className="rb-arrow rb-em" style={{ marginLeft: "auto", fontSize: 13 }}>
                      ↗
                    </span>
                  </div>
                  <div style={{ fontSize: 12, lineHeight: 1.5, color: "var(--muted-foreground)" }}>{p.desc}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", paddingTop: 6 }}>
                    {p.tech.map((tag) => (
                      <span key={tag} className="rb-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          id="career"
          className="rb-reveal"
          style={{ padding: "clamp(46px,7vw,80px) 0", borderTop: "1px solid var(--border)", scrollMarginTop: 72 }}
        >
          <div className="rb-mono" style={{ fontSize: 12, letterSpacing: ".16em", color: "color-mix(in oklch,var(--foreground) 42%,var(--background))" }}>
            // career
          </div>
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
          style={{ padding: "clamp(46px,7vw,80px) 0 clamp(56px,8vw,96px)", borderTop: "1px solid var(--border)", scrollMarginTop: 72 }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div className="rb-mono" style={{ fontSize: 12, letterSpacing: ".16em", color: "color-mix(in oklch,var(--foreground) 42%,var(--background))" }}>
              // contact
            </div>
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
