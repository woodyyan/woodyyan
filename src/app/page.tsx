import { Hero } from "@/components/hero";
import { SectionGrid } from "@/components/section-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { heroContent, sectionItems } from "@/content/site-content";

export const revalidate = 3600;

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <Hero content={heroContent} />

        <section id="work" aria-labelledby="work-title" className="work-section">
          <SectionGrid items={sectionItems} />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
