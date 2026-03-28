import { AboutSection } from "@/components/about-section";
import { Hero } from "@/components/hero";
import { SectionGrid } from "@/components/section-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { aboutContent, heroContent, sectionItems } from "@/content/site-content";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="relative overflow-hidden px-5 py-5 sm:px-8 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-6xl flex-col rounded-[2rem] border border-[var(--line)] bg-white/44 px-5 pb-8 pt-4 shadow-[0_40px_120px_rgba(43,38,31,0.08)] backdrop-blur-sm sm:px-8 lg:px-12 lg:pb-12">
        <SiteHeader />
        <Hero content={heroContent} />

        <section
          id="work"
          className="grid gap-6 border-t border-[var(--line)] py-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,2fr)] lg:gap-10"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Overview
            </p>
            <h2 className="font-display text-4xl leading-none text-balance sm:text-5xl">
              Three directions.
            </h2>
            <p className="max-w-sm text-sm leading-7 text-[var(--muted)] sm:text-base">
              每个入口都通往更完整的独立地址。
            </p>
          </div>

          <SectionGrid items={sectionItems} />
        </section>

        <AboutSection content={aboutContent} />
        <SiteFooter />
      </div>
    </main>
  );
}
