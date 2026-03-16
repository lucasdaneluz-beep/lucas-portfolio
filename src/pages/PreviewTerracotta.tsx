import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, TrendingUp, Layers, DollarSign, ArrowRight, Linkedin, Mail, Search, Compass, Rocket, BarChart2 } from "lucide-react";
import profilePhoto from "@/assets/lucas-profile.png";

// ─── Option B: Light / off-white + warm amber ─────────────────────────────
const c = {
  bg:           "hsl(38 14% 88%)",
  bgCard:       "hsl(0 0% 100%)",
  bgCardAlt:    "hsl(40 15% 98%)",
  border:       "hsl(35 12% 80%)",
  borderLight:  "hsl(35 10% 85%)",

  accent:       "hsl(38 82% 44%)",       // warm amber — darker for light bg
  accentLight:  "hsl(38 82% 44% / 0.10)",
  accentBorder: "hsl(38 82% 44% / 0.30)",
  accentText:   "hsl(38 82% 36%)",       // slightly deeper for readable text

  text:         "hsl(30 12% 12%)",       // near-black warm charcoal
  textSub:      "hsl(30 8% 38%)",
  textMuted:    "hsl(30 6% 54%)",
  textDimmed:   "hsl(30 5% 68%)",

  gold:         "hsl(38 82% 44%)",
};

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
    <div style={{ minHeight: "100vh", background: c.bg, color: c.text, fontFamily: "Inter, -apple-system, sans-serif", WebkitFontSmoothing: "antialiased" }}>

      {/* Preview banner */}
      <div style={{ background: c.bgCard, borderBottom: `1px solid ${c.border}`, padding: "9px 24px", display: "flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: c.textDimmed }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: c.accent }} />
        <span style={{ color: c.accentText }}>Option B preview</span>
        — light mode — no live changes applied
      </div>

      {/* Hero */}
      <section style={{ maxWidth: 880, margin: "0 auto", padding: "48px 24px 0" }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 999, marginBottom: 20, background: c.accentLight, border: `1px solid ${c.accentBorder}` }}>
          <Briefcase size={11} style={{ color: c.accent }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: c.accentText }}>PM Portfolio</span>
        </div>

        {/* Name & photo */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 12 }}>
          <img
            src={profilePhoto}
            alt="Lucas Daneluz"
            style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: `2px solid ${c.border}`, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
          />
          <div>
            <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.15, color: c.text }}>Lucas Daneluz</h1>
            <p style={{ fontSize: 16, fontWeight: 600, color: c.accentText, marginTop: 2 }}>Product Manager</p>
          </div>
        </div>

        {/* Bio */}
        <p style={{ fontSize: 14, lineHeight: 1.75, color: c.textSub, marginBottom: 20, maxWidth: 560 }}>
          A commercially-driven PM with 10+ years in commercial and product-adjacent roles across B2B SaaS, FMCG, and supply chain. I've spent my career close to users, data, and looking to own business outcomes. I'm now channelling that into building a product portfolio grounded in real pain points, clear thinking, and measurable impact.
        </p>

        {/* Skill pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {[{ icon: <Layers size={12} />, label: "B2B SaaS" },
            { icon: <TrendingUp size={12} />, label: "Supply Chain" },
            { icon: <Briefcase size={12} />, label: "User Research" },
            { icon: <DollarSign size={12} />, label: "Cost Optimisation" }].map(({ icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 999, fontSize: 11, fontWeight: 600, background: c.bgCard, border: `1px solid ${c.border}`, color: c.textSub, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <span style={{ color: c.accent }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* How I Work */}
      <section style={{ maxWidth: 880, margin: "48px auto 0", padding: "0 24px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: c.textDimmed, marginBottom: 4 }}>How I Work</p>
        <p style={{ fontSize: 13, color: c.textMuted, marginBottom: 20 }}>A structured approach to building the right thing.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {methodologySteps.map(({ icon, title, description }, i) => (
            <div key={title} style={{ borderRadius: 16, padding: 18, background: c.bgCard, border: `1px solid ${c.border}`, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: c.accentLight, border: `1px solid ${c.accentBorder}`, color: c.accent, flexShrink: 0 }}>
                  {icon}
                </div>
                <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: c.textDimmed }}>0{i + 1}</span>
              </div>
              <p style={{ fontSize: 13, fontWeight: 700, color: c.text, marginBottom: 4 }}>{title}</p>
              <p style={{ fontSize: 11, lineHeight: 1.55, color: c.textMuted }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ maxWidth: 880, margin: "48px auto 0", padding: "0 24px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: c.textDimmed, marginBottom: 4 }}>Case Studies</p>
        <p style={{ fontSize: 13, color: c.textMuted, marginBottom: 20 }}>Real problems. Structured thinking. Measurable impact.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {caseStudies.map(({ id, title, description, metric, tags, status, href }) => (
            <button
              key={id}
              type="button"
              onClick={() => status === "live" && navigate(href)}
              style={{
                width: "100%",
                textAlign: "left",
                borderRadius: 18,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                background: c.bgCard,
                border: `1px solid ${status === "coming-soon" ? c.borderLight : c.border}`,
                cursor: status === "live" ? "pointer" : "default",
                opacity: status === "coming-soon" ? 0.5 : 1,
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                transition: "box-shadow .15s",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, minWidth: 0 }}>
                <span style={{ fontSize: 12, fontWeight: 900, flexShrink: 0, marginTop: 2, color: status === "coming-soon" ? c.textDimmed : c.accent }}>{id}</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: c.text }}>{title}</p>
                    {status === "coming-soon" && (
                      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "2px 8px", borderRadius: 999, background: `${c.gold}18`, color: c.gold, border: `1px solid ${c.gold}40` }}>In Progress</span>
                    )}
                  </div>
                  <p style={{ fontSize: 12, color: c.textMuted, marginBottom: 6 }}>{description}</p>
                  {metric && <p style={{ fontSize: 11, fontWeight: 700, color: c.accentText, marginBottom: 8 }}>↗ {metric}</p>}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {tags.map(tag => (
                      <span key={tag} style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999, background: c.accentLight, color: c.accentText, border: `1px solid ${c.accentBorder}` }}>{tag}</span>
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
      <section style={{ maxWidth: 880, margin: "56px auto 0", padding: "0 24px" }}>
        <div style={{ borderRadius: 20, padding: "40px 32px", textAlign: "center", background: c.bgCard, border: `1px solid ${c.border}`, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: c.accentText, marginBottom: 8 }}>Let's Connect</p>
          <h2 style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.01em", color: c.text, marginBottom: 8 }}>Interested in working together?</h2>
          <p style={{ fontSize: 13, color: c.textMuted, lineHeight: 1.65, marginBottom: 24, maxWidth: 400, margin: "0 auto 24px" }}>
            I'm open to PM roles, contract work, or just a good product conversation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            <a href="mailto:lucas.daneluz@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 22px", borderRadius: 999, fontSize: 13, fontWeight: 700, background: c.accent, color: "#fff", textDecoration: "none" }}>
              <Mail size={13} /> Get in Touch
            </a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 22px", borderRadius: 999, fontSize: 13, fontWeight: 700, background: "transparent", border: `1px solid ${c.accentBorder}`, color: c.accentText, textDecoration: "none" }}>
              <Linkedin size={13} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "32px 24px 48px", fontSize: 11, color: c.textDimmed }}>
        © {new Date().getFullYear()} Lucas Daneluz
      </footer>

      {/* Palette legend */}
      <div style={{ borderTop: `1px solid ${c.border}`, padding: "16px 24px", display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", justifyContent: "center", background: c.bgCard }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: c.textDimmed, marginRight: 4 }}>Palette</span>
        {[
          ["hsl(40 20% 96%)", "bg"],
          ["hsl(0 0% 100%)", "card"],
          ["hsl(35 15% 88%)", "border"],
          ["hsl(38 82% 44%)", "accent"],
          ["hsl(30 12% 12%)", "text"],
          ["hsl(30 8% 38%)", "secondary"],
          ["hsl(30 6% 54%)", "muted"],
        ].map(([hex, label]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: c.textMuted }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: hex, border: "1px solid rgba(0,0,0,0.1)" }} />
            {hex} <span style={{ color: c.textDimmed }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewTerracotta;
