import { useEffect } from "react";
import { Link } from "react-router-dom";

const workItems = [
  {
    id: "walkup",
    index: "01",
    title: "WalkUp — Smarter Queues",
    summary: "Improved trust, queue transparency, and retention in a two-sided marketplace.",
    metric: "3× loyalty engagement uplift",
    problem: "Wait times felt unreliable, the app was unstable, and there was no loyalty loop to bring diners back.",
    tags: ["Marketplace", "Waitlist UX", "Loyalty"],
    visualLabel: "Marketplace Trust",
  },
  {
    id: "hipen-media",
    index: "02",
    title: "Hipen Media — User Onboarding",
    summary: "Reduced onboarding friction across multiple customer segments with a lean MVP.",
    metric: "40% faster onboarding completion",
    problem: "A one-size-fits-all onboarding flow and unfiltered dataset slowed time-to-value for every segment.",
    tags: ["Discovery", "Onboarding", "MVP"],
    visualLabel: "Segmentation Flow",
  },
  {
    id: "westpak",
    index: "03",
    title: "Westpak — Cost Optimisation",
    summary: "Aligned finance and operations around a cost-saving initiative without disrupting supply.",
    metric: "25% cost reduction delivered",
    problem: "Costs were inflated across three core categories, with internal resistance to changing suppliers.",
    tags: ["Stakeholder Management", "Cost Optimisation", "Supply Chain"],
    visualLabel: "Cost Programme",
  },
  {
    id: "moneybox",
    index: "04",
    title: "Moneybox Redesigned",
    summary: "Reimagining the savings & investment journey for clarity and confidence.",
    metric: "Full UX redesign concept",
    problem: "Savings and investing felt disconnected, with key rates and allowances buried too deep in the app.",
    tags: ["UX Strategy", "Fintech", "Navigation"],
    image: "/moneybox-redesign-comparison.png",
    visualLabel: "UX Redesign",
  },
  {
    id: "run-your-pace",
    index: "05",
    title: "Run Your Pace — Personal Build",
    summary: "Shipped a Couch-to-5K PWA because no existing app let me freely scroll interval timings.",
    metric: "Live PWA · Installable",
    problem: "Every running app I tried had fixed durations or clunky steppers. One scroll interaction was missing everywhere — so I built the whole app around it.",
    tags: ["Personal Build", "PWA", "Side Project"],
    visualLabel: "Run5K App",
  },
];

const Work = () => {
  useEffect(() => {
    document.title = "Work | Lucas Daneluz";
    return () => { document.title = "Lucas Daneluz – PM Portfolio"; };
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="work-section reveal" id="work">
        <div className="wrap">
          <div className="work-head">
            <h2>FEATURED WORK</h2>
            <p>Selected case studies showing how I move from ambiguity to focus, alignment, and measurable change.</p>
          </div>
          <div className="work-grid">
            {workItems.map((w) => (
              <Link key={w.id} to={`/case-studies/${w.id}`} className="work-card">
                <div className={`work-card-visual work-card-visual-${w.id}`}>
                  <span className="work-card-index">{w.index}</span>
                  {w.image ? (
                    <img src={w.image} alt={`${w.title} case study preview`} className="work-card-image" />
                  ) : (
                    <div className="work-card-visual-inner">
                      <span className="work-card-visual-label">{w.visualLabel}</span>
                      <div className="work-card-stat">{w.metric}</div>
                      <div className="work-card-mini-bars">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  )}
                </div>
                <div className="work-card-body">
                  <div className="work-card-topline">{w.tags.join(" · ")}</div>
                  <h3>{w.title}</h3>
                  <p>{w.summary}</p>
                  <p className="work-card-problem">{w.problem}</p>
                  <div className="work-card-footer">
                    <span className="work-card-metric">{w.metric}</span>
                    <span className="work-card-cta">View Case Study →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer-b">
        <div className="wrap">
          <span>© 2026 Lucas Daneluz</span>
          <div className="socials">
            <a href="mailto:lucas.daneluz@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Work;
