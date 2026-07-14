import { Project } from "@/constants/projects";
import { TECH_ICONS } from "@/constants/tech";
import { TechBadge } from "./tech-badge";

/** A single project card (thumbnail, index, title, description, tech chips). */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="rb-pcard" href={project.url} target="_blank" rel="noopener noreferrer">
      <div className="rb-thumb">
        <img src={project.img} alt={project.n} style={{ objectPosition: project.pos }} />
      </div>
      <div className="rb-pcard-body" style={{ padding: "16px 17px 18px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 9 }}>
          <span className="rb-mono rb-em" style={{ fontSize: 10.5, fontWeight: 500 }}>
            {project.idx}
          </span>
          <span className="rb-ptitle" style={{ fontWeight: 600, fontSize: 14.5, lineHeight: 1.25 }}>
            {project.n}
          </span>
          <span className="rb-arrow rb-em" style={{ marginLeft: "auto", fontSize: 13 }}>
            ↗
          </span>
        </div>
        <div style={{ fontSize: 12, lineHeight: 1.5, color: "var(--muted-foreground)" }}>{project.desc}</div>
        {/* Overlapping circular tech badges that expand to reveal the name on
            hover (icon + width-animated name), like the template. */}
        <div className="flex flex-wrap items-center" style={{ marginTop: "auto", paddingTop: 10 }}>
          {project.tech.map((tag) => {
            const Icon = TECH_ICONS[tag];
            return Icon ? (
              <TechBadge key={tag} label={tag} />
            ) : (
              <span key={tag} className="rb-chip ml-4 first:ml-0">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </a>
  );
}
