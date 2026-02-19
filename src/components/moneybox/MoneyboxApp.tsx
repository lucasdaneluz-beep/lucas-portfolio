import React, { useState } from "react";
import BottomNav, { Tab } from "./BottomNav";
import HomeScreen from "./HomeScreen";
import SavingsScreen from "./SavingsScreen";
import InvestScreen from "./InvestScreen";
import ProfileScreen from "./ProfileScreen";

const MoneyboxApp = () => {
  const [tab, setTab] = useState<Tab>("home");

  const screens: Record<Tab, React.ReactNode> = {
    home: <HomeScreen />,
    savings: <SavingsScreen />,
    invest: <InvestScreen />,
    profile: <ProfileScreen />,
  };

  return (
    <div className="flex flex-col" style={{ height: "812px" }}>
      {/* Screen area — takes all space above nav */}
      <div className="flex-1 overflow-hidden" style={{ paddingTop: "28px" /* status bar */ }}>
        {screens[tab]}
      </div>

      {/* Bottom navigation */}
      <BottomNav active={tab} onChange={setTab} />
    </div>
  );
};

export default MoneyboxApp;
