import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { Timeline } from "@/components/timeline";
import { Collage } from "@/components/collage";

export const metadata: Metadata = {
  title: "About | Ritik Bora",
  description:
    "Ritik Bora — senior software engineer at miniOrange building scalable, security-minded web applications end-to-end. MERN, Next.js, Java.",
};

// NOTE: draft bio assembled from known facts — rewrite in your own voice before launch.
const BIO: string[] = [
  "I'm a senior software engineer at miniOrange, where I build scalable, security-minded web applications end to end. Over the last 3+ years I've worked across the whole stack — MERN, Next.js, and Java — taking products from first commit to production.",
  "My work sits at the intersection of full-stack engineering and cybersecurity: shipping features that thousands of teams rely on, while keeping authentication, authorization, and data protection front and center.",
  "Outside of the day job I like building things end to end — realtime apps, Web3 experiments, and developer tools — mostly to learn how systems behave when you own every layer. I'm based in Pune, India.",
];

export default function AboutPage() {
  return (
    <div className="rb-root">
      <main>
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
              {BIO.map((para, i) => (
                <p key={i} style={{ margin: 0 }}>
                  {para}
                </p>
              ))}
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
                flexShrink: 0,
              }}
            />
          </div>
        </Section>

        <Section id="offclock">
          <SectionLabel>// off the clock</SectionLabel>
          <div style={{ marginTop: 8 }}>
            <Collage />
          </div>
        </Section>

        <Section id="career" last>
          <SectionLabel>// career</SectionLabel>
          <Timeline />
        </Section>
      </main>
    </div>
  );
}
