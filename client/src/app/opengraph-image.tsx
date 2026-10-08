import { ImageResponse } from "next/og";
export const alt = "You & AI — AI consulting, software & AEO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#0c1a31",
        color: "#ffffff",
        padding: "72px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            background: "#24cbbb",
            color: "#0c1a31",
            borderRadius: 20,
            width: 80,
            height: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Y.
        </div>
        <div style={{ display: "flex", fontSize: 40 }}>You &amp; AI</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>
          Ideas into useful software.
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#7ee8dc" }}>
          AI consulting · Software development · AEO
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#b7c3d4" }}>
        youandai.dev
      </div>
    </div>,
    size,
  );
}
