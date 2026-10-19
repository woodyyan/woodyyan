import { dailyNotes } from "@/content/daily-notes";

function getDailyNote() {
  const now = new Date();
  const start = Date.UTC(now.getUTCFullYear(), 0, 0);
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const dayOfYear = Math.floor((today - start) / 86400000);

  return dailyNotes[dayOfYear % dailyNotes.length];
}

export function DailyNote() {
  return <span className="daily-note">{getDailyNote()}</span>;
}
