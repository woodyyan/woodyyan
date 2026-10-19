import Image from "next/image";

import type { heroContent } from "@/content/site-content";

type HeroProps = {
  content: typeof heroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">{content.title}</h1>
        <p className="hero-subtitle">{content.subtitle}</p>
        <p className="hero-description">{content.description[0]}</p>

        <a href={content.primaryCta.href} className="primary-link">
          <span className="primary-link-label">{content.primaryCta.label}</span>
          <span className="primary-link-icon" aria-hidden="true">
            <svg className="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M12 4v16m-6-6 6 6 6-6" />
            </svg>
          </span>
        </a>
      </div>

      <div className="hero-signature" aria-hidden="true">
        <Image
          src="/icon.svg?v=split-y"
          alt=""
          width={360}
          height={360}
          className="hero-mark"
        />
      </div>
    </section>
  );
}
