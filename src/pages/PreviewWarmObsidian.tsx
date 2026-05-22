import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, TrendingUp, ArrowRight, Linkedin, Mail, Search, Compass, Rocket, BarChart2, ChevronRight } from "lucide-react";
import profilePhoto from "@/assets/lucas-profile.png";

// ── Option A: Warm Obsidian ───────────────────────────────────────────────
// Cold navy + cyan → warm charcoal + amber
// Mood: Cozy dark mode. Thoughtful, tech-forward without feeling "crypto".
const c = {
  bg:           "#131110",
  bgCard:       "#1e1b18",
  bgCardAlt:    "#252320",
  bgCardHover:  "#272420",

  accent:       "#f0a030",
  accentGlow:   "#f5b85a",
  accentDim:    "#a87020",
  accentLight:  "rgba(240, 160, 48, 0.10)",
  accentBorder: "rgba(240, 160, 48, 0.22)",

  text:         "#f0ebe2",
  textSub:      "#d4cdc4",
  textMuted:    "#9a8e82",
  textDimmed:   "#6b6158",

  border:       "#2e2a25",
  borderLight:  "rgba(240, 160, 48, 0.15)",
  borderFaint:  "rgba(255, 255, 255, 0.06)",

  green:        "#5ecb85",
  gold:         "#f0a030",
};

const FONT = "'Inter', -apple-system, sans-serif";

const caseStudies = [
  {
    id: "01",
    title: "WalkUp – Smarter Queues",
    description: "Queue transparency, loyalty, and growth for a UK restaurant waitlist marketplace.",
    metric: "3x loyalty engagement uplift",
    tags: ["Marketplace", "Waitlist UX", "Loyalty", "Product Strategy"],
    status: "live",
    href: "/case-studies/walkup",
    accent: c.accent,
    accentBg: "rgba(240, 160, 48, 0.10)",
    accentBorder: "rgba(240, 160, 48, 0.22)",
  },
  {
    id: "02",
    title: "Hipen Media – User Onboarding",
    description: "Restructuring a multi-segment onboarding flow through research and lean MVP.",
    metric: "40% faster onboarding completion",
    tags: ["Discovery", "Onboarding", "MVP", "Research"],
    status: "live",
    href: "/case-studies/hipen-media",
    accent: "#c09af0",
    accentBg: "rgba(192, 154, 240, 0.10)",
    accentBorder: "rgba(192, 154, 240, 0.22)",
  },
  {
    id: "03",
    title: "Westpak – Cost Optimisation",
    description: "Cost reduction across 3 categories, aligning Finance and Operations.",
    metric: "25% cost reduction delivered",
    tags: ["Stakeholder Management", "Cost Optimisation", "Supply Chain"],
    status: "live",
    href: "/case-studies/westpak",
    accent: c.green,
    accentBg: "rgba(94, 203, 133, 0.10)",
    accentBorder: "rgba(94, 203, 133, 0.22)",
  },
  {
    id: "05",
    title: "Next Case Study",
    description: "Something new is in the works. A product concept exploring AI-driven discovery — details coming soon.",
    metric: "",
    tags: ["AI", "Music", "Discovery"],
    status: "coming-soon",
    href: "#",
    accent: c.accentDim,
    accentBg: "rgba(168, 112, 32, 0.08)",
    accentBorder: "rgba(168, 112, 32, 0.15)",
  },
];

const methodologySteps = [
  { icon: <Search size={20} />,    title: "Discover",  description: "User research, data analysis, and stakeholder interviews to frame the real problem." },
  { icon: <Compass size={20} />,   title: "Define",    description: "Synthesise insights into a clear strategy, prioritised roadmap, and success metrics." },
  { icon: <BarChart2 size={20} />, title: "Baseline",  description: "Establish measurable benchmarks before shipping so progress is grounded in data, not assumption." },
  { icon: <Rocket size={20} />,    title: "Deliver",   description: "Ship iteratively, measure outcomes, and refine based on real-world feedback." },
];

