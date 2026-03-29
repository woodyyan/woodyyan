import { NextRequest, NextResponse } from "next/server";

import {
  resolveVisitorCount,
  VISITOR_COOKIE_MAX_AGE,
  VISITOR_COOKIE_NAME,
} from "@/lib/visitor";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const hasSeenCookie = Boolean(request.cookies.get(VISITOR_COOKIE_NAME)?.value);

  try {
    const visitorCount = await resolveVisitorCount(hasSeenCookie);

    const response = NextResponse.json(
      { visitorCount },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );

    if (!hasSeenCookie) {
      response.cookies.set({
        name: VISITOR_COOKIE_NAME,
        value: crypto.randomUUID(),
        httpOnly: true,
        sameSite: "lax",
        maxAge: VISITOR_COOKIE_MAX_AGE,
        path: "/",
      });
    }

    return response;
  } catch (error) {
    console.error("Failed to resolve visitor count", error);

    return NextResponse.json(
      { message: "Visitor count unavailable" },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  }
}
