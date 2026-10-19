import type { SectionItem } from "@/content/site-content";

type SectionCardProps = {
  item: SectionItem;
};

export function SectionCard({ item }: SectionCardProps) {
  const available = Boolean(item.href);

  const content = (
    <>
      <span className="work-index" aria-hidden="true">{item.index}</span>
      <span className="work-title">{item.title}</span>
      <span className="work-category">{item.category}</span>
      <span className="work-status">
        <span className="status-dot" aria-hidden="true" />
        {available ? "Live" : "Soon"}
      </span>
      <span className="work-arrow" aria-hidden="true">
        {available ? (
          <svg className="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        ) : (
          <span>—</span>
        )}
      </span>
    </>
  );

  if (!available) {
    return <div className="work-row work-row--soon">{content}</div>;
  }

  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className="work-row">
      {content}
      <span className="sr-only">（在新窗口打开）</span>
    </a>
  );
}
