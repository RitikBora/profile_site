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
                I&apos;m <span className="rb-em">Ritik</span>. For the past five years I&apos;ve
                been building security products at <span className="rb-em">miniOrange</span> —
                the identity and login systems companies quietly run on. I like owning things
                end to end, so I&apos;ve had a hand in most of it: the first commit, the messy
                middle, and getting it live for real users.
              </p>
              <p style={{ margin: 0 }}>
                Along the way I&apos;ve led small teams and shipped features a lot of companies
                now depend on. Lately I&apos;ve been pulled past the code too — into how a
                product actually reaches people and pays for itself. Turns out I enjoy that
                side as much as the engineering.
              </p>
              <p style={{ margin: 0 }}>
                Outside work, I&apos;m usually still building — a realtime app, a Web3
                experiment, some dev tool nobody asked for — mostly to see how things hold up
                when I&apos;m the one holding every piece. Right now that curiosity&apos;s
                pointed at AI: I&apos;m deep in fine-tuning models.
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
