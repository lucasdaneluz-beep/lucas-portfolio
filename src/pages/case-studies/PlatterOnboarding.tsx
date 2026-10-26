import { useEffect } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";

const PlatterOnboarding = () => {
  useEffect(() => {
    document.title = "Platter — Onboarding Automation | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  return (
    <MonolithCaseLayout
      title="Platter — Onboarding Automation"
      lede="Replacing spreadsheet-heavy supplier data migration with a guided workflow for mapping, reviewing, and validating onboarding data."
      focus="B2B SaaS · Data Migration · Workflow Automation"
      metric="Internal data mapping reduced from 1–2 weeks to minutes"
      tags={["Product Design", "Operations", "Client Onboarding"]}
    >
      <h3>The challenge</h3>
      <p>Bringing a new supplier onto a food supply-chain platform meant working through customer, supplier, product, and pricing data scattered across spreadsheets. Internal teams had to reconcile different file formats and field names by hand, making data mapping a slow, repetitive part of onboarding.</p>

      <h3>The workflow</h3>
      <p>I designed and shipped a schema-based onboarding tool that turns that work into a clear sequence: upload source files, map fields to Platter’s data model, review and fix gaps, invite the client to validate missing information, then export the completed data.</p>

      <div className="cs-cards three" style={{ margin: "36px 0" }}>
        {[
          { step: "01", title: "Bring data together", copy: "Import CSV and Excel files from existing systems and spreadsheets." },
          { step: "02", title: "Map and review", copy: "Start from suggested field matches, then resolve missing or inconsistent values." },
          { step: "03", title: "Validate and export", copy: "Share outstanding fields with the client and export reviewed onboarding data." },
        ].map((item) => (
          <div className="cs-card" key={item.step}>
            <div className="cs-card-title accent">{item.step} · {item.title}</div>
            <p style={{ marginTop: 12 }}>{item.copy}</p>
          </div>
        ))}
      </div>

      <figure style={{ margin: "40px 0" }}>
        <img
          src="/platter/onboarding-mapping.svg"
          alt="Platter onboarding workspace showing suggested field mappings and their review status"
          style={{ width: "100%", display: "block", border: "1px solid var(--rule)", background: "var(--bg-2)" }}
        />
        <figcaption style={{ marginTop: 10, color: "var(--ink-mute)", fontSize: 12 }}>
          Mapping review · suggested matches remain editable before export.
        </figcaption>
      </figure>

      <h3>Outcome</h3>
      <p>Internal data mapping time fell from <strong style={{ color: "var(--accent)" }}>1–2 weeks to minutes</strong>. A client-facing validation portal is in rollout, with a target of reducing the full onboarding cycle from 3–6 months to under 3 months.</p>

    </MonolithCaseLayout>
  );
};

export default PlatterOnboarding;
