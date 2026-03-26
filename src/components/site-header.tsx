import { siteMeta } from "@/content/site-meta";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-4 border-b border-[var(--line)] py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-display text-2xl leading-none tracking-[0.04em]">
          {siteMeta.name}
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
          Personal work index
        </p>
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
