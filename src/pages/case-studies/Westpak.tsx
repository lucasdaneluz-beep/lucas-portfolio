import { useEffect, Fragment } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";

const CaseStudyWestpak = () => {
  useEffect(() => {
    document.title = "Westpak – Cost Optimisation | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  return (
    <MonolithCaseLayout
      title="Westpak — Cost Optimisation"
      lede="A cross functional cost programme across three packaging categories. Finance were mid close and Operations didn't want new suppliers, and I still got to 25%."
      focus="Stakeholder Management"
      metric="25% cost reduction delivered"
      tags={["Stakeholder Management", "Cost Optimisation", "Supply Chain"]}
    >
      <h3>Context</h3>
      <p>Three core packaging categories carrying avoidable cost due to vendor relationships that hadn't been competitively reviewed. Finance was mid month-end close, making data access a significant early blocker. Operations were resistant to vendor switching over supply chain reliability, which was valid pushback and needed to be addressed structurally rather than overridden.</p>

      <h3>Approach</h3>
      <p>I reframed the Finance conversation around long term margin rather than a data request, which got me access. Then I ran a six vendor tender across all three categories, scored on price, reliability and lead times. The parallel trial came last: new and existing vendors running side by side, with tracking updated to support both, so Operations had something to fall back on before any full switch.</p>

      <div className="cs-cards three" style={{margin:"40px 0"}}>

        {/* PROCESS DIAGRAM — Parallel trial framework */}
        <div className="cs-card">
          <div className="cs-card-title">Process Diagram</div>
          <div style={{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"}}>
            <div style={{display:"grid",gridTemplateColumns:"72px 1fr 48px",gap:"4px",alignItems:"center"}}>
              <span style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Track</span>
              <span style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Trial period</span>
              <span style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Gate</span>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"72px 1fr 48px",gap:"4px",alignItems:"center"}}>
              <span style={{fontSize:"10px",color:"var(--ink-dim)"}}>Existing</span>
              <div style={{height:"28px",background:"var(--bg-2)",border:"1px solid var(--rule)",borderRadius:"3px",display:"flex",alignItems:"center",padding:"0 8px"}}>
                <span style={{fontSize:"9px",color:"var(--ink-mute)"}}>continues alongside</span>
              </div>
              <div style={{width:"18px",height:"18px",background:"var(--rule)",borderRadius:"50%",margin:"0 auto"}} />
            </div>
            <div style={{display:"grid",gridTemplateColumns:"72px 1fr 48px",gap:"4px",alignItems:"center"}}>
              <span style={{fontSize:"10px",color:"var(--accent)"}}>New ×6</span>
              <div style={{height:"28px",background:"color-mix(in oklab, var(--accent) 10%, var(--bg))",border:"1px solid color-mix(in oklab, var(--accent) 25%, transparent)",borderRadius:"3px",display:"flex",alignItems:"center",padding:"0 8px"}}>
                <span style={{fontSize:"9px",color:"var(--accent)"}}>price · reliability · lead time</span>
              </div>
              <div style={{width:"18px",height:"18px",background:"var(--accent)",borderRadius:"50%",margin:"0 auto"}} />
            </div>
            <div style={{background:"var(--bg-2)",border:"1px solid var(--rule)",borderRadius:"3px",padding:"8px 10px",textAlign:"center",marginTop:"4px"}}>
              <span style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Validate before full transition</span>
            </div>
            <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.08em",textAlign:"center"}}>Zero supply disruption throughout</div>
          </div>
        </div>

        {/* VENDOR SCORECARD */}
        <div className="cs-card">
          <div className="cs-card-title">Vendor Scorecard</div>
          <div style={{marginTop:"8px",fontSize:"10px"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 22px 22px 22px",gap:"1px",background:"var(--rule)",border:"1px solid var(--rule)"}}>
              <div style={{background:"var(--bg-2)",padding:"5px 7px"}}><span style={{fontFamily:"var(--mono)",fontSize:"7px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Vendor</span></div>
              {["£","★","⏱"].map(h => (
                <div key={h} style={{background:"var(--bg-2)",padding:"5px 3px",textAlign:"center"}}><span style={{fontFamily:"var(--mono)",fontSize:"9px",color:"var(--ink-mute)"}}>{h}</span></div>
              ))}
              {[
                {name:"Existing A",price:2,rel:5,lead:3,existing:true},
                {name:"Existing B",price:2,rel:4,lead:3,existing:true},
                {name:"New A",price:5,rel:4,lead:5,existing:false},
                {name:"New B",price:4,rel:5,lead:4,existing:false},
                {name:"New C",price:4,rel:4,lead:5,existing:false},
                {name:"New D",price:3,rel:3,lead:4,existing:false},
              ].map(v => (
                <Fragment key={v.name}>
                  <div style={{background:v.existing?"var(--bg-2)":"var(--bg)",padding:"5px 7px",display:"flex",alignItems:"center",gap:"4px"}}>
                    {!v.existing && <span style={{width:"4px",height:"4px",background:"var(--accent)",borderRadius:"50%",flexShrink:0}} />}
                    <span style={{fontSize:"10px",color:"var(--ink-dim)"}}>{v.name}</span>
                  </div>
                  {[v.price,v.rel,v.lead].map((score,i) => (
                    <div key={i} style={{background:v.existing?"var(--bg-2)":"var(--bg)",padding:"5px 3px",display:"flex",justifyContent:"center",alignItems:"center",gap:"1px"}}>
                      {Array.from({length:5}).map((_,j) => (
                        <span key={j} style={{width:"3px",height:"3px",borderRadius:"50%",background:j<score?"var(--accent)":"var(--rule)",display:"inline-block"}} />
                      ))}
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* RESEARCH ARTIFACT — Stakeholder map */}
        <div className="cs-card">
          <div className="cs-card-title">Research Artifact</div>
          <div style={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"8px"}}>
            {[
              {name:"Finance",block:"Mid month-end close, data access blocked",resolution:"Reframed as long-term margin impact"},
              {name:"Operations",block:"Supply chain reliability concerns",resolution:"Parallel trial: safety net before full switch"},
            ].map(s => (
              <div key={s.name} style={{border:"1px solid var(--rule)",padding:"12px",display:"flex",flexDirection:"column",gap:"8px"}}>
                <div style={{fontFamily:"var(--mono)",fontSize:"9px",color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.1em"}}>{s.name}</div>
                <div style={{fontSize:"11px",color:"#ff6666",lineHeight:"1.5"}}>↯ {s.block}</div>
                <div style={{fontSize:"11px",color:"var(--ink-dim)",lineHeight:"1.5"}}>✓ {s.resolution}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <h3>Outcome</h3>
      <p>Headline outcome: <strong style={{ color: "var(--accent)" }}>25% cost reduction delivered</strong> across three categories, with zero supply disruptions throughout the transition. The parallel trial approach validated new vendors before full commitment, and it is the approach I would use again for any vendor or tooling change.</p>
    </MonolithCaseLayout>
  );
};

export default CaseStudyWestpak;
