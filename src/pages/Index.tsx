import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, TrendingUp, Layers, DollarSign, ArrowRight, Linkedin, Mail, Search, Compass, Rocket } from "lucide-react";
import profilePhoto from "@/assets/lucas-profile.png";

const caseStudies = [
  {
    id: "01",
    slug: "walkup",
    title: "WalkUp – Smarter Queues",
    description:
      "Improving queue transparency, loyalty, and app performance for a UK restaurant waitlist marketplace.",
    metric: "3x loyalty engagement uplift",
    tags: ["Marketplace", "Waitlist UX", "Loyalty", "Product Strategy"],
    status: "live",
    href: "/case-studies/walkup",
  },
  {
    id: "02",
    slug: "hipen-media",
    title: "Hipen Media – User Onboarding",
    description:
      "Bringing structure to a complex, multi-segment onboarding flow through qualitative research and a lean MVP approach.",
    metric: "40% faster onboarding completion",
    tags: ["Discovery", "Onboarding", "MVP", "Research"],
    status: "live",
    href: "/case-studies/hipen-media",
  },
  {
    id: "03",
    slug: "westpak",
    title: "Westpak – Cost Optimisation",
    description:
      "Leading a cross-functional cost project across 3 categories — aligning Finance and Operations to deliver measurable savings.",
    metric: "25% cost reduction delivered",
    tags: ["Stakeholder Management", "Cost Optimisation", "Supply Chain"],
    status: "live",
    href: "/case-studies/westpak",
  },
  {
    id: "04",
    slug: "moneybox",
    title: "Moneybox Redesigned",
    description:
      "Reimagining the savings & investment journey for clarity and confidence.",
    metric: "Full UX redesign concept",
    tags: ["UX Strategy", "Fintech", "Navigation"],
    status: "live",
    href: "/case-studies/moneybox",
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
  {
    icon: <Search size={20} />,
    title: "Discover",
    description: "User research, data analysis, and stakeholder interviews to frame the real problem.",
  },
  {
    icon: <Compass size={20} />,
    title: "Define",
    description: "Synthesise insights into a clear strategy, prioritised roadmap, and success metrics.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Deliver",
    description: "Ship iteratively, measure outcomes, and refine based on real-world feedback.",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[hsl(210_35%_5%)] text-white px-4 sm:px-6 py-12 sm:py-16">
      {/* Hero / Bio */}
      <section className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-2 sm:px-6 pt-12 sm:pt-16 pb-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: "hsl(174 80% 60% / 0.1)", border: "1px solid hsl(174 80% 60% / 0.25)" }}>
          <Briefcase size={11} style={{ color: "hsl(174 80% 60%)" }} />
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "hsl(174 80% 60%)" }}>PM Portfolio</span>
        </div>

        {/* Name & Photo row */}
        <div className="flex items-center gap-5 mb-3">
          <img
            src={profilePhoto}
            alt="Lucas Daneluz profile photo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-2 flex-shrink-0"
            style={{ boxShadow: "0 0 0 2px hsl(174 80% 60% / 0.3)" }}
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight" style={{ color: "hsl(210 40% 98%)" }}>
              Lucas Daneluz
            </h1>
            <p className="text-base sm:text-lg font-semibold" style={{ color: "hsl(174 80% 60%)" }}>
              Product Manager
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "hsl(210 20% 62%)" }}>
          A commercially-driven PM with 10+ years in commercial and product-adjacent roles across B2B SaaS, FMCG, and supply chain. I've spent my career close to users, data, and looking to own business outcomes. I'm now channelling that into building a product portfolio grounded in real pain points, clear thinking, and measurable impact.
        </p>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {[{ icon: <Layers size={12} />, label: "B2B SaaS" },
            { icon: <TrendingUp size={12} />, label: "Supply Chain" },
            { icon: <Briefcase size={12} />, label: "User Research" },
            { icon: <DollarSign size={12} />, label: "Cost Optimisation" }].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
              style={{ background: "hsl(210 28% 12%)", border: "1px solid hsl(210 20% 20%)", color: "hsl(210 20% 65%)" }}
            >
              <span style={{ color: "hsl(174 80% 60%)" }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* How I Work */}
      <section className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-2 sm:px-6 mt-12 sm:mt-16">
        <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: "hsl(210 15% 45%)" }}>
          How I Work
        </p>
        <p className="text-sm mb-6" style={{ color: "hsl(210 20% 55%)" }}>
          A structured approach to building the right thing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {methodologySteps.map(({ icon, title, description }, i) => (
            <div
              key={title}
              className="rounded-2xl p-5 relative"
              style={{
                background: "hsl(210 28% 11%)",
                border: "1px solid hsl(210 20% 20%)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "hsl(174 80% 60% / 0.1)", color: "hsl(174 80% 60%)" }}
                >
                  {icon}
                </div>
                <span className="text-xs font-black uppercase tracking-widest" style={{ color: "hsl(210 15% 40%)" }}>
                  0{i + 1}
                </span>
              </div>
              <p className="text-sm font-bold mb-1" style={{ color: "hsl(210 40% 98%)" }}>{title}</p>
              <p className="text-xs leading-relaxed" style={{ color: "hsl(210 20% 55%)" }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies List */}
      <section className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-2 sm:px-6 mt-12 sm:mt-16">
        <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: "hsl(210 15% 45%)" }}>
          Case Studies
        </p>
        <p className="text-sm mb-5" style={{ color: "hsl(210 20% 55%)" }}>
          Real problems. Structured thinking. Measurable impact.
        </p>

        <div className="space-y-3">
          {caseStudies.map(({ id, title, description, metric, tags, status, href }) => (
            <button
              key={id}
              type="button"
              onClick={() => status === "live" && navigate(href)}
              className={`w-full text-left rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${status === "live" ? "hover:scale-[1.01]" : ""}`}
              style={{
                background: "hsl(210 28% 11%)",
                border: `1px solid ${status === "coming-soon" ? "hsl(210 20% 16%)" : "hsl(210 20% 20%)"}`,
                cursor: status === "live" ? "pointer" : "default",
                opacity: status === "coming-soon" ? 0.55 : 1,
              }}
            >
              <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                <span className="text-xs font-black tabular-nums mt-0.5 flex-shrink-0" style={{ color: status === "coming-soon" ? "hsl(210 15% 40%)" : "hsl(174 80% 60%)" }}>{id}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <p className="text-sm font-bold">{title}</p>
                    {status === "coming-soon" && (
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "hsl(42 90% 58% / 0.1)", color: "hsl(42 90% 58%)", border: "1px solid hsl(42 90% 58% / 0.25)" }}>
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-xs mb-1.5" style={{ color: "hsl(210 20% 55%)" }}>{description}</p>
                  {metric && (
                    <p className="text-[11px] font-bold mb-2.5" style={{ color: "hsl(174 80% 60%)" }}>
                      ↗ {metric}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: "hsl(174 80% 60% / 0.1)", color: "hsl(174 80% 60%)", border: "1px solid hsl(174 80% 60% / 0.2)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {status === "live" && <ArrowRight size={16} className="flex-shrink-0" style={{ color: "hsl(174 80% 60%)" }} />}
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-2 sm:px-6 mt-16 pt-6 flex items-center justify-between" style={{ borderTop: "1px solid hsl(210 20% 14%)" }}>
        <span className="text-[11px]" style={{ color: "hsl(210 15% 40%)" }}>© {new Date().getFullYear()} Lucas Daneluz</span>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer" style={{ color: "hsl(210 15% 40%)" }} className="hover:text-[hsl(174_80%_60%)] transition-colors">
            <Linkedin size={14} />
          </a>
          <a href="mailto:lucas.daneluz@gmail.com" style={{ color: "hsl(210 15% 40%)" }} className="hover:text-[hsl(174_80%_60%)] transition-colors">
            <Mail size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
