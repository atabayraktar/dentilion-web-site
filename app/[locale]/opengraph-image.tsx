import { ImageResponse } from "next/og";

export const alt = "Dentilion";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 48, background: "#14123F", color: "#F5F2EB" }}>
        <svg width="220" height="300" viewBox="40 20 320 450" fill="none">
          <path
            d="M200 60 C160 30 90 40 70 110 C55 165 90 200 95 250 C100 310 85 400 120 430 C150 455 165 380 178 330 C185 300 215 300 222 330 C235 380 250 455 280 430 C315 400 300 310 305 250 C310 200 345 165 330 110 C310 40 240 30 200 60 Z"
            stroke="#3ED2E0"
            strokeWidth="10"
            strokeLinejoin="round"
          />
        </svg>
        <div style={{ fontSize: 140, fontWeight: 700 }}>Dentilion</div>
      </div>
    ),
    size,
  );
}
