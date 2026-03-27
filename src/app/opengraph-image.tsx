import { ImageResponse } from "next/og";

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
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #f8fbff 0%, #e6efff 42%, #d2e4ff 100%)",
          color: "#10233f",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          padding: "56px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "auto auto -120px -120px",
            width: "380px",
            height: "380px",
            borderRadius: "999px",
            background: "rgba(90, 143, 255, 0.16)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background: "rgba(52, 107, 223, 0.12)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(16, 35, 63, 0.08)",
            background: "rgba(255, 255, 255, 0.78)",
            boxShadow: "0 26px 80px rgba(38, 73, 134, 0.14)",
            padding: "44px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "999px",
                  background: "#3b82f6",
                }}
              />
              <div
                style={{
                  fontSize: "24px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(16, 35, 63, 0.72)",
                }}
              >
                Weboryn
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              {["Client portals", "Internal tools", "Booking flows"].map(
                (item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 16px",
                      borderRadius: "999px",
                      background: "rgba(59, 130, 246, 0.08)",
                      color: "#254a87",
                      fontSize: "18px",
                    }}
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "760px",
              gap: "20px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#3d68aa",
              }}
            >
              Focused digital systems
            </div>

            <div
              style={{
                fontSize: "72px",
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: "-0.05em",
              }}
            >
              We turn messy workflows into clear digital paths.
            </div>

            <div
              style={{
                fontSize: "30px",
                lineHeight: 1.3,
                color: "rgba(16, 35, 63, 0.82)",
                maxWidth: "700px",
              }}
            >
              Weboryn designs and builds clearer systems for client portals,
              internal tools and booking flows.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "22px",
              color: "rgba(16, 35, 63, 0.68)",
            }}
          >
            <div style={{ display: "flex", gap: "24px" }}>
              <div>Clear scope</div>
              <div>Working implementation</div>
              <div>Clean handoff</div>
            </div>

            <div>weboryn.com</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
