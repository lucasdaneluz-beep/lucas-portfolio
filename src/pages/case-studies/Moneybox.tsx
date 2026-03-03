import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MoneyboxApp from "@/components/moneybox/MoneyboxApp";

const CaseStudyMoneybox = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, hsl(210 35% 5%) 0%, hsl(210 28% 8%) 50%, hsl(210 35% 5%) 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-16">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-xs font-semibold mb-6 rounded-full px-3 py-1"
          style={{ background: "hsl(210 28% 12%)", color: "hsl(210 20% 70%)", border: "1px solid hsl(210 20% 20%)" }}
        >
          <ArrowLeft size={14} />
          Back to portfolio
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3" style={{ background: "hsl(174 80% 60% / 0.12)", border: "1px solid hsl(174 80% 60% / 0.25)" }}>
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "hsl(174 80% 60%)" }}>PM Portfolio · Case Study 01</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3" style={{ color: "hsl(210 40% 98%)" }}>
          Moneybox <span style={{ color: "hsl(174 80% 60%)" }}>Redesigned</span>
        </h1>
        <p className="text-sm md:text-base max-w-xl mb-8" style={{ color: "hsl(210 20% 65%)" }}>
          Reimagining the savings & investment journey to make core products easier to find, compare, and act on — while staying true to Moneybox&apos;s visual identity. After using the Moneybox app, I found the experience somewhat clunky and saw an opportunity to streamline the interface to boost user confidence. I explored alternative design approaches and developed ideas to enhance the overall user experience.
        </p>

        <div className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 mb-12 items-start">
          <div className="space-y-4 text-xs md:text-sm" style={{ color: "hsl(210 20% 70%)" }}>
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(210 15% 45%)" }}>
                Context
              </h2>
              <p>
                This concept explores how Moneybox could make its savings and investment products more discoverable and actionable on mobile, using clearer navigation and hierarchy without a full rebrand.
              </p>
            </div>

            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(210 15% 45%)" }}>
                Role
              </h2>
              <p>
                Product concept and UX structure — translating observed pain points into a cleaner information architecture, clearer labelling, and a mobile prototype that puts high‑value actions in reach.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(210 15% 45%)" }}>
                  Focus
                </h3>
                <ul className="space-y-1.5 list-disc pl-4">
                  <li>Navigation & IA</li>
                  <li>Account hierarchy</li>
                  <li>ISA allowance visibility</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(210 15% 45%)" }}>
                  Outcomes
                </h3>
                <ul className="space-y-1.5 list-disc pl-4">
                  <li>Clearer product mental model</li>
                  <li>More confident top‑ups</li>
                  <li>Less friction moving into Invest</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className="relative w-[260px] md:w-[320px] rounded-[40px] overflow-hidden"
              style={{
                background: "hsl(210 35% 6%)",
                boxShadow: "0 0 0 2px hsl(210 20% 22%), 0 30px 60px hsl(210 35% 4% / 0.8), 0 0 40px hsl(174 80% 50% / 0.12)",
                height: "560px",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-50" />
              <div className="flex justify-between items-center px-6 pt-3 pb-0 text-[11px] z-40 relative" style={{ color: "hsl(0 0% 70%)" }}>
                <span className="font-semibold">9:41</span>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5 items-end h-3">
                    {[3, 4, 5, 4].map((h, i) => (
                      <div key={i} className="w-0.5 rounded-sm" style={{ height: `${h * 2}px`, background: i < 3 ? "hsl(0 0% 80%)" : "hsl(0 0% 40%)" }} />
                    ))}
                  </div>
                  <div className="w-4.5 h-2.5 rounded-sm relative" style={{ border: "1px solid hsl(0 0% 50%)" }}>
                    <div className="absolute inset-0.5 rounded-sm" style={{ width: "75%", background: "hsl(0 0% 80%)" }} />
                  </div>
                </div>
              </div>

              <div style={{ height: "calc(560px - 24px)", overflow: "hidden" }}>
                <MoneyboxApp />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
          <div
            className="rounded-2xl p-4"
            style={{ background: "hsl(0 72% 51% / 0.08)", border: "1px solid hsl(0 72% 51% / 0.2)" }}
          >
            <h2 className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: "hsl(0 72% 60%)" }}>
              <span>🎯</span> Problem
            </h2>
            <ul className="space-y-1.5" style={{ color: "hsl(210 20% 70%)" }}>
              <li>Navigation made it hard to understand how Cash ISA, Simple Saver, and investment products fit together.</li>
              <li>Key rates and allowances were buried, reducing confidence to top up or move money.</li>
              <li>Invest felt like a separate experience rather than a natural next step.</li>
            </ul>
          </div>

          <div
            className="rounded-2xl p-4"
            style={{ background: "hsl(174 80% 60% / 0.08)", border: "1px solid hsl(174 80% 60% / 0.2)" }}
          >
            <h2 className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: "hsl(174 80% 60%)" }}>
              <span>💡</span> Solution
            </h2>
            <ul className="space-y-1.5" style={{ color: "hsl(210 20% 70%)" }}>
              <li>Restructured navigation into Home · Savings · Invest · Profile with clearer entry points.</li>
              <li>Separated Cash ISA and Simple Saver into distinct, colour‑coded cards with rates and allowances upfront.</li>
              <li>Created a more confident Invest tab that surfaces curated funds and key benefits early.</li>
            </ul>
          </div>

          <div
            className="rounded-2xl p-4"
            style={{ background: "hsl(42 90% 58% / 0.08)", border: "1px solid hsl(42 90% 58% / 0.2)" }}
          >
            <h2 className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: "hsl(42 90% 58%)" }}>
              <span>📊</span> Impact & rationale
            </h2>
            <ul className="space-y-1.5" style={{ color: "hsl(210 20% 70%)" }}>
              <li>Aligns with how savers mentally separate &quot;short‑term savings&quot; vs &quot;long‑term investing&quot;.</li>
              <li>Makes ISA allowances and rates visible where decisions happen, not hidden in sub‑menus.</li>
              <li>Reduces friction in moving from saving into investing, without needing a full visual rebrand.</li>
            </ul>
          </div>
        </div>

        {/* Before vs after comparison */}
        <section className="mt-12 text-xs md:text-sm">
          <h2 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(210 15% 45%)" }}>
            Before vs after
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div
              className="rounded-2xl p-4"
              style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(210 15% 55%)" }}>
                Current Moneybox app
              </p>
              <div className="flex justify-center mb-3">
  <img
    src="/moneybox-current.png"
    alt="Current Moneybox Cash ISA home screen"
    className="max-w-[320px] w-full h-auto rounded-2xl border border-[hsl(210_20%_18%)]"
  />
