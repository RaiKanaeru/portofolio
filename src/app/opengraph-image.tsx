import { ImageResponse } from "next/og";

// Route segment config
export const alt = "Raihan Ariansyah // Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dark cyber OG image for social sharing (LinkedIn, WhatsApp, Twitter, etc.)
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          padding: "72px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Subtle grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Top label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              background: "#22d3ee",
              boxShadow: "0 0 16px #22d3ee",
            }}
          />
          <div
            style={{
              color: "#22d3ee",
              fontSize: "22px",
              letterSpacing: "6px",
              fontWeight: 700,
            }}
          >
            // OPEN_TO_WORK
          </div>
        </div>

        {/* Main heading */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f0f0f0",
              fontSize: "84px",
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1,
              display: "flex",
            }}
          >
            RAIHAN ARIANSYAH
          </div>
          <div
            style={{
              color: "#a1a1aa",
              fontSize: "32px",
              marginTop: "24px",
              letterSpacing: "2px",
              display: "flex",
            }}
          >
            FULLSTACK DEVELOPER // FRESH GRADUATE SOFTWARE ENGINEER
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #2a2a2e",
            paddingTop: "32px",
          }}
        >
          <div style={{ color: "#7d7d87", fontSize: "22px", letterSpacing: "3px", display: "flex" }}>
            BANDUNG, INDONESIA
          </div>
          <div style={{ color: "#22d3ee", fontSize: "22px", letterSpacing: "3px", display: "flex" }}>
            WEB // BACKEND // MOBILE // IOT
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
