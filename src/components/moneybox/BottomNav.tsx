import React from "react";
import { Home, PiggyBank, TrendingUp, User } from "lucide-react";

type Tab = "home" | "savings" | "invest" | "profile";

interface BottomNavProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const navItems: { id: Tab; icon: React.ReactNode; label: string }[] = [
  { id: "home", icon: <Home size={22} />, label: "Home" },
  { id: "savings", icon: <PiggyBank size={22} />, label: "Savings" },
  { id: "invest", icon: <TrendingUp size={22} />, label: "Invest" },
  { id: "profile", icon: <User size={22} />, label: "Profile" },
];

const BottomNav = ({ active, onChange }: BottomNavProps) => {
  return (
    <nav
      className="flex items-center justify-around px-2 pt-3 pb-6 shadow-nav border-t"
      style={{
        background: "hsl(210 28% 9%)",
        borderColor: "hsl(210 20% 16%)",
      }}
    >
      {navItems.map(({ id, icon, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className="flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all duration-200"
            style={{
              color: isActive ? "hsl(174 80% 60%)" : "hsl(210 15% 45%)",
            }}
          >
            <span
              className="transition-transform duration-200"
              style={{ transform: isActive ? "scale(1.1)" : "scale(1)" }}
            >
              {icon}
            </span>
            <span
              className="text-[10px] font-semibold tracking-wide transition-all"
              style={{ opacity: isActive ? 1 : 0.6 }}
            >
              {label}
            </span>
            {isActive && (
              <span
                className="w-1 h-1 rounded-full mt-0.5"
                style={{ background: "hsl(174 80% 60%)" }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
export type { Tab };
