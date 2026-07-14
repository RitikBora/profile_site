import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { Timeline } from "@/components/timeline";
import { Collage } from "@/components/collage";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About | Ritik Bora",
  description:
    "Ritik Bora — senior software developer at miniOrange building products end to end: engineering, teams, and the growth around them.",
};

const TESTIMONIALS = [
  {
    quote: (
      <>
        &ldquo;Ritik&apos;s technical prowess as a software developer is{" "}
        <span className="rb-em">truly exceptional</span>. His ability to dissect complex
        problems and devise innovative solutions is unparalleled. He not only led by example
        but mentored junior team members, fostering a collaborative and productive team.&rdquo;
      </>
    ),
    author: "kuldeep patil · engineering lead, miniorange",
  },
  {
    quote: (
      <>
        &ldquo;Intuitive and powerful. Working with Ritik has been{" "}
        <span className="rb-em">a game-changer for our team</span>.&rdquo;
      </>
    ),
    author: "aditya reddy · team lead (atlassian), miniorange",
  },
];

export default function AboutPage() {
  return (
    <div className="rb-root">
      <main>
        {/* about lead */}
        <Section id="about" first noReveal>
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

          <Reveal className="rb-about-lead rb-blur-up">
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
              src="/images/Goa.png"
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
          </Reveal>
        </Section>

        {/* off the clock */}
        <Section id="offclock">
          <SectionLabel>// off the clock</SectionLabel>
          <div style={{ marginTop: 44 }}>
            <Collage />
          </div>
        </Section>

        {/* career */}
        <Section id="career">
          <SectionLabel>// career</SectionLabel>
          <Timeline />
        </Section>

        {/* kind words */}
        <Section id="kind-words" last>
          <SectionLabel>// kind words</SectionLabel>
          <div style={{ marginTop: 30, display: "flex", flexDirection: "column" }}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={t.author}
                className="rb-blur-up"
                style={{
                  padding: i === 0 ? "0 0 32px" : "32px 0 0",
                  borderTop: i === 0 ? undefined : "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(16px,1.9vw,20px)",
                    lineHeight: 1.55,
                    fontWeight: 500,
                    letterSpacing: "-.01em",
                    maxWidth: 640,
                  }}
                >
                  {t.quote}
                </p>
                <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 26, height: 1, background: "var(--em)" }} />
                  <span className="rb-mono" style={{ fontSize: 11.5, color: "var(--muted-foreground)" }}>
                    {t.author}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
