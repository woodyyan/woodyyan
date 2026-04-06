import Image from "next/image";

import { siteMeta } from "@/content/site-meta";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-4 border-b border-[var(--line)] py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3.5">
        <Image
          src="/icon.svg"
          alt={`${siteMeta.name} logo`}
          width={44}
          height={44}
          className="h-11 w-11 rounded-[1rem] border border-[var(--line)] bg-[var(--background-strong)]/78 p-2 shadow-[0_12px_28px_rgba(44,38,32,0.08)]"
          priority
        />

        <div>
          <p className="font-display text-2xl leading-none tracking-[0.04em]">
            {siteMeta.name}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
            Personal work index
          </p>
        </div>
      </div>

      <nav className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.24em] text-[var(--muted)] sm:justify-end">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="transition-colors duration-300 hover:text-[var(--accent)]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
