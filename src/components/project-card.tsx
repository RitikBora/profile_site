import { Project } from "@/constants/projects";
import { TECH_ICONS } from "@/constants/tech";

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
        {/* Overlapping circular tech badges — matches the template's stack. */}
        <div className="flex flex-wrap items-center" style={{ marginTop: "auto", paddingTop: 10 }}>
          {project.tech.map((tag) => {
            const Icon = TECH_ICONS[tag];
            return Icon ? (
              <div
                key={tag}
                tabIndex={0}
                title={tag}
                aria-label={tag}
                className="-mr-3 flex items-center justify-center rounded-full border border-border bg-accent p-1 text-muted-foreground transition-colors hover:z-10 hover:text-em"
              >
                <Icon className="h-4 w-4 shrink-0" />
              </div>
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
