import type { SectionItem } from "@/content/site-content";

import { SectionCard } from "@/components/section-card";


type SectionGridProps = {
  items: SectionItem[];
};

export function SectionGrid({ items }: SectionGridProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-3">
      {items.map((item) => (
        <SectionCard key={item.id} item={item} />
      ))}
    </div>
  );
}
