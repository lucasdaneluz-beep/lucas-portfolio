import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const impactItems = [
  { metric: "Weeks → minutes", label: "Supplier data mapping", detail: "Platter" },
  { metric: "3×", label: "Loyalty engagement uplift", detail: "WalkUp" },
  { metric: "40%", label: "Faster onboarding completion", detail: "Hipen Media" },
];

const workTeaser = caseStudies.map(({ id, index, title }) => ({ id, index, title }));

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
            <p className="hero-role">Founding Product Manager</p>
            <div className="hero-copy">
              <p className="hero-statement">
                Most of my work starts before anyone agrees <span className="hero-statement-accent">what the problem is</span>. I try to get a team to one clear version of it, then keep the roadmap small enough to <span className="hero-statement-accent">actually ship</span>.
              </p>
              <p className="hero-intro">
                I was the Founding PM at Platter, a B2B SaaS platform for food manufacturers and wholesalers, until a restructure closed the role in November. Before Product I spent ten years in Procurement and supply chain, and that's still how I read a problem: what does it cost, who has to change what they do, and what would we see if it worked.
              </p>
              <p className="hero-availability">
                I'm looking for a Product Manager role in London or remote.
              </p>
            </div>
            <div className="hero-foot">
              <div className="hero-actions">
                <Link className="hero-cta" to="/work">View Case Studies →</Link>
                <Link className="hero-cta secondary" to="/about">About Me →</Link>
                <a className="hero-cta secondary" href="/Lucas_Daneluz-CV.pdf" target="_blank" rel="noopener noreferrer">Download CV →</a>
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
                <span className={`impact-metric${item.metric.length > 6 ? " impact-metric-long" : ""}`}>{item.metric}</span>
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
            If you&apos;re hiring a <em>Product Manager</em>, I&apos;d like to hear about the problem you&apos;re stuck on.{" "}
            <Link to="/contact">GET IN TOUCH →</Link>
          </h2>
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

export default Index;
