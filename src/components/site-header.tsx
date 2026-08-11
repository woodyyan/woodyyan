"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { siteMeta } from "@/content/site-meta";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export function SiteHeader() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 flex flex-col gap-3 border-b border-[var(--line)] text-sm transition-all duration-300 sm:flex-row sm:items-center sm:justify-between ${
        compact
          ? "bg-[var(--header-bg)] py-2.5 backdrop-blur-md"
          : "bg-transparent py-4"
      }`}
    >
      <a href="#main" className="flex items-center gap-3">
        <Image
          src="/icon.svg"
          alt={`${siteMeta.name} logo`}
          width={40}
          height={40}
          className={`rounded-[0.9rem] border border-[var(--line)] bg-[var(--background-strong)]/78 p-2 transition-all duration-300 ${
            compact ? "h-8 w-8" : "h-10 w-10"
          }`}
          priority
        />
        <span className="font-display text-xl leading-none tracking-[0.04em]">
          {siteMeta.name}
        </span>
      </a>

      <nav className="flex flex-wrap items-center gap-1 text-xs uppercase tracking-[0.24em] text-[var(--muted)] sm:justify-end">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="inline-flex min-h-[var(--tap-min)] items-center rounded-full px-3 transition-colors duration-300 hover:text-[var(--accent)]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
