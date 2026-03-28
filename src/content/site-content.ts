export type SectionStatus = "live" | "soon";

export type SectionItem = {
  id: string;
  index: string;
  title: string;
  summary: string;
  note: string;
  href?: string;
  cta: string;
  surfaceClassName: string;
  surfaceLabel: string;
  status: SectionStatus;
  meta: string;
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
    id: "baby-naming",
    index: "01",
    title: "Baby Naming",
    summary: "取名网站，提供名字灵感与方向。",
    note: "取名 / 工具",
    href: "https://babynaming.woodyyan.com",
    cta: "Visit",
    surfaceClassName: "surface-products",
    surfaceLabel: "Naming / Utility",
    status: "live",
    meta: "babynaming.woodyyan.com",
  },
  {
    id: "news",
    index: "02",
    title: "News",
    summary: "新闻网站，作为日常信息阅读与整理入口。",
    note: "新闻 / 阅读",
    href: "https://news.woodyyan.com",
    cta: "Visit",
    surfaceClassName: "surface-photography",
    surfaceLabel: "Reading / Feed",
    status: "live",
    meta: "news.woodyyan.com",
  },
  {
    id: "trader",
    index: "03",
    title: "Trader",
    summary: "炒股网站，承载交易观察、记录与工具。",
    note: "交易 / 观察",
    href: "https://trader.woodyyan.com",
    cta: "Visit",
    surfaceClassName: "surface-songs",
    surfaceLabel: "Market / Tools",
    status: "live",
    meta: "trader.woodyyan.com",
  },
  {
    id: "photography",
    index: "04",
    title: "Photography",
    summary: "摄影网站会放在这里，域名后续再补上。",
    note: "观察 / 留白",
    cta: "Coming soon",
    surfaceClassName: "surface-photography",
    surfaceLabel: "Light / Place",
    status: "soon",
    meta: "Domain pending",
  },
  {
    id: "new-songs",
    index: "05",
    title: "New Songs",
    summary: "新歌与 Demo 的独立入口，域名暂时未定。",
    note: "旋律 / 情绪",
    cta: "Coming soon",
    surfaceClassName: "surface-products",
    surfaceLabel: "Lyrics / Demo",
    status: "soon",
    meta: "Domain pending",
  },
];

export const aboutContent = {
  title: "Elsewhere",
  paragraphs: [
    "我把网站、照片和歌曲分开放，因为它们需要不同的节奏。这里负责指路，不负责说尽。",
  ],
} as const;
