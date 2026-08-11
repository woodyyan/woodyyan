import { Hero } from "@/components/hero";
import { SectionGrid } from "@/components/section-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { heroContent, sectionItems } from "@/content/site-content";

export const revalidate = 3600;

export default function Home() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-5 sm:px-8 lg:px-10"
    >
      <SiteHeader />
      <Hero content={heroContent} />

      <section id="work" className="py-6 sm:py-8">
        <SectionGrid items={sectionItems} />
      </section>

      <div className="flex-1" />

      <SiteFooter />
    </main>
  );
}
