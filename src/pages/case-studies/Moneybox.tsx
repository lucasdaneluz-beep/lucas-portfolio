import { useEffect } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";

const CaseStudyMoneybox = () => {
  useEffect(() => {
    document.title = "Moneybox Redesigned | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  return (
    <MonolithCaseLayout
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

      <div className="cs-cards three" style={{margin:"40px 0"}}>

        {/* PROCESS DIAGRAM — IA restructure */}
        <div className="cs-card">
          <div className="cs-card-title">Process Diagram</div>
          <div style={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"8px"}}>
            <div>
              <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"6px"}}>Before · 5 tabs</div>
              <div style={{display:"flex",gap:"3px"}}>
                {["Home","Savings","ISA","Invest","More"].map(t => (
                  <div key={t} style={{flex:1,background:"var(--bg-2)",border:"1px solid var(--rule)",borderRadius:"3px",padding:"5px 2px",textAlign:"center"}}>
                    <span style={{fontSize:"8px",color:"var(--ink-mute)"}}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{marginTop:"6px",display:"flex",flexDirection:"column",gap:"3px"}}>
                <span style={{fontSize:"10px",color:"#ff6666"}}>↯ ISA buried within Savings</span>
                <span style={{fontSize:"10px",color:"#ff6666"}}>↯ Invest feels disconnected</span>
              </div>
            </div>
            <div style={{textAlign:"center",color:"var(--ink-mute)"}}>↓</div>
            <div>
              <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"6px"}}>After · 4 tabs</div>
              <div style={{display:"flex",gap:"3px"}}>
                {["Home","Savings","Invest","Profile"].map(t => (
                  <div key={t} style={{flex:1,background:"color-mix(in oklab, var(--accent) 10%, var(--bg))",border:"1px solid color-mix(in oklab, var(--accent) 25%, transparent)",borderRadius:"3px",padding:"5px 2px",textAlign:"center"}}>
                    <span style={{fontSize:"8px",color:"var(--accent)"}}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{marginTop:"6px",display:"flex",flexDirection:"column",gap:"3px"}}>
                <span style={{fontSize:"10px",color:"var(--ink-dim)"}}>✓ ISA merged into Savings</span>
                <span style={{fontSize:"10px",color:"var(--ink-dim)"}}>✓ Invest as distinct intent</span>
              </div>
            </div>
          </div>
        </div>

        {/* SCREEN — Redesign comparison image */}
        <div className="cs-card" style={{display:"flex",flexDirection:"column"}}>
          <div className="cs-card-title">Screen</div>
          <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",marginTop:"8px"}}>
            <img
              src="/moneybox-redesign-comparison.png"
              alt="Moneybox redesign comparison"
              style={{width:"100%",objectFit:"contain",borderRadius:"4px"}}
            />
          </div>
        </div>

        {/* RESEARCH ARTIFACT — Mental model */}
        <div className="cs-card">
          <div className="cs-card-title">Research Artifact</div>
          <div style={{marginTop:"8px",display:"flex",flexDirection:"column",gap:"10px"}}>
            <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.1em"}}>How users mentally organise money</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"var(--rule)"}}>
              <div style={{background:"var(--bg)",padding:"12px",display:"flex",flexDirection:"column",gap:"6px"}}>
                <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"2px"}}>Short-term</div>
                {["Cash ISA","Simple Saver","Emergency fund"].map(p => (
                  <div key={p} style={{fontSize:"10px",color:"var(--ink-dim)",padding:"3px 6px",background:"var(--bg-2)",borderRadius:"2px"}}>{p}</div>
                ))}
                <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",marginTop:"2px"}}>Safe · Accessible</div>
              </div>
              <div style={{background:"var(--bg)",padding:"12px",display:"flex",flexDirection:"column",gap:"6px"}}>
                <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"2px"}}>Long-term</div>
                {["Stocks & Shares ISA","Pension","LISA"].map(p => (
                  <div key={p} style={{fontSize:"10px",color:"var(--ink-dim)",padding:"3px 6px",background:"color-mix(in oklab, var(--accent) 6%, var(--bg))",borderRadius:"2px"}}>{p}</div>
                ))}
                <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--accent)",marginTop:"2px"}}>Growth · Locked</div>
              </div>
            </div>
            <div style={{fontSize:"11px",color:"var(--ink-dim)",lineHeight:"1.6"}}>The app blurred this boundary — Invest felt disconnected from natural saving progression.</div>
          </div>
        </div>

      </div>

      <h3>Outcome</h3>
      <p>Headline outcome: <strong style={{ color: "var(--accent)" }}>Full UX redesign concept</strong>. A cleaner product mental model, ISA allowances and rates visible where decisions happen, and Invest framed as a natural next step from Savings — without a full visual rebrand.</p>
    </MonolithCaseLayout>
  );
};

export default CaseStudyMoneybox;
