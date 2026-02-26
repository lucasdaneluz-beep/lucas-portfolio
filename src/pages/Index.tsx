import React, { useState } from "react";
import MoneyboxApp from "@/components/moneybox/MoneyboxApp";
import { ChevronDown, ChevronUp, ArrowRight, Briefcase, TrendingUp, Layers, PiggyBank, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

const caseStudySections = [
  {
    emoji: "🎯",
    title: "Problem",
    color: "hsl(0 72% 51%)",
    bg: "hsl(0 72% 51% / 0.08)",
    border: "hsl(0 72% 51% / 0.2)",
    points: [
      "Navigation is confusing — 4 bottom tabs with unclear hierarchy",
      "Cash ISA & Simple Saver are buried together in one 'Accounts' list",
      "No visual distinction between account types, rates, or purposes",
      "Investment section feels hidden, reducing confidence to act",
    ],
  },
  {
    emoji: "💡",
    title: "Solution",
    color: "hsl(174 80% 60%)",
    bg: "hsl(174 80% 60% / 0.08)",
    border: "hsl(174 80% 60% / 0.2)",
    points: [
      "Cleaner 4-tab navigation: Home · Savings · Invest · Profile",
      "Cash ISA and Simple Saver as distinct, colour-coded cards",
      "ISA allowance tracker + interest rate prominently displayed",
      "Investment section with curated funds, key benefits upfront",
    ],
  },
  {
    emoji: "📊",
    title: "Insights",
    color: "hsl(42 90% 58%)",
    bg: "hsl(42 90% 58% / 0.08)",
    border: "hsl(42 90% 58% / 0.2)",
    points: [
      "Inspired by Chip's clean card hierarchy and Wise's distinct account pills",
      "Colour coding (cyan = ISA, gold = Saver) enables instant mental mapping",
      "Surfacing AER rates builds trust and confidence to invest more",
      "Consistent with Moneybox brand — no visual identity overhaul needed",
    ],
  },
];

const walkupCaseStudySections = [
  {
    emoji: "🎯",
    title: "Problem",
    color: "hsl(0 72% 51%)",
    bg: "hsl(0 72% 51% / 0.08)",
    border: "hsl(0 72% 51% / 0.2)",
    points: [
      "Unreliable wait-time estimates eroded trust and led to diners being dropped from queues without clear context.",
      "A rigid 2km radius forced users to stay unnecessarily close to restaurants, even for long waits.",
      "App crashes, slow startup, and heavy battery use made WalkUp feel \"expensive\" to keep open.",
    ],
  },
  {
    emoji: "💡",
    title: "Solution",
    color: "hsl(174 80% 60%)",
    bg: "hsl(174 80% 60% / 0.08)",
    border: "hsl(174 80% 60% / 0.2)",
    points: [
      "Upgrade the platform with SMS alerts and clearer queue messaging aligned with real restaurant operations.",
      "Redesign the 2km restriction messaging so diners understand their options and can use waiting time productively.",
      "Launch a points-based loyalty programme that rewards diners for showing up and returning regularly.",
    ],
  },
  {
    emoji: "📊",
    title: "Impact & Rationale",
    color: "hsl(42 90% 58%)",
    bg: "hsl(42 90% 58% / 0.08)",
    border: "hsl(42 90% 58% / 0.2)",
    points: [
      "Targeting a 10% uplift in weekly tables booked and returning bookings every two weeks.",
      "Use richer restaurant profiles and discovery tools to attract more venues to the platform.",
      "Model a ~70% first-year ROI on the marketing and loyalty investment to justify future roadmap work.",
    ],
  },
];

const caseStudies = [
  {
    id: "01",
    title: "Moneybox Redesigned",
    description: "Reimagining the savings & investment journey for clarity and confidence.",
    tags: ["UX Strategy", "Fintech", "Navigation"],
    status: "live",
  },
  {
    id: "02",
    title: "WalkUp – Smarter Queues",
    description: "Improving queue transparency, loyalty, and app performance for a UK restaurant waitlist marketplace.",
    tags: ["Marketplace", "Waitlist UX", "Loyalty", "Product Strategy"],
    status: "live",
  },
];

const Index = () => {
  const [expandedMoneybox, setExpandedMoneybox] = useState<number | null>(0);
  const [expandedWalkup, setExpandedWalkup] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, hsl(210 35% 5%) 0%, hsl(210 28% 8%) 50%, hsl(210 35% 5%) 100%)" }}
    >
      {/* ── HERO / BIO ─────────────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-6 pt-16 pb-10">
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
          {[
            { icon: <Briefcase size={12} />, label: "Product" },
            { icon: <TrendingUp size={12} />, label: "Fintech" },
            { icon: <Layers size={12} />, label: "UX & Strategy" },
            { icon: <DollarSign size={12} />, label: "Cost Efficiency" },
          ].map(({ icon, label }) => (
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

      {/* ── CASE STUDIES LIST ──────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-6 pb-12">
        <h2 className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(210 15% 38%)" }}>
          Case Studies
        </h2>
        <div className="space-y-3">
          {caseStudies.map(({ id, title, description, tags, status }) => {
            const href = id === "01" ? "/case-studies/moneybox" : "/case-studies/walkup";
            const isClickable = status === "live";

            return (
              <button
                key={id}
                type="button"
                onClick={() => isClickable && navigate(href)}
                className="w-full text-left rounded-2xl p-5 flex items-center justify-between gap-4 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  background: status === "live" ? "hsl(210 28% 11%)" : "hsl(210 28% 8%)",
                  border: `1px solid ${status === "live" ? "hsl(210 20% 20%)" : "hsl(210 20% 13%)"}`,
                  opacity: status === "wip" ? 0.45 : 1,
                  cursor: isClickable ? "pointer" : "default",
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-xs font-black tabular-nums mt-0.5 flex-shrink-0"
                    style={{ color: status === "live" ? "hsl(174 80% 60%)" : "hsl(210 15% 35%)" }}
                  >
                    {id}
                  </span>
                  <div>
                    <p className="text-sm font-bold mb-1" style={{ color: "hsl(210 40% 92%)" }}>{title}</p>
                    <p className="text-xs mb-2.5" style={{ color: "hsl(210 15% 52%)" }}>{description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
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
                {status === "live" && (
                  <ArrowRight size={16} className="flex-shrink-0" style={{ color: "hsl(174 80% 60%)" }} />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── SECTION DIVIDER ────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 mb-10">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "hsl(210 20% 14%)" }} />
          <span className="text-[10px] font-bold uppercase tracking-widest text-center" style={{ color: "hsl(210 15% 32%)" }}>Case Study 01 — Interactive Prototype</span>
          <div className="flex-1 h-px" style={{ background: "hsl(210 20% 14%)" }} />
        </div>
      </div>

      {/* ── CASE STUDY TITLE ───────────────────────────────────── */}
      <div className="text-center pb-4 px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3" style={{ background: "hsl(174 80% 60% / 0.12)", border: "1px solid hsl(174 80% 60% / 0.25)" }}>
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "hsl(174 80% 60%)" }}>PM Portfolio · Case Study 01</span>
        </div>
        <h2 className="text-3xl font-black tracking-tight mb-2" style={{ color: "hsl(210 40% 98%)" }}>
          Moneybox <span style={{ color: "hsl(174 80% 60%)" }}>Redesigned</span>
        </h2>
        <p className="text-sm max-w-sm mx-auto" style={{ color: "hsl(210 15% 55%)" }}>
          A clearer, more confident savings & investment experience
        </p>
      </div>

      {/* ── PHONE PROTOTYPE ────────────────────────────────────── */}
      <div className="flex justify-center px-4 mb-8">
        <div
          className="relative w-[375px] rounded-[44px] overflow-hidden"
          style={{
            background: "hsl(210 35% 6%)",
            boxShadow: "0 0 0 2px hsl(210 20% 22%), 0 40px 80px hsl(210 35% 4% / 0.8), 0 0 60px hsl(174 80% 50% / 0.1)",
            height: "812px",
          }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-50" />

          {/* Status bar */}
          <div className="flex justify-between items-center px-8 pt-3 pb-0 text-xs z-40 relative" style={{ color: "hsl(0 0% 70%)" }}>
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5 items-end h-3">
                {[3, 4, 5, 4].map((h, i) => (
                  <div key={i} className="w-0.5 rounded-sm" style={{ height: `${h * 2.5}px`, background: i < 3 ? "hsl(0 0% 80%)" : "hsl(0 0% 40%)" }} />
                ))}
              </div>
              <div className="w-5 h-2.5 rounded-sm relative" style={{ border: "1px solid hsl(0 0% 50%)" }}>
                <div className="absolute inset-0.5 rounded-sm" style={{ width: "75%", background: "hsl(0 0% 80%)" }} />
              </div>
            </div>
          </div>

          {/* App */}
          <div style={{ height: "calc(812px - 28px)", overflow: "hidden" }}>
            <MoneyboxApp />
          </div>
        </div>
      </div>

      {/* ── DESIGN RATIONALE ACCORDION ─────────────────────────── */}
      <div className="max-w-sm mx-auto px-5 pb-16">
        <h2 className="text-sm font-bold uppercase tracking-widest mb-4 text-center" style={{ color: "hsl(210 15% 40%)" }}>
          Design rationale
        </h2>
        <div className="space-y-3">
          {caseStudySections.map(({ emoji, title, color, bg, border, points }, i) => (
            <div
              key={title}
              className="rounded-2xl overflow-hidden transition-all"
              style={{ background: expandedMoneybox === i ? bg : "hsl(210 28% 10%)", border: `1px solid ${expandedMoneybox === i ? border : "hsl(210 20% 15%)"}` }}
            >
              <button
                onClick={() => setExpandedMoneybox(expandedMoneybox === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{emoji}</span>
                  <span className="font-bold text-sm" style={{ color: expandedMoneybox === i ? color : "hsl(210 40% 90%)" }}>{title}</span>
                </div>
                {expandedMoneybox === i ? (
                  <ChevronUp size={15} style={{ color }} />
                ) : (
                  <ChevronDown size={15} style={{ color: "hsl(210 15% 45%)" }} />
                )}
              </button>

              {expandedMoneybox === i && (
                <div className="px-5 pb-4">
                  <ul className="space-y-2.5">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: color }} />
                        <span className="text-xs" style={{ color: "hsl(210 20% 65%)" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] mt-8" style={{ color: "hsl(210 15% 30%)" }}>
          This is a product concept for portfolio purposes only.<br />Not affiliated with Moneybox Ltd.
        </p>
      </div>

      {/* ── CASE STUDY 02 DIVIDER ───────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 mb-10 mt-16">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "hsl(210 20% 14%)" }} />
          <span className="text-[10px] font-bold uppercase tracking-widest text-center" style={{ color: "hsl(210 15% 32%)" }}>
            Case Study 02 — Marketplace Strategy
          </span>
          <div className="flex-1 h-px" style={{ background: "hsl(210 20% 14%)" }} />
        </div>
      </div>

      {/* ── CASE STUDY 02 TITLE ─────────────────────────────────── */}
      <div className="text-center pb-4 px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3" style={{ background: "hsl(174 80% 60% / 0.12)", border: "1px solid hsl(174 80% 60% / 0.25)" }}>
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "hsl(174 80% 60%)" }}>PM Portfolio · Case Study 02</span>
        </div>
        <h2 className="text-3xl font-black tracking-tight mb-2" style={{ color: "hsl(210 40% 98%)" }}>
          WalkUp <span style={{ color: "hsl(174 80% 60%)" }}>Smarter Queues</span>
        </h2>
        <p className="text-sm max-w-sm mx-auto" style={{ color: "hsl(210 15% 55%)" }}>
          Improving queue transparency, loyalty, and app performance for a UK restaurant waitlist marketplace.
        </p>
      </div>

      {/* ── CASE STUDY 02 RATIONALE ─────────────────────────────── */}
      <div className="max-w-sm mx-auto px-5 pb-16">
        <h2 className="text-sm font-bold uppercase tracking-widest mb-4 text-center" style={{ color: "hsl(210 15% 40%)" }}>
          Design rationale
        </h2>
        <div className="space-y-3">
          {walkupCaseStudySections.map(({ emoji, title, color, bg, border, points }, i) => (
            <div
              key={title}
              className="rounded-2xl overflow-hidden transition-all"
              style={{ background: expandedWalkup === i ? bg : "hsl(210 28% 10%)", border: `1px solid ${expandedWalkup === i ? border : "hsl(210 20% 15%)"}` }}
            >
              <button
                onClick={() => setExpandedWalkup(expandedWalkup === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{emoji}</span>
                  <span className="font-bold text-sm" style={{ color: expandedWalkup === i ? color : "hsl(210 40% 90%)" }}>{title}</span>
                </div>
                {expandedWalkup === i ? (
                  <ChevronUp size={15} style={{ color }} />
                ) : (
                  <ChevronDown size={15} style={{ color: "hsl(210 15% 45%)" }} />
                )}
              </button>

              {expandedWalkup === i && (
                <div className="px-5 pb-4">
                  <ul className="space-y-2.5">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: color }} />
                        <span className="text-xs" style={{ color: "hsl(210 20% 65%)" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
