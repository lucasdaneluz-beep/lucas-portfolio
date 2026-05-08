const LinkedInBanners = () => {
  const W = 1584;
  const H = 396;

  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "60px 40px", display: "flex", flexDirection: "column", gap: "60px", alignItems: "center" }}>

      <div style={{ color: "#555", fontFamily: "JetBrains Mono, monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        LinkedIn Banner Previews — 1584 × 396 px · Screenshot each at full width
      </div>

      {/* ── OPTION A: EDITORIAL DARK ── */}
      <div style={{ width: "100%", maxWidth: W }}>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Option A — Editorial Dark</div>
        <div style={{
          width: "100%",
          aspectRatio: `${W} / ${H}`,
          background: "#000",
          position: "relative",
          overflow: "hidden",
          borderRadius: "4px",
        }}>
          {/* Subtle grain */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, opacity: 0.04, backgroundSize: "200px 200px" }} />

          {/* Yellow left accent bar */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6px", background: "#ffcc00" }} />

          {/* Profile photo safe zone indicator — invisible, just keeps layout honest */}
          {/* Content starts ~320px from left to clear photo overlap */}
          <div style={{ position: "absolute", left: "22%", top: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: "0" }}>
            <div style={{ fontFamily: "'Inter Tight', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 800, fontSize: "clamp(32px, 6.5vw, 88px)", color: "#fff", lineHeight: 0.88, letterSpacing: "-0.045em", textTransform: "uppercase" }}>
              Lucas<br />Daneluz
            </div>
            {/* Accent rule */}
            <div style={{ width: "clamp(40px, 5vw, 64px)", height: "3px", background: "#ffcc00", margin: "clamp(8px,1.2vw,16px) 0" }} />
            <div style={{ fontFamily: "'Inter Tight', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500, fontSize: "clamp(10px, 1.6vw, 22px)", color: "#9a9a9a", letterSpacing: "0.01em", textTransform: "none" }}>
              Product Manager
            </div>
          </div>

          {/* Right-side content */}
          <div style={{ position: "absolute", right: "5%", top: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", gap: "clamp(10px,1.5vw,20px)" }}>
            {[
              { metric: "3×", label: "Loyalty engagement" },
              { metric: "40%", label: "Faster onboarding" },
              { metric: "25%", label: "Cost reduction" },
            ].map((item) => (
              <div key={item.metric} style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "'Inter Tight', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 800, fontSize: "clamp(18px, 2.8vw, 38px)", color: "#ffcc00", lineHeight: 1, letterSpacing: "-0.03em" }}>{item.metric}</div>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(7px, 0.9vw, 12px)", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "2px" }}>{item.label}</div>
              </div>
            ))}
          </div>

          {/* URL bottom left */}
          <div style={{ position: "absolute", bottom: "clamp(10px,2vw,20px)", left: "calc(22% + 0px)", fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(7px, 0.75vw, 11px)", color: "#555", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            lucasdaneluz.com
          </div>
        </div>
      </div>

      {/* ── OPTION B: YELLOW SPLIT ── */}
      <div style={{ width: "100%", maxWidth: W }}>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Option B — Yellow Split</div>
        <div style={{
          width: "100%",
          aspectRatio: `${W} / ${H}`,
          background: "#000",
          position: "relative",
          overflow: "hidden",
          borderRadius: "4px",
          display: "flex",
        }}>
          {/* Subtle grain */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, opacity: 0.04, backgroundSize: "200px 200px", zIndex: 1 }} />

          {/* Dark left section */}
          <div style={{ flex: "0 0 68%", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "22%", paddingRight: "4%", zIndex: 2 }}>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(7px, 0.8vw, 11px)", color: "#555", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "clamp(8px,1.2vw,16px)" }}>Product Manager · London, UK</div>
            <div style={{ fontFamily: "'Inter Tight', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 800, fontSize: "clamp(30px, 6vw, 84px)", color: "#fff", lineHeight: 0.88, letterSpacing: "-0.045em", textTransform: "uppercase" }}>
              Lucas<br />Daneluz
            </div>
            <div style={{ marginTop: "clamp(10px,1.4vw,18px)", display: "flex", gap: "clamp(12px,1.5vw,20px)", alignItems: "center" }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(7px, 0.75vw, 11px)", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>B2B SaaS</div>
              <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#333" }} />
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(7px, 0.75vw, 11px)", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>FMCG</div>
              <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#333" }} />
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(7px, 0.75vw, 11px)", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>Supply Chain</div>
            </div>
          </div>

          {/* Yellow right section */}
          <div style={{ flex: "0 0 32%", background: "#ffcc00", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: "0 5% 0 6%", gap: "clamp(12px, 1.8vw, 24px)", zIndex: 2 }}>
            {[
              { metric: "3×", label: "Loyalty engagement" },
              { metric: "40%", label: "Faster onboarding" },
              { metric: "25%", label: "Cost reduction" },
            ].map((item) => (
              <div key={item.metric}>
                <div style={{ fontFamily: "'Inter Tight', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 800, fontSize: "clamp(20px, 3vw, 42px)", color: "#000", lineHeight: 1, letterSpacing: "-0.04em" }}>{item.metric}</div>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(7px, 0.8vw, 11px)", color: "rgba(0,0,0,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "2px" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ color: "#333", fontFamily: "JetBrains Mono, monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.8 }}>
        To export: zoom browser to fit banner width · screenshot · crop to 1584 × 396 px
      </div>
    </div>
  );
};

export default LinkedInBanners;
