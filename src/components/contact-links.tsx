type ContactLink = {
  label: string;
  href: string;
};

type ContactLinksProps = {
  links: readonly ContactLink[];
};

export function ContactLinks({ links }: ContactLinksProps) {
  return (
    <div className="contact-links">
      {links.map((link) => {
        const isMail = link.href.startsWith("mailto:");

        return (
          <a
            key={link.label}
            href={link.href}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noopener noreferrer"}
            className="contact-link"
          >
            {link.label}
            <svg className="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
            {!isMail && <span className="sr-only">（在新窗口打开）</span>}
          </a>
        );
      })}
    </div>
  );
}
