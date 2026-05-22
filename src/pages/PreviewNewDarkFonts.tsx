import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, TrendingUp, Layers, DollarSign, ArrowRight, Linkedin, Mail, Search, Compass, Rocket, BarChart2 } from "lucide-react";
import profilePhoto from "@/assets/lucas-profile.png";

const FONT_HEADING = "'Cormorant Garamond', Georgia, serif";
const FONT_BODY    = "'Nunito Sans', -apple-system, sans-serif";

const caseStudies = [
  {
    id: "01",
    slug: "walkup",
    title: "WalkUp – Smarter Queues",
    description: "Improving queue transparency, loyalty, and app performance for a UK restaurant waitlist marketplace.",
    metric: "3x loyalty engagement uplift",
    tags: ["Marketplace", "Waitlist UX", "Loyalty", "Product Strategy"],
    status: "live",
    href: "/case-studies/walkup",
  },
  {
    id: "02",
    slug: "hipen-media",
    title: "Hipen Media – User Onboarding",
    description: "Bringing structure to a complex, multi-segment onboarding flow through qualitative research and a lean MVP approach.",
    metric: "40% faster onboarding completion",
    tags: ["Discovery", "Onboarding", "MVP", "Research"],
    status: "live",
    href: "/case-studies/hipen-media",
  },
  {
    id: "03",
    slug: "westpak",
    title: "Westpak – Cost Optimisation",
    description: "Leading a cross-functional cost project across 3 categories — aligning Finance and Operations to deliver measurable savings.",
    metric: "25% cost reduction delivered",
    tags: ["Stakeholder Management", "Cost Optimisation", "Supply Chain"],
    status: "live",
    href: "/case-studies/westpak",
  },
  {
    id: "05",
    slug: "Coming Soon",
    title: "Next Case Study",
    description: "Something new is in the works. A product concept exploring AI-driven discovery — details coming soon.",
    metric: "",
    tags: ["AI", "Music", "Discovery"],
    status: "coming-soon",
    href: "/case-studies/spotify",
  },
];

const methodologySteps = [
  { icon: <Search size={20} />,    title: "Discover",  description: "User research, data analysis, and stakeholder interviews to frame the real problem." },
  { icon: <Compass size={20} />,   title: "Define",    description: "Synthesise insights into a clear strategy, prioritised roadmap, and success metrics." },
  { icon: <BarChart2 size={20} />, title: "Baseline",  description: "Establish measurable benchmarks before shipping so progress is grounded in data, not assumption." },
  { icon: <Rocket size={20} />,    title: "Deliver",   description: "Ship iteratively, measure outcomes, and refine based on real-world feedback." },
];

