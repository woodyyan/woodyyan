import { redis } from "@/lib/redis";

const VISITOR_STAT_KEY = "visitor_count";
export const VISITOR_COOKIE_NAME = "woodyyan_visitor_seen";
export const VISITOR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

export async function getVisitorCount() {
  const visitorCount = await redis.get<number>(VISITOR_STAT_KEY);

  return visitorCount ?? 0;
}

export async function incrementVisitorCount() {
  return redis.incr(VISITOR_STAT_KEY);
}

export async function resolveVisitorCount(hasSeenCookie: boolean) {
  return hasSeenCookie ? getVisitorCount() : incrementVisitorCount();
}
