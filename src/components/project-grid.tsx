import { Project } from "@/constants/projects";
import { ProjectCard } from "./project-card";

/** Full scannable grid of all projects (the /projects archive). */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-7 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.idx} project={p} />
      ))}
    </div>
  );
}
