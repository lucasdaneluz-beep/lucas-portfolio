import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, TrendingUp, Layers, DollarSign, ArrowRight, Linkedin, Mail } from "lucide-react";

const caseStudies = [
  {
    id: "01",
    slug: "walkup",
    title: "WalkUp – Smarter Queues",
    description:
      "Improving queue transparency, loyalty, and app performance for a UK restaurant waitlist marketplace.",
    tags: ["Marketplace", "Waitlist UX", "Loyalty", "Product Strategy"],
    status: "live",
    href: "/case-studies/walkup",
  },
  {
    id: "02",
    slug: "moneybox",
    title: "Moneybox Redesigned",
    description:
      "Reimagining the savings & investment journey for clarity and confidence.",
    tags: ["UX Strategy", "Fintech", "Navigation"],
    status: "live",
    href: "/case-studies/moneybox",
  },
  {
    id: "03",
    slug: "Coming Soon",
    title: "Coming Soon",
    description: "Coming soon",
    tags: ["AI", "Music", "Discovery"],
    status: "coming-soon", // note we use this status to disable click
    href: "/case-studies/spotify",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[hsl(210_35%_5%)] text-white px-6 py-16">
      {/* Hero / Bio */}
      <section className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 pt-16 pb-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: "hsl(174 80% 60% / 0.1)", border: "1px solid hsl(174 80% 60% / 0.25)" }}>
          <Briefcase size={11} style={{ color: "hsl(174 80% 60%)" }} />
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "hsl(174 80% 60%)" }}>PM Portfolio</span>
        </div>

        {/* Name & headline */}
        <h1 className="text-4xl font-black tracking-tight mb-3 leading-tight" style={{ color: "hsl(210 40% 98%)" }}>
          Lucas Daneluz
        </h1>
        <p className="text-lg font-semibold mb-5" style={{ color: "hsl(174 80% 60%)" }}>
          Product Manager
        </p>

        {/* Bio */}
        <p className="text-sm leading-relaxed mb-3" style={{ color: "hsl(210 20% 62%)" }}>
        <strong style={{ color: "hsl(210 40% 88%)" }}>Product Manager</strong> with over 10+ years of experience in commercial and product-adjacent roles across B2B SaaS, FMCG, and supply-chain environments. Currently driving end-to-end product discovery and early delivery for an early-stage SaaS platform, translating user needs into prioritised features and measurable outcomes. Brings strong expertise in stakeholder alignment, cross-functional collaboration, cost optimisation, and data-informed decision-making, with a solid foundation in commercial execution.
        </p>
        <p className="text-sm leading-relaxed mb-8" style={{ color: "hsl(210 20% 62%)" }}>
          I'm now channelling that commercial lens into <strong style={{ color: "hsl(210 40% 88%)" }}>Product Management</strong>, building a portfolio of concrete product ideas grounded in real user pain points. Each case study below is something I'd genuinely use, and think would make a measurable difference in the real world.
        </p>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-3">
          {[{ icon: <Briefcase size={12} />, label: "Product" },
            { icon: <TrendingUp size={12} />, label: "Fintech" },
            { icon: <Layers size={12} />, label: "UX & Strategy" },
            { icon: <DollarSign size={12} />, label: "Cost Efficiency" }].map(({ icon, label }) => (
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

        {/* Contact links */}
        <div className="flex flex-wrap gap-3 mt-4">
          {[
            { icon: <Linkedin size={12} />, label: "LinkedIn", href: "https://www.linkedin.com/in/lucasdaneluz" },
            { icon: <Mail size={12} />, label: "Email", href: "mailto:lucas.daneluz@gmail.com" },
          ].map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors hover:border-[hsl(174_80%_60%)] hover:text-[hsl(174_80%_60%)]"
              style={{ background: "hsl(210 28% 12%)", border: "1px solid hsl(210 20% 20%)", color: "hsl(210 20% 65%)" }}
            >
              <span style={{ color: "hsl(174 80% 60%)" }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* Case Studies List */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-500">
          Case Studies
        </h2>

        <div className="space-y-3">
          {caseStudies.map(({ id, title, description, tags, status, href }) => (
            <button
              key={id}
              type="button"
              onClick={() => status === "live" && navigate(href)}
              className="w-full text-left rounded-2xl p-5 flex items-center justify-between gap-4 transition-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background: "hsl(210 28% 11%)",
                border: "1px solid hsl(210 20% 20%)",
                cursor: status === "live" ? "pointer" : "default",
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-xs font-black tabular-nums mt-0.5 flex-shrink-0" style={{ color: "hsl(174 80% 60%)" }}>{id}</span>
                <div>
                  <p className="text-sm font-bold mb-1">{title}</p>
                  <p className="text-xs mb-2.5 text-gray-400">{description}</p>
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
      <footer className="max-w-2xl mx-auto mt-16 pt-6 flex items-center justify-between" style={{ borderTop: "1px solid hsl(210 20% 14%)" }}>
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