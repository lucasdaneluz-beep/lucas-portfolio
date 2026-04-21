import { useEffect } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";

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
      <h3>Context</h3>
      <p>WalkUp is a UK restaurant queue management app connecting 400K+ diners with 800+ venue partners. The core problem was trust erosion — wait times were unreliable, the app was crash-prone, and there was no loyalty hook to bring diners back over competitors.</p>

      <h3>Approach</h3>
      <p>Discovery first: user research across both sides of the marketplace, competitive analysis, and app-store sentiment mapping. Pain points were scored against a value matrix and collapsed into a prioritised Q1 roadmap — six sprints across product, design, engineering, ops, and marketing. Success metrics were defined before any build started so progress could be measured against a baseline rather than retrofitted after the fact.</p>

      <div className="ph">PROCESS DIAGRAM · SCREEN · RESEARCH ARTIFACT</div>

      <h3>Outcome</h3>
      <p>Headline outcome: <strong style={{ color: "var(--accent)" }}>3× loyalty engagement uplift</strong>. Full numbers, charts, and reflections on what I'd do differently are in the long-form case study.</p>

      <h3>Full case study</h3>
      <p>The long-form write-up lives at <a className="inline" href="https://lucasdaneluz.vercel.app" target="_blank" rel="noopener noreferrer">lucasdaneluz.vercel.app</a>.</p>
    </MonolithCaseLayout>
  );
};

export default CaseStudyWalkup;
