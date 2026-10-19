import { ImageResponse } from "next/og";

import { siteMeta } from "@/content/site-meta";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#F7F8FA",
          color: "#182230",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, paddingBottom: 24, borderBottom: "1px solid #DCE1E8" }}>
          <svg width="40" height="40" viewBox="0 0 96 96" fill="none">
            <rect width="96" height="96" rx="24" fill="#FFFFFF" />
            <path d="M24 65V31h8.6l15.8 23.4L64.4 31H73v34h-7.8V43.2L50.8 64h-4.6L31.8 43.2V65H24Z" fill="#182230" />
            <circle cx="74" cy="25" r="6" fill={siteMeta.accent} />
          </svg>
          <span style={{ fontSize: 22, color: "#626D7C" }}>Personal index</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 120, fontWeight: 700, letterSpacing: "-0.065em", lineHeight: 1 }}>
            {siteMeta.name}<span style={{ color: siteMeta.accent }}>.</span>
          </div>
          <div style={{ fontSize: 30, color: "#626D7C" }}>
            Digital work, photographs, songs.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid #DCE1E8", fontSize: 20, color: "#626D7C" }}>
          <span>{siteMeta.updatedAt}</span>
          <span>{siteMeta.location}</span>
        </div>
      </div>
    ),
    size
  );
}
