export type SectionStatus = "live" | "soon";

export type SectionItem = {
  id: string;
  index: string;
  title: string;
  summary: string;
  note: string;
  category: string;
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
} as const;

export const sectionItems: SectionItem[] = [
  {
    id: "baby-naming",
    index: "01",
    title: "诗名 - Baby naming",
    summary: "给名字这件事一个更清晰的起点：灵感、方向和筛选都从这里开始。",
    note: "取名 / 工具",
    category: "Tool",
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
    title: "Woody News",
    summary: "把日常信息流收进一个更安静的入口，用来阅读、浏览和继续延伸。",
    note: "新闻 / 阅读",
    category: "Media",
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
    title: "卧龙股票系统",
    summary: "交易观察、市场记录和个人判断被整理成一个独立的工作台。",
    note: "交易 / 观察",
    category: "Finance",
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
    title: "Photo Journal",
    summary: "影像入口会放在这里，留给光线、地点和路过时想保留的片刻。",
    note: "观察 / 留白",
    category: "Photo",
    cta: "Coming soon",
    surfaceClassName: "surface-photography",
    surfaceLabel: "Light / Place",
    status: "soon",
    meta: "Domain pending",
  },
  {
    id: "new-songs",
    index: "05",
    title: "Song Drafts",
    summary: "新歌与 Demo 会在这里继续生长，给旋律和词句一个独立落点。",
    note: "旋律 / 情绪",
    category: "Music",
    cta: "Coming soon",
    surfaceClassName: "surface-products",
    surfaceLabel: "Lyrics / Demo",
    status: "soon",
    meta: "Domain pending",
  },
];

