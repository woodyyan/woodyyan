"use client";

import { useEffect, useState } from "react";

type VisitorState = {
  visitorCount: number;
  available: boolean;
};

function formatVisitorCount(visitorCount: number) {
  return visitorCount.toString().padStart(4, "0");
}

export function VisitorBadge() {
  const [state, setState] = useState<VisitorState | null>(null);

  useEffect(() => {
    let active = true;

    async function loadVisitorCount() {
      try {
        const response = await fetch("/api/visitor", {
          cache: "no-store",
        });

        const data = (await response.json()) as VisitorState;

        if (active) {
          setState(data);
        }
      } catch {
        if (active) {
          setState({ visitorCount: 0, available: false });
        }
      }
    }

    loadVisitorCount();

    return () => {
      active = false;
    };
  }, []);

  const label = state
    ? state.available
      ? `Visitor No. ${formatVisitorCount(state.visitorCount)}`
      : "Visitor note is taking a quiet pause."
    : "Counting quiet arrivals...";

  return <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">{label}</span>;
}
