import React, { useState } from "react";
import PhoneFrame from "@/components/moneybox/PhoneFrame";
import MoneyboxApp from "@/components/moneybox/MoneyboxApp";
import { ChevronDown, ChevronUp } from "lucide-react";

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

const Index = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, hsl(210 35% 5%) 0%, hsl(210 28% 8%) 50%, hsl(210 35% 5%) 100%)" }}
    >
      {/* Hero title bar */}
      <div className="text-center pt-10 pb-4 px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3" style={{ background: "hsl(174 80% 60% / 0.12)", border: "1px solid hsl(174 80% 60% / 0.25)" }}>
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "hsl(174 80% 60%)" }}>PM Portfolio · Case Study 01</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight mb-2" style={{ color: "hsl(210 40% 98%)" }}>
          Moneybox <span style={{ color: "hsl(174 80% 60%)" }}>Redesigned</span>
        </h1>
        <p className="text-sm max-w-sm mx-auto" style={{ color: "hsl(210 15% 55%)" }}>
          A clearer, more confident savings & investment experience
        </p>
      </div>

      {/* Phone prototype */}
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

      {/* Case study accordion */}
      <div className="max-w-sm mx-auto px-5 pb-16">
        <h2 className="text-sm font-bold uppercase tracking-widest mb-4 text-center" style={{ color: "hsl(210 15% 40%)" }}>
          Design rationale
        </h2>
        <div className="space-y-3">
          {caseStudySections.map(({ emoji, title, color, bg, border, points }, i) => (
            <div
              key={title}
              className="rounded-2xl overflow-hidden transition-all"
              style={{ background: expanded === i ? bg : "hsl(210 28% 10%)", border: `1px solid ${expanded === i ? border : "hsl(210 20% 15%)"}` }}
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{emoji}</span>
                  <span className="font-bold text-sm" style={{ color: expanded === i ? color : "hsl(210 40% 90%)" }}>{title}</span>
                </div>
                {expanded === i ? (
                  <ChevronUp size={15} style={{ color }} />
                ) : (
                  <ChevronDown size={15} style={{ color: "hsl(210 15% 45%)" }} />
                )}
              </button>

              {expanded === i && (
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
    </div>
  );
};

export default Index;
