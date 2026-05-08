const items = [
  { label: ["Discovery"],             angle: -90  },
  { label: ["Prioritisation"],        angle: -18  },
  { label: ["Stakeholder","Alignment"],angle:  54  },
  { label: ["Clarity in","Ambiguity"],angle: 126  },
  { label: ["Metrics"],               angle: 198  },
];

function PMWheel({ onYellow = false }: { onYellow?: boolean }) {
  const cx = 220, cy = 210;
  const ringR = 108, labelR = 138, nodeR = 6, centerR = 38;
  const toRad = (d: number) => (d * Math.PI) / 180;

  const ringStroke  = onYellow ? "rgba(0,0,0,0.15)" : "#252525";
  const spokeStroke = onYellow ? "rgba(0,0,0,0.12)" : "#1e1e1e";
  const centerFill  = onYellow ? "#000"  : "#ffcc00";
  const centerText  = onYellow ? "#ffcc00" : "#000";
  const nodeColor   = (i: number) =>
    onYellow ? `rgba(0,0,0,${0.9 - i * 0.13})` :
    i === 0   ? "#ffcc00" : `rgba(255,255,255,${0.85 - i * 0.12})`;
  const textColor   = (i: number) =>
    onYellow ? `rgba(0,0,0,${0.85 - i * 0.1})` :
    i === 0   ? "#ffcc00" : `rgba(255,255,255,${0.85 - i * 0.1})`;

  return (
    <svg viewBox="0 0 500 420" style={{ width: "100%", height: "100%" }}>
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={ringR} fill="none" stroke={ringStroke} strokeWidth="1.5" />

      {items.map((item, i) => {
        const rad = toRad(item.angle);
        const nx  = cx + ringR  * Math.cos(rad);
        const ny  = cy + ringR  * Math.sin(rad);
        const lx  = cx + labelR * Math.cos(rad);
        const ly  = cy + labelR * Math.sin(rad);
        const cos = Math.cos(rad);
        const anchor = cos > 0.2 ? "start" : cos < -0.2 ? "end" : "middle";
        const xPad   = cos > 0.2 ? 10 : cos < -0.2 ? -10 : 0;
        const lh     = 16;
        const nL     = item.label.length;

        return (
          <g key={i}>
            {/* Spoke */}
            <line
              x1={cx + (centerR + 2) * Math.cos(rad)}
              y1={cy + (centerR + 2) * Math.sin(rad)}
              x2={nx} y2={ny}
              stroke={spokeStroke} strokeWidth="1"
            />
            {/* Node */}
            <circle cx={nx} cy={ny} r={nodeR} fill={nodeColor(i)} />
            {/* Label */}
            {item.label.map((line, j) => (
              <text
                key={j}
                x={lx + xPad}
                y={ly + (j - (nL - 1) / 2) * lh}
                textAnchor={anchor}
                dominantBaseline="middle"
                fill={textColor(i)}
                fontSize="14"
                fontFamily="'Inter Tight','Helvetica Neue',Helvetica,Arial,sans-serif"
                fontWeight={i === 0 ? "700" : "600"}
                letterSpacing="-0.01em"
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}

      {/* Centre */}
      <circle cx={cx} cy={cy} r={centerR} fill={centerFill} />
      <text
        x={cx} y={cy} textAnchor="middle" dominantBaseline="middle"
        fill={centerText} fontSize="13"
        fontFamily="'Inter Tight','Helvetica Neue',Helvetica,Arial,sans-serif"
        fontWeight="700" letterSpacing="-0.02em"
      >product</text>
    </svg>
  );
}

const LinkedInBanners = () => {
  const W = 1584;

  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "60px 40px", display: "flex", flexDirection: "column", gap: "60px", alignItems: "center" }}>

      <div style={{ color: "#555", fontFamily: "JetBrains Mono, monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        LinkedIn Banner Previews — 1584 × 396 px
      </div>

      {/* ── OPTION A: EDITORIAL DARK ── */}
      <div style={{ width: "100%", maxWidth: W }}>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Option A — Editorial Dark</div>
        <div style={{ width: "100%", aspectRatio: "1584 / 396", background: "#000", position: "relative", overflow: "hidden", borderRadius: "4px" }}>
          {/* Grain */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, opacity: 0.04, backgroundSize: "200px 200px" }} />
          {/* Yellow left bar */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6px", background: "#ffcc00" }} />
          {/* Name */}
          <div style={{ position: "absolute", left: "22%", top: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontFamily: "'Inter Tight','Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 800, fontSize: "clamp(22px,5vw,68px)", color: "#fff", lineHeight: 0.88, letterSpacing: "-0.045em", textTransform: "uppercase" }}>
              Lucas<br />Daneluz
            </div>
            <div style={{ width: "clamp(36px,5vw,60px)", height: "3px", background: "#ffcc00", margin: "clamp(8px,1.2vw,16px) 0" }} />
            <div style={{ fontFamily: "'Inter Tight','Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 500, fontSize: "clamp(9px,1.6vw,22px)", color: "#9a9a9a", letterSpacing: "0.01em" }}>
              Product Manager
            </div>
          </div>
          {/* Wheel right */}
          <div style={{ position: "absolute", right: "3%", top: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center", width: "32%" }}>
            <PMWheel onYellow={false} />
          </div>
          {/* URL */}
          <div style={{ position: "absolute", bottom: "clamp(8px,1.8vw,18px)", left: "22%", fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(6px,0.72vw,10px)", color: "#333", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            lucasdaneluz.com
          </div>
        </div>
      </div>

      {/* ── OPTION B: YELLOW SPLIT ── */}
      <div style={{ width: "100%", maxWidth: W }}>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Option B — Yellow Split</div>
        <div style={{ width: "100%", aspectRatio: "1584 / 396", background: "#000", position: "relative", overflow: "hidden", borderRadius: "4px", display: "flex" }}>
          {/* Grain */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, opacity: 0.04, backgroundSize: "200px 200px", zIndex: 1 }} />
          {/* Dark left */}
          <div style={{ flex: "0 0 65%", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "22%", paddingRight: "3%", zIndex: 2 }}>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(6px,0.78vw,11px)", color: "#555", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "clamp(8px,1.2vw,14px)" }}>Product Manager · London, UK</div>
            <div style={{ fontFamily: "'Inter Tight','Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 800, fontSize: "clamp(22px,5vw,68px)", color: "#fff", lineHeight: 0.88, letterSpacing: "-0.045em", textTransform: "uppercase" }}>
              Lucas<br />Daneluz
            </div>
            <div style={{ marginTop: "clamp(10px,1.4vw,16px)", fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(6px,0.72vw,10px)", color: "#333", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              lucasdaneluz.com
            </div>
          </div>
          {/* Yellow right — wheel */}
          <div style={{ flex: "0 0 35%", background: "#ffcc00", display: "flex", alignItems: "center", justifyContent: "center", padding: "2% 2%", zIndex: 2 }}>
            <PMWheel onYellow={true} />
          </div>
        </div>
      </div>

      <div style={{ color: "#333", fontFamily: "JetBrains Mono, monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.8 }}>
        To export: zoom to fit banner · screenshot · crop to 1584 × 396 px
      </div>
    </div>
  );
};

export default LinkedInBanners;
