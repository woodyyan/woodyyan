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
    <header className="site-header" data-compact={compact}>
      <a href="#main" className="brand">
        <Image
          src="/icon.svg?v=split-y"
          alt=""
          width={44}
          height={44}
          className="brand-icon"
          priority
        />
        <span>{siteMeta.name}</span>
      </a>

      <nav className="site-nav" aria-label="主导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
