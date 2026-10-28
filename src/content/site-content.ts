export type SectionStatus = "live" | "soon";

export type SectionCategory = "新闻" | "股票" | "拼图" | "工具" | "娱乐" | "健康" | "摄影" | "音乐";

export type SectionItem = {
  id: string;
  index: string;
  title: string;
  category: SectionCategory;
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
    category: "新闻",
    href: "https://news.woodyyan.com",
    status: "live",
  },
  {
    id: "trader",
    index: "02",
    title: "卧龙AI量化交易台",
    category: "股票",
    href: "https://wolongtrader.top",
    status: "live",
  },
  {
    id: "puzzle",
    index: "03",
    title: "Puzzle · 拼图故事集",
    category: "拼图",
    href: "https://puzzle.woodyyan.com",
    status: "live",
  },
  {
    id: "baby-naming",
    index: "04",
    title: "诗名 · Baby naming",
    category: "工具",
    href: "https://babynaming.woodyyan.com",
    status: "live",
  },
  {
    id: "linguaflow",
    index: "05",
    title: "LinguaFlow",
    category: "工具",
    href: "https://github.com/woodyyan/LinguaFlow",
    status: "live",
  },
  {
    id: "bathroom-singer",
    index: "06",
    title: "Bathroom Singer",
    category: "娱乐",
    href: "https://bathroom-singer.woodyyan.com",
    status: "live",
  },
  {
    id: "diet",
    index: "07",
    title: "饮食红绿灯",
    category: "健康",
    href: "https://diet.woodyyan.com/",
    status: "live",
  },
  {
    id: "guitar-tuner",
    index: "08",
    title: "吉他调音器",
    category: "音乐",
    href: "https://guitar-tuner.woodyyan.com/",
    status: "live",
  },
  {
    id: "frames",
    index: "09",
    title: "Woody's Frames - Woody的取景框",
    category: "摄影",
    href: "https://frames.woodyyan.com/",
    status: "live",
  },
  {
    id: "in-tune",
    index: "10",
    title: "In-Tune - 音准训练",
    category: "音乐",
    href: "https://intune.woodyyan.com/",
    status: "live",
  },
  {
    id: "new-songs",
    index: "11",
    title: "Song Drafts",
    category: "音乐",
    status: "soon",
  },
];
