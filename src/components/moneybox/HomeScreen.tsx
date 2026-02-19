import React from "react";
import { Bell, ChevronRight, ArrowUpRight, Plus } from "lucide-react";
import Sparkline from "./Sparkline";

const isaPoints = [3200, 3280, 3350, 3290, 3380, 3420, 3500];
const saverPoints = [0.4, 0.55, 0.6, 0.7, 0.75, 0.88, 0.92];

const HomeScreen = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto scrollbar-hide" style={{ background: "hsl(210 35% 6%)" }}>
      {/* Header */}
      <div className="px-5 pt-2 pb-4" style={{ background: "linear-gradient(180deg, hsl(210 35% 8%) 0%, hsl(210 28% 10%) 100%)" }}>
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="text-xs font-medium" style={{ color: "hsl(210 15% 50%)" }}>Good morning</p>
            <p className="text-lg font-bold" style={{ color: "hsl(210 40% 98%)" }}>Alex 👋</p>
          </div>
          <button className="relative w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "hsl(210 25% 14%)" }}>
            <Bell size={17} style={{ color: "hsl(210 40% 80%)" }} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ background: "hsl(174 80% 60%)" }} />
          </button>
        </div>

        {/* Total balance hero */}
        <div className="rounded-2xl p-5 mb-1" style={{ background: "hsl(210 28% 11%)", border: "1px solid hsl(210 20% 17%)" }}>
          <p className="text-xs font-medium mb-1" style={{ color: "hsl(210 15% 50%)" }}>Total balance</p>
          <p className="text-4xl font-bold tracking-tight mb-1" style={{ color: "hsl(210 40% 98%)" }}>£25,302.92</p>
          <div className="flex items-center gap-1.5">
            <ArrowUpRight size={13} style={{ color: "hsl(145 65% 50%)" }} />
            <span className="text-xs font-semibold" style={{ color: "hsl(145 65% 50%)" }}>+£1,802.92 this tax year</span>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[
              { label: "Add money", icon: <Plus size={15} /> },
              { label: "Withdraw", icon: <ArrowUpRight size={15} className="rotate-180" /> },
              { label: "Move funds", icon: <ArrowUpRight size={15} className="rotate-45" /> },
            ].map(({ label, icon }) => (
              <button
                key={label}
                className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl transition-all"
                style={{ background: "hsl(210 25% 15%)" }}
              >
                <span style={{ color: "hsl(174 80% 60%)" }}>{icon}</span>
                <span className="text-[10px] font-medium" style={{ color: "hsl(210 40% 85%)" }}>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* My Accounts section */}
      <div className="px-5 pb-4">
        <div className="flex justify-between items-center mt-5 mb-3">
          <h2 className="font-bold text-sm" style={{ color: "hsl(210 40% 98%)" }}>My Accounts</h2>
          <button className="text-xs font-medium" style={{ color: "hsl(174 80% 60%)" }}>Manage</button>
        </div>

        {/* Cash ISA card */}
        <div className="rounded-2xl p-4 mb-3 shadow-card" style={{ background: "hsl(210 30% 12%)", border: "1px solid hsl(174 80% 60% / 0.18)" }}>
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full" style={{ background: "hsl(174 80% 60%)" }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "hsl(174 80% 60%)" }}>Cash ISA</span>
              </div>
              <p className="text-2xl font-bold" style={{ color: "hsl(210 40% 98%)" }}>£25,302.20</p>
              <p className="text-[11px] mt-0.5" style={{ color: "hsl(210 15% 50%)" }}>£20,000 allowance · 2 months left</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold" style={{ color: "hsl(145 65% 50%)" }}>4.60% AER</p>
              <p className="text-[10px] mt-0.5" style={{ color: "hsl(210 15% 50%)" }}>Gross / Tax-free</p>
            </div>
          </div>
          <Sparkline color="hsl(174 80% 60%)" points={isaPoints} />
          <div className="flex justify-between items-center mt-3">
            <div className="flex-1 mr-3">
              <div className="flex justify-between text-[10px] mb-1" style={{ color: "hsl(210 15% 50%)" }}>
                <span>ISA allowance used</span>
                <span style={{ color: "hsl(174 80% 60%)" }}>17.5%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "hsl(210 20% 18%)" }}>
                <div className="h-full rounded-full" style={{ width: "17.5%", background: "hsl(174 80% 60%)" }} />
              </div>
            </div>
            <button className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: "hsl(174 80% 60% / 0.15)", color: "hsl(174 80% 60%)" }}>
              View <ChevronRight size={13} />
            </button>
          </div>
        </div>

        {/* Simple Saver card */}
        <div className="rounded-2xl p-4 mb-3 shadow-card" style={{ background: "hsl(210 25% 13%)", border: "1px solid hsl(210 20% 20%)" }}>
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full" style={{ background: "hsl(42 90% 58%)" }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "hsl(42 90% 58%)" }}>Simple Saver</span>
              </div>
              <p className="text-2xl font-bold" style={{ color: "hsl(210 40% 98%)" }}>£0.92</p>
              <p className="text-[11px] mt-0.5" style={{ color: "hsl(210 15% 50%)" }}>Instant access · No lock-in</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold" style={{ color: "hsl(42 90% 58%)" }}>3.06% AER</p>
              <p className="text-[10px] mt-0.5" style={{ color: "hsl(210 15% 50%)" }}>Variable rate</p>
            </div>
          </div>
          <Sparkline color="hsl(42 90% 58%)" points={saverPoints} />
          <div className="flex justify-end mt-3">
            <button className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: "hsl(42 90% 58% / 0.15)", color: "hsl(42 90% 58%)" }}>
              View <ChevronRight size={13} />
            </button>
          </div>
        </div>

        {/* Explore card */}
        <div className="rounded-2xl p-4 shadow-card" style={{ background: "hsl(210 28% 12%)", border: "1px solid hsl(210 20% 18%)" }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsl(220 50% 18%)" }}>
              <span className="text-lg">📈</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: "hsl(210 40% 98%)" }}>Stocks & Shares ISA</p>
              <p className="text-[11px]" style={{ color: "hsl(210 15% 50%)" }}>Start investing from £1/month</p>
            </div>
            <button className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: "hsl(174 80% 60%)", color: "hsl(210 35% 6%)" }}>
              Open
            </button>
          </div>
        </div>

        <div className="h-6" />
      </div>
    </div>
  );
};

export default HomeScreen;
