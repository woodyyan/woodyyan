import { ContactLinks } from "@/components/contact-links";
import { DailyNote } from "@/components/daily-note";
import { siteMeta, socialLinks } from "@/content/site-meta";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="grid gap-6 border-t border-[var(--line)] py-8 text-sm text-[var(--muted)] lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.78fr)] lg:items-start"
    >
      <div className="space-y-5">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Contact</p>
          <p className="font-display text-[clamp(2.3rem,4vw,3.6rem)] leading-none text-[var(--text)]">
            Reach out, or find me elsewhere.
          </p>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            这里放联系我和常用的公开入口。邮件最直接，其余平台可以看到我在不同地方留下的内容。
          </p>
        </div>

        <ContactLinks links={socialLinks} />
      </div>

      <div className="grid gap-4">
        <div className="editorial-panel rounded-[1.5rem] p-5">
          <DailyNote />
        </div>

        <div className="editorial-panel rounded-[1.5rem] p-5">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Current</p>
            <div className="space-y-2 text-sm leading-7">
              <p>
                Updated <span className="text-[var(--text)]">{siteMeta.updatedAt}</span>
              </p>
              <p>
                Location <span className="text-[var(--text)]">{siteMeta.location}</span>
              </p>
              <p>
                Email <span className="text-[var(--text)]">{siteMeta.contactEmail}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
