import type { SectionItem } from "@/content/site-content";

type SectionCardProps = {
  item: SectionItem;
};

export function SectionCard({ item }: SectionCardProps) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group editorial-panel flex min-h-[25rem] flex-col overflow-hidden rounded-[1.75rem] transition-transform duration-500 hover:-translate-y-1"
    >
      <div
        className={`relative flex min-h-[13rem] flex-1 flex-col justify-between overflow-hidden px-5 py-5 text-white ${item.surfaceClassName}`}
      >
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/72">
          <span>{item.index}</span>
          <span>External</span>
        </div>

        <div className="relative space-y-2">
          <p className="text-xs uppercase tracking-[0.32em] text-white/72">
            {item.surfaceLabel}
          </p>
          <p className="font-display text-4xl leading-none tracking-[-0.03em] sm:text-[2.8rem]">
            {item.title}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <p className="text-base leading-7 text-[var(--text)]/88">{item.summary}</p>

        <div className="flex items-center justify-between gap-4 border-t border-[var(--line)] pt-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
          <span className="rounded-full bg-[var(--background-strong)] px-3 py-1 text-[11px] tracking-[0.2em] text-[var(--accent)]">
            {item.note}
          </span>
          <span className="flex items-center gap-3">
            <span className="transition-colors duration-300 group-hover:text-[var(--accent)]">
              {item.cta}
            </span>
            <span
              aria-hidden
              className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent)]"
            >
              ↗
            </span>
          </span>
        </div>
      </div>
    </a>
  );
}
