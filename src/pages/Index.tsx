import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Briefcase, TrendingUp, ArrowRight, Linkedin, Mail, Search, Compass, Rocket, BarChart2, ChevronRight, MapPin, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/lucas-profile.png";

const caseStudies = [
  {
    id: "01",
    slug: "walkup",
    title: "WalkUp – Smarter Queues",
    description: "Queue transparency, loyalty, and growth for a UK restaurant waitlist marketplace.",
    metric: "3x loyalty engagement uplift",
    tags: ["Marketplace", "Waitlist UX", "Loyalty", "Product Strategy"],
    status: "live",
    href: "/case-studies/walkup",
  },
  {
    id: "02",
    slug: "hipen-media",
    title: "Hipen Media – User Onboarding",
    description: "Restructuring a multi-segment onboarding flow through research and lean MVP.",
    metric: "40% faster onboarding completion",
    tags: ["Discovery", "Onboarding", "MVP", "Research"],
    status: "live",
    href: "/case-studies/hipen-media",
  },
  {
    id: "03",
    slug: "westpak",
    title: "Westpak – Cost Optimisation",
    description: "Cost reduction across 3 categories, aligning Finance and Operations.",
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
    icon: <BarChart2 size={20} />,
    title: "Baseline",
    description: "Establish measurable benchmarks before shipping so progress is grounded in data, not assumption.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Deliver",
    description: "Ship iteratively, measure outcomes, and refine based on real-world feedback.",
  },
];

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const els = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in-view"); observer.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(210_35%_5%)] text-white">
      <style>{`
        .cs-card { transition: border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease; }
        .cs-card:hover { border-color: hsl(174 80% 60% / 0.5) !important; box-shadow: inset 3px 0 0 hsl(174 80% 60% / 0.45); transform: scale(1.005); }
        .fade-section { opacity: 0; transform: translateY(18px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .fade-section.in-view { opacity: 1; transform: translateY(0); }
      `}</style>
      {/* Hero / Bio */}
      <section className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 pt-10 sm:pt-14 pb-4">
        {/* Name & Photo row */}
        <div className="flex items-center gap-5 mb-8">
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0 overflow-hidden"
            style={{ background: "hsl(210 35% 5%)", outline: "1px solid hsl(210 20% 18%)" }}
          >
            <img
              src={profilePhoto}
              alt="Lucas Daneluz profile photo"
              className="w-full h-full object-cover object-top"
            />
          </div>
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
        <p className="text-2xl sm:text-3xl font-light leading-snug tracking-tight mb-2" style={{ color: "hsl(210 40% 92%)" }}>
          Turning real{" "}
          <span className="font-medium italic" style={{ color: "hsl(174 90% 68%)" }}>pain points</span>
          {" "}into{" "}
          <span className="font-medium italic" style={{ color: "hsl(174 90% 68%)" }}>measurable impact</span>.
        </p>
        <p className="text-xs mb-7" style={{ color: "hsl(210 15% 45%)" }}>
          10+ years across B2B SaaS, FMCG, and supply chain.
        </p>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {[{ icon: <Rocket size={11} />, label: "0→1 Builds" },
            { icon: <Briefcase size={11} />, label: "Stakeholder Alignment" },
            { icon: <Search size={11} />, label: "User Research" },
            { icon: <TrendingUp size={11} />, label: "Outcome-Led PM" }].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: "hsl(210 28% 12%)", border: "1px solid hsl(210 20% 20%)", color: "hsl(210 20% 65%)" }}
            >
              <span style={{ color: "hsl(174 80% 60%)" }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>

      </section>

      {/* How I Work */}
      <section className="fade-section max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-6 sm:mt-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: "hsl(210 25% 82%)" }}>
          How I Work
        </h2>
        <p className="text-base sm:text-lg font-medium italic mb-8" style={{ color: "hsl(210 25% 72%)" }}>
          A structured approach to building the right thing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-stretch gap-3">
          {methodologySteps.map(({ icon, title, description }, i) => (
            <React.Fragment key={title}>
              <div
                className="rounded-2xl p-4 relative lg:flex-1"
                style={{
                  background: "hsl(210 28% 11%)",
                  border: "1px solid hsl(210 20% 20%)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mb-3"
                  style={{ background: "hsl(174 80% 60% / 0.1)", color: "hsl(174 80% 60%)" }}
                >
                  {icon}
                </div>
                <p className="text-2xl font-bold mb-2" style={{ color: "hsl(210 25% 82%)" }}>{title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(210 20% 55%)" }}>{description}</p>
              </div>
              {i < methodologySteps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                  <ChevronRight size={14} style={{ color: "hsl(174 80% 60% / 0.35)" }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Case Studies List */}
      <section id="case-studies" className="fade-section max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-12 sm:mt-14" style={{ scrollMarginTop: "96px" }}>
        <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: "hsl(210 25% 82%)" }}>
          Case Studies
        </h2>
        <p className="text-base sm:text-lg font-medium italic mb-8" style={{ color: "hsl(210 25% 72%)" }}>
          Real problems. Structured thinking. Measurable impact.
        </p>

        <div className="space-y-3">
          {caseStudies.map(({ id, title, description, metric, tags, status, href }) => (
            <button
              key={id}
              type="button"
              onClick={() => status === "live" && navigate(href)}
              className={`${status === "live" ? "cs-card" : ""} w-full text-left rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
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
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold mb-2.5"
                      style={{
                        background: "hsl(174 80% 60% / 0.1)",
                        border: "1px solid hsl(174 80% 60% / 0.25)",
                        color: "hsl(174 80% 60%)",
                      }}
                    >
                      ↗ {metric}
                    </span>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: "hsl(210 20% 14%)", color: "hsl(210 15% 50%)", border: "1px solid hsl(210 20% 22%)" }}
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

      {/* Let's Talk CTA */}
      <section className="fade-section max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-16 sm:mt-20">
        <div
          className="rounded-2xl p-12 sm:p-14 text-center"
          style={{ background: "hsl(210 28% 11%)", border: "1px solid hsl(210 20% 20%)" }}
        >
          <h2 className="text-xl sm:text-2xl font-black mb-3" style={{ color: "hsl(210 40% 98%)" }}>
            Interested in working together?
          </h2>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "hsl(210 20% 55%)" }}>
            I'm open to PM roles, contract work, or just a good product conversation.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: "hsl(174 80% 60%)", color: "hsl(210 35% 5%)" }}
            >
              <Mail size={14} />
              Get in Touch
            </Link>
            <a
              href="https://www.linkedin.com/in/lucasdaneluz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-colors hover:opacity-90"
              style={{ background: "transparent", border: "1px solid hsl(174 80% 60% / 0.4)", color: "hsl(174 80% 60%)" }}
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
          <span className="text-[11px]" style={{ color: "hsl(210 15% 40%)" }}>© {new Date().getFullYear()} Lucas Daneluz</span>
          <div className="flex items-center gap-4">
            <a href="mailto:lucas.daneluz@gmail.com" className="text-[11px] flex items-center gap-1.5 transition-opacity hover:opacity-70" style={{ color: "hsl(210 15% 45%)" }}>
              <Mail size={11} />
              Email
            </a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer" className="text-[11px] flex items-center gap-1.5 transition-opacity hover:opacity-70" style={{ color: "hsl(210 15% 45%)" }}>
              <Linkedin size={11} />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
