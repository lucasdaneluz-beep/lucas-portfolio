import { useEffect } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";

const CaseStudyWestpak = () => {
  useEffect(() => {
    document.title = "Westpak – Cost Optimisation | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  return (
    <MonolithCaseLayout
      idx="03 / 05 · CASE STUDY"
      title="Westpak — Cost Optimisation"
      lede="Leading a cross-functional cost optimisation project across three core categories — navigating Finance and Operations, running a 6-vendor tender, and delivering a 25% cost reduction."
      focus="Stakeholder Management"
      metric="25% cost reduction delivered"
      tags={["Stakeholder Management", "Cost Optimisation", "Supply Chain"]}
      disclaimer="This is an independent case study created for portfolio purposes only. Not affiliated with Westpak."
    >
      <div className="cs-metric-row">
        {[
          { value: "25%", label: "Cost optimisation delivered" },
          { value: "3", label: "Core categories optimised" },
          { value: "6", label: "Vendors in tender exercise" },
          { value: "2", label: "Stakeholder groups aligned" },
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
              <li>Three core categories carrying avoidable cost due to untested vendor assumptions.</li>
              <li>Finance was mid month-end close, making data access a significant early blocker.</li>
              <li>Operations resistant to vendor switching due to supply chain reliability concerns.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Solution</div>
          <div className="cs-card-body">
            <ul>
              <li>Reframed the Finance conversation around long-term margin impact to secure buy-in and data access.</li>
              <li>Ran a structured 6-vendor tender to identify best-fit alternatives across all three categories.</li>
              <li>Proposed a parallel trial strategy with dual-source tracking to de-risk the transition for Operations.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title">Impact</div>
          <div className="cs-card-body">
            <ul>
              <li>Delivered 25% cost optimisation across three categories without disrupting supply chain.</li>
              <li>Parallel trial approach validated new vendors before full commitment, removing operational risk.</li>
              <li>Established a reusable fail-safe framework for future internal tool and vendor changes.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="case-section-hd">Context</div>
      <div className="cs-grid-two">
        <div>
          <p>Westpak is a packaging and supply chain business operating across multiple product categories. The cost optimisation project focused on three core categories where vendor relationships had not been competitively reviewed, leaving significant margin improvement on the table.</p>
        </div>
        <div>
          <p>Led end-to-end cost optimisation — owning stakeholder alignment, running the vendor tender process, designing the parallel trial strategy, and ensuring tracking systems could support dual-sourcing throughout the transition.</p>
        </div>
      </div>

      <div className="case-section-hd">Stakeholder Strategy</div>
      <div className="cs-cards two">
        <div className="cs-card">
          <div className="cs-card-title accent">Finance — Securing the Data</div>
          <div className="cs-card-body">
            <p>Initial approach of simply requesting data hit a wall during month-end close. Pivoted to framing the conversation around long-term margin impact rather than a data request.</p>
            <ul>
              <li>Reframed the ask as a strategic margin initiative, not an ad-hoc data pull.</li>
              <li>Demonstrated the cost of inaction to create urgency beyond the close cycle.</li>
              <li>Secured buy-in and full data access needed to proceed with the tender.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Operations — Managing Change Risk</div>
          <div className="cs-card-body">
            <p>Operations raised valid concerns about supply chain continuity when new vendors were identified. Rather than overriding those concerns, designed a trial approach that addressed them directly.</p>
            <ul>
              <li>Proposed a parallel trial — running new and existing vendors simultaneously.</li>
              <li>Updated tracking systems to support dual-sourcing without operational complexity.</li>
              <li>Gave Operations a visible safety net before any full vendor transition.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="case-section-hd">Approach & Process</div>
      <div className="cs-cards three">
        <div className="cs-card">
          <div className="cs-card-title accent">Vendor Tender</div>
          <div className="cs-card-body">
            <ul>
              <li>Ran a structured tender across 6 vendors for all three categories.</li>
              <li>Evaluated on price, reliability, lead times, and supply chain resilience.</li>
              <li>Shortlisted candidates before proposing to Operations for trial.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Parallel Trial</div>
          <div className="cs-card-body">
            <ul>
              <li>Ran new and existing vendors in parallel to validate performance without full exposure.</li>
              <li>Ensured tracking systems handled dual-sourcing complexity cleanly.</li>
              <li>Used trial data to build the business case for full transition.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Systems & Tracking</div>
          <div className="cs-card-body">
            <ul>
              <li>Updated internal tracking to support dual-sourcing across the trial period.</li>
              <li>Maintained full visibility for Operations throughout the transition.</li>
              <li>Ensured no reporting gaps during the vendor switch period.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="case-section-hd">KPIs & Outcomes</div>
      <div className="cs-metric-row">
        {[
          { value: "25%", label: "Cost reduction", sub: "Across 3 core categories" },
          { value: "6", label: "Vendors tendered", sub: "Before shortlisting for trial" },
          { value: "0", label: "Supply disruptions", sub: "Throughout the transition" },
          { value: "2", label: "Stakeholder groups", sub: "Finance & Ops aligned" },
        ].map(({ value, label, sub }) => (
          <div key={label} className="cs-metric">
            <div className="cs-metric-val">{value}</div>
            <div className="cs-metric-lbl">{label}</div>
            <div className="cs-metric-sub">{sub}</div>
          </div>
        ))}
      </div>

      <div className="case-section-hd">Key Learning</div>
      <div className="case-callout">
        Internal changes — whether switching a vendor, updating an ERP, or changing a process — require a <strong>fail-safe approach</strong> to keep the business running smoothly. Running systems in parallel before committing to a full switch is not a sign of indecision; it's a structured way to validate change, maintain stakeholder trust, and protect operational continuity while still driving meaningful outcomes.
      </div>
    </MonolithCaseLayout>
  );
};

export default CaseStudyWestpak;
