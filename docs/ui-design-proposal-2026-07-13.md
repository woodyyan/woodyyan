# 个人主页 UI 优化设计方案

> 设计对象：`woodyyan.com` 个人作品索引（Next.js，Hero → Overview → Footer 单卡式布局）
> 当前品牌基调：燕麦白 + 鼠尾草橄榄 `#66705F` + 墨灰，编辑部式极简、克制、高级
> 设计目标：在**不破坏现有气质**的前提下，让界面「更美观、更易用、更符合访客习惯」
> 评估依据：已通读 `layout / header / hero / section-card / footer / visitor-badge / daily-note` 及设计令牌

---

## 1. 现状评估

### 已经做得好的（保留）
- 视觉层级清晰：超大 display 姓名 → 斜体副标题 → 描述 → 「探索」CTA，首屏意图明确。
- Live / Soon 状态区分到位（虚线边框 + 降透明度 + 状态药丸）。
- 微交互克制有质感：卡片 hover 微抬升、阴影过渡。
- 轻巧彩蛋（访客序号、每日短句、更新时间/地点）符合「克制不喧宾夺主」的既定偏好。
- 语义化结构完整：`<header>/<main>/<footer>`、`html lang="zh-CN"`、Next/Image 与 next/font 自托管。

### 可优化点（按「用户习惯」视角）
| # | 问题 | 对用户的实际影响 |
|---|------|------------------|
| A | 导航随首屏滚走，长页面下无持久入口 | 想跳 Contact / Work 必须滚回顶部，移动端尤其费劲 |
| B | 链接/卡片缺统一 `:focus-visible` 焦点环 | 键盘用户、弱网无鼠标场景下焦点不可见 |
| C | 卡片三种 surface（default / linguaflow / wolongtrader）顶栏结构不一致 | 扫读时信息位置跳动，降低「一眼看懂」效率 |
| D | 中文标题（如副标题「这里是我的个人作品入口。」）走 Cormorant 后回落系统字体 | 中文显示与英文编辑体不统一，略显凑合 |
| E | 320px 窄屏下超大姓名 `clamp(4.5rem…)` 可能溢出/强制换行生硬 | 小屏首屏观感不稳 |
| F | 无深色模式 | 夜间访客刺眼；且偏离「高级感可延展」的期待 |
| G | 无 skip-link / 无进场微动效（可选） | 可访问性与「精致感」仍有提升空间 |

> 对比检测：`--muted #6c685f` 在 `--background #f3efe8` 上约 **4.8:1**，已满足 WCAG AA 正文标准，无需改色；仅建议避免在低透明度叠层上用于极小字。

---

## 2. 设计原则（对齐用户习惯）
1. **首屏即答案**：访客 3 秒内知道「这是谁、能去哪」——保留 Hero，强化可达性。
2. **导航常驻**：无论滚到哪，Work / Contact 一指可达（移动端友好）。
3. **一致即高级**：所有卡片共用同一套「顶栏信息结构」，定制视觉只做叠加，不破坏骨架。
4. **可见的焦点**：每个可交互元素都有清晰、统一的焦点态（键盘/鼠标一致）。
5. **尊重系统**：动效与配色跟随 `prefers-reduced-motion` / `prefers-color-scheme`，不喧宾夺主。

---

## 3. 优化方案（分相位，建议先 0→1→2，3 可选）

### 相位 0 — 安全基线（不动外观，只补规范）
- 全局 `:focus-visible` 焦点环：`outline: 2px solid var(--accent); outline-offset: 2px;`（用于链接、卡片、导航）。
- 全局 `prefers-reduced-motion` 兜底：关闭 transform/transition 类动效。
- 导航链接加 `min-height: 44px` 触控区（移动端可点中）。
- 补充 `skip-link`（「跳到主内容」），仅在聚焦时可见。

### 相位 1 — 导航与可达性（最大易用收益）
- **常驻 slim header**：滚动后头部收薄（高度/留白缩减、logo 略小），`Work / Contact` 始终可见；回到顶部时恢复。保持克制，不增加新按钮。
- 平滑锚点滚动已具备（`scroll-behavior: smooth`），确保 `#work` / `#contact` 锚点稳定。
- （可选）右下角极简「回到顶部」圆形按钮，仅滚动超一屏后出现，hover 才显形。

