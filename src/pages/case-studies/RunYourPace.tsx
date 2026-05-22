import { useEffect } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";

const CaseStudyRunYourPace = () => {
  useEffect(() => {
    document.title = "Run Your Pace – Personal Build | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  return (
    <MonolithCaseLayout
      title="Run Your Pace — Built to Scratch an Itch"
      lede="A Couch-to-5K PWA I built and shipped because no existing running app let me freely scroll through interval timings. One missing interaction became a full app."
      focus="Personal Build · Interaction Design"
      metric="Live PWA · Installable on iOS & Android"
      tags={["Personal Build", "PWA", "Side Project", "React"]}
    >
      <h3>The itch</h3>
      <p>I use interval training when I run — alternating between running and walking to build endurance. The problem: every app I tried had fixed durations or clunky number steppers. I couldn't naturally scroll to pick my own interval length mid-session. It sounds small. But when you're mid-run with sweaty fingers and gloves on, a stepper that increments by 30 seconds is useless.</p>
      <p>No app had it. So I built one that did.</p>

      <div className="cs-cards three" style={{ margin: "40px 0" }}>

        {/* The gap */}
        <div className="cs-card">
          <div className="cs-card-title">The Gap</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--rule)", marginTop: 8 }}>
            <div style={{ background: "var(--bg-2)", padding: "12px", display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 8, color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Existing apps</div>
              {["Fixed 30s steps", "Tap ▲ ▼ to adjust", "Can't edit mid-run", "Preset plans only"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--rule)", flexShrink: 0 }} />
                  <span style={{ fontSize: 10, color: "var(--ink-dim)" }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "var(--bg)", padding: "12px", display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 8, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Run Your Pace</div>
              {["Scroll any duration", "Snap to the minute", "Custom builder", "C25K plan built-in"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                  <span style={{ fontSize: 10, color: "var(--ink-dim)" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll picker diagram */}
        <div className="cs-card">
          <div className="cs-card-title">The Core Interaction</div>
          <div style={{ marginTop: 8, background: "var(--bg-2)", borderRadius: 8, padding: "12px 0", position: "relative", overflow: "hidden" }}>
            {/* Fades */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 28, background: "linear-gradient(to right, var(--bg-2), transparent)", zIndex: 2 }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 28, background: "linear-gradient(to left, var(--bg-2), transparent)", zIndex: 2 }} />
            {/* Highlight rail */}
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 0, bottom: 0, width: 40, border: "1px solid var(--rule)", borderRadius: 4, zIndex: 1 }} />
            {/* Numbers */}
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              {[3, 4, 5, 6, 7, 8, 9].map((n, i) => (
                <div key={n} style={{
                  width: 40, flexShrink: 0, textAlign: "center",
                  fontFamily: "var(--mono)", fontWeight: 600,
                  fontSize: i === 3 ? 16 : 11,
                  color: i === 3 ? "var(--accent)" : "var(--ink-mute)",
                  opacity: Math.abs(i - 3) > 2 ? 0.3 : 1,
                }}>
                  {n}m
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 8, fontFamily: "var(--mono)", fontSize: 8, color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Scroll to pick · snap to select
            </div>
          </div>
          <p style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 10, lineHeight: 1.5 }}>Built with scroll-snap. Works with gloves. Feels like a native iOS picker.</p>
        </div>

        {/* What shipped */}
        <div className="cs-card">
          <div className="cs-card-title">What Shipped</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
            {[
              { label: "8-week C25K program", detail: "24 structured runs" },
              { label: "Custom interval builder", detail: "Drag-reorder, any duration" },
              { label: "Circular interval timer", detail: "Visual + voice coaching" },
              { label: "Run history", detail: "Distance, notes, streaks" },
              { label: "Installable PWA", detail: "iOS & Android, no app store" },
            ].map(({ label, detail }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--rule)", paddingBottom: 6 }}>
                <span style={{ fontSize: 11, color: "var(--ink-dim)", fontWeight: 500 }}>{label}</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3>Key decisions</h3>
      <p>The scroll picker was the entire product thesis — everything else was built around making that interaction feel right. I chose a scroll-snap approach over a native input or a slider because it behaves like a physical drum roll: one finger, any position, instant feedback. Once that worked, I built the rest of the app around it: a structured C25K plan so there was a reason to open it every week, a custom builder so experienced runners weren't locked into the preset program, and voice coaching so you're not watching a screen while running.</p>
      <p>PWA over native app was a deliberate call. No review process, instant deploy, installable on both platforms. The tradeoff is background audio limitations on iOS — worked around with an audio unlock pattern on first tap. Built with Capacitor as an escape hatch for a future native build if needed.</p>

      <h3>Outcome</h3>
      <p>It's live at <a href="https://run-your-pace.vercel.app" target="_blank" rel="noopener noreferrer">run-your-pace.vercel.app</a>. I use it. The scroll picker works exactly as I wanted it to. Building it taught me more about interaction physics — momentum, snap points, touch targets — than any design sprint I've run at work.</p>
    </MonolithCaseLayout>
  );
};

export default CaseStudyRunYourPace;
