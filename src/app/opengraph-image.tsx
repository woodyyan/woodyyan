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
          padding: "72px",
          position: "relative",
          backgroundColor: "#F3EFE8",
          color: "#161514",
          border: "1px solid rgba(56,51,45,0.14)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 12% 14%, rgba(102,112,95,0.16), transparent 28%)",
          }}
        />
        <div style={{ fontSize: 24, letterSpacing: "0.45em", textTransform: "uppercase", color: "#66705F", position: "relative" }}>
          Personal index
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: 108, fontFamily: "serif", lineHeight: 0.95 }}>
            {siteMeta.name}
          </div>
          <div style={{ fontSize: 36, color: "rgba(23,19,17,0.68)", maxWidth: 880 }}>
            Digital work, photographs, songs.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "rgba(23,19,17,0.62)" }}>
          <span>{siteMeta.updatedAt}</span>
          <span>{siteMeta.location}</span>
        </div>
      </div>
    ),
    size
  );
}
