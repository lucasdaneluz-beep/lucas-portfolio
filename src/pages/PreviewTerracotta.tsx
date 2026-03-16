import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, TrendingUp, Layers, DollarSign, ArrowRight, Linkedin, Mail, Search, Compass, Rocket, BarChart2 } from "lucide-react";
import profilePhoto from "@/assets/lucas-profile.png";

// ─── samfrons.com exact palette (read from screenshot) ────────────────────
// bg:   #e9e8e3  — light parchment grey (the full page bg)
// text: #2c3b2c  — dark forest green (ALL text, borders, buttons)
// card: #ffffff  — white cards/boxes
// Font: Cormorant Garamond (headings) + Nunito Sans (body/labels)
const c = {
  bg:           "#e9e8e3",              // ← samfrons page bg — light parchment grey
  bgCard:       "#ffffff",             // ← white card bg
  bgCardAlt:    "#f5f4f0",

  border:       "#2c3b2c",             // ← dark forest green — same as text
  borderLight:  "rgba(44,59,44,0.25)",
  borderFaint:  "rgba(44,59,44,0.12)",

  accent:       "#2c3b2c",             // ← dark forest green
  accentLight:  "rgba(44,59,44,0.06)",
  accentBorder: "rgba(44,59,44,0.2)",
  accentText:   "#2c3b2c",

  text:         "#2c3b2c",             // headings — dark forest green
  textSub:      "#2c3b2c",             // body — same green, full opacity
  textMuted:    "rgba(44,59,44,0.65)", // slightly faded green
  textDimmed:   "rgba(44,59,44,0.4)",  // labels / meta
};

const FONT_HEADING = "'Cormorant Garamond', Georgia, serif";
const FONT_BODY    = "'Nunito Sans', -apple-system, sans-serif";

const caseStudies = [
  {
    id: "01",
    title: "WalkUp – Smarter Queues",
    description: "Improving queue transparency, loyalty, and app performance for a UK restaurant waitlist marketplace.",
    metric: "3x loyalty engagement uplift",
    tags: ["Marketplace", "Waitlist UX", "Loyalty", "Product Strategy"],
    status: "live",
    href: "/case-studies/walkup",
  },
  {
    id: "02",
    title: "Hipen Media – User Onboarding",
    description: "Bringing structure to a complex, multi-segment onboarding flow through qualitative research and a lean MVP approach.",
    metric: "40% faster onboarding completion",
    tags: ["Discovery", "Onboarding", "MVP", "Research"],
    status: "live",
    href: "/case-studies/hipen-media",
  },
  {
    id: "03",
    title: "Westpak – Cost Optimisation",
    description: "Leading a cross-functional cost project across 3 categories — aligning Finance and Operations to deliver measurable savings.",
    metric: "25% cost reduction delivered",
    tags: ["Stakeholder Management", "Cost Optimisation", "Supply Chain"],
    status: "live",
    href: "/case-studies/westpak",
  },
  {
    id: "04",
    title: "Moneybox Redesigned",
    description: "Reimagining the savings & investment journey for clarity and confidence.",
    metric: "Full UX redesign concept",
    tags: ["UX Strategy", "Fintech", "Navigation"],
    status: "live",
    href: "/case-studies/moneybox",
  },
  {
    id: "05",
    title: "Next Case Study",
    description: "Something new is in the works. A product concept exploring AI-driven discovery — details coming soon.",
    metric: "",
    tags: ["AI", "Music", "Discovery"],
    status: "coming-soon",
    href: "/case-studies/spotify",
  },
];

const methodologySteps = [
  { icon: <Search size={20} />,   title: "Discover",  description: "User research, data analysis, and stakeholder interviews to frame the real problem." },
  { icon: <Compass size={20} />,  title: "Define",    description: "Synthesise insights into a clear strategy, prioritised roadmap, and success metrics." },
  { icon: <BarChart2 size={20} />,title: "Baseline",  description: "Establish measurable benchmarks before shipping so progress is grounded in data, not assumption." },
  { icon: <Rocket size={20} />,   title: "Deliver",   description: "Ship iteratively, measure outcomes, and refine based on real-world feedback." },
];