const PreviewWarmObsidian = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);

  return (
    <div style={{ minHeight: "100vh", background: c.bg, color: c.text, fontFamily: FONT, WebkitFontSmoothing: "antialiased" }}>

      {/* Preview banner */}
      <div style={{
        background: c.bgCard,
        borderBottom: `1px solid ${c.border}`,
        padding: "9px 24px",
        display: "flex", alignItems: "center", gap: 10,
        fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const,
        color: c.textDimmed,
      }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.accent }} />
        <span style={{ color: c.textMuted }}>Option A — Warm Obsidian</span>
        <span style={{ color: c.textDimmed }}>· charcoal #131110 · amber #f0a030 · Inter</span>
      </div>

      {/* Nav preview */}
      <div style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(19, 17, 16, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${c.border}`,
        padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 56,
      }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: c.text, letterSpacing: "-0.01em" }}>Lucas Daneluz</span>
        <div style={{ display: "flex", gap: 28 }}>
          {["Case Studies", "About", "Contact"].map((label, i) => (
            <span key={label} style={{
              fontSize: 13, fontWeight: 500, color: i === 0 ? c.accent : c.textMuted,
              borderBottom: i === 0 ? `2px solid ${c.accent}` : "2px solid transparent",
              paddingBottom: 2, cursor: "pointer",
            }}>{label}</span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
          <img
            src={profilePhoto}
            alt="Lucas Daneluz"
            style={{
              width: 80, height: 80, borderRadius: "50%", objectFit: "cover", flexShrink: 0,
              border: `1px solid ${c.border}`,
            }}
          />
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.1, color: c.text }}>
              Lucas Daneluz
            </h1>
            <p style={{ fontSize: 16, fontWeight: 600, color: c.accent, marginTop: 4 }}>
              Product Manager
            </p>
          </div>
        </div>

        <p style={{ fontSize: 28, fontWeight: 300, lineHeight: 1.4, letterSpacing: "-0.01em", color: c.textSub, marginBottom: 8 }}>
          Turning real{" "}
          <em style={{ fontStyle: "italic", fontWeight: 500, color: c.accentGlow }}>pain points</em>
          {" "}into{" "}
          <em style={{ fontStyle: "italic", fontWeight: 500, color: c.accentGlow }}>measurable impact</em>.
        </p>
        <p style={{ fontSize: 12, color: c.textDimmed, marginBottom: 28 }}>
          10+ years across B2B SaaS, FMCG, and supply chain.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
          {[
            { icon: <Rocket size={11} />, label: "0→1 Builds" },
            { icon: <Briefcase size={11} />, label: "Stakeholder Alignment" },
            { icon: <Search size={11} />, label: "User Research" },
            { icon: <TrendingUp size={11} />, label: "Outcome-Led PM" },
          ].map(({ icon, label }) => (
            <div key={label} style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "6px 14px", borderRadius: 999,
              fontSize: 12, fontWeight: 600,
              background: c.bgCard, border: `1px solid ${c.border}`, color: c.textMuted,
            }}>
              <span style={{ color: c.accent }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* How I Work */}
      <section style={{ maxWidth: 900, margin: "56px auto 0", padding: "0 24px" }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: c.textSub, marginBottom: 6 }}>How I Work</h2>
        <p style={{ fontSize: 16, fontWeight: 500, fontStyle: "italic", color: c.textMuted, marginBottom: 28 }}>
          A structured approach to building the right thing.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {methodologySteps.map(({ icon, title, description }, i) => (
            <React.Fragment key={title}>
              <div style={{
                borderRadius: 16, padding: "18px 18px 20px",
                background: c.bgCard, border: `1px solid ${c.border}`,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: c.accentLight, color: c.accent, marginBottom: 12,
                }}>
                  {icon}
                </div>
                <p style={{ fontSize: 22, fontWeight: 700, color: c.textSub, marginBottom: 8 }}>{title}</p>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: c.textMuted }}>{description}</p>
              </div>
              {i < methodologySteps.length - 1 && (
                <div style={{ display: "none" }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ maxWidth: 900, margin: "52px auto 0", padding: "0 24px" }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: c.textSub, marginBottom: 6 }}>Case Studies</h2>
        <p style={{ fontSize: 16, fontWeight: 500, fontStyle: "italic", color: c.textMuted, marginBottom: 28 }}>
          Real problems. Structured thinking. Measurable impact.
        </p>

        <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
          {caseStudies.map(({ id, title, description, metric, tags, status, href, accent, accentBg, accentBorder }) => {
            const isLive = status === "live";
            const isHovered = hoveredId === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => isLive && navigate(href)}
                onMouseEnter={() => isLive && setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  width: "100%", textAlign: "left",
                  borderRadius: 16, padding: "18px 22px",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
                  background: c.bgCard,
                  border: `1px solid ${isHovered ? accentBorder : status === "coming-soon" ? c.borderFaint : c.border}`,
                  boxShadow: isHovered ? `inset 3px 0 0 ${accent}` : "none",
                  transform: isHovered ? "scale(1.004)" : "scale(1)",
                  transition: "border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease",
                  cursor: isLive ? "pointer" : "default",
                  opacity: status === "coming-soon" ? 0.5 : 1,
                  fontFamily: FONT,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, minWidth: 0 }}>
                  <span style={{ fontSize: 11, fontWeight: 900, flexShrink: 0, marginTop: 2, color: accent, letterSpacing: "0.05em" }}>{id}</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" as const }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: c.text }}>{title}</p>
                      {status === "coming-soon" && (
                        <span style={{
                          fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const,
                          padding: "2px 8px", borderRadius: 999,
                          background: "rgba(240, 160, 48, 0.08)", color: c.accentDim,
                          border: `1px solid rgba(240, 160, 48, 0.2)`,
                        }}>In Progress</span>
                      )}
                    </div>
                    <p style={{ fontSize: 12, color: c.textMuted, marginBottom: 8 }}>{description}</p>
                    {metric && (
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: 4,
                        padding: "4px 10px", borderRadius: 999,
                        fontSize: 12, fontWeight: 700, marginBottom: 10,
                        background: accentBg, border: `1px solid ${accentBorder}`, color: accent,
                      }}>
                        ↗ {metric}
                      </span>
                    )}
                    <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                      {tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 999,
                          background: c.bgCardAlt, color: c.textDimmed, border: `1px solid ${c.border}`,
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {isLive && <ArrowRight size={15} style={{ flexShrink: 0, color: accent }} />}
              </button>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 900, margin: "64px auto 0", padding: "0 24px" }}>
        <div style={{
          borderRadius: 20, padding: "52px 40px", textAlign: "center",
          background: c.bgCard, border: `1px solid ${c.border}`,
        }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: c.text, marginBottom: 10, letterSpacing: "-0.01em" }}>
            Interested in working together?
          </h2>
          <p style={{ fontSize: 14, color: c.textMuted, lineHeight: 1.75, marginBottom: 32, maxWidth: 420, margin: "0 auto 32px" }}>
            I'm open to PM roles, contract work, or just a good product conversation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" as const }}>
            <a href="mailto:lucas.daneluz@gmail.com" style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "11px 26px", borderRadius: 999,
              fontSize: 13, fontWeight: 700,
              background: c.accent, color: c.bg, textDecoration: "none",
            }}>
              <Mail size={13} /> Get in Touch
            </a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "11px 26px", borderRadius: 999,
              fontSize: 13, fontWeight: 700,
              background: "transparent", border: `1px solid ${c.accentBorder}`, color: c.accent, textDecoration: "none",
            }}>
              <Linkedin size={13} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "40px 24px 56px", fontSize: 11, color: c.textDimmed }}>
        © {new Date().getFullYear()} Lucas Daneluz
      </footer>

      {/* Palette legend */}
      <div style={{
        borderTop: `1px solid ${c.border}`,
        padding: "14px 24px",
        display: "flex", flexWrap: "wrap" as const, gap: 14, alignItems: "center", justifyContent: "center",
        background: c.bgCard,
      }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.textDimmed, marginRight: 4 }}>
          Option A · Warm Obsidian · Inter
        </span>
        {[
          [c.bg,      "page bg"],
          [c.bgCard,  "card bg"],
          [c.accent,  "amber accent"],
          [c.text,    "cream text"],
          [c.border,  "border"],
        ].map(([hex, label]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: c.textMuted }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: hex, border: `1px solid ${c.border}` }} />
            {hex} <span style={{ color: c.textDimmed }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewWarmObsidian;
