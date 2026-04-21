import { useEffect } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";

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
      <h3>Context</h3>
      <p>After using the Moneybox app, the navigation made it hard to understand how Cash ISA, Simple Saver, and investment products fit together. Key rates and allowances were buried, reducing confidence to top up or move money. Invest felt like a separate experience rather than a natural next step.</p>

      <h3>Approach</h3>
      <p>UX concept and IA restructuring — translating observed pain points into cleaner navigation, clearer labelling across four tabs (Home · Savings · Invest · Profile), and a mobile prototype that surfaces high-value actions and product relationships at a glance. Validated the structure against how savers mentally separate short-term saving from long-term investing.</p>

      <div className="ph">PROCESS DIAGRAM · SCREEN · RESEARCH ARTIFACT</div>

      <h3>Outcome</h3>
      <p>Headline outcome: <strong style={{ color: "var(--accent)" }}>Full UX redesign concept</strong>. A cleaner product mental model, ISA allowances and rates visible where decisions happen, and Invest framed as a natural next step from Savings — without a full visual rebrand.</p>
    </MonolithCaseLayout>
  );
};

export default CaseStudyMoneybox;
