import { Link } from "next-view-transitions";
import { PROJECTS } from "@/constants/projects";
import { EMAIL, RESUME_URL } from "@/constants/site";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { ProjectCarousel } from "@/components/project-carousel";
import { Socials } from "@/components/socials";
import { Typewriter } from "@/components/typewriter";

const ghostBtn = {
  fontWeight: 600,
  fontSize: 13,
  padding: "11px 20px",
  borderRadius: 9,
  border: "1px solid var(--border)",
  color: "var(--foreground)",
  textDecoration: "none",
} as const;

const specRow = {
  display: "grid",
  gridTemplateColumns: "104px 1fr",
  gap: 14,
  padding: "14px 0",
} as const;

export default function Home() {
  return (
    <div className="rb-root">
      {/* main fills the full 896px content column; horizontal padding lives on
          each Section so the divider lines run full-bleed to the frame. */}
      <main>
        <Section id="top" first>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <span className="rb-mono" style={{ fontSize: 12, letterSpacing: ".18em", color: "var(--em)" }}>
              $ whoami
            </span>
            <span className="rb-mono" style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 11, color: "var(--muted-foreground)" }}>
              <span className="rb-stat">
                <i></i>
                <b></b>
              </span>
              available for work
            </span>
          </div>

          {/* identity statement — line 1 static, line 2 typed */}
          <h1
            style={{
              margin: "20px 0 0",
              fontWeight: 700,
              fontSize: "clamp(33px,5.6vw,58px)",
              lineHeight: 1.06,
              letterSpacing: "-.025em",
            }}
          >
            <span style={{ display: "block" }}>I&apos;m Ritik —</span>
            <Typewriter text="I build the whole thing." className="rb-em" />
          </h1>

          <p
            style={{
              margin: "24px 0 0",
              maxWidth: 540,
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--muted-foreground)",
            }}
          >
            Senior developer who takes products from first commit to real users —
            code, team, and the growth around them. Currently fine-tuning AI models.
          </p>

          {/* mono spec rows */}
          <div className="rb-mono" style={{ marginTop: 34, fontSize: 14 }}>
            <div style={{ ...specRow, borderBottom: "1px solid var(--border)" }}>
              <span className="rb-dim">role</span>
              <span>senior software developer, miniOrange</span>
            </div>
            <div style={{ ...specRow, borderBottom: "1px solid var(--border)" }}>
              <span className="rb-dim">exp</span>
              <span>5+ years · MERN, Next.js, Java · cybersecurity</span>
            </div>
            <div style={specRow}>
              <span className="rb-dim">based</span>
              <span>Pune, India</span>
            </div>
          </div>

          {/* CTAs */}
          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rb-cta-ghost rb-mono"
              style={ghostBtn}
            >
              résumé.pdf ↓
            </a>
            <Link href="/about" className="rb-cta-ghost rb-mono" style={ghostBtn}>
              more about me →
            </Link>
          </div>
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
              style={ghostBtn}
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
