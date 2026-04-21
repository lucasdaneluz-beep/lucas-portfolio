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
      <div className="cs-metric-row">
        {[
          { value: "400K+", label: "Diners served" },
          { value: "800+", label: "Restaurant partners" },
          { value: "6", label: "Sprints · Q1 roadmap" },
          { value: "~70%", label: "Modelled first-year ROI" },
        ].map(({ value, label }) => (
          <div key={label} className="cs-metric">
            <div className="cs-metric-val">{value}</div>
            <div className="cs-metric-lbl">{label}</div>
          </div>
        ))}
      </div>

      <div className="case-section-hd">Problem · Solution · Impact</div>
      <div className="cs-cards three">
        <div className="cs-card">
          <div className="cs-card-title">Problem</div>
          <div className="cs-card-body">
            <ul>
              <li>Unreliable wait times eroded trust and drove users to abandon queues mid-wait.</li>
              <li>No loyalty mechanic meant little reason to return over competitors.</li>
              <li>App crashes and battery drain were directly hurting retention and reviews.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Solution</div>
          <div className="cs-card-body">
            <ul>
              <li>Rebuilt wait-time accuracy with SMS alerts and aligned restaurant cut-off rules.</li>
              <li>Launched a points-based loyalty programme with cash-equivalent rewards.</li>
              <li>Treated app stability as a prerequisite — fixed crashes and battery drain first.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title">Impact</div>
          <div className="cs-card-body">
            <ul>
              <li>Modelled +10% uplift in weekly bookings and returning diners within Q1.</li>
              <li>Richer restaurant profiles reduce friction in new venue onboarding.</li>
              <li>~70% first-year ROI on combined product and marketing investment.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="case-section-hd">Context</div>
      <div className="cs-grid-two">
        <div>
          <p>WalkUp is a restaurant queue management app in the UK, helping diners join virtual waitlists and avoid standing in line. At the time of this project, the product served over 400,000 users and partnered with 800+ restaurants.</p>
          <p>Mission: get diners a table anywhere, anytime — while increasing restaurant revenue by reducing no-shows and making queues more predictable.</p>
        </div>
        <div>
          <p>Product concept and roadmap definition — mapping competitive landscape, user pain points, and restaurant needs into a Q1 feature roadmap focused on wait-time accuracy, loyalty, and performance.</p>
          <p>6 sprints across product, design, engineering, marketing, ops, and support. Focus areas: queue transparency, loyalty model, restaurant profiles.</p>
        </div>
      </div>

      <div className="case-section-hd">Key Personas</div>
      <div className="cs-cards three">
        <div className="cs-card">
          <div className="cs-card-title accent">Samantha · Foodie</div>
          <div className="cs-card-body">
            <p>Loves exploring busy central London restaurants with friends after work and at weekends.</p>
            <ul>
              <li>Wants to reduce idle time and maximise time with friends.</li>
              <li>Needs reliable estimates to plan where to go next.</li>
              <li>Frustrated by standing in the cold with no back-up options.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Victor · Tourist</div>
          <div className="cs-card-body">
            <p>Digital nomad running a food blog across 30+ cities, trying to live like a local during short stays.</p>
            <ul>
              <li>Needs to discover great spots quickly in unfamiliar neighbourhoods.</li>
              <li>Wants to see menus, photos, and pricing before committing.</li>
              <li>Seeks predictable waits to avoid wasting limited exploration time.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Tom · Restaurant Manager</div>
          <div className="cs-card-body">
            <p>Runs a busy London restaurant with limited seating and high demand at peak times.</p>
            <ul>
              <li>Wants to fill tables efficiently without over-promising wait times.</li>
              <li>Needs better visibility into ratings and guest feedback.</li>
              <li>Looking for tools to manage queues, not just take bookings.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="case-section-hd">Pain Points & Value</div>
      <div className="cs-cards two">
        <div className="cs-card">
          <div className="cs-card-title">Customer Pain Points</div>
          <div className="cs-card-body">
            <ul>
              <li>Unreliable wait-time estimates and queues that suddenly drop users.</li>
              <li>Arbitrary 2km restriction that doesn't match actual waiting time.</li>
              <li>App perceived as slow, crash-prone, and battery-hungry.</li>
              <li>Poorly managed expectations at the door, leading to negative reviews.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title">Value Matrix Highlights</div>
          <div className="cs-card-body">
            <ul>
              <li>High value: accurate wait times, reliable queues, and loyalty rewards.</li>
              <li>Quick wins: app stability, loyalty programme, and clearer 2km messaging.</li>
              <li>Longer-term "north star": deeper recommendations and menu-level ratings.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="case-section-hd">Solution & Q1 Roadmap</div>
      <div className="cs-cards three">
        <div className="cs-card">
          <div className="cs-card-title accent">Improve Wait-Time Accuracy</div>
          <div className="cs-card-body">
            <ul>
              <li>Upgrade restaurant platform with SMS alerts for both app users and walk-ins.</li>
              <li>Align queue messaging and cut-off rules with real operations.</li>
              <li>Set restaurant-level usage targets (e.g. 20 reservations/week) to track impact.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Loyalty and Profiles</div>
          <div className="cs-card-body">
            <ul>
              <li>Launch a clear points-based loyalty programme with cash-equivalent rewards.</li>
              <li>Design richer restaurant profiles: photos, menu highlights, pricing, reviews.</li>
              <li>Lay groundwork for sponsored placements once UX fundamentals are strong.</li>
            </ul>
          </div>
        </div>
        <div className="cs-card">
          <div className="cs-card-title accent">Performance & Tech Debt</div>
          <div className="cs-card-body">
            <ul>
              <li>Stabilise the app to reduce crashes and startup time.</li>
              <li>Optimise background behaviour to reduce battery drain.</li>
              <li>Treat performance as a prerequisite for any new feature adoption.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="case-section-hd">KPIs & Expected Impact</div>
      <div className="cs-metric-row">
        {[
          { value: "+10%", label: "Weekly bookings", sub: "Target uplift across network" },
          { value: "+10%", label: "Retention", sub: "Returning diners every 2 weeks" },
          { value: "800+", label: "Restaurants", sub: "Via richer profiles & free trials" },
          { value: "~70%", label: "First-year ROI", sub: "On product & marketing spend" },
        ].map(({ value, label, sub }) => (
          <div key={label} className="cs-metric">
            <div className="cs-metric-val">{value}</div>
            <div className="cs-metric-lbl">{label}</div>
            <div className="cs-metric-sub">{sub}</div>
          </div>
        ))}
      </div>
    </MonolithCaseLayout>
  );
};

export default CaseStudyWalkup;
