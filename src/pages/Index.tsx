import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import hwDiscover from "@/assets/hw-discover.png";
import hwDefine from "@/assets/hw-define.png";
import hwBaseline from "@/assets/hw-baseline.png";
import hwDeliver from "@/assets/hw-deliver.png";

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

const methodology = [
  { title: "Discover", description: "User research, data analysis, and stakeholder interviews to frame the real problem.", image: hwDiscover },
  { title: "Define",   description: "Synthesise insights into a clear strategy, prioritised roadmap, and success metrics.", image: hwDefine },
  { title: "Baseline", description: "Establish measurable benchmarks before shipping so progress is grounded in data, not assumption.", image: hwBaseline },
  { title: "Deliver",  description: "Ship iteratively, measure outcomes, and refine based on real-world feedback.", image: hwDeliver },
];

const Index = () => {
  const [methodTab, setMethodTab] = useState(0);
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
              <span className="line"><span style={{ color: "var(--accent)" }}>PRODUCT</span> MANAGER.</span>
            </h1>
            <div className="hero-foot">
              <a className="scroll-cue" href="#work">
                <span className="scroll-cue-arrow bounce-arrow">↓</span>
              </a>
              <div className="hero-tags">
                0→1 Builds · Stakeholder Alignment · User Research · Outcome-Led
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto reveal">
        <div className="wrap">
          <h2>TURNING REAL<br /><span style={{ color: "var(--accent)" }}>PAIN POINTS</span> INTO<br /><span style={{ color: "var(--accent)" }}>MEASURABLE IMPACT</span>.</h2>
          <div className="mf-body">
            <p>A commercially-driven PM with 10+ years across{" "}<strong style={{ color: "var(--ink)" }}>B2B SaaS, FMCG, and supply chain</strong>, always close to users, data, and business outcomes.</p>
            <p>I care about the parts of product that don't trend: baselines before launch, outcomes over outputs, and alignment as a deliverable.</p>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="how-i-work reveal">
        <div className="wrap">
          <div className="hw-head">
            <h2>HOW I WORK</h2>
            <p>A structured approach to building the right thing.</p>
          </div>
          <div className="hw-tabs">
            {methodology.map((m, i) => (
              <button key={m.title} className={`hw-tab${methodTab === i ? " active" : ""}`} onClick={() => setMethodTab(i)}>
                {m.title}
              </button>
            ))}
          </div>
          <div className="hw-panels">
            <div className="hw-panels-text">
              {methodology.map((m, i) => (
                <div key={m.title} className={`hw-panel${methodTab === i ? " active" : ""}`}>
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                </div>
              ))}
            </div>
            <div className="hw-panels-img">
              {methodology.map((m, i) => (
                <img
                  key={m.title}
                  src={m.image}
                  alt={m.title}
                  className="hw-img-item"
                  style={{ opacity: methodTab === i ? 1 : 0 }}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="work-section reveal" id="work">
        <div className="wrap">
          <div className="work-head">
            <h2>CASE STUDIES</h2>
            <p>Real problems · structured thinking · measurable impact</p>
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
            WANT TO <em>WORK</em>
            <br />
            TOGETHER?{" "}
            <Link to="/contact">START HERE →</Link>
          </h2>
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