const PreviewTerracotta = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: c.bg, color: c.text, fontFamily: FONT_BODY, WebkitFontSmoothing: "antialiased" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,600;6..12,700;6..12,800&display=swap');
      `}</style>

      {/* Preview banner */}
      <div style={{ background: c.bgCard, borderBottom: `1px solid ${c.borderFaint}`, padding: "9px 24px", display: "flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: c.textDimmed, fontFamily: FONT_BODY }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: c.accent }} />
        <span style={{ color: c.text }}>samfrons palette preview</span>
        — #e9e8e3 · #2c3b2c · Cormorant Garamond + Nunito Sans
      </div>

      {/* Hero */}
      <section style={{ maxWidth: 880, margin: "0 auto", padding: "72px 24px 0" }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 999, marginBottom: 32, background: c.bgCard, border: `1px solid ${c.border}` }}>
          <Briefcase size={11} style={{ color: c.accent }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: c.accentText, fontFamily: FONT_BODY }}>PM Portfolio</span>
        </div>

        {/* Name & photo */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 24 }}>
          <img
            src={profilePhoto}
            alt="Lucas Daneluz"
            style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: `2px solid ${c.border}` }}
          />
          <div>
            <h1 style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.1, color: c.text, fontFamily: FONT_HEADING }}>Lucas Daneluz</h1>
            <p style={{ fontSize: 15, fontWeight: 400, fontStyle: "italic", color: c.textMuted, marginTop: 6, fontFamily: FONT_HEADING }}>Product Manager</p>
          </div>
        </div>

        {/* Bio */}
        <p style={{ fontSize: 16, lineHeight: 1.85, color: c.textSub, marginBottom: 32, maxWidth: 580, fontFamily: FONT_BODY }}>
          A commercially-driven PM with 10+ years in commercial and product-adjacent roles across B2B SaaS, FMCG, and supply chain. I've spent my career close to users, data, and looking to own business outcomes. I'm now channelling that into building a product portfolio grounded in real pain points, clear thinking, and measurable impact.
        </p>

        {/* Skill pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {[{ icon: <Layers size={12} />, label: "B2B SaaS" },
            { icon: <TrendingUp size={12} />, label: "Supply Chain" },
            { icon: <Briefcase size={12} />, label: "User Research" },
            { icon: <DollarSign size={12} />, label: "Cost Optimisation" }].map(({ icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", background: c.bgCard, border: `1px solid ${c.border}`, color: c.text, fontFamily: FONT_BODY }}>
              <span style={{ color: c.accent }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* How I Work */}
      <section style={{ maxWidth: 880, margin: "72px auto 0", padding: "0 24px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: c.textDimmed, marginBottom: 6, fontFamily: FONT_BODY }}>How I Work</p>
        <h2 style={{ fontSize: 30, fontWeight: 500, color: c.text, marginBottom: 32, fontFamily: FONT_HEADING }}>A structured approach to building the right thing.</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {methodologySteps.map(({ icon, title, description }, i) => (
            <div key={title} style={{ borderRadius: 16, padding: 24, background: c.bgCard, border: `1px solid ${c.border}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: c.accentLight, border: `1px solid ${c.accentBorder}`, color: c.accent, flexShrink: 0 }}>
                  {icon}
                </div>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: c.textDimmed, fontFamily: FONT_BODY }}>0{i + 1}</span>
              </div>
              <p style={{ fontSize: 15, fontWeight: 600, color: c.text, marginBottom: 8, fontFamily: FONT_HEADING }}>{title}</p>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: c.textMuted, fontFamily: FONT_BODY }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ maxWidth: 880, margin: "72px auto 0", padding: "0 24px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: c.textDimmed, marginBottom: 6, fontFamily: FONT_BODY }}>Case Studies</p>
        <h2 style={{ fontSize: 30, fontWeight: 500, color: c.text, marginBottom: 32, fontFamily: FONT_HEADING }}>Real problems. Structured thinking. Measurable impact.</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {caseStudies.map(({ id, title, description, metric, tags, status, href }) => (
            <button
              key={id}
              type="button"
              onClick={() => status === "live" && navigate(href)}
              style={{
                width: "100%",
                textAlign: "left",
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                background: c.bgCard,
                border: `1px solid ${status === "coming-soon" ? c.borderFaint : c.border}`,
                cursor: status === "live" ? "pointer" : "default",
                opacity: status === "coming-soon" ? 0.45 : 1,
                transition: "box-shadow .15s",
                fontFamily: FONT_BODY,
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, minWidth: 0 }}>
                <span style={{ fontSize: 14, fontWeight: 700, flexShrink: 0, marginTop: 2, color: c.textDimmed, letterSpacing: "0.06em", fontFamily: FONT_BODY }}>{id}</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                    <p style={{ fontSize: 18, fontWeight: 500, color: c.text, fontFamily: FONT_HEADING }}>{title}</p>
                    {status === "coming-soon" && (
                      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 8px", borderRadius: 999, background: c.accentLight, color: c.textDimmed, border: `1px solid ${c.borderFaint}`, fontFamily: FONT_BODY }}>In Progress</span>
                    )}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: c.textMuted, marginBottom: 10, fontFamily: FONT_BODY }}>{description}</p>
                  {metric && <p style={{ fontSize: 13, fontWeight: 600, color: c.text, marginBottom: 10, fontFamily: FONT_BODY }}>↗ {metric}</p>}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {tags.map(tag => (
                      <span key={tag} style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 999, background: c.accentLight, color: c.text, border: `1px solid ${c.borderFaint}`, fontFamily: FONT_BODY }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              {status === "live" && <ArrowRight size={16} style={{ flexShrink: 0, color: c.accent }} />}
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 880, margin: "72px auto 0", padding: "0 24px" }}>
        <div style={{ borderRadius: 20, padding: "56px 40px", textAlign: "center", background: c.bgCard, border: `1px solid ${c.border}` }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: c.textDimmed, marginBottom: 14, fontFamily: FONT_BODY }}>Let's Connect</p>
          <h2 style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.01em", color: c.text, marginBottom: 14, fontFamily: FONT_HEADING }}>Interested in working together?</h2>
          <p style={{ fontSize: 16, color: c.textMuted, lineHeight: 1.85, marginBottom: 36, maxWidth: 440, margin: "0 auto 36px", fontFamily: FONT_BODY }}>
            I'm open to PM roles, contract work, or just a good product conversation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:lucas.daneluz@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 28px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: c.accent, color: "#fff", textDecoration: "none", fontFamily: FONT_BODY }}>
              <Mail size={13} /> Get in Touch
            </a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 28px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "transparent", border: `1px solid ${c.border}`, color: c.text, textDecoration: "none", fontFamily: FONT_BODY }}>
              <Linkedin size={13} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "48px 24px 64px", fontSize: 12, color: c.textDimmed, fontFamily: FONT_BODY }}>
        © {new Date().getFullYear()} Lucas Daneluz
      </footer>

      {/* Palette legend */}
      <div style={{ borderTop: `1px solid ${c.borderFaint}`, padding: "16px 24px", display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", justifyContent: "center", background: c.bgCard }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: c.textDimmed, marginRight: 4, fontFamily: FONT_BODY }}>Palette · Cormorant Garamond + Nunito Sans</span>
        {[
          ["#e9e8e3", "page bg"],
          ["#ffffff", "card bg"],
          ["#2c3b2c", "text & border"],
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

export default PreviewTerracotta;
