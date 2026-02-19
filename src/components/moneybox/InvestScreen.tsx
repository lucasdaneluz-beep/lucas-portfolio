import React, { useState } from "react";
import { ArrowUpRight, Info, Shield, Star, TrendingUp } from "lucide-react";

const funds = [
  { name: "Global All Cap Index", provider: "Vanguard", risk: "Medium", return: "+12.4%", color: "hsl(220 70% 55%)" },
  { name: "S&P 500 Index", provider: "Vanguard", risk: "Medium-High", return: "+18.2%", color: "hsl(210 80% 55%)" },
  { name: "FTSE All-World", provider: "HSBC", risk: "Medium", return: "+14.1%", color: "hsl(0 70% 50%)" },
  { name: "UK Gilts Bond", provider: "BlackRock", risk: "Low", return: "+3.8%", color: "hsl(145 60% 40%)" },
];

const InvestScreen = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="h-full flex flex-col overflow-y-auto scrollbar-hide" style={{ background: "hsl(210 35% 6%)" }}>
      {/* Header */}
      <div className="px-5 pt-2 pb-5" style={{ background: "linear-gradient(180deg, hsl(210 35% 8%) 0%, hsl(210 28% 10%) 100%)" }}>
        <h1 className="text-xl font-bold mb-1" style={{ color: "hsl(210 40% 98%)" }}>Invest</h1>
        <p className="text-xs" style={{ color: "hsl(210 15% 50%)" }}>Grow your money with expert-curated funds</p>
      </div>

      <div className="px-5">
        {/* Open ISA CTA */}
        <div className="rounded-2xl p-5 mb-4 mt-2" style={{ background: "linear-gradient(135deg, hsl(220 50% 14%) 0%, hsl(230 40% 18%) 100%)", border: "1px solid hsl(220 50% 25% / 0.4)" }}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={15} style={{ color: "hsl(174 80% 60%)" }} />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "hsl(174 80% 60%)" }}>Stocks & Shares ISA</span>
              </div>
              <p className="text-base font-bold mb-1" style={{ color: "hsl(210 40% 98%)" }}>Build tax-free wealth</p>
              <p className="text-[11px] mb-4" style={{ color: "hsl(210 15% 60%)" }}>Choose expert-managed funds. Start from £1/month, cancel anytime.</p>

              {/* Key benefits */}
              {[
                { icon: <Shield size={11} />, text: "FSCS protected" },
                { icon: <Star size={11} />, text: "No dealing fees" },
                { icon: <ArrowUpRight size={11} />, text: "Withdraw anytime" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 mb-1">
                  <span style={{ color: "hsl(174 80% 60%)" }}>{icon}</span>
                  <span className="text-[11px]" style={{ color: "hsl(210 30% 70%)" }}>{text}</span>
                </div>
              ))}
            </div>
            <div className="ml-3 flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: "hsl(220 50% 20%)" }}>
                📊
              </div>
            </div>
          </div>
          <button className="w-full py-3.5 rounded-xl text-sm font-bold mt-4" style={{ background: "hsl(174 80% 60%)", color: "hsl(210 35% 6%)", boxShadow: "0 4px 20px hsl(174 80% 50% / 0.3)" }}>
            Open Stocks & Shares ISA
          </button>
        </div>

        {/* Why invest section */}
        <div className="rounded-xl p-4 mb-4 flex gap-2.5 items-start" style={{ background: "hsl(174 80% 60% / 0.08)", border: "1px solid hsl(174 80% 60% / 0.15)" }}>
          <Info size={14} style={{ color: "hsl(174 80% 60%)" }} className="mt-0.5 flex-shrink-0" />
          <p className="text-[11px]" style={{ color: "hsl(210 20% 65%)" }}>
            Historically, investing in global markets has outperformed savings rates over 10+ years. Past performance doesn't guarantee future results.
          </p>
        </div>

        {/* Popular funds */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm font-bold" style={{ color: "hsl(210 40% 98%)" }}>Popular funds</p>
            <button className="text-xs font-medium" style={{ color: "hsl(174 80% 60%)" }}>See all</button>
          </div>

          {funds.map((fund, i) => (
            <button
              key={fund.name}
              onClick={() => setSelected(selected === i ? null : i)}
              className="w-full text-left rounded-xl p-4 mb-2.5 transition-all"
              style={{
                background: selected === i ? "hsl(210 28% 14%)" : "hsl(210 25% 12%)",
                border: `1px solid ${selected === i ? "hsl(174 80% 60% / 0.3)" : "hsl(210 20% 18%)"}`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: fund.color + "22" }}>
                    <div className="w-3 h-3 rounded-full" style={{ background: fund.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "hsl(210 40% 95%)" }}>{fund.name}</p>
                    <p className="text-[11px]" style={{ color: "hsl(210 15% 50%)" }}>{fund.provider} · {fund.risk} risk</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold" style={{ color: "hsl(145 65% 50%)" }}>{fund.return}</p>
                  <p className="text-[10px]" style={{ color: "hsl(210 15% 50%)" }}>1yr return</p>
                </div>
              </div>

              {selected === i && (
                <div className="mt-3 pt-3" style={{ borderTop: "1px solid hsl(210 20% 18%)" }}>
                  <p className="text-[11px] mb-3" style={{ color: "hsl(210 20% 60%)" }}>
                    A globally diversified fund tracking {fund.name.includes("S&P") ? "500 US companies" : "thousands of companies worldwide"}.
                  </p>
                  <button className="w-full py-2.5 rounded-lg text-xs font-bold" style={{ background: "hsl(174 80% 60%)", color: "hsl(210 35% 6%)" }}>
                    Invest in this fund
                  </button>
                </div>
              )}
            </button>
          ))}
        </div>
        <div className="h-6" />
      </div>
    </div>
  );
};

export default InvestScreen;
