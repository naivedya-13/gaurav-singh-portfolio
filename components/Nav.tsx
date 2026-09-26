"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/resume";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ basePath }: { basePath: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" aria-label="Gaurav Singh — home">
          <span className="nav__mark">GS</span>
          <span className="nav__name">Gaurav Singh</span>
        </a>
        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href ? "is-active" : undefined}
              aria-current={active === l.href ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--small nav__resume" href={`${basePath}/${profile.resume}`} target="_blank" rel="noopener">
            Résumé
          </a>
          <ThemeToggle />
          <button
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
