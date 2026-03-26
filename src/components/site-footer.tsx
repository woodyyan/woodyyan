import { ContactLinks } from "@/components/contact-links";
import { DailyNote } from "@/components/daily-note";
import { siteMeta, socialLinks } from "@/content/site-meta";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="grid gap-6 border-t border-[var(--line)] py-8 text-sm text-[var(--muted)] lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-end"
    >
      <div className="space-y-3">
        <p className="font-display text-3xl leading-none text-[var(--text)]">Built with intent.</p>
        <p className="max-w-md leading-7">完整作品分散在别处。</p>
        <ContactLinks links={socialLinks} />
      </div>

      <DailyNote />

      <div className="space-y-2 text-sm leading-7 lg:text-right">
        <p>
          Updated <span className="text-[var(--text)]">{siteMeta.updatedAt}</span>
        </p>
        <p>
          Location <span className="text-[var(--text)]">{siteMeta.location}</span>
        </p>
      </div>
    </footer>
  );
}
