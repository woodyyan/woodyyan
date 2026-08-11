import { ContactLinks } from "@/components/contact-links";
import { DailyNote } from "@/components/daily-note";
import { VisitorBadge } from "@/components/visitor-badge";
import { siteMeta, socialLinks } from "@/content/site-meta";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--line)] py-8 sm:py-10"
    >
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <ContactLinks links={socialLinks} />
      </div>

      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 border-t border-[var(--line)] pt-5">
        <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
          © 2026 Woody Yan
        </span>

        <DailyNote />

        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <VisitorBadge />
          <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
            Updated {siteMeta.updatedAt} · {siteMeta.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
