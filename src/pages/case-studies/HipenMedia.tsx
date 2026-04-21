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
      <h3>Context</h3>
      <p>Hipen Media operates a user onboarding platform serving diverse media clients — digital publishers, print magazines, and newspapers — each with distinct workflows and go-to-market channels. The core problem: one-size-fits-all onboarding backed by a massive, unfiltered dataset, creating friction and slowing time-to-value for every new user regardless of their segment.</p>

      <h3>Approach</h3>
      <p>Discovery first. Qualitative research across user segments to surface common friction points, followed by end-to-end workflow mapping to pinpoint where the dataset was creating bottlenecks. Partnered with engineering to apply logical filters — removing the core blocker without a full data architecture overhaul. MVP scope was defined before any build started: a lean form collecting only segment-relevant information, paired with a simple dashboard surfacing actionable insights.</p>

      <div className="ph">PROCESS DIAGRAM · SCREEN · RESEARCH ARTIFACT</div>

      <h3>Outcome</h3>
      <p>Headline outcome: <strong style={{ color: "var(--accent)" }}>40% faster onboarding completion</strong>. A leaner, more relevant flow serving 4+ user segments from a single streamlined experience — and a repeatable research-to-MVP pattern established for future product work.</p>
    </MonolithCaseLayout>
  );
};

export default CaseStudyHipenMedia;
