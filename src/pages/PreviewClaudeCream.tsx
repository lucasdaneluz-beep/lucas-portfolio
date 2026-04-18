import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, TrendingUp, ArrowRight, Linkedin, Mail, Search, Compass, Rocket, BarChart2 } from "lucide-react";
import profilePhoto from "@/assets/lucas-profile.png";

// ── Option B: Claude Cream ────────────────────────────────────────────────
// Dark fintech → warm editorial. Lora serif headings + Inter body.
// Inspired by Claude.ai's warm cream palette: parchment bg, terracotta accent.
const c = {
  bg:           "#f5f0e8",
  bgCard:       "#ffffff",
  bgCardAlt:    "#faf7f2",
  bgCardHover:  "#fdf9f5",

  accent:       "#c4532a",
  accentAlt:    "#d4763f",
  accentLight:  "rgba(196, 83, 42, 0.07)",
  accentBorder: "rgba(196, 83, 42, 0.20)",
  accentHover:  "rgba(196, 83, 42, 0.12)",

  text:         "#1c1713",
  textSub:      "#3d3530",
  textMuted:    "#756860",
  textDimmed:   "#a09388",

  border:       "#d4ccc2",
  borderLight:  "rgba(28, 23, 19, 0.10)",
  borderFaint:  "rgba(28, 23, 19, 0.06)",

  green:        "#2d7a50",
  purple:       "#6b45a0",
  blue:         "#2a6895",
  teal:         "#2a7a6e",
};

const FONT_HEADING = "'Lora', Georgia, serif";
const FONT_BODY    = "'Inter', -apple-system, sans-serif";

const caseStudies = [
  {
    id: "01",
    title: "WalkUp – Smarter Queues",
    description: "Queue transparency, loyalty, and growth for a UK restaurant waitlist marketplace.",
    metric: "3x loyalty engagement uplift",
    tags: ["Marketplace", "Waitlist UX", "Loyalty", "Product Strategy"],
    status: "live",
    href: "/case-studies/walkup",
    accent: c.accentAlt,
    accentBg: "rgba(212, 118, 63, 0.08)",
    accentBorder: "rgba(212, 118, 63, 0.20)",
  },
  {
    id: "02",
    title: "Hipen Media – User Onboarding",
    description: "Restructuring a multi-segment onboarding flow through research and lean MVP.",
    metric: "40% faster onboarding completion",
    tags: ["Discovery", "Onboarding", "MVP", "Research"],
    status: "live",
    href: "/case-studies/hipen-media",
    accent: c.purple,
    accentBg: "rgba(107, 69, 160, 0.07)",
    accentBorder: "rgba(107, 69, 160, 0.18)",
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
    accentBg: "rgba(45, 122, 80, 0.07)",
    accentBorder: "rgba(45, 122, 80, 0.18)",
  },
  {
    id: "04",
    title: "Moneybox Redesigned",
    description: "Reimagining the savings & investment journey for clarity and confidence.",
    metric: "Full UX redesign concept",
    tags: ["UX Strategy", "Fintech", "Navigation"],
    status: "live",
    href: "/case-studies/moneybox",
    accent: c.teal,
    accentBg: "rgba(42, 122, 110, 0.07)",
    accentBorder: "rgba(42, 122, 110, 0.18)",
  },
  {
    id: "05",
    title: "Next Case Study",
    description: "Something new is in the works. A product concept exploring AI-driven discovery — details coming soon.",
    metric: "",
    tags: ["AI", "Music", "Discovery"],
    status: "coming-soon",
    href: "#",
    accent: c.textDimmed,
    accentBg: "rgba(160, 147, 136, 0.07)",
    accentBorder: "rgba(160, 147, 136, 0.15)",
  },
];

const methodologySteps = [
  { icon: <Search size={20} />,    title: "Discover",  description: "User research, data analysis, and stakeholder interviews to frame the real problem." },
  { icon: <Compass size={20} />,   title: "Define",    description: "Synthesise insights into a clear strategy, prioritised roadmap, and success metrics." },
  { icon: <BarChart2 size={20} />, title: "Baseline",  description: "Establish measurable benchmarks before shipping so progress is grounded in data, not assumption." },
  { icon: <Rocket size={20} />,    title: "Deliver",   description: "Ship iteratively, measure outcomes, and refine based on real-world feedback." },
];

