import type { heroContent } from "@/content/site-content";

type HeroProps = {
  content: typeof heroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-w-3xl space-y-7">
        <h1 className="font-display text-[clamp(3.5rem,11vw,8rem)] leading-[0.9] tracking-[-0.04em] text-balance">
          {content.title}
        </h1>

        <p className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] italic leading-tight text-balance text-[var(--muted)]">
          {content.subtitle}
        </p>

        <p className="max-w-xl text-sm leading-7 text-[var(--text)]/70 sm:text-base">
          {content.description[0]}
        </p>

        <a
          href={content.primaryCta.href}
          className="group inline-flex items-center gap-3 pt-3 text-xs uppercase tracking-[0.24em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--accent)]"
        >
          {content.primaryCta.label}
          <span aria-hidden className="text-base leading-none transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
