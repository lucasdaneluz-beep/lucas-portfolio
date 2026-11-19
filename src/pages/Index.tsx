import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const impactItems = [
  { metric: "Weeks → minutes", label: "Supplier data mapping", detail: "Platter", id: "platter-onboarding" },
  { metric: "3×", label: "Loyalty engagement uplift", detail: "WalkUp", id: "walkup" },
  { metric: "40%", label: "Faster onboarding completion", detail: "Hipen Media", id: "hipen-media" },
];

const strengths = [
  { number: "01", title: "Process mapping and workflow design", detail: "Map the current process, find the friction and design a clearer path." },
  { number: "02", title: "Discovery and prioritisation", detail: "Use research, evidence and constraints to decide what to solve first." },
  { number: "03", title: "Commercial judgement and measurable outcomes", detail: "Connect product decisions to revenue, savings and the measures that show progress." },
  { number: "04", title: "Cross functional delivery", detail: "Work with Product, engineering, Finance and Operations to get decisions shipped." },
];

const featuredWorkIds = ["platter-onboarding", "hipen-media", "westpak"];
const workTeaser = caseStudies
  .filter(({ id }) => featuredWorkIds.includes(id))
  .map(({ id, index, title }) => ({ id, index, title }));

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
        <div className="hero-main" ref={heroMainRef}>
          <div className="wrap">
            <h1 className="display">
              <span className="line">LUCAS</span>
              <span className="line">DANELUZ</span>
            </h1>
            <p className="hero-role">Product Manager</p>
            <div className="hero-copy">
              <p className="hero-statement">
                Most of my work starts before anyone agrees <span className="hero-statement-accent">what the problem is</span>. I try to get a team to one clear version of it, then keep the roadmap small enough to <span className="hero-statement-accent">actually ship</span>.
              </p>
              <p className="hero-intro">
                I was the Founding PM at Platter, a B2B SaaS platform for food manufacturers and wholesalers, until a restructure closed the role in November.
              </p>
              <p className="hero-intro hero-intro-secondary">
                Before Product I spent ten years in Procurement and supply chain, so I still read a product problem commercially. I look at where the revenue is and where it can be created, where it can save the organisation money, how it will affect the user and how we will measure the result.
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

      {/* STRENGTHS */}
      <section className="strengths-strip reveal">
        <div className="wrap">
          <div className="impact-head">
            <h2>HOW I WORK</h2>
            <p>Four ways I approach Product work.</p>
          </div>
          <div className="strengths-grid">
            {strengths.map((strength) => (
              <article key={strength.number} className="strength-card hover-lift">
                <span className="strength-number">{strength.number}</span>
                <h3>{strength.title}</h3>
                <p>{strength.detail}</p>
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
              <Link key={item.detail} to={`/case-studies/${item.id}`} className="impact-card hover-lift">
                <span className={`impact-metric${item.metric.length > 6 ? " impact-metric-long" : ""}`}>{item.metric}</span>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WORK TEASER */}
      <section className="work-teaser reveal">
        <div className="wrap">
          <div className="work-teaser-head">
            <h2>FEATURED WORK</h2>
            <Link to="/work" className="work-teaser-cta hover-lift">View all →</Link>
          </div>
          <div className="work-teaser-list">
            {workTeaser.map((w) => (
              <Link key={w.id} to={`/case-studies/${w.id}`} className="work-teaser-item hover-lift">
                <span className="work-teaser-index">{w.index}</span>
                <span className="work-teaser-title">{w.title}</span>
                <span className="work-teaser-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONAL BUILD */}
      <section className="personal-build reveal">
        <div className="wrap">
          <div className="personal-build-inner">
            <div>
              <p className="personal-build-label">PERSONAL BUILD</p>
              <h2>Run Your Pace</h2>
              <p>I built a Couch-to-5K app around a scroll interaction for setting running intervals. It is live and I use it as part of my own running routine.</p>
            </div>
            <div className="personal-build-visual">
              <img src="/run-your-pace/home.png" alt="Run Your Pace app home screen" loading="lazy" decoding="async" />
            </div>
            <Link className="hero-cta secondary" to="/case-studies/run-your-pace">Explore the app →</Link>
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
            <a href="/Lucas_Daneluz-CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="mailto:lucas.daneluz@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
