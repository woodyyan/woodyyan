import type { SectionItem } from "@/content/site-content";

import { SectionCard } from "@/components/section-card";

type SectionGridProps = {
  items: SectionItem[];
};

export function SectionGrid({ items }: SectionGridProps) {
  return (
    <div className="section-layout">
      <div className="section-heading">
        <h2 id="work-title">Index</h2>
        <span className="section-count">
          <strong>{String(items.length).padStart(2, "0")}</strong> entries
        </span>
      </div>

      <ol className="work-list" aria-label="作品索引">
        {items.map((item) => (
          <li key={item.id}>
            <SectionCard item={item} />
          </li>
        ))}
      </ol>
    </div>
  );
}
