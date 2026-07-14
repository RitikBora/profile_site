import type { Metadata } from "next";
import { PROJECTS } from "@/constants/projects";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { ProjectGrid } from "@/components/project-grid";

export const metadata: Metadata = {
  title: "Projects | Ritik Bora",
  description:
    "Projects by Ritik Bora — full-stack web apps shipped end to end: crypto exchange, realtime video and chess, Web3 tooling.",
};

export default function ProjectsPage() {
  return (
    <div className="rb-root">
      <main>
        <Section id="projects" first last>
          <SectionLabel>// projects</SectionLabel>
          <h1
            style={{
              margin: "20px 0 0",
              fontWeight: 700,
              fontSize: "clamp(33px,5.6vw,58px)",
              lineHeight: 1.06,
              letterSpacing: "-.025em",
            }}
          >
            Projects
          </h1>
          <p className="rb-mono rb-dim" style={{ marginTop: 16, fontSize: 13, lineHeight: 1.6, maxWidth: 520 }}>
            Things I&apos;ve built end to end — each one deployed and clickable.
          </p>
          <ProjectGrid projects={PROJECTS} />
        </Section>
      </main>
    </div>
  );
}
