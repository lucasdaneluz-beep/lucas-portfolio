import { useEffect, Fragment } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";

const CaseStudyHipenMedia = () => {
  useEffect(() => {
    document.title = "Hipen Media – User Onboarding | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  return (
    <MonolithCaseLayout
      title="Hipen Media — User Onboarding"
      lede="Bringing structure to a complex, multi-segment onboarding flow through qualitative research, dataset filtering, and a lean MVP — reducing onboarding time by 40%."
      focus="Discovery · Onboarding"
      metric="40% faster onboarding completion"
      tags={["Discovery", "Onboarding", "MVP", "Research"]}
    >
      <h3>Context</h3>
      <p>Hipen Media operates a user onboarding platform serving diverse media clients — digital publishers, print magazines, and newspapers — each with distinct workflows and go-to-market channels. The core problem: one-size-fits-all onboarding backed by a massive, unfiltered dataset, creating friction and slowing time-to-value for every new user regardless of their segment.</p>

      <h3>Approach</h3>
      <p>Discovery first. Qualitative research across user segments to surface common friction points, followed by end-to-end workflow mapping to pinpoint where the dataset was creating bottlenecks. Partnered with engineering to apply logical filters — removing the core blocker without a full data architecture overhaul. MVP scope was defined before any build started: a lean form collecting only segment-relevant information, paired with a simple dashboard surfacing actionable insights.</p>

      <div className="cs-cards three" style={{margin:"40px 0"}}>

        {/* PROCESS DIAGRAM — Segmentation flow */}
        <div className="cs-card">
          <div className="cs-card-title">Process Diagram</div>
          <div style={{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"}}>
            <div style={{background:"var(--bg-2)",border:"1px solid var(--rule)",padding:"8px 12px",textAlign:"center"}}>
              <span style={{fontFamily:"var(--mono)",fontSize:"9px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.1em"}}>All new users</span>
            </div>
            <div style={{textAlign:"center",color:"var(--ink-mute)",fontSize:"12px"}}>↓</div>
            <div style={{background:"color-mix(in oklab, var(--accent) 8%, var(--bg))",border:"1px solid color-mix(in oklab, var(--accent) 25%, transparent)",padding:"8px 12px",textAlign:"center"}}>
              <span style={{fontFamily:"var(--mono)",fontSize:"9px",color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.1em"}}>Segment filter (MVP)</span>
            </div>
            <div style={{textAlign:"center",color:"var(--ink-mute)",fontSize:"12px"}}>↓</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"}}>
              {["Digital publisher","Print magazine","Newspaper","Other media"].map(s => (
                <div key={s} style={{background:"var(--bg)",border:"1px solid var(--rule)",padding:"7px 8px",textAlign:"center"}}>
                  <span style={{fontSize:"10px",color:"var(--ink-dim)"}}>{s}</span>
                </div>
              ))}
            </div>
            <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:"4px",textAlign:"center"}}>Tailored flow per segment</div>
          </div>
        </div>

        {/* SCREEN — Before/After form comparison */}
        <div className="cs-card">
          <div className="cs-card-title">Screen</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"var(--rule)",marginTop:"8px"}}>
            <div style={{background:"var(--bg-2)",padding:"12px",display:"flex",flexDirection:"column",gap:"4px"}}>
              <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"6px"}}>Before · 12 fields</div>
              {Array.from({length:12}).map((_,i) => (
                <div key={i} style={{height:"13px",background:"var(--rule)",borderRadius:"2px",opacity:0.35+i*0.04}} />
              ))}
            </div>
            <div style={{background:"var(--bg)",padding:"12px",display:"flex",flexDirection:"column",gap:"4px"}}>
              <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"6px"}}>After · 4 fields</div>
              {["Company name","Segment","Primary goal","Team size"].map(f => (
                <div key={f} style={{display:"flex",flexDirection:"column",gap:"2px",marginBottom:"6px"}}>
                  <span style={{fontSize:"9px",color:"var(--ink-mute)"}}>{f}</span>
                  <div style={{height:"13px",background:"color-mix(in oklab, var(--accent) 18%, var(--rule))",borderRadius:"2px"}} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RESEARCH ARTIFACT — Journey map with friction */}
        <div className="cs-card">
          <div className="cs-card-title">Research Artifact</div>
          <div style={{marginTop:"8px"}}>
            <div style={{display:"flex",alignItems:"center",gap:"3px",marginBottom:"14px"}}>
              {[
                {stage:"Sign up",friction:false},
                {stage:"Configure",friction:true},
                {stage:"First action",friction:true},
                {stage:"Value",friction:false},
              ].map((s,i,arr) => (
                <Fragment key={s.stage}>
                  <div style={{flex:1,textAlign:"center"}}>
                    <div style={{background:s.friction?"color-mix(in oklab, #ff4444 12%, var(--bg))":"var(--bg)",border:`1px solid ${s.friction?"#ff4444":"var(--rule)"}`,borderRadius:"4px",padding:"6px 3px",marginBottom:"5px"}}>
                      <span style={{fontFamily:"var(--mono)",fontSize:"7px",color:s.friction?"#ff6666":"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.06em"}}>{s.stage}</span>
                    </div>
                    {s.friction && <span style={{fontSize:"11px"}}>⚠</span>}
                  </div>
                  {i < arr.length-1 && <span style={{color:"var(--ink-mute)",fontSize:"9px",flexShrink:0,marginBottom:"18px"}}>→</span>}
                </Fragment>
              ))}
            </div>
            <div style={{borderLeft:"2px solid #ff4444",paddingLeft:"10px",display:"flex",flexDirection:"column",gap:"5px"}}>
              <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"#ff5555",textTransform:"uppercase",letterSpacing:"0.1em"}}>Friction points</div>
              <div style={{fontSize:"11px",color:"var(--ink-dim)",lineHeight:"1.5"}}>12-field form regardless of segment</div>
              <div style={{fontSize:"11px",color:"var(--ink-dim)",lineHeight:"1.5"}}>Unfiltered dataset delays first value step</div>
            </div>
          </div>
        </div>

      </div>

      <h3>Outcome</h3>
      <p>Headline outcome: <strong style={{ color: "var(--accent)" }}>40% faster onboarding completion</strong>. A leaner, more relevant flow serving 4+ user segments from a single streamlined experience — and a repeatable research-to-MVP pattern established for future product work.</p>
    </MonolithCaseLayout>
  );
};

export default CaseStudyHipenMedia;
