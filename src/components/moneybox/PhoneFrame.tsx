import React from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
}

const PhoneFrame = ({ children }: PhoneFrameProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 py-8">
      {/* Portfolio label */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
        <p className="text-slate-400 text-xs tracking-widest uppercase font-medium">PM Portfolio — UX Case Study</p>
        <p className="text-slate-500 text-xs mt-0.5">Moneybox App Redesign</p>
      </div>

      {/* Phone frame */}
      <div
        className="relative w-[375px] rounded-[44px] overflow-hidden shadow-2xl"
        style={{
          background: "hsl(210 35% 6%)",
          boxShadow: "0 0 0 2px hsl(210 20% 22%), 0 40px 80px hsl(210 35% 4% / 0.8), 0 0 60px hsl(174 80% 50% / 0.08)",
          height: "812px",
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-50" />

        {/* Status bar */}
        <div className="flex justify-between items-center px-8 pt-3 pb-0 text-xs text-white/70 font-medium z-40 relative">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5 items-end h-3">
              {[3, 4, 5, 4].map((h, i) => (
                <div key={i} className={`w-0.5 rounded-sm ${i < 3 ? "bg-white" : "bg-white/40"}`} style={{ height: `${h * 2.5}px` }} />
              ))}
            </div>
            <svg className="w-3.5 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
            <div className="flex items-center gap-0.5">
              <div className="w-5 h-2.5 border border-white/50 rounded-sm relative">
                <div className="absolute inset-0.5 bg-white rounded-sm w-3/4" />
              </div>
            </div>
          </div>
        </div>

        {/* App content */}
        <div className="h-full overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
