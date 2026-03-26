import { getDb } from "@/lib/db";

const VISITOR_STAT_KEY = "visitor_count";
export const VISITOR_COOKIE_NAME = "woodyyan_visitor_seen";
export const VISITOR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

type StatRow = {
  value: number;
};

export function getVisitorCount() {
  const row = getDb()
    .prepare("SELECT value FROM stats WHERE key = ?")
    .get(VISITOR_STAT_KEY) as StatRow | undefined;

  return row?.value ?? 0;
}

export function incrementVisitorCount() {
  const existing = getVisitorCount();

  if (existing === 0) {
    getDb()
      .prepare(
        "INSERT INTO stats (key, value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP) ON CONFLICT(key) DO UPDATE SET value = value + 1, updated_at = CURRENT_TIMESTAMP"
      )
      .run(VISITOR_STAT_KEY, 1);

    return getVisitorCount();
  }

  getDb()
    .prepare(
      "UPDATE stats SET value = value + 1, updated_at = CURRENT_TIMESTAMP WHERE key = ?"
    )
    .run(VISITOR_STAT_KEY);

  return getVisitorCount();
}

export function resolveVisitorCount(hasSeenCookie: boolean) {
  return hasSeenCookie ? getVisitorCount() : incrementVisitorCount();
}
