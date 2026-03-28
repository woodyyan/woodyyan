type ContactLink = {
  label: string;
  href: string;
  detail: string;
};

type ContactLinksProps = {
  links: readonly ContactLink[];
};

export function ContactLinks({ links }: ContactLinksProps) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {links.map((link, index) => {
        const isMail = link.href.startsWith("mailto:");

        return (
          <a
            key={link.label}
            href={link.href}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noreferrer"}
            className="group editorial-panel flex min-h-[4.9rem] items-center justify-between rounded-[1.15rem] px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_16px_32px_rgba(44,38,32,0.08)]"
          >
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                {String(index + 1).padStart(2, "0")} / {isMail ? "Direct" : "Open"}
              </p>
              <p className="font-display text-[1.08rem] leading-none tracking-[-0.015em] text-[var(--text)]">
                {link.label}
              </p>
            </div>

            <span className="inline-flex size-8 items-center justify-center rounded-full border border-[var(--line)] bg-white/58 text-[15px] text-[var(--muted)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
              ↗
            </span>
          </a>
        );
      })}
    </div>
  );
}
