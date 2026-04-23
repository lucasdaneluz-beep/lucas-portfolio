import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const workItems = [
  {
    id: "walkup",
    index: "01",
    title: "WalkUp — Smarter Queues",
    summary: "Queue transparency, loyalty, and growth for a UK restaurant waitlist marketplace.",
    metric: "3× loyalty engagement uplift",
    tags: ["Marketplace", "Waitlist UX", "Loyalty", "Product Strategy"],
    comingSoon: false,
  },
  {
    id: "hipen-media",
    index: "02",
    title: "Hipen Media — User Onboarding",
    summary: "Restructuring a multi-segment onboarding flow through research and lean MVP.",
    metric: "40% faster onboarding completion",
    tags: ["Discovery", "Onboarding", "MVP", "Research"],
    comingSoon: false,
  },
  {
    id: "westpak",
    index: "03",
    title: "Westpak — Cost Optimisation",
    summary: "Cost reduction across 3 categories, aligning Finance and Operations.",
    metric: "25% cost reduction delivered",
    tags: ["Stakeholder Management", "Cost Optimisation", "Supply Chain"],
    comingSoon: false,
  },
  {
    id: "moneybox",
    index: "04",
    title: "Moneybox Redesigned",
    summary: "Reimagining the savings & investment journey for clarity and confidence.",
    metric: "Full UX redesign concept",
    tags: ["UX Strategy", "Fintech", "Navigation"],
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

const principles = [
  {
    title: "Research Before Roadmap",
    description: "Understand the real problem before moving to solutions.",
  },
  {
    title: "Baselines Before Launch",
    description: "Define success early so progress can be measured properly.",
  },
  {
    title: "Alignment Is Part Of The Work",
    description: "Good product work means creating shared understanding, not just shipping.",
  },
  {
    title: "Commercial Reality Matters",
    description: "The best decisions work for users and make sense for the business.",
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
              <span className="line">LUCAS</span>
              <span className="line">DANELUZ</span>
            </h1>
            <div className="hero-copy">
              <p className="hero-statement">
                From noise to clear priorities and measurable outcomes.
              </p>
              <p className="hero-intro">
                I help teams bring structure to ambiguity across user needs, business goals, and delivery constraints.
              </p>
            </div>
            <div className="hero-foot">
              <div className="hero-actions">
                <Link className="hero-cta" to="/case-studies/walkup">View Case Studies →</Link>
                <Link className="hero-cta secondary" to="/about">About Me →</Link>
              </div>
              <div className="hero-tags">
                10+ Years Across SaaS, FMCG, And Supply Chain
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-INDUSTRY */}
      <section className="manifesto reveal">
        <div className="wrap">
          <h2>A PRODUCT LENS<br />SHAPED BY <span style={{ color: "var(--accent)" }}>COMPLEXITY</span>.</h2>
          <div className="mf-body">
            <p>I&apos;ve worked in environments where customer needs, operational complexity, and commercial pressure all matter at once. That&apos;s the lens I bring to product.</p>
            <p>Across SaaS, FMCG, and supply chain, I&apos;ve learned how to work through ambiguity, weigh trade-offs, and focus teams on what matters most. I&apos;m at my best when the problem is messy, the inputs are noisy, and clarity needs to be created before progress can happen.</p>
          </div>
        </div>
      </section>

      {/* HOW I CREATE CLARITY */}
      <section className="how-i-work reveal">
        <div className="wrap">
          <div className="hw-head">
            <h2>HOW I CREATE CLARITY</h2>
            <p>The product work I value most is grounded in evidence, shaped by alignment, and measured by outcomes.</p>
          </div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <article key={principle.title} className="principle-card">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="work-section reveal" id="work">
        <div className="wrap">
          <div className="work-head">
            <h2>SELECTED WORK</h2>
            <p>A few examples of how I&apos;ve approached product problems across growth, onboarding, experience design, and operational improvement.</p>
          </div>
          <div className="work-list">
            {workItems.map((w) => {
              if (w.comingSoon) {
                return (
                  <div key={w.id} className="work-row soon">
                    <div className="w-info">
                      <span className="w-title">{w.title}</span>
                    </div>
                    <span className="w-arrow">—</span>
                  </div>
                );
              }
              return (
                <Link key={w.id} to={`/case-studies/${w.id}`} className="work-row">
                  <div className="w-info">
                    <span className="w-title">{w.title}</span>
                    {w.metric && <span className="w-metric">{w.metric}</span>}
                  </div>
                  <span className="w-arrow">→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <div className="wrap">
          <h2>
            BRING <em>CLARITY</em> TO COMPLEX PRODUCT PROBLEMS.{" "}
            <Link to="/contact">START HERE →</Link>
          </h2>
          <p className="cta-copy">
            If that sounds like the kind of challenge you&apos;re hiring for, I&apos;d love to connect.
          </p>
          <div className="cta-links">
            <a href="mailto:lucas.daneluz@gmail.com">lucas.daneluz@gmail.com</a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer">/in/lucasdaneluz</a>
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
