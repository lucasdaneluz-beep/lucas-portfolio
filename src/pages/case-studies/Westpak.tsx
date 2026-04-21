import { useEffect } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";

const CaseStudyWestpak = () => {
  useEffect(() => {
    document.title = "Westpak – Cost Optimisation | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  return (
    <MonolithCaseLayout
      title="Westpak — Cost Optimisation"
      lede="Leading a cross-functional cost optimisation project across three core categories — navigating Finance and Operations, running a 6-vendor tender, and delivering a 25% cost reduction."
      focus="Stakeholder Management"
      metric="25% cost reduction delivered"
      tags={["Stakeholder Management", "Cost Optimisation", "Supply Chain"]}
    >
      <h3>Context</h3>
      <p>Three core packaging categories carrying avoidable cost due to vendor relationships that hadn't been competitively reviewed. Finance was mid month-end close, making data access a significant early blocker. Operations were resistant to vendor switching due to supply chain reliability concerns — valid pushback that needed to be addressed structurally, not overridden.</p>

      <h3>Approach</h3>
      <p>Reframed the Finance conversation around long-term margin impact rather than a data request, which unlocked buy-in and access. Ran a structured 6-vendor tender across all three categories, evaluating on price, reliability, and lead times. Then proposed a parallel trial strategy — running new and existing vendors simultaneously, with tracking systems updated to support dual-sourcing — giving Operations a visible safety net before any full transition.</p>

      <div className="ph">PROCESS DIAGRAM · SCREEN · RESEARCH ARTIFACT</div>

      <h3>Outcome</h3>
      <p>Headline outcome: <strong style={{ color: "var(--accent)" }}>25% cost reduction delivered</strong> across three categories, with zero supply disruptions throughout the transition. The parallel trial approach validated new vendors before full commitment and established a reusable fail-safe framework for future vendor and tooling changes.</p>
    </MonolithCaseLayout>
  );
};

export default CaseStudyWestpak;
