export type Project = {
  idx: string;
  n: string;
  desc: string;
  tech: string[];
  img: string;
  url: string;
};

export const PROJECTS: Project[] = [
  {
    idx: "01",
    n: "Crypto Screener & Exchange",
    desc: "Track and trade across global crypto markets — all in one hub.",
    tech: ["Next.js", "Web3", "shadcn"],
    img: "/images/xchange.png",
    url: "https://xchange.ritikboradev.com/",
  },
  {
    idx: "02",
    n: "MeetWise",
    desc: "Smart, seamless video meetings built for real collaboration.",
    tech: ["WebRTC", "WebSockets", "React"],
    img: "/images/meetwise.png",
    url: "https://meetwise.ritikboradev.com/",
  },
  {
    idx: "03",
    n: "ChessMates",
    desc: "Peer-to-peer realtime chess, right in the browser.",
    tech: ["React", "WebSockets"],
    img: "/images/chess.png",
    url: "https://chess.ritikboradev.com/",
  },
  {
    idx: "04",
    n: "TokenForge",
    desc: "Effortless token creation and airdrop distribution for Web3.",
    tech: ["React", "Web3", "dApps"],
    img: "/images/token_forge.png",
    url: "https://tokenforge.ritikboradev.com/",
  },
];
