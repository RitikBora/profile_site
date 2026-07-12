# Portfolio Restructure — "Supervamp" Plan

Single-page `profile_site` → multi-page portfolio, taking structural/interaction
inspiration from the Aceternity minimal-portfolio template (the `ep-7` clone),
while keeping the existing terminal/monospace identity.

## Decisions locked (from grilling session)
- **IA:** `/` (hub) · `/about` (bio + career timeline) · `/projects` (full grid) · `/contact` (blurb + form + socials). No blog, no testimonials.
- **Styling:** migrate to Tailwind + reusable components; keep oklch CSS-var tokens as source of truth.
- **Tokens:** fix the `hsl(var(--x))` → `var(--x)` bridge bug; register `em`, shadows, and fonts in the Tailwind config.
- **Navbar:** full clone motion (scroll-shrink pill + `layoutId` hover, `framer-motion`) + mono `ritik-bora.dev` wordmark + theme toggle + active-route highlight; lives in shared layout.
- **Contact:** Resend server action → from `contact@ritikboradev.com`, to `ritikbora@gmail.com`, `reply_to` = visitor; `sonner` toast; `mailto:` fallback. Requires server-rendered deploy.
- **Projects:** cards link to live sites; home carousel holds the **full** set (the "reel"); `/projects` is the scannable grid (the "archive"). Data shape kept extensible for future `slug`/case-study routes.
- **Transitions:** `next-view-transitions` site-wide (wrap layout, swap `next/link` → its `Link`).
- **Content:** build-and-fill — scaffold against current real content, user writes bio/role-detail/new-project copy in their own voice before launch. Do NOT fabricate a personal bio.
- **About differentiation:** home about teaser = mono spec-sheet (name/focus/domain/based) + photo + `more about me →` (facts, no prose). `/about` = prose narrative + detailed timeline (story).
- **Sequencing:** Phase 0 proof-of-concept → then vertical slices.
- **File locations:** components in `src/components/`, contact action in `src/app/contact/actions.ts` (pending user confirm).

---

## Phase 0 — Proof of Concept (validate risky foundation first)
- **0.1 Fix Tailwind token bridge** — in `tailwind.config.ts` change every `hsl(var(--x))` → `var(--x)` (vars already hold complete oklch colors; the `hsl()` wrapper is why color classes currently emit nothing). Register `--em` → `em`/`accent` color, `--shadow-*` → `boxShadow`, `--font-outfit`/`--font-jbmono` → `fontFamily.sans`/`fontFamily.mono`. Checkpoint: `bg-background text-foreground border-border text-em font-mono shadow-xl` render in light + dark.
- **0.2 Extract theme toggle** → `src/components/theme-toggle.tsx`. Leave pre-hydration bootstrap script in `layout.tsx` head untouched.
- **0.3 Build full-motion navbar** → `src/components/navbar.tsx` (client): `framer-motion` scroll shrink (`scrollY` → width/`y`/shadow), `layoutId` hover pill, active-route highlight via `usePathname`, mono wordmark left, theme toggle right, links → routes.
- **0.4 🚦 REVIEW GATE** — user confirms (a) Tailwind migration preserved aesthetic in light+dark, (b) navbar feel is right. Do not proceed until blessed.

## Phase 1 — Shell & shared components
- **1.1 Deps** — add `next-view-transitions`, `sonner`, `resend` (`framer-motion` already present). Audit/remove dead deps (`typewriter-effect` — typewriter is hand-rolled).
- **1.2 Wrap layout** in `<ViewTransitions>`, add `<Toaster position="top-center" />`, swap `next/link` → `next-view-transitions` `Link`.
- **1.3 Extract components** from inline styles → Tailwind: `SectionLabel`, `ProjectCard`, `ProjectCarousel` (home), `ProjectGrid` (/projects), `Timeline`, `Footer`/socials, `Container`.

## Phase 2 — Vertical slices (each route complete before next; 🚦 review between)
- **2.1 Home `/`** — hub: hero (typewriter kept) → about teaser (spec-sheet + photo + `more about me →`) → projects carousel (full set) + `more projects →` → socials + CTA to `/contact`. All Tailwind.
- **2.2 `/about`** — prose bio (placeholder → user copy) → career timeline with per-role detail.
- **2.3 `/projects`** — full scannable grid, richer than carousel cards, each linking to live site. Data extensible for future slug routes.
- **2.4 `/contact`** — blurb + form + socials + `mailto:` fallback. Server action → Resend (from verified domain, to gmail, `reply_to` = visitor), `sonner` toast, `RESEND_API_KEY` in `.env.local`.

## Phase 3 — Launch prep (user tasks)
- [ ] Verify `ritikboradev.com` in Resend (SPF/DKIM DNS records).
- [ ] Write real content: bio prose, per-role details, new projects (names/descriptions/screenshots/links).
- [ ] Per-page `metadata` (title/description) for SEO.
- [ ] Confirm deploy target is server-rendered (Vercel/Node) — required by contact action.

---

## Key gotchas / notes
- Current `page.tsx` is one 511-line file using inline `style={{}}` + custom `rb-` CSS classes; Tailwind installed but unused.
- The `hsl(var())` vs oklch mismatch is a real pre-existing bug — Tailwind color classes are dead until fixed (Step 0.1).
- Contact form forces server-rendered deploy (no static export) — `next.config.mjs` is empty so this is already fine.
- The full-motion navbar and view transitions are recognizable Aceternity "template tells"; user chose them deliberately for the feel — adapt them in the mono aesthetic so the site still reads as original.
- `ep-7-portfolio-website-actual/` is the reference template only (placeholder "Tyler Durden" content, Next 16/React 19) — not to be shipped.
