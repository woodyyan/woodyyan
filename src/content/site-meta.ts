export const siteMeta = {
  name: "Woody Yan",
  title: "Woody Yan — Personal Index",
  description:
    "一个更柔和、更沉静的个人主页：首页只展示概览，把网站、摄影和歌曲分别引向各自独立的作品空间。",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  contactEmail: "hello@example.com",
  location: "Hangzhou / Online",
  updatedAt: "March 2026",
  accent: "#66705F",
} as const;

export const socialLinks = [
  { label: "Email", href: `mailto:${siteMeta.contactEmail}` },
  { label: "GitHub", href: "https://github.com/your-handle" },
  { label: "Instagram", href: "https://instagram.com/your-handle" },
  { label: "Xiaohongshu", href: "https://www.xiaohongshu.com/user/profile/your-handle" },
] as const;
