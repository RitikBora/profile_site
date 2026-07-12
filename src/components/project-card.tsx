import { Project } from "@/constants/projects";

/** A single project card (thumbnail, index, title, description, tech chips). */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="rb-pcard" href={project.url} target="_blank" rel="noopener noreferrer">
      <div className="rb-thumb">
        <img src={project.img} alt={project.n} />
      </div>
      <div style={{ padding: "15px 15px 16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", paddingTop: 6 }}>
          {project.tech.map((tag) => (
            <span key={tag} className="rb-chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
