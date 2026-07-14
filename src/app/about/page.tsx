import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { Timeline } from "@/components/timeline";
import { Collage } from "@/components/collage";

export const metadata: Metadata = {
  title: "About | Ritik Bora",
  description:
    "Ritik Bora — senior software developer at miniOrange building products end to end: engineering, teams, and the growth around them.",
};

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Java",
  "AWS",
  "Tailwind",
  "WebRTC",
  "Web3",
];

const chipBase = { fontSize: 11, padding: "5px 12px" } as const;
const chipAccent = { ...chipBase, borderColor: "var(--em)", color: "var(--em)" } as const;

export default function AboutPage() {
  return (
    <div className="rb-root">
      <main>
        {/* about lead */}
        <Section id="about" first>
          <SectionLabel>// about</SectionLabel>
          <h1
            style={{
              margin: "20px 0 0",
              fontWeight: 700,
              fontSize: "clamp(33px,5.6vw,58px)",
              lineHeight: 1.06,
              letterSpacing: "-.025em",
            }}
          >
            About
          </h1>

          <div className="rb-about-lead">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                maxWidth: 560,
                fontSize: 15,
                lineHeight: 1.75,
                color: "var(--foreground)",
              }}
            >
              <p style={{ margin: 0 }}>
                I&apos;m <span className="rb-em">Ritik</span> — a senior software
                developer at <span className="rb-em">miniOrange</span>, where I build
                scalable, security-minded products end to end. Five-plus years in, I&apos;ve
                owned everything from first commit to production — and increasingly the
                go-to-market and revenue side too.
              </p>
              <p style={{ margin: 0 }}>
                I&apos;ve led cross-functional teams and shipped features thousands of teams
                rely on. My work sits where full-stack engineering meets cybersecurity.
              </p>
              <p style={{ margin: 0 }}>
                Off the clock I&apos;m a relentless builder — realtime apps, Web3 experiments,
                dev tools — mostly to learn how systems behave when I own every layer. Right
                now: fine-tuning AI models.
              </p>
            </div>
            <img
              className="rb-photo"
              src="/images/about.png"
              alt="Ritik Bora"
              width={220}
              height={270}
              style={{
                width: 220,
                height: 270,
                borderRadius: 14,
                objectFit: "cover",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-xl)",
                flexShrink: 0,
              }}
            />
          </div>
        </Section>

        {/* off the clock */}
        <Section id="offclock">
          <SectionLabel>// off the clock</SectionLabel>
          <div style={{ marginTop: 8 }}>
            <Collage />
          </div>
        </Section>

        {/* stack */}
        <Section id="stack">
          <SectionLabel>// stack</SectionLabel>
          <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {STACK.map((t) => {
              const accent = t === "React" || t === "Next.js";
              return (
                <span key={t} className="rb-chip" style={accent ? chipAccent : chipBase}>
                  {t}
                </span>
              );
            })}
          </div>
        </Section>

        {/* career */}
        <Section id="career" last>
          <SectionLabel>// career</SectionLabel>
          <Timeline />
        </Section>
      </main>
    </div>
  );
}
