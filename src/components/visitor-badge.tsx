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

  return (
    <div className="space-y-3 rounded-[1.5rem] border border-[var(--line)] bg-[var(--background)]/70 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
        Visitor note
      </p>
      <p className="font-display text-4xl leading-none tracking-[-0.03em] text-[var(--text)]">
        {label}
      </p>
    </div>
  );
}
