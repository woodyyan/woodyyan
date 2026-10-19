import { ContactLinks } from "@/components/contact-links";
import { DailyNote } from "@/components/daily-note";
import { VisitorBadge } from "@/components/visitor-badge";
import { siteMeta, socialLinks } from "@/content/site-meta";

export function SiteFooter() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="site-footer">
      <div className="section-layout">
        <div className="section-heading">
          <h2 id="contact-title">Contact</h2>
        </div>
        <ContactLinks links={socialLinks} />
      </div>

      <div className="footer-meta">
        <div className="footer-meta-group">
          <span>© 2026 Woody Yan</span>
          <DailyNote />
        </div>

        <div className="footer-meta-group footer-meta-group--status">
          <VisitorBadge />
          <span>Updated {siteMeta.updatedAt} · {siteMeta.location}</span>
        </div>
      </div>
    </footer>
  );
}
