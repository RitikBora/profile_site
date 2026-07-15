export type Project = {
  idx: string;
  n: string;
  desc: string;
  tech: string[];
  img: string;
  url: string;
  /** object-position for the thumbnail crop (default "center top"). */
  pos?: string;
};

export const PROJECTS: Project[] = [
  {
    idx: "01",
    n: "Xchange",
    desc: "Screen every market, read the book, watch the chart — then trade, all in one hub.",
    tech: ["Next.js", "Web3", "shadcn"],
    img: "/images/xchange.jpg",
    url: "https://xchange.ritikbora.dev/",
  },
  {
    idx: "02",
    n: "TokenForge",
    desc: "Mint custom SPL Token-2022 assets right in the browser — no CLI, no config.",
    tech: ["Next.js", "Solana", "Web3"],
    img: "/images/tokenforge.jpg",
    url: "https://tokenforge.ritikbora.dev/",
  },
  {
    idx: "03",
    n: "MeetWise",
    desc: "No-signup video meetings that start the moment you do — end-to-end encrypted.",
    tech: ["WebRTC", "WebSockets", "Next.js"],
    img: "/images/meetwise.jpg",
    url: "https://meetwise.ritikbora.dev/",
  },
  {
    idx: "04",
    n: "PostPolish",
    desc: "Format, preview, and perfect your LinkedIn posts before you publish.",
    tech: ["Next.js", "shadcn", "Tailwind"],
    img: "/images/postpolish.jpg",
    url: "https://postpolish.ritikbora.dev/",
  },
  {
    idx: "05",
    n: "SearchSmith",
    desc: "Lint and expand Boolean search strings for sourcing — no syntax errors, no guessing.",
    tech: ["Next.js", "React", "TypeScript"],
    img: "/images/searchsmith.jpg",
    url: "https://searchsmith.ritikbora.dev/",
  },
];
