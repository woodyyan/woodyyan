type ContactLink = {
  label: string;
  href: string;
};

type ContactLinksProps = {
  links: readonly ContactLink[];
};

export function ContactLinks({ links }: ContactLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
      {links.map((link) => {
        const isMail = link.href.startsWith("mailto:");

        return (
          <a
            key={link.label}
            href={link.href}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noreferrer"}
            className="group/link inline-flex items-baseline gap-1.5 text-sm tracking-[0.06em] text-[var(--text)]/85 transition-colors duration-300 hover:text-[var(--accent)]"
          >
            {link.label}
            <span
              aria-hidden
              className="text-[11px] text-[var(--muted)] transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-[var(--accent)]"
            >
              ↗
            </span>
          </a>
        );
      })}
    </div>
  );
}
