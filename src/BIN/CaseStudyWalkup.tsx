import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CaseStudyWalkup = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, hsl(210 35% 5%) 0%, hsl(210 28% 8%) 50%, hsl(210 35% 5%) 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-20">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-xs font-semibold mb-6 rounded-full px-3 py-1"
          style={{ background: "hsl(210 28% 12%)", color: "hsl(210 20% 70%)", border: "1px solid hsl(210 20% 20%)" }}
        >
          <ArrowLeft size={14} />
          Back to portfolio
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3" style={{ background: "hsl(174 80% 60% / 0.12)", border: "1px solid hsl(174 80% 60% / 0.25)" }}>
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "hsl(174 80% 60%)" }}>PM Portfolio · Case Study 02</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3" style={{ color: "hsl(210 40% 98%)" }}>
          WalkUp <span style={{ color: "hsl(174 80% 60%)" }}>Smarter Queues</span>
        </h1>
        <p className="text-sm md:text-base max-w-xl mb-8" style={{ color: "hsl(210 20% 65%)" }}>
          Improving queue transparency, loyalty, and app performance for a UK restaurant waitlist marketplace used by 400K+ diners.
        </p>

        {/* Overview / About */}
        <section className="grid md:grid-cols-2 gap-8 mb-12 text-xs md:text-sm" style={{ color: "hsl(210 20% 70%)" }}>
          <div className="space-y-4">
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(210 15% 45%)" }}>
                About WalkUp
              </h2>
              <p>
                WalkUp is a restaurant queue management app in the UK, helping diners join virtual waitlists and avoid standing in line. At the time of this project, the product served over 400,000 users and partnered with 800+ restaurants.
              </p>
            </div>
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(210 15% 45%)" }}>
                Mission
              </h2>
              <p>
                Get diners a table anywhere, anytime — while increasing restaurant revenue by reducing no‑shows and making queues more predictable.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(210 15% 45%)" }}>
                Role
              </h2>
              <p>
                Product concept and roadmap definition — mapping competitive landscape, user pain points, and restaurant needs into a Q1 feature roadmap focused on wait‑time accuracy, loyalty, and performance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(210 15% 45%)" }}>
                  Focus
                </h3>
                <ul className="space-y-1.5 list-disc pl-4">
                  <li>Queue transparency</li>
                  <li>Loyalty model</li>
                  <li>Restaurant profiles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(210 15% 45%)" }}>
                  Timeline
                </h3>
                <p>6 sprints (Q1 2022) across product, design, engineering, marketing, ops, and support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Personas */}
        <section className="mb-12 text-xs md:text-sm">
          <h2 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(210 15% 45%)" }}>
            Key personas
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div
              className="rounded-2xl p-4"
              style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(174 80% 60%)" }}>
                Samantha · Foodie
              </p>
              <p className="mb-2" style={{ color: "hsl(210 20% 70%)" }}>
                Loves exploring busy central London restaurants with friends after work and at weekends.
              </p>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Wants to reduce idle time and maximise time with friends.</li>
                <li>Needs reliable estimates to plan where to go next.</li>
                <li>Frustrated by standing in the cold with no back‑up options.</li>
              </ul>
            </div>
            <div
              className="rounded-2xl p-4"
              style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(174 80% 60%)" }}>
                Victor · Tourist
              </p>
              <p className="mb-2" style={{ color: "hsl(210 20% 70%)" }}>
                Digital nomad running a food blog across 30+ cities, trying to live like a local during short stays.
              </p>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Needs to discover great spots quickly in unfamiliar neighbourhoods.</li>
                <li>Wants to see menus, photos, and pricing before committing.</li>
                <li>Seeks predictable waits to avoid wasting limited exploration time.</li>
              </ul>
            </div>
            <div
              className="rounded-2xl p-4"
              style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(174 80% 60%)" }}>
                Tom · Restaurant manager
              </p>
              <p className="mb-2" style={{ color: "hsl(210 20% 70%)" }}>
                Runs a busy London restaurant with limited seating and high demand at peak times.
              </p>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Wants to fill tables efficiently without over‑promising wait times.</li>
                <li>Needs better visibility into ratings and guest feedback.</li>
                <li>Is looking for tools to manage queues, not just take bookings.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pain points & value matrix */}
        <section className="mb-12 text-xs md:text-sm">
          <h2 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(210 15% 45%)" }}>
            Pain points & value
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="rounded-2xl p-4"
              style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)" }}
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(0 72% 60%)" }}>
                Customer pain points
              </h3>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Unreliable wait‑time estimates and queues that suddenly drop users.</li>
                <li>Arbitrary 2km restriction that doesn&apos;t match actual waiting time.</li>
                <li>App perceived as slow, crash‑prone, and battery‑hungry.</li>
                <li>Poorly managed expectations at the door, leading to negative reviews.</li>
              </ul>
            </div>
            <div
              className="rounded-2xl p-4"
              style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)" }}
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(42 90% 58%)" }}>
                Value matrix highlights
              </h3>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>High value: accurate wait times, reliable queues, and loyalty rewards.</li>
                <li>Quick wins: app stability, loyalty programme, and clearer 2km messaging.</li>
                <li>Longer‑term &quot;north star&quot;: deeper recommendations and menu‑level ratings.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution & roadmap */}
        <section className="mb-12 text-xs md:text-sm">
          <h2 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(210 15% 45%)" }}>
            Solution & Q1 roadmap
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div
              className="rounded-2xl p-4"
              style={{ background: "hsl(174 80% 60% / 0.08)", border: "1px solid hsl(174 80% 60% / 0.2)" }}
            >
              <h3 className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: "hsl(174 80% 60%)" }}>
                <span>⏱️</span> Improve wait‑time accuracy
              </h3>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Upgrade restaurant platform with SMS alerts for both app users and walk‑ins.</li>
                <li>Align queue messaging and cut‑off rules with real operations.</li>
                <li>Set restaurant‑level usage targets (e.g. 20 reservations/week) to track impact.</li>
              </ul>
            </div>
            <div
              className="rounded-2xl p-4"
              style={{ background: "hsl(174 80% 60% / 0.08)", border: "1px solid hsl(174 80% 60% / 0.2)" }}
            >
              <h3 className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: "hsl(174 80% 60%)" }}>
                <span>⭐</span> Loyalty and profiles
              </h3>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Launch a clear points‑based loyalty programme with cash‑equivalent rewards.</li>
                <li>Design richer restaurant profiles: photos, menu highlights, pricing, reviews.</li>
                <li>Lay groundwork for sponsored placements once UX fundamentals are strong.</li>
              </ul>
            </div>
            <div
              className="rounded-2xl p-4"
              style={{ background: "hsl(174 80% 60% / 0.08)", border: "1px solid hsl(174 80% 60% / 0.2)" }}
            >
              <h3 className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: "hsl(174 80% 60%)" }}>
                <span>⚙️</span> Performance & tech debt
              </h3>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Stabilise the app to reduce crashes and startup time.</li>
                <li>Optimise background behaviour to reduce battery drain.</li>
                <li>Treat performance as a prerequisite for any new feature adoption.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* KPIs */}
        <section className="mb-8 text-xs md:text-sm">
          <h2 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(210 15% 45%)" }}>
            KPIs & expected impact
          </h2>
          <div
            className="rounded-2xl p-4 md:p-5"
            style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)" }}
          >
            <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
              <li>
                <strong>Tables booked per week:</strong> target 10% uplift across the network (e.g. from 50k to 55k bookings) as wait‑time accuracy and loyalty improve.
              </li>
              <li>
                <strong>Retention:</strong> increase returning bookings every two weeks by 10% through rewards and clearer expectations.
              </li>
              <li>
                <strong>Restaurant growth:</strong> attract more venues through richer profiles, incentives, and 3‑month free trials.
              </li>
              <li>
                <strong>ROI:</strong> modelled ~70% first‑year return on combined internal and marketing investment.
              </li>
            </ul>
          </div>
        </section>

        <p className="text-[10px] text-center" style={{ color: "hsl(210 15% 35%)" }}>
          This is a product concept for portfolio purposes only. Not affiliated with WalkUp or its parent companies.
        </p>
      </div>
    </div>
  );
};

export default CaseStudyWalkup;

