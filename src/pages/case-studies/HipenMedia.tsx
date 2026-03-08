import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CaseStudyHipenMedia = () => {
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
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "hsl(174 80% 60%)" }}>PM Portfolio · Case Study 03</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3" style={{ color: "hsl(210 40% 98%)" }}>
          Hipen Media <span style={{ color: "hsl(174 80% 60%)" }}>User Onboarding</span>
        </h1>
        <p className="text-sm md:text-base max-w-4xl mb-8" style={{ color: "hsl(210 20% 65%)" }}>
          Bringing structure to a complex, multi-segment onboarding flow by applying qualitative research, dataset filtering, and a lean MVP approach — reducing onboarding time by 20%.
        </p>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[
            { value: "20%", label: "Faster onboarding" },
            { value: "4+", label: "User segments served" },
            { value: "1", label: "Lean MVP scope" },
            { value: "0", label: "Over-engineered features" },
          ].map(({ value, label }) => (
            <div key={label} className="rounded-2xl p-4 text-center" style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)" }}>
              <p className="text-2xl font-black mb-1" style={{ color: "hsl(174 80% 60%)" }}>{value}</p>
              <p className="text-[11px]" style={{ color: "hsl(210 15% 50%)" }}>{label}</p>
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
              <li>Onboarding workflow was messy and one-size-fits-all despite vastly different user types.</li>
              <li>A massive, unfiltered dataset was creating friction and slowing every new user's first experience.</li>
              <li>No clear MVP scope meant risk of over-engineering low-impact features.</li>
            </ul>
          </div>
          <div className="rounded-2xl p-4" style={{ background: "hsl(174 80% 60% / 0.08)", border: "1px solid hsl(174 80% 60% / 0.2)" }}>
            <h2 className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: "hsl(174 80% 60%)" }}>
              <span>💡</span> Solution
            </h2>
            <ul className="space-y-1.5" style={{ color: "hsl(210 20% 70%)" }}>
              <li>Conducted qualitative research and mapped workflows to surface common pain points across segments.</li>
              <li>Collaborated with engineering to apply logical dataset filters, removing the core bottleneck.</li>
              <li>Defined a lean MVP: a streamlined form asking only relevant questions, plus a simple insights dashboard.</li>
            </ul>
          </div>
          <div className="rounded-2xl p-4" style={{ background: "hsl(42 90% 58% / 0.08)", border: "1px solid hsl(42 90% 58% / 0.2)" }}>
            <h2 className="flex items-center gap-2 text-sm font-bold mb-2" style={{ color: "hsl(42 90% 58%)" }}>
              <span>📊</span> Impact & rationale
            </h2>
            <ul className="space-y-1.5" style={{ color: "hsl(210 20% 70%)" }}>
              <li>Onboarding time reduced by 20% through a leaner, more relevant flow.</li>
              <li>Avoided over-engineering by anchoring scope to validated pain points, not assumptions.</li>
              <li>Established a repeatable research-to-MVP pattern applicable across future product work.</li>
            </ul>
          </div>
        </div>

        {/* Overview */}
        <section className="grid md:grid-cols-2 gap-8 mb-12 text-xs md:text-sm" style={{ color: "hsl(210 20% 70%)" }}>
          <div className="space-y-4">
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(210 15% 45%)" }}>
                About Hipen Media
              </h2>
              <p>
                Hipen Media operates an onboarding platform serving a diverse range of media clients across the Latino community in the USA. These range from digital websites and physical magazines to newspapers — each with distinct go-to-market channels and product challenges.
              </p>
            </div>
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(210 15% 45%)" }}>
                Challenge
              </h2>
              <p>
                The onboarding workflow needed to serve radically different user types from a single, unwieldy dataset. Without structure, every new user faced an overwhelming, irrelevant experience that slowed time-to-value.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(210 15% 45%)" }}>
                Role
              </h2>
              <p>
                Owned end-to-end product discovery — conducting qualitative research, mapping workflows, collaborating with engineering on dataset logic, and defining the prioritised MVP scope.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(210 15% 45%)" }}>
                  Focus
                </h3>
                <ul className="space-y-1.5 list-disc pl-4">
                  <li>Qualitative research</li>
                  <li>Dataset filtering</li>
                  <li>MVP scoping</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "hsl(210 15% 45%)" }}>
                  Outcomes
                </h3>
                <ul className="space-y-1.5 list-disc pl-4">
                  <li>20% faster onboarding</li>
                  <li>Leaner form flow</li>
                  <li>Simpler insights dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* User segments */}
        <section className="mb-12 text-xs md:text-sm">
          <h2 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(210 15% 45%)" }}>
            User segments
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Digital publishers", desc: "Websites and online-first media brands with high content velocity and digital-native audiences." },
              { label: "Print magazines", desc: "Physical publications with subscription models, longer production cycles, and legacy workflows." },
              { label: "Newspapers", desc: "High-frequency outlets balancing breaking news with archive depth and multi-channel distribution." },
              { label: "Hybrid media", desc: "Brands operating across print and digital with complex, overlapping go-to-market requirements." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-2xl p-4" style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)" }}>
                <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(174 80% 60%)" }}>{label}</p>
                <p style={{ color: "hsl(210 20% 70%)" }}>{desc}</p>
              </div>
            ))}
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
                  <span>🔍</span> Research & mapping
                </h3>
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "hsl(0 72% 51% / 0.12)", color: "hsl(0 72% 60%)", border: "1px solid hsl(0 72% 51% / 0.25)" }}>High</span>
              </div>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Conducted qualitative interviews across user segments to surface common friction points.</li>
                <li>Mapped existing workflows end-to-end to identify where the dataset was creating bottlenecks.</li>
                <li>Synthesised findings into a clear problem statement shared with engineering and stakeholders.</li>
              </ul>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "hsl(174 80% 60% / 0.08)", border: "1px solid hsl(174 80% 60% / 0.2)" }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="flex items-center gap-2 text-sm font-bold" style={{ color: "hsl(174 80% 60%)" }}>
                  <span>⚙️</span> Dataset filtering
                </h3>
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "hsl(0 72% 51% / 0.12)", color: "hsl(0 72% 60%)", border: "1px solid hsl(0 72% 51% / 0.25)" }}>High</span>
              </div>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Partnered with the engineering squad to apply logical filters to the underlying dataset.</li>
                <li>Reduced the data surface each user type encountered to only what was relevant to them.</li>
                <li>Unblocked the core bottleneck without a full data architecture overhaul.</li>
              </ul>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "hsl(174 80% 60% / 0.08)", border: "1px solid hsl(174 80% 60% / 0.2)" }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="flex items-center gap-2 text-sm font-bold" style={{ color: "hsl(174 80% 60%)" }}>
                  <span>🚀</span> MVP definition
                </h3>
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "hsl(42 90% 58% / 0.12)", color: "hsl(42 90% 58%)", border: "1px solid hsl(42 90% 58% / 0.25)" }}>Medium</span>
              </div>
              <ul className="space-y-1.5 list-disc pl-4" style={{ color: "hsl(210 20% 70%)" }}>
                <li>Defined a prioritised MVP scope anchored to validated pain points, not assumptions.</li>
                <li>Streamlined the onboarding form to ask only segment-relevant questions.</li>
                <li>Paired the form with a simple dashboard surfacing the most actionable insights.</li>
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
              { value: "20%", label: "Onboarding time", sub: "Reduction post-MVP launch" },
              { value: "4+", label: "Segments covered", sub: "From a single streamlined flow" },
              { value: "Lean", label: "MVP approach", sub: "No over-engineered features shipped" },
              { value: "1st", label: "Structured discovery", sub: "Research-to-MVP pattern established" },
            ].map(({ value, label, sub }) => (
              <div key={label} className="rounded-2xl p-4" style={{ background: "hsl(210 28% 10%)", border: "1px solid hsl(210 20% 18%)" }}>
                <p className="text-2xl font-black mb-0.5" style={{ color: "hsl(174 80% 60%)" }}>{value}</p>
                <p className="text-xs font-bold mb-0.5" style={{ color: "hsl(210 40% 88%)" }}>{label}</p>
                <p className="text-[10px]" style={{ color: "hsl(210 15% 50%)" }}>{sub}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-[10px] text-center mt-8" style={{ color: "hsl(210 15% 35%)" }}>
          This is an independent product concept created for portfolio purposes only.
        </p>
      </div>
    </div>
  );
};

export default CaseStudyHipenMedia;
