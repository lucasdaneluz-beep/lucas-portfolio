import { useEffect, Fragment } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";

const CaseStudyWalkup = () => {
  useEffect(() => {
    document.title = "WalkUp – Smarter Queues | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  return (
    <MonolithCaseLayout
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

      <div className="cs-cards three" style={{margin:"40px 0"}}>

        {/* PROCESS DIAGRAM — Priority matrix */}
        <div className="cs-card">
          <div className="cs-card-title">Process Diagram</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"auto 1fr 1fr",gap:"1px",background:"var(--rule)",width:"100%",marginTop:"8px"}}>
            <div style={{gridColumn:"1/-1",background:"var(--bg)",padding:"6px 10px",display:"flex",justifyContent:"space-between"}}>
              <span style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",letterSpacing:"0.08em",textTransform:"uppercase"}}>← Low effort</span>
              <span style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",letterSpacing:"0.08em",textTransform:"uppercase"}}>High effort →</span>
            </div>
            {[
              {label:"Quick Wins",items:["Queue transparency","App stability"],accent:true},
              {label:"Strategic Bets",items:["Loyalty loop"],accent:false},
              {label:"Fill-ins",items:["Wait time comms"],accent:false},
              {label:"Deprioritised",items:["Venue rebrand"],accent:false,dim:true},
            ].map((q,i) => (
              <div key={i} style={{background: q.accent ? "color-mix(in oklab, var(--accent) 8%, var(--bg))" : q.dim ? "var(--bg-2)" : "var(--bg)",padding:"12px",minHeight:"80px",display:"flex",flexDirection:"column",gap:"5px"}}>
                <span style={{fontFamily:"var(--mono)",fontSize:"8px",color: q.accent ? "var(--accent)" : "var(--ink-mute)",letterSpacing:"0.08em",textTransform:"uppercase"}}>{q.label}</span>
                {q.items.map(item => <span key={item} style={{fontSize:"10px",color:"var(--ink-dim)"}}>{item}</span>)}
              </div>
            ))}
          </div>
          <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:"8px",textAlign:"right"}}>↑ High impact</div>
        </div>

        {/* SCREEN — Queue transparency + loyalty UI */}
        <div className="cs-card" style={{display:"flex",flexDirection:"column",gap:"8px"}}>
          <div className="cs-card-title">Screen</div>
          <div style={{display:"flex",justifyContent:"center",flex:1,paddingTop:"8px"}}>
            <div style={{width:"130px",background:"var(--bg-2)",border:"2px solid var(--rule-2)",borderRadius:"16px",padding:"12px 10px",display:"flex",flexDirection:"column",gap:"7px"}}>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <span style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)"}}>9:41</span>
                <span style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)"}}>●●●</span>
              </div>
              <div style={{fontFamily:"var(--display)",fontSize:"13px",fontWeight:700,color:"var(--ink)",letterSpacing:"-0.02em"}}>WalkUp</div>
              <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",letterSpacing:"0.08em",textTransform:"uppercase"}}>The Ivy Chelsea</div>
              <div style={{background:"var(--bg)",border:"1px solid var(--rule)",borderRadius:"8px",padding:"10px",textAlign:"center"}}>
                <div style={{fontFamily:"var(--mono)",fontSize:"7px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"4px"}}>Queue position</div>
                <div style={{fontFamily:"var(--display)",fontSize:"30px",fontWeight:800,color:"var(--accent)",letterSpacing:"-0.04em",lineHeight:1}}>#4</div>
                <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-dim)",marginTop:"4px"}}>Est. 12 min</div>
              </div>
              <div style={{background:"color-mix(in oklab, var(--accent) 10%, var(--bg))",border:"1px solid color-mix(in oklab, var(--accent) 25%, transparent)",borderRadius:"6px",padding:"6px 8px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontFamily:"var(--mono)",fontSize:"7px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Points</span>
                <span style={{fontFamily:"var(--display)",fontSize:"13px",fontWeight:700,color:"var(--accent)"}}>120</span>
              </div>
            </div>
          </div>
        </div>

        {/* RESEARCH ARTIFACT — App store sentiment clusters */}
        <div className="cs-card">
          <div className="cs-card-title">Research Artifact</div>
          <div style={{display:"flex",flexDirection:"column",gap:"14px",marginTop:"8px"}}>
            {[
              {label:"Trust",quotes:["\"Wait times are unpredictable\"","\"Never know how long I'll wait\""],color:"var(--accent)"},
              {label:"Stability",quotes:["\"App keeps crashing\"","\"Logs me out mid-queue\""],color:"var(--ink-mute)"},
              {label:"Retention",quotes:["\"Nothing to come back for\"","\"No reason to use it again\""],color:"var(--ink-mute)"},
            ].map(cluster => (
              <div key={cluster.label} style={{borderLeft:"2px solid "+cluster.color,paddingLeft:"10px"}}>
                <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:cluster.color,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"5px"}}>{cluster.label}</div>
                {cluster.quotes.map(q => <div key={q} style={{fontSize:"11px",color:"var(--ink-dim)",lineHeight:"1.5",marginBottom:"2px"}}>{q}</div>)}
              </div>
            ))}
            <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Source: App Store reviews · 60 samples</div>
          </div>
        </div>

      </div>

      <h3>Outcome</h3>
      <p>Headline outcome: <strong style={{ color: "var(--accent)" }}>3× loyalty engagement uplift</strong>. Full numbers, charts, and reflections on what I'd do differently are in the long-form case study.</p>
    </MonolithCaseLayout>
  );
};

export default CaseStudyWalkup;
