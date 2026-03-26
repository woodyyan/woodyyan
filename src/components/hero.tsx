import type { heroContent } from "@/content/site-content";

import { VisitorBadge } from "@/components/visitor-badge";
import { siteMeta } from "@/content/site-meta";

type HeroProps = {
  content: typeof heroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="grid gap-8 py-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(290px,0.72fr)] lg:items-end lg:py-18">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
          {content.eyebrow}
        </p>

        <div className="space-y-4">
          <h1 className="font-display text-[clamp(4.5rem,11vw,9rem)] leading-[0.88] tracking-[-0.04em] text-balance">
            {content.title}
          </h1>
          <p className="max-w-2xl font-display text-[1.9rem] italic leading-tight text-balance text-[var(--muted)] sm:text-[2.5rem]">
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-lg space-y-2 text-base leading-8 text-[var(--text)]/78 sm:text-lg">
          {content.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={content.primaryCta.href}
            className="inline-flex items-center gap-3 rounded-full border border-[var(--text)]/80 bg-white/50 px-5 py-3 text-sm uppercase tracking-[0.22em] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--background-strong)] hover:text-[var(--accent)]"
          >
            {content.primaryCta.label}
            <span aria-hidden>↘</span>
          </a>
          <a
            href={content.secondaryCta.href}
            className="inline-flex items-center gap-3 rounded-full border border-transparent px-2 py-3 text-sm uppercase tracking-[0.22em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--accent)]"
          >
            {content.secondaryCta.label}
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>

      <div className="editorial-panel rounded-[1.75rem] p-4 sm:p-5">
        <div className="flex h-full flex-col gap-4">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/40 bg-[linear-gradient(140deg,rgba(199,101,61,0.96),rgba(87,41,28,0.9))] px-5 py-5 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,234,214,0.46),transparent_34%)]" />
            <div className="relative space-y-2">
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/72">
                Current tone
              </p>
              <p className="font-display text-3xl leading-none">Warm / Quiet / Clear</p>
            </div>
          </div>

          <VisitorBadge />

          <div className="flex items-center justify-between border-t border-[var(--line)] pt-3 text-[11px] uppercase tracking-[0.26em] text-[var(--muted)]">
            <span>{siteMeta.updatedAt}</span>
            <span>{siteMeta.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
