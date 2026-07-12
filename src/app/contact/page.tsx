import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { Socials } from "@/components/socials";

export default function ContactPage() {
  return (
    <div className="rb-root">
      <main>
        <Section id="contact" first last>
          <SectionLabel>// contact</SectionLabel>
          <h1 style={{ margin: "20px 0 0", fontWeight: 700, fontSize: "clamp(33px,5.6vw,58px)", lineHeight: 1.06, letterSpacing: "-.025em" }}>
            Contact
          </h1>
          <p className="rb-mono rb-dim" style={{ marginTop: 18, fontSize: 13 }}>
            placeholder — mail form + blurb land here in Phase 2
          </p>
          <Socials />
        </Section>
      </main>
    </div>
  );
}
