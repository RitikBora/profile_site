import type { ComponentType } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiShadcnui,
  SiWebrtc,
  SiSolana,
  SiEthereum,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Radio, Blocks } from "lucide-react";

type IconComp = ComponentType<{ size?: number | string; className?: string }>;

// Tech name -> icon. Brand logos via react-icons (Simple Icons); lucide
// fallbacks for tech without a clean brand mark. Unmapped names fall back to a
// text chip in ProjectCard.
export const TECH_ICONS: Record<string, IconComp> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  shadcn: SiShadcnui,
  WebRTC: SiWebrtc,
  Solana: SiSolana,
  Web3: SiEthereum,
  WebSockets: Radio,
  dApps: Blocks,
  Tailwind: SiTailwindcss,
  TypeScript: SiTypescript,
};
