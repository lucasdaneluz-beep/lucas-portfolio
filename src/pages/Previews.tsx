import { Link } from "react-router-dom";

const previews = [
  {
    path: "/preview-warm-obsidian",
    label: "Option A",
    sub: "Warm Obsidian",
    desc: "Dark charcoal · Amber accent · Inter",
    bg: "#1e1b18",
    color: "#f0a030",
    pageBg: "#131110",
  },
  {
    path: "/preview-claude-cream",
    label: "Option B",
    sub: "Claude Cream",
    desc: "Parchment · Terracotta · Lora + Inter",
    bg: "#ffffff",
    color: "#c4532a",
    pageBg: "#f5f0e8",
  },
  {
    path: "/preview-terracotta",
    label: "Previous",
    sub: "Terracotta / samfrons",
    desc: "#e9e8e3 · Forest green · Cormorant",
    bg: "#ffffff",
    color: "#2c3b2c",
    pageBg: "#e9e8e3",
  },
  {
    path: "/preview-amber",
    label: "Previous",
    sub: "Amber Dark",
    desc: "Dark navy · Amber accent",
    bg: "#1a1814",
    color: "#f0a030",
    pageBg: "#13110e",
  },
];

const Previews = () => (
  <div style={{ minHeight: "100vh", background: "#0d0b09", padding: "32px 20px 64px", fontFamily: "'Inter', sans-serif" }}>
    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b6158", marginBottom: 8 }}>
      Design Previews
    </p>
    <h1 style={{ fontSize: 26, fontWeight: 800, color: "#f0ebe2", marginBottom: 32, letterSpacing: "-0.02em" }}>
      Pick a mockup
    </h1>

    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {previews.map(({ path, label, sub, desc, bg, color, pageBg }) => (
        <Link
          key={path}
          to={path}
          style={{
            display: "flex", alignItems: "center", gap: 16,
            padding: "18px 20px", borderRadius: 16, textDecoration: "none",
            background: "#1e1b18", border: "1px solid #2e2a25",
          }}
        >
          {/* Colour swatch */}
          <div style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: pageBg, border: "1px solid rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, background: bg, border: `2px solid ${color}` }} />
          </div>

          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color }}>
                {label}
              </span>
            </div>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#f0ebe2", marginBottom: 2 }}>{sub}</p>
            <p style={{ fontSize: 12, color: "#6b6158" }}>{desc}</p>
          </div>

          <span style={{ marginLeft: "auto", fontSize: 18, color: "#6b6158" }}>›</span>
        </Link>
      ))}
    </div>

    <div style={{ marginTop: 40, textAlign: "center" }}>
      <Link to="/" style={{ fontSize: 12, color: "#6b6158", textDecoration: "none" }}>← Back to live site</Link>
    </div>
  </div>
);

export default Previews;
