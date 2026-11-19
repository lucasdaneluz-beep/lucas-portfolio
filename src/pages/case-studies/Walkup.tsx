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
      lede="Queue transparency, loyalty and growth for a UK restaurant waitlist marketplace used by 400K+ diners and 800+ restaurant partners."
      focus="Marketplace · Waitlist UX"
      metric="3× loyalty engagement uplift"
      tags={["Marketplace", "Waitlist UX", "Loyalty", "Product Strategy"]}
      disclaimer="This is a product concept for portfolio purposes only. Not affiliated with WalkUp or its parent companies."
    >
      <h3>Context</h3>
      <p>WalkUp is a UK restaurant queue management app connecting 400K+ diners with 800+ venue partners. Diners didn't trust the wait times, the app crashed often enough that people stopped relying on it, and nothing brought them back once they'd eaten.</p>

      <h3>Approach</h3>
      <p>I started with research on both sides of the marketplace, looked at what competitors did, and read through 60 app store reviews. That gave me a list of complaints I could score on impact against effort, which became a six sprint roadmap across Product, design, engineering, ops and marketing. I set the success metrics before anyone built anything, so we'd have a baseline to compare against rather than one we invented afterwards.</p>

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

        {/* SCREEN — Redesigned WalkUp UI concepts */}
        <div className="cs-card" style={{display:"flex",flexDirection:"column",gap:"8px"}}>
          <div className="cs-card-title">Screen</div>
          <div style={{display:"flex",justifyContent:"center",gap:"8px",flex:1,paddingTop:"8px",alignItems:"flex-start"}}>

            {/* Phone 1 — Loyalty Points */}
            <div style={{width:"108px",background:"#0d0d0d",borderRadius:"14px",padding:"10px 9px",display:"flex",flexDirection:"column",gap:"6px",border:"1.5px solid #1f1f1f",boxShadow:"0 6px 24px rgba(0,0,0,0.5)",flexShrink:0}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:"7px",color:"#555",fontFamily:"var(--mono)"}}>9:41</span>
                <div style={{display:"flex",alignItems:"center",gap:"3px"}}>
                  <div style={{width:"10px",height:"5px",borderRadius:"1px",border:"1px solid #555",position:"relative"}}><div style={{width:"60%",height:"100%",background:"#555",borderRadius:"0.5px"}}></div></div>
                </div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:"5px",paddingBottom:"4px",borderBottom:"1px solid #1a1a1a"}}>
                <div style={{width:"16px",height:"16px",borderRadius:"4px",background:"#00b8d4",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <span style={{fontSize:"9px",fontWeight:900,color:"#000"}}>W</span>
                </div>
                <span style={{fontSize:"11px",fontWeight:700,color:"#fff",letterSpacing:"-0.02em"}}>WalkUp</span>
              </div>
              <div style={{lineHeight:1.25}}>
                <span style={{fontSize:"10px",fontWeight:700,color:"#fff"}}>Earn Points </span>
                <span style={{fontSize:"10px",fontWeight:700,color:"#00b8d4"}}>While Queuing</span>
              </div>
              <div style={{background:"#141414",borderRadius:"9px",padding:"9px 8px",textAlign:"center",border:"1px solid #222"}}>
                <div style={{fontSize:"6px",color:"#555",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"4px",fontFamily:"var(--mono)"}}>Your Points</div>
                <div style={{fontSize:"28px",fontWeight:800,color:"#fff",lineHeight:1,letterSpacing:"-0.04em"}}>246</div>
                <div style={{fontSize:"6px",color:"#555",marginTop:"3px",fontFamily:"var(--mono)"}}>754 to next reward</div>
                <div style={{height:"3px",background:"#222",borderRadius:"2px",marginTop:"7px"}}>
                  <div style={{width:"24.6%",height:"100%",background:"#00b8d4",borderRadius:"2px"}}></div>
                </div>
              </div>
              <div style={{background:"#00b8d4",borderRadius:"20px",padding:"3px 8px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{fontSize:"7px",fontWeight:700,color:"#000",letterSpacing:"0.04em"}}>Redeem</span>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"5px",paddingTop:"2px"}}>
                {[
                  {dot:"#00b8d4", text:"Queue & arrive → +125 pts"},
                  {dot:"#555",    text:"1,000 pts = £10 gift card"},
                  {dot:"#555",    text:"Or 3% off your next bill"},
                ].map((item,i) => (
                  <div key={i} style={{display:"flex",gap:"5px",alignItems:"flex-start"}}>
                    <div style={{width:"4px",height:"4px",borderRadius:"50%",background:item.dot,flexShrink:0,marginTop:"3px"}}></div>
                    <span style={{fontSize:"7.5px",color:"#888",lineHeight:1.35}}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone 2 — Restaurant Profile */}
            <div style={{width:"108px",background:"#0d0d0d",borderRadius:"14px",overflow:"hidden",border:"1.5px solid #1f1f1f",boxShadow:"0 6px 24px rgba(0,0,0,0.5)",flexShrink:0}}>
              {/* Header — Padella photo, no overlay */}
              <div style={{height:"60px",overflow:"hidden"}}>
                <img src="/walkup/padella.png" alt="Padella restaurant" loading="lazy" decoding="async" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%",display:"block"}} />
              </div>
              <div style={{padding:"8px 9px",display:"flex",flexDirection:"column",gap:"7px"}}>
                <div style={{background:"#00b8d4",borderRadius:"20px",padding:"3px 8px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{fontSize:"7px",fontWeight:700,color:"#000",letterSpacing:"0.02em"}}>#4 in queue · Join →</span>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",background:"#141414",borderRadius:"7px",padding:"7px 6px",border:"1px solid #1f1f1f"}}>
                  {[{val:"12",unit:"min"},{ val:"4.2",unit:"stars"},{val:"££",unit:"price"}].map((s,i) => (
                    <Fragment key={i}>
                      <div style={{textAlign:"center"}}>
                        <div style={{fontSize:"13px",fontWeight:800,color: i===0 ? "#00b8d4":"#fff",lineHeight:1,letterSpacing:"-0.03em"}}>{s.val}</div>
                        <div style={{fontSize:"6px",color:"#555",textTransform:"uppercase",letterSpacing:"0.07em",marginTop:"2px",fontFamily:"var(--mono)"}}>{s.unit}</div>
                      </div>
                      {i < 2 && <div style={{width:"1px",background:"#222"}}></div>}
                    </Fragment>
                  ))}
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
                  <div style={{fontSize:"6.5px",color:"#555",textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"var(--mono)"}}>Reviews</div>
                  {[
                    {name:"Samantha",stars:5,text:"Great pasta, worth every minute."},
                    {name:"Victor",stars:4,text:"Brilliant find. Wait time too long."},
                  ].map((r,i) => (
                    <div key={i} style={{padding:"5px 6px",background:"#141414",borderRadius:"6px",border:"1px solid #1f1f1f"}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:"3px"}}>
                        <span style={{fontSize:"7px",fontWeight:600,color:"#ccc"}}>{r.name}</span>
                        <span style={{fontSize:"6.5px",color:"#00b8d4",letterSpacing:"0.5px"}}>{"★".repeat(r.stars)}</span>
                      </div>
                      <span style={{fontSize:"7px",color:"#777",lineHeight:1.35}}>{r.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
          <div style={{fontFamily:"var(--mono)",fontSize:"8px",color:"var(--ink-mute)",textTransform:"uppercase",letterSpacing:"0.08em",textAlign:"center",marginTop:"4px"}}>Loyalty · Restaurant profile</div>
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
      <p>Headline outcome: <strong style={{ color: "var(--accent)" }}>3× loyalty engagement uplift</strong>. The numbers behind it, and what I would do differently next time, are in the case study below.</p>
    </MonolithCaseLayout>
  );
};

export default CaseStudyWalkup;
