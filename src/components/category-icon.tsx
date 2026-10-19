import type { ReactNode } from "react";

import type { SectionCategory } from "@/content/site-content";

// One 24-unit grid, 1.5-unit strokes and square terminals match the site's
// navigation arrows. Curves are limited to recognizable object contours.
const categoryShapes = {
  新闻: (
    <>
      <path d="M4 4h14v16H4zM18 8h3v10a2 2 0 0 1-2 2h-1" />
      <path d="M7 7h8v4H7zM7 14h8M7 17h5" />
    </>
  ),
  股票: (
    <>
      <path d="M6 3v4m0 8v4M12 6v4m0 8v3M18 2v3m0 7v5" />
      <path d="M4 7h4v8H4zM10 10h4v8h-4zM16 5h4v7h-4z" />
    </>
  ),
  拼图: (
    <path d="M9 7V5a3 3 0 0 1 6 0v2h5v4h-1a3 3 0 0 0 0 6h1v4H4V7Z" />
  ),
  工具: (
    <>
      <path d="M4 7h3m4 0h9M4 17h9m4 0h3" />
      <rect x="7" y="4" width="4" height="6" rx="1" />
      <rect x="13" y="14" width="4" height="6" rx="1" />
    </>
  ),
  娱乐: (
    <>
      <path d="M7 7h10a3 3 0 0 1 3 2.5l1 7a2 2 0 0 1-3.4 1.7L15 16H9l-2.6 2.2A2 2 0 0 1 3 16.5l1-7A3 3 0 0 1 7 7Z" />
      <path d="M6 12h4m-2-2v4" />
      <circle cx="15.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="13.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  健康: (
    <path d="m12 20-7.6-7.4a5 5 0 0 1 7-7.1l.6.6.6-.6a5 5 0 0 1 7 7.1Z" />
  ),
  摄影: (
    <>
      <path d="M3 7h4l2-3h6l2 3h4v13H3Z" />
      <circle cx="12" cy="13" r="4" />
    </>
  ),
  音乐: (
    <>
      <path d="M9 17V5l11-2v12M9 9l11-2" />
      <ellipse cx="6" cy="18" rx="3" ry="2.5" />
      <ellipse cx="17" cy="16" rx="3" ry="2.5" />
    </>
  ),
} satisfies Record<SectionCategory, ReactNode>;

export function CategoryIcon({ category }: { category: SectionCategory }) {
  return (
    <svg
      className="category-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      {categoryShapes[category]}
    </svg>
  );
}
