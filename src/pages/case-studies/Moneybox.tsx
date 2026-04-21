import { useEffect } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";
import MoneyboxApp from "@/components/moneybox/MoneyboxApp";

const CaseStudyMoneybox = () => {
  useEffect(() => {
    document.title = "Moneybox Redesigned | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  return (
    <MonolithCaseLayout
      idx="04 / 05 · CASE STUDY"
      title="Moneybox Redesigned"
      lede="Reimagining the savings & investment journey for clarity and confidence — restructuring navigation, surfacing key rates and allowances, and connecting saving to investing."
      focus="UX Strategy · Fintech"
      metric="Full UX redesign concept"
      tags={["UX Strategy", "Fintech", "Navigation"]}
      disclaimer="This is an independent product concept created for portfolio purposes only. Not affiliated with Moneybox."
    >
      {/* Context + phone mockup */}
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: "clamp(32px,5vw,72px)", marginBottom: 56, alignItems: "start" }}>
        <div>
          <div className="case-section-hd" style={{ marginTop: 0, borderTop: "none", paddingTop: 0 }}>Context & Role</div>
          <p style={{ color: "var(--ink-dim)", lineHeight: 1.65, marginBottom: 16 }}>
            After using the Moneybox app, the navigation made it hard to understand how Cash ISA, Simple Saver, and investment products fit together. Key rates and allowances were buried, reducing confidence to top up or move money. Invest felt like a separate experience rather than a natural next step.
          </p>
          <p style={{ color: "var(--ink-dim)", lineHeight: 1.65, marginBottom: 24 }}>
            Product concept and UX structure — translating observed pain points into a cleaner information architecture, clearer labelling, and a mobile prototype that puts high-value actions in reach.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <div className="cs-card-title" style={{ marginBottom: 10 }}>Focus</div>
              <div className="cs-card-body">
                <ul>
                  <li>Navigation & IA</li>
                  <li>Account hierarchy</li>
                  <li>ISA allowance visibility</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="cs-card-title" style={{ marginBottom: 10 }}>Outcomes</div>
              <div className="cs-card-body">
                <ul>
                  <li>Clearer product mental model</li>
                  <li>More confident top-ups</li>
                  <li>Less friction moving into Invest</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              width: "clamp(220px,25vw,300px)",
              borderRadius: 40,
              overflow: "hidden",
              background: "var(--bg-3)",
              border: "1px solid var(--rule-2)",
              boxShadow: "0 40px 80px rgba(0,0,0,.6), 0 0 40px rgba(255,74,28,.08)",
              height: 540,
            }}
          >
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 80, height: 20, background: "#000", borderBottomLeftRadius: 12, borderBottomRightRadius: 12, zIndex: 50 }} />
            <div style={{ height: "100%", overflow: "hidden" }}>
              <MoneyboxApp />
            </div>
          </div>
        </div>
      </div>

      <div className="case-section-hd">Problem · Solution · Impact</div>
      <div className="cs-cards three">
        <div className="cs-card">
          <div className="cs-card-title">Problem</div>
          <div className="cs-card-body">
            <ul>
              <li>Navigation made it hard to understand how Cash ISA, Simple Saver, and investment products fit together.</li>
              <li>Key rates and allowances were buried, reducing confidence to top up or move money.</li>
              <li>Invest felt like a separate experience rather than a natural next step.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Solution</div>
          <div className="cs-card-body">
            <ul>
              <li>Restructured navigation into Home · Savings · Invest · Profile with clearer entry points.</li>
              <li>Separated Cash ISA and Simple Saver into distinct, colour-coded cards with rates and allowances upfront.</li>
              <li>Created a more confident Invest tab that surfaces curated funds and key benefits early.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title">Impact</div>
          <div className="cs-card-body">
            <ul>
              <li>Aligns with how savers mentally separate "short-term savings" vs "long-term investing".</li>
              <li>Makes ISA allowances and rates visible where decisions happen, not hidden in sub-menus.</li>
              <li>Reduces friction in moving from saving into investing, without needing a full visual rebrand.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="case-section-hd">Before vs After</div>
      <div className="cs-cards two">
        <div className="cs-card">
          <div className="cs-card-title">Current Moneybox App</div>
          <div className="cs-card-body">
            <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}>
              <img
                src="/moneybox-current.png"
                alt="Current Moneybox Cash ISA home screen"
                style={{ maxWidth: 280, width: "100%", borderRadius: 8, border: "1px solid var(--rule)" }}
              />
            </div>
            <ul>
              <li>Single Cash ISA hero card with limited context across products.</li>
              <li>Accounts section mixing ISA and Saver products in one list.</li>
              <li>Simple Saver appearing as a small, low-salience row beneath ISA accounts.</li>
              <li>Navigation that makes it harder to see how products relate at a glance.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Redesigned Experience</div>
          <div className="cs-card-body">
            <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}>
              <img
                src="/moneybox-redesign-comparison.png"
                alt="Redesigned Moneybox concept"
                style={{ maxWidth: 280, width: "100%", borderRadius: 8, border: "1px solid var(--rule)" }}
              />
            </div>
            <ul>
              <li>Clearer 4-tab navigation: Home · Savings · Invest · Profile.</li>
              <li>Cash ISA and Simple Saver as distinct cards with rates and allowances visible.</li>
              <li>High-value decisions surfaced on main screens instead of being hidden.</li>
              <li>Invest framed as a natural next step from Savings, not a separate silo.</li>
            </ul>
          </div>
        </div>
      </div>
    </MonolithCaseLayout>
  );
};

export default CaseStudyMoneybox;
