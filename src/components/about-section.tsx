type AboutSectionProps = {
  content: {
    title: string;
    paragraphs: readonly string[];
  };
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="grid gap-6 border-t border-[var(--line)] py-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.2fr)] lg:gap-10"
    >
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
          {content.title}
        </p>
        <h2 className="font-display text-4xl leading-none text-balance sm:text-5xl">
          Kept separate, on purpose.
        </h2>
      </div>

      <div className="editorial-panel rounded-[1.75rem] p-6 sm:p-8">
        <div className="max-w-xl space-y-4 text-base leading-8 text-[var(--text)]/84 sm:text-lg">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
