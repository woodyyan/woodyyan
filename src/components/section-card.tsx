import type { SectionItem } from "@/content/site-content";

type SectionCardProps = {
  item: SectionItem;
};

export function SectionCard({ item }: SectionCardProps) {
  const available = Boolean(item.href);
  const delay = `${(Number(item.index) - 1) * 60}ms`;

  const row = (
    <div
      className={`flex items-baseline gap-4 px-2 py-6 transition-all duration-300 sm:gap-6 sm:px-4 sm:py-7 ${
        available ? "hover:bg-white/45" : "opacity-70"
      }`}
    >
      <span className="w-8 flex-none font-mono text-xs tracking-[0.15em] text-[var(--muted)]">
        {item.index}
      </span>

      <span
        className={`min-w-0 flex-1 font-display text-[clamp(1.5rem,3.4vw,2.3rem)] leading-[1.02] tracking-[-0.03em] text-balance transition-colors duration-300 ${
          available ? "text-[var(--text)] group-hover:text-[var(--accent)]" : "text-[var(--text)]/80"
        }`}
      >
        {item.title}
      </span>

      <span className="hidden w-24 flex-none text-right text-xs uppercase tracking-[0.2em] text-[var(--muted)] sm:block">
        {item.category}
      </span>

      <span className="flex w-14 flex-none items-center justify-end gap-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
        <span
          aria-hidden
          className={`h-1.5 w-1.5 rounded-full ${
            available ? "bg-[var(--accent)]" : "border border-[var(--muted)]"
          }`}
        />
        {available ? "Live" : "Soon"}
      </span>

      <span
        aria-hidden
        className={`w-5 flex-none text-right text-lg leading-none transition-all duration-300 ${
          available
            ? "text-[var(--muted)] group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
            : "opacity-40"
        }`}
      >
        {available ? "↗" : "—"}
      </span>
    </div>
  );

  if (!available) {
    return (
      <div aria-disabled="true" style={{ animationDelay: delay }} className="group border-b border-[var(--line)]">
        {row}
      </div>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      style={{ animationDelay: delay }}
      className="group block border-b border-[var(--line)]"
    >
      {row}
    </a>
  );
}
