"use client";

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

// PLACEHOLDER photos (Unsplash) — swap for your own images in /public/images.
const items = [
  {
    title: "~/pune.jpg",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
    className: "absolute top-6 left-[16%] rotate-[-8deg]",
  },
  {
    title: "~/desk.jpg",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    className: "absolute top-24 left-[32%] rotate-[5deg]",
  },
  {
    title: "~/travel.jpg",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    className: "absolute top-8 left-[48%] rotate-[-3deg]",
  },
  {
    title: "~/build.jpg",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1200&auto=format&fit=crop",
    className: "absolute top-28 left-[60%] rotate-[9deg]",
  },
];

export function Collage() {
  return (
    <DraggableCardContainer className="relative flex min-h-[440px] w-full items-center justify-center overflow-clip">
      <p className="rb-mono pointer-events-none absolute top-1/2 -translate-y-1/2 select-none text-xs tracking-[0.24em] text-muted-foreground/40">
        // drag the photos
      </p>
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-52 w-52 rounded-sm object-cover"
          />
          <p className="rb-mono relative z-10 mt-3 text-center text-[11px] text-muted-foreground">
            {item.title}
          </p>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
