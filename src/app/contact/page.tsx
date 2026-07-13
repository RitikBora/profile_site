import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { ContactForm } from "@/components/contact-form";
import { EMAIL, RESUME_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact | Ritik Bora",
  description:
    "Get in touch with Ritik Bora — open to senior full-stack roles and freelance work.",
};

const cardClass = "rounded-2xl border border-border bg-card p-6 shadow-xl md:p-7";
const linkLabel = "rb-mono mb-1.5 block text-[11px] tracking-wide text-muted-foreground";

export default function ContactPage() {
  return (
    <div className="rb-root">
      <main>
        <Section id="contact" first last>
          <SectionLabel>// contact</SectionLabel>
          <h1 style={{ margin: "20px 0 0", fontWeight: 700, fontSize: "clamp(30px,4.6vw,52px)", lineHeight: 1.08, letterSpacing: "-.025em" }}>
            Let&apos;s build something
            <br />
            <span className="rb-em">worth shipping.</span>
          </h1>
          <p className="rb-mono rb-dim" style={{ marginTop: 18, fontSize: 13, lineHeight: 1.6, maxWidth: 520 }}>
            Open to senior full-stack roles and freelance work — tell me what you&apos;re building.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1fr]">
            {/* info card */}
            <div className={`${cardClass} flex flex-col gap-6`}>
              <div className="rb-mono flex items-center gap-2.5 text-[11px] text-muted-foreground">
                <span className="rb-stat">
                  <i></i>
                  <b></b>
                </span>
                available for work
              </div>

              <div>
                <span className={linkLabel}>email</span>
                <a href={`mailto:${EMAIL}`} className="rb-mono text-sm text-foreground transition-colors hover:text-em">
                  {EMAIL} →
                </a>
              </div>

              <div>
                <span className={linkLabel}>résumé</span>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="rb-mono text-sm text-foreground transition-colors hover:text-em">
                  résumé.pdf ↓
                </a>
              </div>

              <div>
                <span className={linkLabel}>elsewhere</span>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="rb-foot rb-mono text-[12px]">
                    github ↗
                  </a>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="rb-foot rb-mono text-[12px]">
                    linkedin ↗
                  </a>
                </div>
              </div>

              <div className="rb-mono rb-dim mt-auto text-[11px]">pune, in · UTC+5:30</div>
            </div>

            {/* form card */}
            <ContactForm />
          </div>
        </Section>
      </main>
    </div>
  );
}