const PreviewNewDarkFonts = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "hsl(210 35% 5%)", color: "hsl(210 40% 98%)", fontFamily: FONT_BODY, WebkitFontSmoothing: "antialiased" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,600;6..12,700;6..12,800&display=swap');
      `}</style>

      {/* Preview banner */}
      <div style={{ background: "hsl(210 28% 9%)", borderBottom: "1px solid hsl(210 20% 16%)", padding: "9px 24px", display: "flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(210 15% 45%)", fontFamily: FONT_BODY }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "hsl(174 80% 60%)" }} />
        <span style={{ color: "hsl(174 80% 60%)" }}>preview</span>
        — dark theme · Cormorant Garamond + Nunito Sans
      </div>

      {/* Hero */}
      <section style={{ maxWidth: 880, margin: "0 auto", padding: "72px 24px 0" }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 999, marginBottom: 32, background: "hsl(174 80% 60% / 0.1)", border: "1px solid hsl(174 80% 60% / 0.25)" }}>
          <Briefcase size={11} style={{ color: "hsl(174 80% 60%)" }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(174 80% 60%)", fontFamily: FONT_BODY }}>PM Portfolio</span>
        </div>

        {/* Name & photo */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 24 }}>
          <img
            src={profilePhoto}
            alt="Lucas Daneluz"
            style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover", flexShrink: 0, boxShadow: "0 0 0 2px hsl(174 80% 60% / 0.3)" }}
          />
          <div>
            <h1 style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.1, color: "hsl(210 40% 98%)", fontFamily: FONT_HEADING }}>
              Lucas Daneluz
            </h1>
            <p style={{ fontSize: 17, fontWeight: 400, fontStyle: "italic", color: "hsl(174 80% 60%)", marginTop: 6, fontFamily: FONT_HEADING }}>
              Product Manager
            </p>
          </div>
        </div>

        {/* Bio */}
        <p style={{ fontSize: 15, lineHeight: 1.85, color: "hsl(210 20% 62%)", marginBottom: 32, maxWidth: 580, fontFamily: FONT_BODY }}>
          A commercially-driven PM with 10+ years in commercial and product-adjacent roles across B2B SaaS, FMCG, and supply chain. I've spent my career close to users, data, and looking to own business outcomes. I'm now channelling that into building a product portfolio grounded in real pain points, clear thinking, and measurable impact.
        </p>

        {/* Skill pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {[{ icon: <Layers size={12} />, label: "B2B SaaS" },
            { icon: <TrendingUp size={12} />, label: "Supply Chain" },
            { icon: <Briefcase size={12} />, label: "User Research" },
            { icon: <DollarSign size={12} />, label: "Cost Optimisation" }].map(({ icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", background: "hsl(210 28% 12%)", border: "1px solid hsl(210 20% 20%)", color: "hsl(210 20% 65%)", fontFamily: FONT_BODY }}>
              <span style={{ color: "hsl(174 80% 60%)" }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* How I Work */}
      <section style={{ maxWidth: 880, margin: "72px auto 0", padding: "0 24px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "hsl(210 15% 45%)", marginBottom: 8, fontFamily: FONT_BODY }}>
          How I Work
        </p>
        <p style={{ fontSize: 19, fontWeight: 400, color: "hsl(210 25% 72%)", marginBottom: 32, fontFamily: FONT_HEADING, fontStyle: "italic" }}>
          A structured approach to building the right thing.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {methodologySteps.map(({ icon, title, description }, i) => (
            <div key={title} style={{ borderRadius: 16, padding: 24, background: "hsl(210 28% 11%)", border: "1px solid hsl(210 20% 20%)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "hsl(174 80% 60% / 0.1)", border: "1px solid hsl(174 80% 60% / 0.2)", color: "hsl(174 80% 60%)", flexShrink: 0 }}>
                  {icon}
                </div>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "hsl(210 15% 40%)", fontFamily: FONT_BODY }}>0{i + 1}</span>
              </div>
              <p style={{ fontSize: 16, fontWeight: 500, color: "hsl(210 40% 98%)", marginBottom: 8, fontFamily: FONT_HEADING }}>{title}</p>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: "hsl(210 20% 55%)", fontFamily: FONT_BODY }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ maxWidth: 880, margin: "72px auto 0", padding: "0 24px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "hsl(210 15% 45%)", marginBottom: 8, fontFamily: FONT_BODY }}>
          Case Studies
        </p>
        <p style={{ fontSize: 19, fontWeight: 400, color: "hsl(210 25% 72%)", marginBottom: 32, fontFamily: FONT_HEADING, fontStyle: "italic" }}>
          Real problems. Structured thinking. Measurable impact.
        </p>

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
                background: "hsl(210 28% 11%)",
                border: `1px solid ${status === "coming-soon" ? "hsl(210 20% 16%)" : "hsl(210 20% 20%)"}`,
                cursor: status === "live" ? "pointer" : "default",
                opacity: status === "coming-soon" ? 0.55 : 1,
                fontFamily: FONT_BODY,
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, minWidth: 0 }}>
                <span style={{ fontSize: 13, fontWeight: 700, flexShrink: 0, marginTop: 3, color: status === "coming-soon" ? "hsl(210 15% 40%)" : "hsl(174 80% 60%)", letterSpacing: "0.06em", fontFamily: FONT_BODY }}>{id}</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" as const }}>
                    <p style={{ fontSize: 18, fontWeight: 500, color: "hsl(210 40% 98%)", fontFamily: FONT_HEADING }}>{title}</p>
                    {status === "coming-soon" && (
                      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "2px 8px", borderRadius: 999, background: "hsl(42 90% 58% / 0.1)", color: "hsl(42 90% 58%)", border: "1px solid hsl(42 90% 58% / 0.25)", fontFamily: FONT_BODY }}>In Progress</span>
                    )}
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: "hsl(210 20% 55%)", marginBottom: 8, fontFamily: FONT_BODY }}>{description}</p>
                  {metric && <p style={{ fontSize: 12, fontWeight: 700, color: "hsl(174 80% 60%)", marginBottom: 10, fontFamily: FONT_BODY }}>↗ {metric}</p>}
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                    {tags.map(tag => (
                      <span key={tag} style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "3px 10px", borderRadius: 999, background: "hsl(174 80% 60% / 0.1)", color: "hsl(174 80% 60%)", border: "1px solid hsl(174 80% 60% / 0.2)", fontFamily: FONT_BODY }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              {status === "live" && <ArrowRight size={16} style={{ flexShrink: 0, color: "hsl(174 80% 60%)" }} />}
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 880, margin: "72px auto 0", padding: "0 24px" }}>
        <div style={{ borderRadius: 20, padding: "56px 40px", textAlign: "center", background: "hsl(210 28% 11%)", border: "1px solid hsl(210 20% 20%)" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "hsl(174 80% 60%)", marginBottom: 14, fontFamily: FONT_BODY }}>Let's Connect</p>
          <h2 style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.01em", color: "hsl(210 40% 98%)", marginBottom: 14, fontFamily: FONT_HEADING }}>
            Interested in working together?
          </h2>
          <p style={{ fontSize: 15, color: "hsl(210 20% 62%)", lineHeight: 1.85, marginBottom: 36, maxWidth: 440, margin: "0 auto 36px", fontFamily: FONT_BODY }}>
            I'm open to PM roles, contract work, or just a good product conversation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:lucas.daneluz@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 28px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "hsl(174 80% 60%)", color: "hsl(210 35% 5%)", textDecoration: "none", fontFamily: FONT_BODY }}>
              <Mail size={13} /> Get in Touch
            </a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 28px", borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "transparent", border: "1px solid hsl(174 80% 60% / 0.4)", color: "hsl(174 80% 60%)", textDecoration: "none", fontFamily: FONT_BODY }}>
              <Linkedin size={13} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "48px 24px 64px", fontSize: 12, color: "hsl(210 15% 40%)", fontFamily: FONT_BODY }}>
        © {new Date().getFullYear()} Lucas Daneluz
      </footer>
    </div>
  );
};

export default PreviewNewDarkFonts;