</div>
              <p className="mb-3" style={{ color: "hsl(210 20% 70%)" }}>
                Current public Moneybox home screen:
              </p>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Single Cash ISA hero card with deposit flows front and centre but limited context across products.</li>
                <li>Accounts section mixing ISA and Saver products in one list, making hierarchy less obvious.</li>
                <li>Simple Saver appearing as a small, low‑salience row beneath the ISA accounts.</li>
                <li>Navigation that makes it harder to see how saving and investing products relate at a glance.</li>
              </ul>
            </div>

            <div
              className="rounded-2xl p-4"
              style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(174 80% 40%)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(174 80% 60%)" }}>
                Redesigned experience
              </p>
              <div className="flex justify-center mb-3">
                <img
                  src="/moneybox-redesign-comparison.png"
                  alt="Redesigned Moneybox concept with separate Cash ISA and Simple Saver cards"
                  className="max-w-[320px] w-full h-auto rounded-2xl border border-[hsl(210_20%_18%)]"
                />
              </div>
              <p className="mb-3" style={{ color: "hsl(210 20% 70%)" }}>
                The prototype on this page shows how the same content could be re‑organised.
              </p>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Clearer 4‑tab navigation: Home · Savings · Invest · Profile with a single &quot;home&quot; for money.</li>
                <li>Cash ISA and Simple Saver become distinct cards with colour‑coding, rates, and allowances visible.</li>
                <li>High‑value decisions (top‑ups, new products) are surfaced on the main screens instead of being hidden.</li>
                <li>Invest is framed as a natural next step from Savings, not a separate product silo.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyMoneybox;