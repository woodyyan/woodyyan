type ContactLink = {
  label: string;
  href: string;
};

type ContactLinksProps = {
  links: readonly ContactLink[];
};

export function ContactLinks({ links }: ContactLinksProps) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
          className="transition-colors duration-300 hover:text-[var(--accent)]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
