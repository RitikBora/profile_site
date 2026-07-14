"use client";

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

// Places I've been — draggable Polaroid scatter.
const items = [
  {
    title: "~/lucerne.jpg",
    image: "/images/Lucerne.jpeg",
    className: "absolute top-4 left-[8%] rotate-[-7deg]",
  },
  {
    title: "~/alps.jpg",
    image: "/images/Alps.jpeg",
    className: "absolute top-24 left-[25%] rotate-[6deg]",
  },
  {
    title: "~/warsaw.jpg",
    image: "/images/Warsaw.jpeg",
    className: "absolute top-8 left-[42%] rotate-[-4deg]",
  },
  {
    title: "~/pune.jpg",
    image: "/images/Pune.jpeg",
    className: "absolute top-28 left-[58%] rotate-[8deg]",
  },
  {
    title: "~/nashik.jpg",
    image: "/images/Nashik.jpeg",
    className: "absolute top-10 left-[73%] rotate-[-9deg]",
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
