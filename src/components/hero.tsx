import type { heroContent } from "@/content/site-content";

type HeroProps = {
  content: typeof heroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title">
        {content.title}<span className="hero-period" aria-hidden="true">.</span>
      </h1>

      <div className="hero-copy">
        <p className="hero-subtitle">{content.subtitle}</p>
        <p className="hero-description">{content.description[0]}</p>

        <a href={content.primaryCta.href} className="primary-link">
          {content.primaryCta.label}
          <svg className="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 4v16m-6-6 6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
