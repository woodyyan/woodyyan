import { dailyNotes } from "@/content/daily-notes";

function getDailyNote() {
  const now = new Date();
  const start = Date.UTC(now.getUTCFullYear(), 0, 0);
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const dayOfYear = Math.floor((today - start) / 86400000);

  return dailyNotes[dayOfYear % dailyNotes.length];
}

export function DailyNote() {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
        Daily note
      </p>
      <p className="max-w-xs text-sm leading-7 text-[var(--text)]/80">{getDailyNote()}</p>
    </div>
  );
}
