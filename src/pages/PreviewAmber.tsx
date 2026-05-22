import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, TrendingUp, ArrowRight, Linkedin, Mail, Search, Compass, Rocket, BarChart2, ChevronRight, MapPin, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/lucas-profile.png";

const A = "hsl(38 90% 58%)"; // amber accent

// Warm charcoal palette — background shifts from cool navy to dark warm brown
const bg       = "hsl(30 12% 7%)";
const bgCard   = "hsl(30 10% 11%)";
const bgPill   = "hsl(30 10% 12%)";
const bgBanner = "hsl(30 10% 9%)";
const border   = "hsl(30 8% 18%)";
const borderFaint = "hsl(30 8% 14%)";
const divider  = "hsl(30 8% 13%)";
const bgTag    = "hsl(30 8% 12%)";
const borderTag = "hsl(30 8% 20%)";

const tWhite   = "hsl(30 20% 97%)";
const tHead    = "hsl(30 15% 82%)";
const tSub     = "hsl(30 12% 72%)";
const tBio     = "hsl(30 10% 62%)";
const tPill    = "hsl(30 10% 65%)";
const tDesc    = "hsl(30 8% 55%)";
const tTag     = "hsl(30 8% 50%)";
const tDim     = "hsl(30 8% 40%)";
const tFooter  = "hsl(30 8% 45%)";

