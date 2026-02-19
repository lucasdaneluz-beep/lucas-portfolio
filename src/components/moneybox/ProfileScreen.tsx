import React from "react";
import { ChevronRight, Shield, Bell, HelpCircle, LogOut, User, Settings, FileText } from "lucide-react";

const ProfileScreen = () => {
  const menuGroups = [
    {
      title: "Account",
      items: [
        { icon: <User size={15} />, label: "Personal details", desc: "Name, address, date of birth" },
        { icon: <Shield size={15} />, label: "Security", desc: "PIN, biometrics, 2FA" },
        { icon: <Bell size={15} />, label: "Notifications", desc: "Manage alerts & reminders" },
      ],
    },
    {
      title: "Support",
      items: [
        { icon: <HelpCircle size={15} />, label: "Help & FAQ", desc: "Answers to common questions" },
        { icon: <FileText size={15} />, label: "Statements", desc: "Download annual statements" },
        { icon: <Settings size={15} />, label: "Preferences", desc: "Accessibility, language" },
      ],
    },
  ];

  return (
    <div className="h-full flex flex-col overflow-y-auto scrollbar-hide" style={{ background: "hsl(210 35% 6%)" }}>
      {/* Header */}
      <div className="px-5 pt-2 pb-6" style={{ background: "linear-gradient(180deg, hsl(210 35% 8%) 0%, hsl(210 28% 10%) 100%)" }}>
        <h1 className="text-xl font-bold mb-5" style={{ color: "hsl(210 40% 98%)" }}>Profile</h1>

        {/* Avatar card */}
        <div className="rounded-2xl p-5 flex items-center gap-4" style={{ background: "hsl(210 28% 12%)", border: "1px solid hsl(210 20% 18%)" }}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0" style={{ background: "hsl(174 80% 60%)", color: "hsl(210 35% 6%)" }}>
            AJ
          </div>
          <div>
            <p className="font-bold" style={{ color: "hsl(210 40% 98%)" }}>Alex Johnson</p>
            <p className="text-xs mb-1" style={{ color: "hsl(210 15% 50%)" }}>alex.johnson@email.com</p>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full w-fit" style={{ background: "hsl(174 80% 60% / 0.15)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(145 65% 50%)" }} />
              <span className="text-[10px] font-semibold" style={{ color: "hsl(174 80% 60%)" }}>Account verified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5">
        {menuGroups.map(({ title, items }) => (
          <div key={title} className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "hsl(210 15% 40%)" }}>{title}</p>
            <div className="rounded-2xl overflow-hidden" style={{ background: "hsl(210 28% 11%)", border: "1px solid hsl(210 20% 16%)" }}>
              {items.map(({ icon, label, desc }, i) => (
                <button
                  key={label}
                  className="w-full flex items-center gap-3 px-4 py-3.5 text-left transition-all hover:brightness-110"
                  style={{ borderBottom: i < items.length - 1 ? "1px solid hsl(210 20% 15%)" : "none" }}
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsl(210 25% 17%)", color: "hsl(174 80% 60%)" }}>
                    {icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium" style={{ color: "hsl(210 40% 95%)" }}>{label}</p>
                    <p className="text-[11px]" style={{ color: "hsl(210 15% 50%)" }}>{desc}</p>
                  </div>
                  <ChevronRight size={15} style={{ color: "hsl(210 15% 40%)" }} />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* FSCS protection badge */}
        <div className="rounded-xl p-4 mb-5 flex items-center gap-3" style={{ background: "hsl(210 28% 11%)", border: "1px solid hsl(210 20% 16%)" }}>
          <Shield size={18} style={{ color: "hsl(145 65% 50%)" }} />
          <div>
            <p className="text-xs font-semibold" style={{ color: "hsl(210 40% 95%)" }}>FSCS Protected</p>
            <p className="text-[11px]" style={{ color: "hsl(210 15% 50%)" }}>Your savings are protected up to £85,000</p>
          </div>
        </div>

        {/* Sign out */}
        <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl mb-4" style={{ background: "hsl(0 72% 51% / 0.12)", border: "1px solid hsl(0 72% 51% / 0.2)" }}>
          <LogOut size={15} style={{ color: "hsl(0 72% 65%)" }} />
          <span className="text-sm font-semibold" style={{ color: "hsl(0 72% 65%)" }}>Sign out</span>
        </button>

        <p className="text-center text-[10px] mb-4" style={{ color: "hsl(210 15% 35%)" }}>
          Moneybox · Version 5.0.0 (Redesign concept)
        </p>
        <div className="h-4" />
      </div>
    </div>
  );
};

export default ProfileScreen;
