import type { SectionItem } from "@/content/site-content";

import { SectionCard } from "@/components/section-card";

type SectionGridProps = {
  items: SectionItem[];
};

export function SectionGrid({ items }: SectionGridProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between pb-5 text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
        <span>Index</span>
        <span>{items.length} entries</span>
      </div>

      <div className="border-t border-[var(--line)]">
        {items.map((item) => (
          <SectionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
