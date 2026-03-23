import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackButton from "@/components/ui/BackButton";

const CaseStudyWestpak = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Westpak – Cost Optimisation | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, hsl(210 35% 5%) 0%, hsl(210 28% 8%) 50%, hsl(210 35% 5%) 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-20">

        <BackButton />

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3" style={{ background: "hsl(174 80% 60% / 0.12)", border: "1px solid hsl(174 80% 60% / 0.25)" }}>
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "hsl(174 80% 60%)" }}>Case Study 03 / 04</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3" style={{ color: "hsl(210 40% 98%)" }}>
          Westpak <span style={{ color: "hsl(174 80% 60%)" }}>Cost Optimisation</span>
        </h1>
        <p className="text-sm md:text-base max-w-4xl mb-8" style={{ color: "hsl(210 20% 65%)" }}>
          Leading a cross-functional cost optimisation project across three core categories — navigating Finance and Operations stakeholders, running a 6-vendor tender, and delivering a 25% cost reduction through a parallel trial strategy.
        </p>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[
            { value: "25%", label: "Cost optimisation delivered" },
            { value: "3", label: "Core categories optimised" },
            { value: "6", label: "Vendors in tender exercise" },
            { value: "2", label: "Key stakeholder groups aligned" },
          ].map(({ value, label }) => (
            <div key={label} className="rounded-2xl p-4 text-center" style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)", borderTop: "2px solid hsl(174 80% 60% / 0.4)" }}>
              <p className="text-2xl font-black mb-1.5" style={{ color: "hsl(174 80% 60%)" }}>{value}</p>
              <p className="text-xs font-medium" style={{ color: "hsl(210 20% 65%)" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Problem / Solution / Impact */}
        <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm mb-12">
          <div className="rounded-2xl p-4" style={{ background: "hsl(0 72% 51% / 0.08)", border: "1px solid hsl(0 72% 51% / 0.2)" }}>
            <h2 className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: "hsl(0 72% 60%)" }}>
              <span>🎯</span> Problem
            </h2>
            <ul className="space-y-1.5" style={{ color: "hsl(210 20% 70%)" }}>
              <li>Three core categories were carrying avoidable cost due to untested vendor assumptions.</li>
              <li>Finance was mid month-end close, making data access a significant early blocker.</li>
              <li>Operations was resistant to vendor switching due to supply chain reliability concerns.</li>
            </ul>
          </div>
          <div className="rounded-2xl p-4" style={{ background: "hsl(174 80% 60% / 0.08)", border: "1px solid hsl(174 80% 60% / 0.2)" }}>
            <h2 className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: "hsl(174 80% 60%)" }}>
              <span>💡</span> Solution
            </h2>
            <ul className="space-y-1.5" style={{ color: "hsl(210 20% 70%)" }}>
              <li>Reframed the Finance conversation around long-term margin impact to secure buy-in and data access.</li>
              <li>Ran a structured 6-vendor tender to identify best-fit alternatives across all three categories.</li>
              <li>Proposed a parallel trial strategy with dual-source tracking to de-risk the transition for Operations.</li>
            </ul>
          </div>
          <div className="rounded-2xl p-4" style={{ background: "hsl(42 90% 58% / 0.08)", border: "1px solid hsl(42 90% 58% / 0.2)" }}>
            <h2 className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: "hsl(42 90% 58%)" }}>
              <span>📊</span> Impact & rationale
            </h2>
            <ul className="space-y-1.5" style={{ color: "hsl(210 20% 70%)" }}>
              <li>Delivered 25% cost optimisation across three categories without disrupting supply chain continuity.</li>
              <li>Parallel trial approach validated new vendors before full commitment, removing operational risk.</li>
              <li>Established a reusable fail-safe framework for future internal tool and vendor changes.</li>
            </ul>
          </div>
        </div>

        {/* Overview */}
        <section className="grid md:grid-cols-2 gap-8 mb-12 text-xs md:text-sm" style={{ color: "hsl(210 20% 70%)" }}>
          <div className="space-y-4">
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(210 15% 45%)" }}>
                About Westpak
              </h2>
              <p>
                Westpak is a packaging and supply chain business operating across multiple product categories. The cost optimisation project focused on three core categories where vendor relationships had not been competitively reviewed, leaving significant margin improvement on the table.
              </p>
            </div>
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(210 15% 45%)" }}>
                Challenge
              </h2>
              <p>
                The project required navigating two resistant internal stakeholder groups — Finance, protective of their data during month-end close, and Operations, concerned about supply chain disruption from vendor switching — while still delivering a meaningful cost outcome.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(210 15% 45%)" }}>
                Role
              </h2>
              <p>
                Led end-to-end cost optimisation — owning stakeholder alignment, running the vendor tender process, designing the parallel trial strategy, and ensuring tracking systems could support dual-sourcing throughout the transition.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(210 15% 45%)" }}>
                  Focus
                </h3>
                <ul className="space-y-1.5 list-disc pl-4">
                  <li>Stakeholder alignment</li>
                  <li>Vendor tender</li>
                  <li>Parallel trial design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(210 15% 45%)" }}>
                  Outcomes
                </h3>
                <ul className="space-y-1.5 list-disc pl-4">
                  <li>25% cost reduction</li>
                  <li>Zero supply disruption</li>
                  <li>Reusable fail-safe framework</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stakeholder strategy */}
        <section className="mb-12 text-xs md:text-sm">
          <h2 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(210 15% 45%)" }}>
            Stakeholder strategy
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl p-4" style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)" }}>
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(174 80% 60%)" }}>Finance — securing the data</p>
              <p className="mb-2" style={{ color: "hsl(210 20% 70%)" }}>
                Initial approach of simply requesting data hit a wall during month-end close. Pivoted to framing the conversation around long-term margin impact rather than a data request.
              </p>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Reframed the ask as a strategic margin initiative, not an ad-hoc data pull.</li>
                <li>Demonstrated the cost of inaction to create urgency beyond the close cycle.</li>
                <li>Secured buy-in and full data access needed to proceed with the tender.</li>
              </ul>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)" }}>
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(174 80% 60%)" }}>Operations — managing change risk</p>
              <p className="mb-2" style={{ color: "hsl(210 20% 70%)" }}>
                Operations raised valid concerns about supply chain continuity when new vendors were identified. Rather than overriding those concerns, designed a trial approach that addressed them directly.
              </p>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Proposed a parallel trial — running new and existing vendors simultaneously.</li>
                <li>Updated tracking systems to support dual-sourcing without operational complexity.</li>
                <li>Gave Operations a visible safety net before any full vendor transition.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="mb-12 text-xs md:text-sm">
          <h2 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(210 15% 45%)" }}>
            Approach & process
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl p-4" style={{ background: "hsl(174 80% 60% / 0.08)", border: "1px solid hsl(174 80% 60% / 0.2)" }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="flex items-center gap-2 text-sm font-bold" style={{ color: "hsl(174 80% 60%)" }}>
                  <span>📊</span> Vendor tender
                </h3>
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "hsl(0 72% 51% / 0.12)", color: "hsl(0 72% 60%)", border: "1px solid hsl(0 72% 51% / 0.25)" }}>High</span>
              </div>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Ran a structured tender across 6 vendors for all three categories.</li>
                <li>Evaluated on price, reliability, lead times, and supply chain resilience.</li>
                <li>Shortlisted candidates before proposing to Operations for trial.</li>
              </ul>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "hsl(174 80% 60% / 0.08)", border: "1px solid hsl(174 80% 60% / 0.2)" }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="flex items-center gap-2 text-sm font-bold" style={{ color: "hsl(174 80% 60%)" }}>
                  <span>🔁</span> Parallel trial
                </h3>
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "hsl(0 72% 51% / 0.12)", color: "hsl(0 72% 60%)", border: "1px solid hsl(0 72% 51% / 0.25)" }}>High</span>
              </div>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Ran new and existing vendors in parallel to validate performance without full exposure.</li>
                <li>Ensured tracking systems handled dual-sourcing complexity cleanly.</li>
                <li>Used trial data to build the business case for full transition.</li>
              </ul>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "hsl(174 80% 60% / 0.08)", border: "1px solid hsl(174 80% 60% / 0.2)" }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="flex items-center gap-2 text-sm font-bold" style={{ color: "hsl(174 80% 60%)" }}>
                  <span>⚙️</span> Systems & tracking
                </h3>
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "hsl(42 90% 58% / 0.12)", color: "hsl(42 90% 58%)", border: "1px solid hsl(42 90% 58% / 0.25)" }}>Medium</span>
              </div>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Updated internal tracking to support dual-sourcing across the trial period.</li>
                <li>Maintained full visibility for Operations throughout the transition.</li>
                <li>Ensured no reporting gaps during the vendor switch period.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* KPIs */}
        <section className="mb-8 text-xs md:text-sm">
          <h2 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(210 15% 45%)" }}>
            KPIs & outcomes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { value: "25%", label: "Cost reduction", sub: "Across 3 core categories" },
              { value: "6", label: "Vendors tendered", sub: "Before shortlisting for trial" },
              { value: "0", label: "Supply disruptions", sub: "Throughout the transition" },
              { value: "2", label: "Stakeholder groups", sub: "Finance & Ops aligned" },
            ].map(({ value, label, sub }) => (
              <div key={label} className="rounded-2xl p-4" style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)" }}>
                <p className="text-2xl font-black mb-0.5" style={{ color: "hsl(174 80% 60%)" }}>{value}</p>
                <p className="text-xs font-bold mb-0.5" style={{ color: "hsl(210 40% 88%)" }}>{label}</p>
                <p className="text-[10px]" style={{ color: "hsl(210 15% 50%)" }}>{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key learning */}
        <section className="mb-8 text-xs md:text-sm">
          <h2 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(210 15% 45%)" }}>
            Key learning
          </h2>
          <div className="rounded-2xl p-5" style={{ background: "hsl(174 80% 60% / 0.06)", border: "1px solid hsl(174 80% 60% / 0.2)" }}>
            <p style={{ color: "hsl(210 20% 75%)" }}>
              Internal changes — whether switching a vendor, updating an ERP, or changing a process — require a <strong style={{ color: "hsl(210 40% 88%)" }}>fail-safe approach</strong> to keep the business running smoothly. Running systems in parallel before committing to a full switch is not a sign of indecision; it's a structured way to validate change, maintain stakeholder trust, and protect operational continuity while still driving meaningful outcomes.
            </p>
          </div>
        </section>

        <div className="flex justify-between items-center mt-12 pt-6" style={{ borderTop: "1px solid hsl(210 20% 16%)" }}>
          <button onClick={() => navigate("/")} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-opacity hover:opacity-75" style={{ background: "hsl(210 28% 11%)", border: "1px solid hsl(210 20% 22%)", color: "hsl(210 20% 65%)" }}>
            <ArrowLeft size={13} /> All case studies
          </button>
          <button onClick={() => navigate("/case-studies/moneybox")} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-opacity hover:opacity-75" style={{ background: "hsl(174 80% 60% / 0.1)", border: "1px solid hsl(174 80% 60% / 0.3)", color: "hsl(174 80% 60%)" }}>
            Next: Moneybox <ArrowRight size={13} />
          </button>
        </div>

        <p className="text-[10px] text-center mt-6" style={{ color: "hsl(210 15% 35%)" }}>
          This is an independent case study created for portfolio purposes only. Not affiliated with Westpak.
        </p>
      </div>
    </div>
  );
};

export default CaseStudyWestpak;
