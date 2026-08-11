export type SectionStatus = "live" | "soon";

export type SectionItem = {
  id: string;
  index: string;
  title: string;
  category: string;
  href?: string;
  status: SectionStatus;
};

export const heroContent = {
  title: "Woody Yan",
  subtitle: "这里是我的个人作品入口。",
  description: ["网站、摄影、音乐和一些正在发生的东西。"],
  primaryCta: {
    label: "探索",
    href: "#work",
  },
} as const;

export const sectionItems: SectionItem[] = [
  {
    id: "news",
    index: "01",
    title: "Woody News",
    category: "Media",
    href: "https://news.woodyyan.com",
    status: "live",
  },
  {
    id: "trader",
    index: "02",
    title: "卧龙AI量化交易台",
    category: "Quant",
    href: "https://wolongtrader.top",
    status: "live",
  },
  {
    id: "puzzle",
    index: "03",
    title: "Puzzle · 拼图故事集",
    category: "Story",
    href: "https://puzzle.woodyyan.com",
    status: "live",
  },
  {
    id: "baby-naming",
    index: "04",
    title: "诗名 · Baby naming",
    category: "Tool",
    href: "https://babynaming.woodyyan.com",
    status: "live",
  },
  {
    id: "linguaflow",
    index: "05",
    title: "LinguaFlow",
    category: "Mac App",
    href: "https://github.com/woodyyan/LinguaFlow",
    status: "live",
  },
  {
    id: "bathroom-singer",
    index: "06",
    title: "Bathroom Singer",
    category: "Music",
    href: "https://bathroom-singer.woodyyan.com",
    status: "live",
  },
  {
    id: "photography",
    index: "07",
    title: "Photo Journal",
    category: "Photo",
    status: "soon",
  },
  {
    id: "new-songs",
    index: "08",
    title: "Song Drafts",
    category: "Music",
    status: "soon",
  },
];