### 相位 2 — 视觉一致与精致（美观收益）
- **统一卡片顶栏骨架**：所有卡片顶部固定呈现 `序号 · 分类药丸 · 状态药丸`，定制 surface（linguaflow / wolongtrader）在其上叠加专属插画，不再各自为政。
- **中文显示体补齐**：引入 `Noto Serif SC` 作为中文 display 回落，让「这里是我的个人作品入口。」等中文标题呈现编辑感衬线，与英文 Cormorant 气质统一。
- **Live / Soon 再强化**：Soon 卡加「即将上线」中文小标 + 更克制的灰阶缩略占位，信息一眼可辨。
- **进场微动效**：卡片/区块载入时轻微上浮淡入（stagger 0.06s），`prefers-reduced-motion` 下关闭。

### 相位 3 — 可选增强（按你意愿）
- **深色模式**：暖调深色（深暖炭 `#1c1a17` 底 + 燕麦字 + 鼠尾草橄榄强调），`localStorage` 记忆 + 跟随系统；顶部加极小切换。
- 其余视反馈再定。

---

## 4. 设计令牌增补建议
```css
:root {
  /* 现有保留 */
  --background: #f3efe8;
  --text: #161514;
  --muted: #6c685f;          /* 已达标 4.8:1，正文可用 */
  --accent: #66705F;
  --line: rgba(56, 51, 45, 0.14);

  /* 新增 */
  --focus-ring: var(--accent);
  --tap-min: 44px;           /* 最小触控高度 */
  --header-h: 4.5rem;        /* 常驻头高度（滚动后收缩为 3.25rem）*/
  --motion-fast: 180ms cubic-bezier(0.22, 1, 0.36, 1);
}

/* 焦点可见性（相位 0） */
a:focus-visible,
button:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
  border-radius: 0.5rem;
}

/* 尊重减弱动效（相位 0） */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}

/* 深色模式（相位 3，可选） */
@media (prefers-color-scheme: dark) {
  :root[data-theme="auto"] {
    --background: #1c1a17;
    --text: #f3efe8;
    --muted: #b9b2a6;
    --line: rgba(243, 239, 232, 0.14);
    --panel: rgba(40, 37, 32, 0.72);
  }
}
```

---

## 5. 组件级规范（落地口径）
- **Header（相位 1）**：`position: sticky; top: 0`，背景 `backdrop-blur` + 半透明白；滚动阈值（如 `> 80px`）加 `.is-compact` 收薄。导航链接 `min-h: var(--tap-min)`、padding 横向 ≥12px。
- **Card（相位 2）**：新增统一 `.card-surface-head`（序号 / 分类 / 状态三件套，固定栅格位置）；定制 surface 仅替换背景与装饰层，不动头部结构。卡片圆角保持 `1.75rem`，hover 抬升 `-6px` + 阴影（已有）。
- **Typography（相位 2）**：`--font-display-cjk: "Noto Serif SC", "Cormorant Garamond", serif;`；中文标题统一套用，确保中英混排同气质。
- **Hero（相位 2 / E）**：姓名 `clamp(3.25rem, 11vw, 9rem)`，保证 320px 不溢出且自然换行。

---

## 6. 可访问性与响应式验收标准
- 键盘：Tab 可遍历 全部可交互元素，焦点环清晰；skip-link 直达 `<main>`。
- 对比度：正文 ≥ 4.5:1（现有已达标），大字号 ≥ 3:1。
- 触控：导航/卡片 CTA 触控区 ≥ 44px。
- 响应式：320 / 375 / 768 / 1280 四档下无横向滚动、无溢出、布局不塌。
- 动效：开启「减弱动态效果」后界面完全静止可用。

---

## 7. 实施建议（与你既定的「方案先行 → 确认 → 实施」一致）
- 建议顺序：**相位 0 → 1 → 2**，均为低风险、可逆的样式/结构微调，不改变信息架构与品牌。
- 相位 3（深色模式）独立于前序，可单独决定是否做。
- 每个相位完成后我会本地 `npm run build` 验证，并 push 触发 Vercel 部署、curl 复核线上效果。

---
**设计方**：UI Designer（像素君）
**日期**：2026-07-13
**下一步**：请你确认要做哪些相位，我再开始落地。
