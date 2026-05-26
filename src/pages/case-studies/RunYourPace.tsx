import { useEffect } from "react";
import MonolithCaseLayout from "@/components/MonolithCaseLayout";

const CaseStudyRunYourPace = () => {
  useEffect(() => {
    document.title = "Run Your Pace – Personal Build | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  const shotStyle: React.CSSProperties = {
    width: "100%",
    display: "block",
    borderRadius: 14,
    border: "1px solid var(--rule)",
    background: "var(--bg-2)",
  };

  return (
    <MonolithCaseLayout
      title="Run Your Pace — Built to Scratch an Itch"
      lede="A Couch-to-5K app I built and shipped because no existing running app let me freely scroll through interval timings. One missing interaction became a full app — used weekly."
      focus="Personal Build · Interaction Design"
      metric="Live · Used weekly"
      tags={["Personal Build", "Side Project", "React"]}
    >
      <h3>The itch</h3>
      <p>I use interval training when I run — alternating between running and walking to build endurance. The problem: every app I tried had fixed durations or clunky number steppers. I couldn't naturally scroll to pick my own interval length mid-session. It sounds small. But when you're mid-run with sweaty fingers and gloves on, a stepper that increments by 30 seconds is useless.</p>
      <p>No app had it. So I built one that did.</p>

      {/* Screenshot showcase */}
      <div className="cs-cards three" style={{ margin: "40px 0" }}>
        <div className="cs-card">
          <div className="cs-card-title">Home · Today</div>
          <img src="/run-your-pace/home.png" alt="Run5K home screen with today's workout card and plan progress" style={shotStyle} />
          <p style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 12, lineHeight: 1.5 }}>One workout per visit. No noise, no metrics dashboard, no streak guilt-trip. Just: tap when you're laced up.</p>
        </div>

        <div className="cs-card">
          <div className="cs-card-title accent">The Scroll Picker</div>
          <img src="/run-your-pace/builder.png" alt="Custom workout builder showing draggable intervals and the scroll-snap minute picker" style={shotStyle} />
          <p style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 12, lineHeight: 1.5 }}>The entire reason this app exists. Drag intervals to reorder. Swipe the minute picker at the bottom to set duration. Works with gloves.</p>
        </div>

        <div className="cs-card">
          <div className="cs-card-title">Live Timer</div>
          <img src="/run-your-pace/timer.png" alt="Active workout timer with circular progress, current phase, and voice coaching line" style={shotStyle} />
          <p style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 12, lineHeight: 1.5 }}>Circular progress, current phase, and coach line — readable at arm's length while moving. Voice handles the rest.</p>
        </div>
      </div>

      <h3>Key decisions</h3>
      <p>The scroll picker was the entire product thesis — everything else was built around making that interaction feel right. I chose a scroll-snap approach over a native input or a slider because it behaves like a physical drum roll: one finger, any position, instant feedback. Once that worked, I built the rest of the app around it: a structured C25K plan so there was a reason to open it every week, a custom builder so experienced runners weren't locked into the preset program, and voice coaching so you're not watching a screen while running.</p>
      <p>I built it as a mobile web app on Vercel rather than going down the App Store path. The goal was to ship and use the thing as fast as possible — not to learn Xcode submission flows. The browser handles voice playback well enough for my use case, and I can iterate the moment I notice something is off mid-run.</p>

      <h3>The 8-week plan</h3>
      <p>The structured Couch-to-5K program is what makes the app sticky — three runs a week, eight weeks, twenty-four sessions. The plan view is a vertical timeline showing where you are and what's next, with each week expandable to show the day-by-day workouts.</p>

      <div style={{ margin: "32px 0", maxWidth: 360 }}>
        <img src="/run-your-pace/plan.png" alt="8-week C25K plan view as a vertical timeline with the current week highlighted" style={shotStyle} />
      </div>

      <h3>Outcome</h3>
      <p>It's live at <a href="https://run-your-pace.vercel.app" target="_blank" rel="noopener noreferrer">run-your-pace.vercel.app</a>. I use it. The scroll picker works exactly as I wanted it to. Building it taught me more about interaction physics — momentum, snap points, touch targets — than any design sprint I've run at work.</p>
    </MonolithCaseLayout>
  );
};

export default CaseStudyRunYourPace;
