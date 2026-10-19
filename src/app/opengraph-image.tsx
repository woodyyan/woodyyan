import { ImageResponse } from "next/og";

import { siteMeta } from "@/content/site-meta";

export const size = { width: 1200, height: 630 };
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
          padding: "48px 72px",
          backgroundColor: "#F7F8FA",
          color: "#182230",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 24, borderBottom: "1px solid #DCE1E8", fontSize: 22 }}>
          <span style={{ fontWeight: 600 }}>{siteMeta.name}</span>
          <span style={{ color: "#626D7C" }}>Personal index</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: "-0.055em", lineHeight: 1.1 }}>
              {siteMeta.name}
            </div>
            <div style={{ fontSize: 25, color: "#626D7C" }}>Digital work, photographs, songs.</div>
          </div>
          <svg width="340" height="340" viewBox="0 0 1024 1024" fill="none">
            <path d="M192 192H384L584 492V832H440V564Z" fill="#182230" />
            <path d="M640 192H832L640 480L544 336Z" fill={siteMeta.accent} />
          </svg>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid #DCE1E8", fontSize: 18, color: "#626D7C" }}>
          <span>{siteMeta.updatedAt}</span>
          <span>{siteMeta.location}</span>
        </div>
      </div>
    ),
    size
  );
}
