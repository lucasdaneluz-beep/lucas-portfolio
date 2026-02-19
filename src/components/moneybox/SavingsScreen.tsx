import React, { useState } from "react";
import { ChevronRight, ArrowUpRight, Info, Lock, Zap } from "lucide-react";
import Sparkline from "./Sparkline";

const isaMonthly = [3000, 3100, 3200, 3280, 3320, 3420, 3500];
const saverHistory = [0.2, 0.35, 0.5, 0.6, 0.72, 0.88, 0.92];

const SavingsScreen = () => {
  const [activeAccount, setActiveAccount] = useState<"isa" | "saver">("isa");

  return (
    <div className="h-full flex flex-col overflow-y-auto scrollbar-hide" style={{ background: "hsl(210 35% 6%)" }}>
      {/* Header */}
      <div className="px-5 pt-2 pb-5" style={{ background: "linear-gradient(180deg, hsl(210 35% 8%) 0%, hsl(210 28% 10%) 100%)" }}>
        <h1 className="text-xl font-bold mb-4" style={{ color: "hsl(210 40% 98%)" }}>My Savings</h1>

        {/* Tab switcher */}
        <div className="flex rounded-xl p-1" style={{ background: "hsl(210 25% 13%)" }}>
          <button
            onClick={() => setActiveAccount("isa")}
            className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: activeAccount === "isa" ? "hsl(174 80% 60%)" : "transparent",
              color: activeAccount === "isa" ? "hsl(210 35% 6%)" : "hsl(210 15% 50%)",
            }}
          >
            Cash ISA
          </button>
          <button
            onClick={() => setActiveAccount("saver")}
            className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: activeAccount === "saver" ? "hsl(42 90% 58%)" : "transparent",
              color: activeAccount === "saver" ? "hsl(210 35% 6%)" : "hsl(210 15% 50%)",
            }}
          >
            Simple Saver
          </button>
        </div>
      </div>

      {activeAccount === "isa" ? (
        <div className="px-5 flex-1">
          {/* ISA Hero */}
          <div className="rounded-2xl p-5 mb-4" style={{ background: "hsl(210 30% 12%)", border: "1px solid hsl(174 80% 60% / 0.22)" }}>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(174 80% 60%)" }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "hsl(174 80% 60%)" }}>Cash ISA</span>
              <Lock size={11} style={{ color: "hsl(174 80% 60%)" }} />
              <span className="text-[10px]" style={{ color: "hsl(174 80% 60%)" }}>Tax-free</span>
            </div>
            <p className="text-4xl font-bold mt-2 mb-0.5" style={{ color: "hsl(210 40% 98%)" }}>£25,302.20</p>
            <div className="flex items-center gap-1 mb-4">
              <ArrowUpRight size={13} style={{ color: "hsl(145 65% 50%)" }} />
              <span className="text-xs font-semibold" style={{ color: "hsl(145 65% 50%)" }}>+£302.20 interest earned</span>
            </div>
            <Sparkline color="hsl(174 80% 60%)" points={isaMonthly} />

            {/* ISA allowance bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1.5">
                <span style={{ color: "hsl(210 15% 50%)" }}>ISA allowance used</span>
                <span style={{ color: "hsl(210 40% 98%)" }}>£3,500 of £20,000</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "hsl(210 20% 18%)" }}>
                <div className="h-full rounded-full" style={{ width: "17.5%", background: "hsl(174 80% 60%)" }} />
              </div>
              <p className="text-[11px] mt-1" style={{ color: "hsl(210 15% 50%)" }}>£16,500 remaining · 2 months left this tax year</p>
            </div>
          </div>

          {/* Rate info */}
          <div className="rounded-xl p-4 mb-4" style={{ background: "hsl(210 25% 13%)" }}>
            <div className="flex items-center gap-1.5 mb-3">
              <Info size={13} style={{ color: "hsl(174 80% 60%)" }} />
              <span className="text-xs font-semibold" style={{ color: "hsl(174 80% 60%)" }}>Account details</span>
            </div>
            {[
              { label: "Interest rate", value: "4.60% AER (Gross)" },
              { label: "Type", value: "Easy Access Cash ISA" },
              { label: "FSCS protected", value: "Up to £85,000" },
              { label: "Min deposit", value: "£1" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid hsl(210 20% 17%)" }}>
                <span className="text-xs" style={{ color: "hsl(210 15% 50%)" }}>{label}</span>
                <span className="text-xs font-semibold" style={{ color: "hsl(210 40% 95%)" }}>{value}</span>
              </div>
            ))}
          </div>

          {/* Deposit buttons */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {["£500", "£1,500", "£3,000"].map((amt) => (
              <button key={amt} className="py-3 rounded-xl text-sm font-bold" style={{ background: "hsl(210 25% 15%)", color: "hsl(210 40% 98%)" }}>
                {amt}
              </button>
            ))}
          </div>
          <button className="w-full py-4 rounded-2xl text-base font-bold mb-3" style={{ background: "hsl(174 80% 60%)", color: "hsl(210 35% 6%)", boxShadow: "0 4px 20px hsl(174 80% 50% / 0.35)" }}>
            Add money to ISA
          </button>

          {/* Transaction history */}
          <div className="mb-4">
            <p className="text-sm font-bold mb-3" style={{ color: "hsl(210 40% 98%)" }}>Recent activity</p>
            {[
              { type: "Deposit", date: "15 Feb", amount: "+£500.00", plus: true },
              { type: "Interest earned", date: "31 Jan", amount: "+£9.68", plus: true },
              { type: "Deposit", date: "20 Jan", amount: "+£1,000.00", plus: true },
            ].map(({ type, date, amount, plus }) => (
              <div key={`${type}-${date}`} className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid hsl(210 20% 14%)" }}>
                <div>
                  <p className="text-sm font-medium" style={{ color: "hsl(210 40% 95%)" }}>{type}</p>
                  <p className="text-[11px]" style={{ color: "hsl(210 15% 50%)" }}>{date}</p>
                </div>
                <span className="text-sm font-bold" style={{ color: plus ? "hsl(145 65% 50%)" : "hsl(0 72% 65%)" }}>{amount}</span>
              </div>
            ))}
          </div>
          <div className="h-6" />
        </div>
      ) : (
        <div className="px-5 flex-1">
          {/* Simple Saver Hero */}
          <div className="rounded-2xl p-5 mb-4" style={{ background: "hsl(210 25% 12%)", border: "1px solid hsl(42 90% 58% / 0.22)" }}>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(42 90% 58%)" }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "hsl(42 90% 58%)" }}>Simple Saver</span>
              <Zap size={11} style={{ color: "hsl(42 90% 58%)" }} />
              <span className="text-[10px]" style={{ color: "hsl(42 90% 58%)" }}>Instant access</span>
            </div>
            <p className="text-4xl font-bold mt-2 mb-0.5" style={{ color: "hsl(210 40% 98%)" }}>£0.92</p>
            <div className="flex items-center gap-1 mb-4">
              <ArrowUpRight size={13} style={{ color: "hsl(145 65% 50%)" }} />
              <span className="text-xs font-semibold" style={{ color: "hsl(145 65% 50%)" }}>+£0.02 interest earned</span>
            </div>
            <Sparkline color="hsl(42 90% 58%)" points={saverHistory} />
          </div>

          {/* Key difference callout */}
          <div className="rounded-xl p-4 mb-4 flex items-start gap-3" style={{ background: "hsl(42 90% 58% / 0.1)", border: "1px solid hsl(42 90% 58% / 0.2)" }}>
            <Zap size={16} style={{ color: "hsl(42 90% 58%)" }} className="mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold mb-0.5" style={{ color: "hsl(42 90% 58%)" }}>Instant access, anytime</p>
              <p className="text-[11px]" style={{ color: "hsl(210 15% 55%)" }}>Unlike your ISA, you can withdraw from your Simple Saver at any time with no penalties.</p>
            </div>
          </div>

          {/* Rate info */}
          <div className="rounded-xl p-4 mb-4" style={{ background: "hsl(210 25% 13%)" }}>
            <div className="flex items-center gap-1.5 mb-3">
              <Info size={13} style={{ color: "hsl(42 90% 58%)" }} />
              <span className="text-xs font-semibold" style={{ color: "hsl(42 90% 58%)" }}>Account details</span>
            </div>
            {[
              { label: "Interest rate", value: "3.06% AER (Variable)" },
              { label: "Type", value: "Easy Access Savings" },
              { label: "FSCS protected", value: "Up to £85,000" },
              { label: "Withdrawal time", value: "Same day" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid hsl(210 20% 17%)" }}>
                <span className="text-xs" style={{ color: "hsl(210 15% 50%)" }}>{label}</span>
                <span className="text-xs font-semibold" style={{ color: "hsl(210 40% 95%)" }}>{value}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button className="py-4 rounded-2xl text-sm font-bold" style={{ background: "hsl(42 90% 58%)", color: "hsl(210 35% 6%)" }}>
              Add money
            </button>
            <button className="py-4 rounded-2xl text-sm font-bold" style={{ background: "hsl(210 25% 15%)", color: "hsl(210 40% 95%)" }}>
              Withdraw
            </button>
          </div>

          {/* Recent */}
          <div className="mb-4">
            <p className="text-sm font-bold mb-3" style={{ color: "hsl(210 40% 98%)" }}>Recent activity</p>
            {[
              { type: "Roundup deposit", date: "18 Feb", amount: "+£0.12", plus: true },
              { type: "Interest earned", date: "31 Jan", amount: "+£0.02", plus: true },
              { type: "Deposit", date: "14 Jan", amount: "+£0.78", plus: true },
            ].map(({ type, date, amount, plus }) => (
              <div key={`${type}-${date}`} className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid hsl(210 20% 14%)" }}>
                <div>
                  <p className="text-sm font-medium" style={{ color: "hsl(210 40% 95%)" }}>{type}</p>
                  <p className="text-[11px]" style={{ color: "hsl(210 15% 50%)" }}>{date}</p>
                </div>
                <span className="text-sm font-bold" style={{ color: "hsl(145 65% 50%)" }}>{amount}</span>
              </div>
            ))}
          </div>
          <div className="h-6" />
        </div>
      )}
    </div>
  );
};

export default SavingsScreen;
