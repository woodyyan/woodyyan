export const siteMeta = {
  name: "Woody Yan",
  title: "Woody Yan — Personal Index",
  description:
    "一个更柔和、更沉静的个人主页：首页只展示概览，把网站、摄影和歌曲分别引向各自独立的作品空间。",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  contactEmail: "woodyyan@outlook.com",
  location: "Hangzhou / Online",
  updatedAt: "March 2026",
  accent: "#66705F",
} as const;

export const socialLinks = [
  {
    label: "Email",
    href: `mailto:${siteMeta.contactEmail}`,
    detail: siteMeta.contactEmail,
  },
  {
    label: "GitHub",
    href: "https://github.com/woodyyan",
    detail: "github.com/woodyyan",
  },
  {
    label: "小红书",
    href: "https://xhslink.com/m/AEfh301HT1u",
    detail: "xhslink.com/m/AEfh301HT1u",
  },
  {
    label: "抖音",
    href: "https://v.douyin.com/mrtD2_0bkqU/",
    detail: "v.douyin.com/mrtD2_0bkqU/",
  },
] as const;
