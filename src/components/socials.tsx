import { GITHUB_URL, LINKEDIN_URL } from "@/constants/site";

/** Footer row: github / linkedin links + location. */
export function Socials() {
  return (
    <div style={{ marginTop: 36, paddingTop: 20, borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
      <a className="rb-foot rb-mono" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11 }}>
        github ↗
      </a>
      <a className="rb-foot rb-mono" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11 }}>
        linkedin ↗
      </a>
      <span className="rb-mono rb-dim" style={{ fontSize: 11, marginLeft: "auto" }}>
        pune, in · UTC+5:30
      </span>
    </div>
  );
}
