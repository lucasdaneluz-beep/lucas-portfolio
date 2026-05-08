import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const impactItems = [
  { metric: "3×", label: "Loyalty engagement uplift", detail: "WalkUp" },
  { metric: "40%", label: "Faster onboarding completion", detail: "Hipen Media" },
  { metric: "25%", label: "Cost reduction delivered", detail: "Westpak" },
];

const workTeaser = [
  { id: "walkup", index: "01", title: "WalkUp — Smarter Queues" },
  { id: "hipen-media", index: "02", title: "Hipen Media — User Onboarding" },
  { id: "westpak", index: "03", title: "Westpak — Cost Optimisation" },
  { id: "moneybox", index: "04", title: "Moneybox Redesigned" },
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
            <p className="hero-role">Product Manager</p>
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
                <Link className="hero-cta" to="/work">View Case Studies →</Link>
                <Link className="hero-cta secondary" to="/about">About Me →</Link>
                <Link className="hero-cta secondary" to="/contact">Let&apos;s Talk →</Link>
              </div>
            </div>
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

      {/* WORK TEASER */}
      <section className="work-teaser reveal">
        <div className="wrap">
          <div className="work-teaser-head">
            <h2>FEATURED WORK</h2>
            <Link to="/work" className="work-teaser-cta">View all →</Link>
          </div>
          <div className="work-teaser-list">
            {workTeaser.map((w) => (
              <Link key={w.id} to={`/case-studies/${w.id}`} className="work-teaser-item">
                <span className="work-teaser-index">{w.index}</span>
                <span className="work-teaser-title">{w.title}</span>
                <span className="work-teaser-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <div className="wrap">
          <h2>
            HIRING FOR A <em>PM</em> WHO CAN BRING <em className="hl-yellow">STRUCTURE</em>, <em className="hl-yellow">ALIGNMENT</em>, AND <em className="hl-yellow">MEASURABLE PROGRESS</em>?{" "}
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
