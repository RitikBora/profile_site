import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";

export default function AboutPage() {
  return (
    <div className="rb-root">
      <main>
        <Section id="about" first>
          <SectionLabel>// about</SectionLabel>
          <h1 style={{ margin: "20px 0 0", fontWeight: 700, fontSize: "clamp(33px,5.6vw,58px)", lineHeight: 1.06, letterSpacing: "-.025em" }}>
            About
          </h1>
          <p className="rb-mono rb-dim" style={{ marginTop: 18, fontSize: 13 }}>
            placeholder — bio + career timeline land here in Phase 2
          </p>
        </Section>
      </main>
    </div>
  );
}
