import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import defineGraphic from "@/assets/hw-define.png";
import discoverGraphic from "@/assets/hw-discover.png";
import baselineGraphic from "@/assets/hw-baseline.png";
import deliverGraphic from "@/assets/hw-deliver.png";

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
    comingSoon: false,
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
    comingSoon: false,
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
    comingSoon: false,
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
    comingSoon: false,
  },
  {
    id: "next",
    index: "05",
    title: "Next Case Study",
    summary: "Something new is in the works. A product concept exploring AI-driven discovery.",
    metric: "",
    tags: ["AI", "Music", "Discovery"],
    comingSoon: true,
  },
];

const snapshotItems = [
  { label: "Experience", value: "10+ years across SaaS, FMCG, and supply chain" },
  { label: "Current focus", value: "Product Manager opportunities" },
  { label: "Strengths", value: "Discovery, prioritisation, alignment, measurable outcomes" },
  { label: "Location", value: "London, UK" },
];

const impactItems = [
  { metric: "3×", label: "Loyalty engagement uplift", detail: "WalkUp" },
  { metric: "40%", label: "Faster onboarding completion", detail: "Hipen Media" },
  { metric: "25%", label: "Cost reduction delivered", detail: "Westpak" },
];

const frameworkSteps = [
  {
    title: "Understand",
    description: "User research, workflow mapping, and problem framing before solutions.",
    image: defineGraphic,
  },
  {
    title: "Prioritise",
    description: "Trade-offs, baselines, and scope decisions shaped by value and feasibility.",
    image: discoverGraphic,
  },
  {
    title: "Align",
    description: "Shared clarity across stakeholders, engineering, operations, and delivery.",
    image: baselineGraphic,
  },
  {
    title: "Measure",
    description: "Success metrics defined early so progress is visible after launch.",
    image: deliverGraphic,
  },
];

const reasons = [
  {
    title: "Commercially Grounded",
    description: "I’m comfortable making product decisions close to revenue, cost, and operational reality.",
  },
  {
    title: "Strong In Ambiguity",
    description: "My best work happens when a team needs structure, not just speed.",
  },
  {
    title: "Built For Cross-Functional Work",
    description: "I bridge user needs, business constraints, and delivery realities without losing clarity.",
  },
];

const Index = () => {
  const heroMainRef = useRef<HTMLDivElement>(null);

  // Scroll reveal
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

  // Hero headline stagger clip-reveal
  useEffect(() => {
    const lines = document.querySelectorAll("h1.display .line");
    lines.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = i * 80 + "ms";
    });
    requestAnimationFrame(() => {
      lines.forEach((el) => el.classList.add("in"));
    });
  }, []);

  // Cursor spotlight on hero
  useEffect(() => {
    const hero = heroMainRef.current;
    if (!hero) return;
    const handler = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
      hero.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
    };
    hero.addEventListener("pointermove", handler);
    return () => hero.removeEventListener("pointermove", handler);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-main reveal" ref={heroMainRef}>
          <div className="wrap">
            <h1 className="display">
              <span className="line">PRODUCT</span>
              <span className="line">MANAGER</span>
            </h1>
            <div className="hero-copy">
              <p className="hero-statement">
                Turning <span className="hero-statement-accent">ambiguous problems</span> into focused roadmaps and <span className="hero-statement-accent">measurable outcomes.</span>
              </p>
              <p className="hero-intro">
                10+ years across B2B SaaS, FMCG, and supply chain. Strongest in discovery, prioritisation, stakeholder alignment, and bringing clarity to ambiguous problems.
              </p>
              <p className="hero-availability">
                Open to Product Manager opportunities in London and remote.
              </p>
            </div>
            <div className="hero-foot">
              <div className="hero-actions">
                <Link className="hero-cta" to="/case-studies/walkup">View Case Studies →</Link>
                <a className="hero-cta secondary" href="/Lucas_Daneluz-CV.pdf" target="_blank" rel="noopener noreferrer">Download CV →</a>
                <Link className="hero-cta secondary" to="/contact">Let&apos;s Talk →</Link>
              </div>
              <div className="hero-tags hero-trust-strip">
                <span>Based in London</span>
                <span>B2B SaaS · Marketplace · Operations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="snapshot reveal">
        <div className="wrap">
          <div className="snapshot-head">
            <h2>AT A GLANCE</h2>
            <p>The essentials, before you read further.</p>
          </div>
          <div className="snapshot-grid">
            {snapshotItems.map((item) => (
              <article key={item.label} className="snapshot-card">
                <span className="snapshot-label">{item.label}</span>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="impact-strip reveal">
        <div className="wrap">
          <div className="impact-head">
            <h2>SELECTED IMPACT</h2>
            <p>Numbers from product, onboarding, and operations.</p>
          </div>
          <div className="impact-grid">
            {impactItems.map((item) => (
              <article key={item.detail} className="impact-card">
                <span className="impact-metric">{item.metric}</span>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="work-section reveal" id="work">
        <div className="wrap">
          <div className="work-head">
            <h2>FEATURED WORK</h2>
            <p>Selected case studies showing how I move from ambiguity to focus, alignment, and measurable change.</p>
          </div>
          <div className="work-grid">
            {workItems.map((w) => {
              if (w.comingSoon) {
                return (
                  <article key={w.id} className="work-card soon">
                    <div className="work-card-visual work-card-visual-soon">
                      <span className="work-card-index">{w.index}</span>
                      <span className="work-card-soon-label">Coming Soon</span>
                    </div>
                    <div className="work-card-body">
                      <div className="work-card-topline">{w.visualLabel ?? "In Progress"}</div>
                      <h3>{w.title}</h3>
                      <p>{w.summary}</p>
                    </div>
                  </article>
                );
              }

              return (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="how-i-work reveal">
        <div className="wrap">
          <div className="hw-head">
            <h2>HOW I WORK</h2>
            <p>A practical product rhythm from unclear problems to focused, measurable execution.</p>
          </div>
          <div className="framework-grid">
            {frameworkSteps.map((step) => (
              <article key={step.title} className="framework-card">
                <div className="framework-card-image">
                  <img src={step.image} alt="" />
                </div>
                <div className="framework-card-copy">
                  <span className="framework-label">{step.title}</span>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="manifesto reveal">
        <div className="wrap">
          <h2>BUILT ACROSS INDUSTRIES.<br />WIRED FOR <em>PRODUCT</em>.</h2>
          <div className="mf-body">
            <p>My product instincts were shaped in environments where customer needs, commercial pressure, and operational complexity collide. That makes me especially effective in roles where clarity and alignment are prerequisites to progress.</p>
          </div>
          <div className="principles-grid recruiter-grid">
            {reasons.map((reason) => (
              <article key={reason.title} className="principle-card">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <div className="wrap">
          <h2>
            HIRING FOR A <em>PM</em> WHO CAN BRING STRUCTURE, ALIGNMENT, AND MEASURABLE PROGRESS?{" "}
            <Link to="/contact">LET&apos;S TALK →</Link>
          </h2>
          <p className="cta-copy">
            Currently open to PM roles in London and remote.
          </p>
          <div className="cta-links">
            <a href="mailto:lucas.daneluz@gmail.com">lucas.daneluz@gmail.com</a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer">/in/lucasdaneluz</a>
            <a href="/Lucas_Daneluz-CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
            <span>London, UK</span>
          </div>
        </div>
      </section>

      <footer className="footer-b">
        <div className="wrap">
          <span>© 2026 Lucas Daneluz · Product Manager · London</span>
          <div className="socials">
            <a href="mailto:lucas.daneluz@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Index;
