export type SectionItem = {
  id: "products" | "photography" | "songs";
  index: string;
  title: string;
  summary: string;
  note: string;
  href: string;
  cta: string;
  surfaceClassName: string;
  surfaceLabel: string;
};

export const heroContent = {
  eyebrow: "Selected work / 2026",
  title: "Woody Yan",
  subtitle: "Digital work, photographs, songs.",
  description: ["一个只放概览的个人入口页。"],
  primaryCta: {
    label: "Explore",
    href: "#work",
  },
  secondaryCta: {
    label: "Contact",
    href: "mailto:hello@example.com",
  },
} as const;

export const sectionItems: SectionItem[] = [
  {
    id: "products",
    index: "01",
    title: "Websites / Apps",
    summary: "Digital products and interfaces.",
    note: "构建 / 界面",
    href: "https://example.com/works",
    cta: "Open",
    surfaceClassName: "surface-products",
    surfaceLabel: "Product / System",
  },
  {
    id: "photography",
    index: "02",
    title: "Photography",
    summary: "Light, places, passing moments.",
    note: "观察 / 留白",
    href: "https://example.com/photo",
    cta: "Open",
    surfaceClassName: "surface-photography",
    surfaceLabel: "Light / Place",
  },
  {
    id: "songs",
    index: "03",
    title: "Songs",
    summary: "Melodies and words worth keeping.",
    note: "旋律 / 情绪",
    href: "https://example.com/songs",
    cta: "Open",
    surfaceClassName: "surface-songs",
    surfaceLabel: "Lyrics / Demo",
  },
];

export const aboutContent = {
  title: "Elsewhere",
  paragraphs: [
    "我把网站、照片和歌曲分开放，因为它们需要不同的节奏。这里负责指路，不负责说尽。",
  ],
} as const;
