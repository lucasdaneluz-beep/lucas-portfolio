import { useEffect } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";

const ImgPlaceholder = ({ label, aspect = "16 / 7" }: { label: string; aspect?: string }) => (
  <div style={{
    aspectRatio: aspect,
    background: "var(--bg-3)",
    border: "1px dashed var(--rule-2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "40px",
    color: "var(--ink-mute)",
    fontFamily: "var(--mono)",
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  }}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
    {label}
  </div>
);

const CaseStudyWalkup = () => {
  useEffect(() => {
    document.title = "WalkUp – Smarter Queues | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  return (
    <MonolithCaseLayout
      idx="01 / 05 · CASE STUDY"
      title="WalkUp — Smarter Queues"
      lede="Queue transparency, loyalty, and growth for a UK restaurant waitlist marketplace used by 400K+ diners and 800+ restaurant partners."
      focus="Marketplace · Waitlist UX"
      metric="3× loyalty engagement uplift"
      tags={["Marketplace", "Waitlist UX", "Loyalty", "Product Strategy"]}
      disclaimer="This is a product concept for portfolio purposes only. Not affiliated with WalkUp or its parent companies."
    >
      <ImgPlaceholder label="Overview — App key screens" aspect="16 / 7" />

      <div className="case-section-hd">Overview</div>
      <div className="cs-grid-two">
        <div>
          <p>WalkUp is a restaurant queue management app in the UK, helping diners join virtual waitlists and avoid standing in line. At the time of this project, the product served over 400,000 users and partnered with 800+ restaurants.</p>
          <p>Mission: get diners a table anywhere, anytime — while increasing restaurant revenue by reducing no-shows and making queues more predictable.</p>
        </div>
        <div>
          <p>Product concept and Q1 roadmap definition — mapping the competitive landscape, user pain points, and restaurant needs into a focused 6-sprint roadmap built around wait-time accuracy, loyalty mechanics, and app performance.</p>
        </div>
      </div>

      <div className="case-section-hd">Problem · Solution · Impact</div>
      <div className="cs-cards three">
        <div className="cs-card">
          <div className="cs-card-title">Problem</div>
          <div className="cs-card-body">
            <ul>
              <li>Unreliable wait times eroded trust and drove users to abandon queues mid-wait.</li>
              <li>No loyalty mechanic meant little reason to return over competitors.</li>
              <li>App crashes and battery drain were directly hurting retention and reviews.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Solution</div>
          <div className="cs-card-body">
            <ul>
              <li>Rebuilt wait-time accuracy with SMS alerts and aligned restaurant cut-off rules.</li>
              <li>Launched a points-based loyalty programme with cash-equivalent rewards.</li>
              <li>Treated app stability as a prerequisite — fixed crashes and battery drain first.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title">Impact</div>
          <div className="cs-card-body">
            <ul>
              <li>Modelled +10% uplift in weekly bookings and returning diners within Q1.</li>
              <li>Richer restaurant profiles reduce friction in new venue onboarding.</li>
              <li>~70% first-year ROI on combined product and marketing investment.</li>
            </ul>
          </div>
        </div>
      </div>

      <ImgPlaceholder label="Process — Journey map · Wireframes · Design artefacts" aspect="16 / 6" />

      <div className="case-section-hd">Key Results</div>
      <div className="cs-metric-row">
        {[
          { value: "+10%", label: "Weekly bookings", sub: "Target uplift across network" },
          { value: "+10%", label: "Retention", sub: "Returning diners every 2 weeks" },
          { value: "800+", label: "Restaurants", sub: "Via richer profiles & free trials" },
          { value: "~70%", label: "First-year ROI", sub: "On product & marketing spend" },
        ].map(({ value, label, sub }) => (
          <div key={label} className="cs-metric">
            <div className="cs-metric-val">{value}</div>
            <div className="cs-metric-lbl">{label}</div>
            <div className="cs-metric-sub">{sub}</div>
          </div>
        ))}
      </div>
    </MonolithCaseLayout>
  );
};

export default CaseStudyWalkup;
