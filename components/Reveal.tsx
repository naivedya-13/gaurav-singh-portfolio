"use client";

import { useEffect } from "react";

/**
 * Page-wide effects: adds `is-visible` to `.reveal` elements as they scroll
 * into view, and feeds the pointer position to `.spotlight` cards.
 */
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    let io: IntersectionObserver | undefined;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io?.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      els.forEach((el) => io!.observe(el));
    }

    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>(".spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      io?.disconnect();
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