const PreviewClaudeCream = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);

  return (
    <div style={{ minHeight: "100vh", background: c.bg, color: c.text, fontFamily: FONT_BODY, WebkitFontSmoothing: "antialiased" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>

      {/* Preview banner */}
      <div style={{
        background: c.bgCard,
        borderBottom: `1px solid ${c.borderFaint}`,
        padding: "9px 24px",
        display: "flex", alignItems: "center", gap: 10,
        fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const,
        color: c.textDimmed, fontFamily: FONT_BODY,
      }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.accent }} />
        <span style={{ color: c.textMuted }}>Option B — Claude Cream</span>
        <span style={{ color: c.textDimmed }}>· cream #f5f0e8 · terracotta #c4532a · Lora + Inter</span>
      </div>

      {/* Nav preview */}
      <div style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(245, 240, 232, 0.94)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${c.border}`,
        padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 56,
        fontFamily: FONT_BODY,
      }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: c.text, letterSpacing: "-0.01em" }}>Lucas Daneluz</span>
        <div style={{ display: "flex", gap: 28 }}>
          {["Case Studies", "About", "Contact"].map((label, i) => (
            <span key={label} style={{
              fontSize: 13, fontWeight: 500,
              color: i === 0 ? c.accent : c.textMuted,
              borderBottom: i === 0 ? `2px solid ${c.accent}` : "2px solid transparent",
              paddingBottom: 2, cursor: "pointer",
            }}>{label}</span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 28 }}>
          <img
            src={profilePhoto}
            alt="Lucas Daneluz"
            style={{
              width: 84, height: 84, borderRadius: "50%", objectFit: "cover", flexShrink: 0,
              border: `2px solid ${c.border}`,
            }}
          />
          <div>
            <h1 style={{
              fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1,
              color: c.text, fontFamily: FONT_HEADING,
            }}>
              Lucas Daneluz
            </h1>
            <p style={{ fontSize: 16, fontWeight: 400, fontStyle: "italic", color: c.accent, marginTop: 5, fontFamily: FONT_HEADING }}>
              Product Manager
            </p>
          </div>
        </div>

        <p style={{
          fontSize: 28, fontWeight: 400, lineHeight: 1.45, letterSpacing: "-0.005em",
          color: c.textSub, marginBottom: 8, fontFamily: FONT_HEADING,
        }}>
          Turning real{" "}
          <em style={{ fontStyle: "italic", color: c.accent }}>pain points</em>
          {" "}into{" "}
          <em style={{ fontStyle: "italic", color: c.accent }}>measurable impact</em>.
        </p>
        <p style={{ fontSize: 13, color: c.textDimmed, marginBottom: 28, fontFamily: FONT_BODY }}>
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
              fontFamily: FONT_BODY,
            }}>
              <span style={{ color: c.accent }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* How I Work */}
      <section style={{ maxWidth: 900, margin: "64px auto 0", padding: "0 24px" }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: c.textSub, marginBottom: 4, fontFamily: FONT_BODY }}>How I Work</h2>
        <p style={{
          fontSize: 26, fontWeight: 400, fontStyle: "italic",
          color: c.text, marginBottom: 32, fontFamily: FONT_HEADING,
        }}>
          A structured approach to building the right thing.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {methodologySteps.map(({ icon, title, description }) => (
            <div key={title} style={{
              borderRadius: 16, padding: "20px 20px 22px",
              background: c.bgCard, border: `1px solid ${c.border}`,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: c.accentLight, color: c.accent, marginBottom: 14,
                border: `1px solid ${c.accentBorder}`,
              }}>
                {icon}
              </div>
              <p style={{ fontSize: 16, fontWeight: 600, color: c.text, marginBottom: 8, fontFamily: FONT_HEADING }}>{title}</p>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: c.textMuted, fontFamily: FONT_BODY }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ maxWidth: 900, margin: "56px auto 0", padding: "0 24px" }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: c.textSub, marginBottom: 4, fontFamily: FONT_BODY }}>Case Studies</h2>
        <p style={{
          fontSize: 26, fontWeight: 400, fontStyle: "italic",
          color: c.text, marginBottom: 32, fontFamily: FONT_HEADING,
        }}>
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
                  background: isHovered ? c.bgCardAlt : c.bgCard,
                  border: `1px solid ${isHovered ? accentBorder : status === "coming-soon" ? c.borderFaint : c.border}`,
                  boxShadow: isHovered ? `inset 3px 0 0 ${accent}` : "none",
                  transform: isHovered ? "scale(1.003)" : "scale(1)",
                  transition: "border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease, background 0.15s ease",
                  cursor: isLive ? "pointer" : "default",
                  opacity: status === "coming-soon" ? 0.45 : 1,
                  fontFamily: FONT_BODY,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 18, minWidth: 0 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2, color: accent, letterSpacing: "0.04em", fontFamily: FONT_BODY }}>{id}</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5, flexWrap: "wrap" as const }}>
                      <p style={{ fontSize: 17, fontWeight: 500, color: c.text, fontFamily: FONT_HEADING }}>{title}</p>
                      {status === "coming-soon" && (
                        <span style={{
                          fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const,
                          padding: "2px 8px", borderRadius: 999,
                          background: c.accentLight, color: c.textDimmed, border: `1px solid ${c.borderFaint}`,
                          fontFamily: FONT_BODY,
                        }}>In Progress</span>
                      )}
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.75, color: c.textMuted, marginBottom: 8, fontFamily: FONT_BODY }}>{description}</p>
                    {metric && (
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: 4,
                        padding: "4px 10px", borderRadius: 999,
                        fontSize: 12, fontWeight: 600, marginBottom: 10,
                        background: accentBg, border: `1px solid ${accentBorder}`, color: accent,
                        fontFamily: FONT_BODY,
                      }}>
                        ↗ {metric}
                      </span>
                    )}
                    <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                      {tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 999,
                          background: c.bgCardAlt, color: c.textDimmed, border: `1px solid ${c.border}`,
                          fontFamily: FONT_BODY,
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
          borderRadius: 20, padding: "56px 40px", textAlign: "center",
          background: c.bgCard, border: `1px solid ${c.border}`,
        }}>
          <h2 style={{
            fontSize: 36, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.2,
            color: c.text, marginBottom: 12, fontFamily: FONT_HEADING,
          }}>
            Interested in working together?
          </h2>
          <p style={{ fontSize: 16, color: c.textMuted, lineHeight: 1.8, marginBottom: 36, maxWidth: 420, margin: "0 auto 36px", fontFamily: FONT_BODY }}>
            I'm open to PM roles, contract work, or just a good product conversation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" as const }}>
            <a href="mailto:lucas.daneluz@gmail.com" style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "11px 26px", borderRadius: 999,
              fontSize: 13, fontWeight: 700,
              background: c.accent, color: "#fff", textDecoration: "none",
              fontFamily: FONT_BODY,
            }}>
              <Mail size={13} /> Get in Touch
            </a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "11px 26px", borderRadius: 999,
              fontSize: 13, fontWeight: 700,
              background: "transparent", border: `1px solid ${c.border}`, color: c.textSub, textDecoration: "none",
              fontFamily: FONT_BODY,
            }}>
              <Linkedin size={13} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "40px 24px 56px", fontSize: 11, color: c.textDimmed, fontFamily: FONT_BODY }}>
        © {new Date().getFullYear()} Lucas Daneluz
      </footer>

      {/* Palette legend */}
      <div style={{
        borderTop: `1px solid ${c.borderFaint}`,
        padding: "14px 24px",
        display: "flex", flexWrap: "wrap" as const, gap: 14, alignItems: "center", justifyContent: "center",
        background: c.bgCard,
      }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.textDimmed, marginRight: 4, fontFamily: FONT_BODY }}>
          Option B · Claude Cream · Lora + Inter
        </span>
        {[
          [c.bg,       "page bg"],
          [c.bgCard,   "card bg"],
          [c.accent,   "terracotta"],
          [c.text,     "warm black"],
          [c.border,   "border"],
        ].map(([hex, label]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: c.textMuted, fontFamily: FONT_BODY }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: hex, border: `1px solid ${c.borderFaint}` }} />
            {hex} <span style={{ color: c.textDimmed }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewClaudeCream;
