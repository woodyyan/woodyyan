import { redis } from "@/lib/redis";

const VISITOR_STAT_KEY = "visitor_count";
const VISITOR_FETCH_TIMEOUT_MS = 2500;
export const VISITOR_COOKIE_NAME = "woodyyan_visitor_seen";
export const VISITOR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

function withTimeout<T>(promise: Promise<T>, timeoutMs = VISITOR_FETCH_TIMEOUT_MS) {
  return Promise.race<T>([
    promise,
    new Promise<T>((_, reject) => {
      setTimeout(() => {
        reject(new Error("Visitor count request timed out"));
      }, timeoutMs);
    }),
  ]);
}

export async function getVisitorCount() {
  const visitorCount = await withTimeout(redis.get<number>(VISITOR_STAT_KEY));

  return visitorCount ?? 0;
}

export async function incrementVisitorCount() {
  return withTimeout(redis.incr(VISITOR_STAT_KEY));
}

export async function resolveVisitorCount(hasSeenCookie: boolean) {
  return hasSeenCookie ? getVisitorCount() : incrementVisitorCount();
}