const caseStudies = [
  {
    id: "01",
    title: "WalkUp – Smarter Queues",
    description: "Queue transparency, loyalty, and growth for a UK restaurant waitlist marketplace.",
    metric: "3x loyalty engagement uplift",
    tags: ["Marketplace", "Waitlist UX", "Loyalty", "Product Strategy"],
    status: "live",
    href: "/case-studies/walkup",
  },
  {
    id: "02",
    title: "Hipen Media – User Onboarding",
    description: "Restructuring a multi-segment onboarding flow through research and lean MVP.",
    metric: "40% faster onboarding completion",
    tags: ["Discovery", "Onboarding", "MVP", "Research"],
    status: "live",
    href: "/case-studies/hipen-media",
  },
  {
    id: "03",
    title: "Westpak – Cost Optimisation",
    description: "Cost reduction across 3 categories, aligning Finance and Operations.",
    metric: "25% cost reduction delivered",
    tags: ["Stakeholder Management", "Cost Optimisation", "Supply Chain"],
    status: "live",
    href: "/case-studies/westpak",
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
  { icon: <Search size={20} />,    title: "Discover",  description: "User research, data analysis, and stakeholder interviews to frame the real problem." },
  { icon: <Compass size={20} />,   title: "Define",    description: "Synthesise insights into a clear strategy, prioritised roadmap, and success metrics." },
  { icon: <BarChart2 size={20} />, title: "Baseline",  description: "Establish measurable benchmarks before shipping so progress is grounded in data, not assumption." },
  { icon: <Rocket size={20} />,    title: "Deliver",   description: "Ship iteratively, measure outcomes, and refine based on real-world feedback." },
];

const a10  = `${A.replace(")", " / 0.10)")}`;
const a25  = `${A.replace(")", " / 0.25)")}`;
const a30  = `${A.replace(")", " / 0.30)")}`;
const a35  = `${A.replace(")", " / 0.35)")}`;
const a40  = `${A.replace(")", " / 0.40)")}`;
const a45  = `${A.replace(")", " / 0.45)")}`;
const a50  = `${A.replace(")", " / 0.50)")}`;

const PreviewAmber = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white" style={{ background: bg }}>
      <style>{`
        .pa-card { transition: border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease; }
        .pa-card:hover { border-color: ${a50} !important; box-shadow: inset 3px 0 0 ${a45}; transform: scale(1.005); }
      `}</style>

      {/* Preview banner */}
      <div className="flex items-center gap-2.5 px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest" style={{ background: bgBanner, borderBottom: `1px solid ${divider}`, color: tDim }}>
        <div className="w-2 h-2 rounded-full" style={{ background: A }} />
        <span style={{ color: tSub }}>Colour preview</span>
        — Amber · warm charcoal bg
      </div>

      {/* Hero */}
      <section className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 pt-10 sm:pt-14 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: a10, border: `1px solid ${a25}` }}>
          <MapPin size={11} style={{ color: A }} />
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: A }}>London, UK</span>
        </div>

        <div className="flex items-center gap-5 mb-3">
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0 overflow-hidden"
            style={{ background: bg, outline: `1px solid ${border}` }}
          >
            <img
              src={profilePhoto}
              alt="Lucas Daneluz profile photo"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight" style={{ color: tWhite }}>
              Lucas Daneluz
            </h1>
            <p className="text-base sm:text-lg font-semibold" style={{ color: A }}>
              Product Manager
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: tBio }}>
          A commercially-driven PM with 10+ years in commercial and product-adjacent roles across B2B SaaS, FMCG, and supply chain. I've spent my career close to users, data, and looking to own business outcomes. I'm now channelling that into building a product portfolio grounded in real pain points, clear thinking, and measurable impact.
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {[{ icon: <Rocket size={12} />, label: "0→1 Builds" },
            { icon: <Briefcase size={12} />, label: "Stakeholder Alignment" },
            { icon: <Search size={12} />, label: "User Research" },
            { icon: <TrendingUp size={12} />, label: "Outcome-Led PM" }].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
              style={{ background: bgPill, border: `1px solid ${border}`, color: tPill }}
            >
              <span style={{ color: A }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="#pa-case-studies"
            className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
            style={{ color: A }}
          >
            View case studies
            <ArrowDown size={12} />
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-16 sm:mt-20">
        <hr style={{ borderColor: divider }} />
      </div>

      {/* How I Work */}
      <section className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-12 sm:mt-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: tHead }}>
          How I Work
        </h2>
        <p className="text-base sm:text-lg font-medium italic mb-8" style={{ color: tSub }}>
          A structured approach to building the right thing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-stretch gap-3">
          {methodologySteps.map(({ icon, title, description }, i) => (
            <React.Fragment key={title}>
              <div
                className="rounded-2xl p-6 relative lg:flex-1"
                style={{ background: bgCard, border: `1px solid ${border}` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: a10, color: A }}
                  >
                    {icon}
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest" style={{ color: tDim }}>
                    0{i + 1}
                  </span>
                </div>
                <p className="text-sm font-bold mb-1" style={{ color: tHead }}>{title}</p>
                <p className="text-xs leading-relaxed" style={{ color: tDesc }}>{description}</p>
              </div>
              {i < methodologySteps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                  <ChevronRight size={14} style={{ color: a35 }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section id="pa-case-studies" className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-16 sm:mt-20">
        <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: tHead }}>
          Case Studies
        </h2>
        <p className="text-base sm:text-lg font-medium italic mb-8" style={{ color: tSub }}>
          Real problems. Structured thinking. Measurable impact.
        </p>

        <div className="space-y-3">
          {caseStudies.map(({ id, title, description, metric, tags, status, href }) => (
            <button
              key={id}
              type="button"
              onClick={() => status === "live" && navigate(href)}
              className={`${status === "live" ? "pa-card" : ""} w-full text-left rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 focus-visible:outline-none`}
              style={{
                background: bgCard,
                border: `1px solid ${status === "coming-soon" ? borderFaint : border}`,
                cursor: status === "live" ? "pointer" : "default",
                opacity: status === "coming-soon" ? 0.55 : 1,
              }}
            >
              <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                <span className="text-xs font-black tabular-nums mt-0.5 flex-shrink-0" style={{ color: status === "coming-soon" ? tDim : A }}>{id}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <p className="text-sm font-bold" style={{ color: tWhite }}>{title}</p>
                    {status === "coming-soon" && (
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: a10, color: A, border: `1px solid ${a25}` }}>
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-xs mb-1.5" style={{ color: tDesc }}>{description}</p>
                  {metric && (
                    <p className="text-[11px] font-bold mb-2.5" style={{ color: A }}>↗ {metric}</p>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: bgTag, color: tTag, border: `1px solid ${borderTag}` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {status === "live" && <ArrowRight size={16} className="flex-shrink-0" style={{ color: A }} />}
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-16 sm:mt-20">
        <div
          className="rounded-2xl p-12 sm:p-14 text-center"
          style={{ background: bgCard, border: `1px solid ${border}` }}
        >
          <h2 className="text-xl sm:text-2xl font-black mb-3" style={{ color: tWhite }}>
            Interested in working together?
          </h2>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: tDesc }}>
            I'm open to PM roles, contract work, or just a good product conversation.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="mailto:lucas.daneluz@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: A, color: bg }}
            >
              <Mail size={14} />
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/lucasdaneluz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold hover:opacity-90"
              style={{ background: "transparent", border: `1px solid ${a40}`, color: A }}
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-8 pb-16">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span className="text-[11px]" style={{ color: tDim }}>© {new Date().getFullYear()} Lucas Daneluz</span>
          <div className="flex items-center gap-4">
            <a href="mailto:lucas.daneluz@gmail.com" className="text-[11px] flex items-center gap-1.5 transition-opacity hover:opacity-70" style={{ color: tFooter }}>
              <Mail size={11} />
              Email
            </a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer" className="text-[11px] flex items-center gap-1.5 transition-opacity hover:opacity-70" style={{ color: tFooter }}>
              <Linkedin size={11} />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PreviewAmber;
