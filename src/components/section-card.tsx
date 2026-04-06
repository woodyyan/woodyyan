import type { SectionItem } from "@/content/site-content";

type SectionCardProps = {
  item: SectionItem;
};

function DefaultSurface({ item, available }: { item: SectionItem; available: boolean }) {
  return (
    <div
      className={`relative flex flex-1 flex-col justify-between overflow-hidden px-5 py-5 text-white ${
        available ? "min-h-[13.5rem]" : "min-h-[11rem]"
      } ${item.surfaceClassName}`}
    >
      {available ? (
        <div className="absolute inset-x-5 top-0 h-px bg-white/38" />
      ) : (
        <div className="absolute inset-x-5 top-0 h-px bg-white/18" />
      )}

      <div className="flex items-start justify-between gap-3 text-xs uppercase tracking-[0.28em] text-white/72">
        <span>{item.index}</span>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] tracking-[0.24em] text-white/88">
            {item.category}
          </span>
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] tracking-[0.24em] ${
              available
                ? "border border-white/22 bg-black/12 text-white/88"
                : "border border-white/16 bg-white/8 text-white/68"
            }`}
          >
            {available ? "Live" : "Soon"}
          </span>
        </div>
      </div>

      <div className="relative space-y-2">
        <p className="text-xs uppercase tracking-[0.32em] text-white/70">{item.surfaceLabel}</p>
        <p
          className={`font-display leading-[0.95] tracking-[-0.035em] text-balance ${
            available ? "text-[clamp(2rem,3.2vw,2.75rem)]" : "text-[clamp(1.7rem,2.8vw,2.3rem)]"
          }`}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
}

function LinguaflowSurface({ item, available }: { item: SectionItem; available: boolean }) {
  return (
    <div
      className={`relative flex flex-1 flex-col overflow-hidden px-5 py-5 text-[#373634] ${
        available ? "min-h-[13.5rem]" : "min-h-[11rem]"
      } bg-[linear-gradient(180deg,#efedeb_0%,#e5e2de_100%)]`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(33,115,255,0.12),transparent_20%),radial-gradient(circle_at_18%_84%,rgba(255,255,255,0.55),transparent_24%)]" />
      <div className="absolute inset-x-5 top-0 h-px bg-black/8" />

      <div className="relative flex items-start justify-between gap-3 text-xs uppercase tracking-[0.28em] text-black/45">
        <span>{item.index}</span>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-black/8 bg-white/55 px-2.5 py-1 text-[10px] tracking-[0.24em] text-black/62">
            {item.category}
          </span>
          <span className="rounded-full border border-[#1f74ff]/10 bg-[#1f74ff]/12 px-2.5 py-1 text-[10px] tracking-[0.24em] text-[#1f74ff]">
            Live
          </span>
        </div>
      </div>

      <div className="relative mt-4 space-y-2">
        <p className="text-xs uppercase tracking-[0.32em] text-black/38">{item.surfaceLabel}</p>
        <p className="font-display text-[clamp(2rem,3.2vw,2.75rem)] leading-[0.95] tracking-[-0.035em] text-balance text-[#2f2f2e]">
          {item.title}
        </p>
      </div>

      <div className="relative mt-4 flex flex-1 flex-col overflow-hidden rounded-[1.45rem] border border-black/8 bg-white/48 shadow-[0_18px_40px_rgba(48,46,44,0.08)] backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-black/6 bg-white/42 px-3 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6159] shadow-[0_0_0_1px_rgba(201,55,49,0.12)_inset]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f4be2a] shadow-[0_0_0_1px_rgba(189,130,0,0.14)_inset]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2fc44f] shadow-[0_0_0_1px_rgba(26,133,49,0.14)_inset]" />
          </div>

          <div className="flex items-center gap-2 text-[9px] font-semibold tracking-[0.16em]">
            <span className="rounded-full bg-[#d9e7ff] px-2.5 py-1 text-[#1f74ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
              英 ↔ 中
            </span>
            <span className="rounded-full bg-white/72 px-2.5 py-1 text-black/42">简 ↔ 繁</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2.5 p-3">
          <div className="space-y-1">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/32">Input</p>
            <div className="rounded-[1rem] border border-black/6 bg-white/72 px-3 py-2 text-[0.95rem] font-semibold text-[#2d2d2d] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
              你好
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 px-1 text-[10px] font-medium text-black/45">
            <span className="inline-flex items-center gap-1.5 text-[#1f74ff]">
              <span aria-hidden className="text-xs">
                →
              </span>
              <span>简体中文 → English</span>
            </span>
            <span className="inline-flex items-center rounded-full bg-[#1f74ff] px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_10px_18px_rgba(31,116,255,0.18)]">
              翻译
            </span>
          </div>

          <div className="flex flex-1 flex-col space-y-1">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/32">Output</p>
            <div className="flex flex-1 items-start rounded-[1rem] border border-black/6 bg-white/72 px-3 py-2 text-[0.95rem] font-semibold text-[#2d2d2d] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
              Hello
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WolongTraderSurface({ item, available }: { item: SectionItem; available: boolean }) {
  return (
    <div
      className={`relative flex flex-1 flex-col overflow-hidden px-5 py-5 text-[#f5d79a] ${
        available ? "min-h-[13.5rem]" : "min-h-[11rem]"
      } bg-[radial-gradient(circle_at_50%_18%,rgba(231,157,59,0.16),transparent_22%),radial-gradient(circle_at_50%_48%,rgba(217,136,26,0.12),transparent_32%),linear-gradient(180deg,#0c0907_0%,#110d09_58%,#0a0807_100%)]`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,194,102,0.04),transparent_22%,rgba(0,0,0,0.18)_100%)]" />
      <div className="absolute inset-x-5 top-0 h-px bg-[#f0bf6a]/24" />

      <div className="relative flex items-start justify-between gap-3 text-xs uppercase tracking-[0.28em] text-[#d7b98a]/66">
        <span>{item.index}</span>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-[#f0bf6a]/18 bg-white/4 px-2.5 py-1 text-[10px] tracking-[0.24em] text-[#e6c38b]/82">
            {item.category}
          </span>
          <span className="rounded-full border border-[#f0bf6a]/18 bg-[#f0bf6a]/10 px-2.5 py-1 text-[10px] tracking-[0.24em] text-[#f0bf6a]">
            Live
          </span>
        </div>
      </div>

      <div className="relative mt-4 flex flex-1 flex-col justify-center text-center">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-[0.9rem] border border-[#f0bf6a]/20 bg-[linear-gradient(180deg,rgba(255,215,143,0.22),rgba(176,101,12,0.16))] shadow-[0_12px_30px_rgba(209,132,29,0.16)]">
          <span className="text-lg font-black tracking-[-0.08em] text-[#f8dfac]">W↗</span>
        </div>

        <div className="mt-5 space-y-3">
          <p className="text-xs uppercase tracking-[0.32em] text-[#d4b589]/60">{item.surfaceLabel}</p>
          <p className="font-display text-[clamp(2.2rem,3vw,3rem)] leading-[0.98] tracking-[-0.04em] text-transparent bg-[linear-gradient(180deg,#ffe7af_0%,#f3bf62_45%,#dd8f24_100%)] bg-clip-text">
            {item.title}
          </p>
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-[#b89263]">
            智能分析 · 策略回测 · 信号推送
          </p>
          <p className="mx-auto max-w-[34rem] text-sm leading-6 text-[#8e8476]">
            面向个人投资者的 AI 量化分析平台，帮你用数据和策略看清市场，做出更理性的投资决策。
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex min-w-[9.5rem] items-center justify-center rounded-[1rem] bg-[linear-gradient(180deg,#f2bc63_0%,#dd902d_100%)] px-4 py-3 text-sm font-semibold text-[#14100b] shadow-[0_12px_30px_rgba(214,136,24,0.28)]">
            免费开始使用
          </span>
          <span className="inline-flex min-w-[9.5rem] items-center justify-center rounded-[1rem] border border-white/12 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-[#b3a28d]">
            查看功能介绍 ↓
          </span>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {[
            ["A股 + 港股", "双市场支持"],
            ["AI辅助决策", "智能分析选股"],
            ["100+", "技术指标"],
          ].map(([value, label]) => (
            <div
              key={value}
              className="rounded-[1.15rem] border border-white/14 bg-white/[0.02] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <p className="text-xl font-bold tracking-[-0.03em] text-[#f0bf6a]">{value}</p>
              <p className="mt-1 text-[11px] tracking-[0.16em] text-[#7f756a]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionCardBody({ item, available }: { item: SectionItem; available: boolean }) {
  return (
    <>
      {item.previewVariant === "linguaflow" ? (
        <LinguaflowSurface item={item} available={available} />
      ) : item.previewVariant === "wolongtrader" ? (
        <WolongTraderSurface item={item} available={available} />
      ) : (
        <DefaultSurface item={item} available={available} />
      )}

      <div className="flex flex-col gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <div className="space-y-3">
          <p className="text-base leading-7 text-[var(--text)]/88">{item.summary}</p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[var(--background-strong)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
              {item.note}
            </span>
            <span className="rounded-full border border-[var(--line)] bg-white/55 px-3 py-1 font-mono text-[11px] text-[var(--muted)]">
              {item.meta}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-[var(--line)] pt-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
          <span className="text-[11px] tracking-[0.22em] text-[var(--muted)]/78">
            {available ? "Available now" : "Awaiting domain"}
          </span>
          <span className="flex items-center gap-3">
            <span className="transition-colors duration-300 group-hover:text-[var(--accent)]">{item.cta}</span>
            <span
              aria-hidden
              className={`text-lg transition-transform duration-300 ${
                available ? "group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent)]" : "opacity-40"
              }`}
            >
              {available ? "↗" : "—"}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export function SectionCard({ item }: SectionCardProps) {
  const available = Boolean(item.href);
  const baseClassName = `group editorial-panel relative flex min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] ${
    available
      ? "transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_100px_rgba(44,38,32,0.14)]"
      : "cursor-default border-dashed bg-[rgba(251,248,242,0.62)] opacity-90"
  }`;

  if (!available) {
    return (
      <div aria-disabled="true" className={baseClassName}>
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(102,112,95,0.22),rgba(102,112,95,0.02))]" />
        <SectionCardBody item={item} available={available} />
      </div>
    );
  }

  return (
    <a href={item.href} target="_blank" rel="noreferrer" className={baseClassName}>
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(102,112,95,0.8),rgba(102,112,95,0.14))] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <SectionCardBody item={item} available={available} />
    </a>
  );
}
