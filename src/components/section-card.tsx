import type { SectionItem } from "@/content/site-content";

type SectionCardProps = {
  item: SectionItem;
};

function SectionCardBody({ item, available }: { item: SectionItem; available: boolean }) {
  return (
    <>
      <div
        className={`relative flex flex-1 flex-col justify-between overflow-hidden px-5 py-5 text-white ${
          available ? "min-h-[13.5rem]" : "min-h-[11rem]"
        } ${item.surfaceClassName}`}
      >
        {available ? (
          <div className="absolute inset-x-5 top-0 h-px bg-white/38" />
        ) : (
          <div className="absolute inset-x-5 top-0 h-px bg-white/18" />
        )}

        <div className="flex items-start justify-between gap-3 text-xs uppercase tracking-[0.28em] text-white/72">
          <span>{item.index}</span>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] tracking-[0.24em] text-white/88">
              {item.category}
            </span>
            <span
              className={`rounded-full px-2.5 py-1 text-[10px] tracking-[0.24em] ${
                available ? "border border-white/22 bg-black/12 text-white/88" : "border border-white/16 bg-white/8 text-white/68"
              }`}
            >
              {available ? "Live" : "Soon"}
            </span>
          </div>
        </div>

        <div className="relative space-y-2">
          <p className="text-xs uppercase tracking-[0.32em] text-white/70">
            {item.surfaceLabel}
          </p>
          <p
            className={`font-display leading-[0.95] tracking-[-0.035em] text-balance ${
              available ? "text-[clamp(2rem,3.2vw,2.75rem)]" : "text-[clamp(1.7rem,2.8vw,2.3rem)]"
            }`}
          >
            {item.title}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <div className="space-y-3">
          <p className="text-base leading-7 text-[var(--text)]/88">{item.summary}</p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[var(--background-strong)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
              {item.note}
            </span>
            <span className="rounded-full border border-[var(--line)] bg-white/55 px-3 py-1 font-mono text-[11px] text-[var(--muted)]">
              {item.meta}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-[var(--line)] pt-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
          <span className="text-[11px] tracking-[0.22em] text-[var(--muted)]/78">
            {available ? "Available now" : "Awaiting domain"}
          </span>
          <span className="flex items-center gap-3">
            <span className="transition-colors duration-300 group-hover:text-[var(--accent)]">
              {item.cta}
            </span>
            <span
              aria-hidden
              className={`text-lg transition-transform duration-300 ${
                available ? "group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent)]" : "opacity-40"
              }`}
            >
              {available ? "↗" : "—"}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export function SectionCard({ item }: SectionCardProps) {
  const available = Boolean(item.href);
  const baseClassName = `group editorial-panel relative flex min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] ${
    available
      ? "transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_100px_rgba(44,38,32,0.14)]"
      : "cursor-default border-dashed bg-[rgba(251,248,242,0.62)] opacity-90"
  }`;

  if (!available) {
    return (
      <div aria-disabled="true" className={baseClassName}>
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(102,112,95,0.22),rgba(102,112,95,0.02))]" />
        <SectionCardBody item={item} available={available} />
      </div>
    );
  }

  return (
    <a href={item.href} target="_blank" rel="noreferrer" className={baseClassName}>
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(102,112,95,0.8),rgba(102,112,95,0.14))] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <SectionCardBody item={item} available={available} />
    </a>
  );
}
