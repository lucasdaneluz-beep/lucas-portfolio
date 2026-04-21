import { useEffect } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";

const CaseStudyHipenMedia = () => {
  useEffect(() => {
    document.title = "Hipen Media – User Onboarding | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  return (
    <MonolithCaseLayout
      idx="02 / 05 · CASE STUDY"
      title="Hipen Media — User Onboarding"
      lede="Bringing structure to a complex, multi-segment onboarding flow through qualitative research, dataset filtering, and a lean MVP — reducing onboarding time by 40%."
      focus="Discovery · Onboarding"
      metric="40% faster onboarding completion"
      tags={["Discovery", "Onboarding", "MVP", "Research"]}
      disclaimer="This is an independent product concept created for portfolio purposes only."
    >
      <div className="cs-metric-row">
        {[
          { value: "40%", label: "Faster onboarding" },
          { value: "4+", label: "User segments served" },
          { value: "Lean", label: "MVP scope" },
          { value: "0", label: "Over-engineered features" },
        ].map(({ value, label }) => (
          <div key={label} className="cs-metric">
            <div className="cs-metric-val">{value}</div>
            <div className="cs-metric-lbl">{label}</div>
          </div>
        ))}
      </div>

      <div className="case-section-hd">Problem · Solution · Impact</div>
      <div className="cs-cards three">
        <div className="cs-card">
          <div className="cs-card-title">Problem</div>
          <div className="cs-card-body">
            <ul>
              <li>Onboarding was one-size-fits-all despite vastly different user types.</li>
              <li>A massive, unfiltered dataset was creating friction and slowing first experiences.</li>
              <li>No clear MVP scope meant risk of over-engineering low-impact features.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Solution</div>
          <div className="cs-card-body">
            <ul>
              <li>Conducted qualitative research and mapped workflows to surface common pain points.</li>
              <li>Collaborated with engineering to apply logical dataset filters, removing the core bottleneck.</li>
              <li>Defined a lean MVP: a simplified form collecting only essential information.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title">Impact</div>
          <div className="cs-card-body">
            <ul>
              <li>Onboarding time reduced by 40% through a leaner, more relevant flow.</li>
              <li>Avoided over-engineering by anchoring scope to validated pain points.</li>
              <li>Established a repeatable research-to-MVP pattern for future product work.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="case-section-hd">Context</div>
      <div className="cs-grid-two">
        <div>
          <p>Hipen Media operates a user onboarding platform serving a diverse range of media clients — from digital websites and physical magazines to newspapers — each with distinct go-to-market channels and product challenges.</p>
          <p>The onboarding workflow needed to serve radically different user types from a single, unstructured dataset, leaving every new user facing an overwhelming experience that slowed time-to-value.</p>
        </div>
        <div>
          <p>Owned end-to-end product discovery — conducting qualitative research, mapping workflows, collaborating with engineering on dataset logic, and defining the prioritised MVP scope.</p>
          <p>Focus areas: qualitative research · dataset filtering · MVP scoping. Outcomes: 40% faster onboarding, leaner form flow, simpler insights dashboard.</p>
        </div>
      </div>

      <div className="case-section-hd">User Segments</div>
      <div className="cs-cards four">
        {[
          { label: "Digital publishers", desc: "Websites and online-first media brands with high content velocity and digital-native audiences." },
          { label: "Print magazines", desc: "Physical publications with subscription models, longer production cycles, and legacy workflows." },
          { label: "Newspapers", desc: "High-frequency outlets balancing breaking news with archive depth and multi-channel distribution." },
          { label: "Hybrid media", desc: "Brands operating across print and digital with complex, overlapping go-to-market requirements." },
        ].map(({ label, desc }) => (
          <div key={label} className="cs-card">
            <div className="cs-card-title accent">{label}</div>
            <div className="cs-card-body"><p>{desc}</p></div>
          </div>
        ))}
      </div>

      <div className="case-section-hd">Approach & Process</div>
      <div className="cs-cards three">
        <div className="cs-card">
          <div className="cs-card-title accent">Research & Mapping</div>
          <div className="cs-card-body">
            <ul>
              <li>Conducted qualitative interviews across user segments to surface common friction points.</li>
              <li>Mapped existing workflows end-to-end to identify where the dataset was creating bottlenecks.</li>
              <li>Synthesised findings into a clear problem statement shared with engineering and stakeholders.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Dataset Filtering</div>
          <div className="cs-card-body">
            <ul>
              <li>Partnered with engineering to apply logical filters to the underlying dataset.</li>
              <li>Reduced the data surface each user type encountered to only what was relevant.</li>
              <li>Unblocked the core bottleneck without a full data architecture overhaul.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">MVP Definition</div>
          <div className="cs-card-body">
            <ul>
              <li>Defined a prioritised MVP scope anchored to validated pain points, not assumptions.</li>
              <li>Streamlined the onboarding form to ask only segment-relevant questions.</li>
              <li>Paired the form with a simple dashboard surfacing the most actionable insights.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="case-section-hd">KPIs & Outcomes</div>
      <div className="cs-metric-row">
        {[
          { value: "40%", label: "Onboarding time", sub: "Reduction post-MVP launch" },
          { value: "4+", label: "Segments covered", sub: "From a single streamlined flow" },
          { value: "Lean", label: "MVP approach", sub: "No over-engineered features shipped" },
          { value: "1st", label: "Structured discovery", sub: "Research-to-MVP pattern established" },
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

export default CaseStudyHipenMedia;
