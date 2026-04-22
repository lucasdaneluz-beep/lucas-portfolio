import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import hwDiscover from "@/assets/hw-discover.png";
import hwDefine from "@/assets/hw-define.png";
import hwBaseline from "@/assets/hw-baseline.png";
import hwDeliver from "@/assets/hw-deliver.png";

const ACCENTS = [
  { name: "Hot orange", hex: "#ffcc00" },
  { name: "Electric lime", hex: "#c8ff1a" },
  { name: "Cyber cyan", hex: "#00e5ff" },
  { name: "Hot pink", hex: "#ff3d8a" },
  { name: "Sun yellow", hex: "#ffcc00" },
  { name: "Pure white", hex: "#ffffff" },
];

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

type Theme = "dark" | "light";
type Weight = "700" | "800" | "900";
type DisplayCase = "uppercase" | "none";
type Density = "compact" | "normal" | "roomy";

interface Tweaks {
  accent: string;
  theme: Theme;
  displayWeight: Weight;
  displayCase: DisplayCase;
  density: Density;
}

const defaultTweaks: Tweaks = {
  accent: "#ffcc00",
  theme: "dark",
  displayWeight: "800",
  displayCase: "uppercase",
  density: "roomy",
};

const Index = () => {
  const [tweaks, setTweaks] = useState<Tweaks>(defaultTweaks);
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [methodTab, setMethodTab] = useState(0);
  const heroMainRef = useRef<HTMLDivElement>(null);

  // Apply tweaks to document root CSS variables
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", tweaks.accent);
    r.setAttribute("data-theme", tweaks.theme);
    r.style.setProperty("--display-weight", tweaks.displayWeight);
    r.style.setProperty("--display-case", tweaks.displayCase);
    r.setAttribute("data-density", tweaks.density);
    return () => {
      r.removeAttribute("data-theme");
      r.removeAttribute("data-density");
      r.style.removeProperty("--accent");
      r.style.removeProperty("--display-weight");
      r.style.removeProperty("--display-case");
    };
  }, [tweaks]);

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

  const updateTweak = <K extends keyof Tweaks>(key: K, val: Tweaks[K]) =>
    setTweaks((prev) => ({ ...prev, [key]: val }));

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
            {methodology.map((m, i) => (
              <div key={m.title} className={`hw-panel${methodTab === i ? " active" : ""}`}>
                <div className="hw-panel-inner">
                  <div className="hw-panel-text">
                    <h3>{m.title}</h3>
                    <p>{m.description}</p>
                  </div>
                  <div className="hw-panel-img">
                    <img src={m.image} alt={m.title} />
                  </div>
                </div>
              </div>
            ))}
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
                    <span className="w-title">{w.title}</span>
                    <span className="w-arrow">—</span>
                  </div>
                );
              }
              return (
                <Link key={w.id} to={`/case-studies/${w.id}`} className="work-row">
                  <span className="w-title">{w.title}</span>
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

      {/* TWEAKS PANEL */}
      {tweaksOpen && (
        <div className="tweaks">
          <div className="tweaks-hdr">
            <span>TWEAKS</span>
            <button onClick={() => setTweaksOpen(false)} aria-label="Close">×</button>
          </div>
          <div className="tweaks-body">
            <div className="tweak-group">
              <label className="tweak-label">Accent color</label>
              <div className="swatch-row">
                {ACCENTS.map((a) => (
                  <button
                    key={a.hex}
                    className={`sw${tweaks.accent === a.hex ? " on" : ""}`}
                    style={{ "--c": a.hex } as React.CSSProperties}
                    title={a.name}
                    onClick={() => updateTweak("accent", a.hex)}
                  />
                ))}
              </div>
            </div>

            <div className="tweak-group">
              <label className="tweak-label">Theme</label>
              <div className="seg">
                {(["dark", "light"] as Theme[]).map((v) => (
                  <button key={v} className={tweaks.theme === v ? "on" : ""} onClick={() => updateTweak("theme", v)}>
                    {v === "dark" ? "Dark" : "Light"}
                  </button>
                ))}
              </div>
            </div>

            <div className="tweak-group">
              <label className="tweak-label">Display weight</label>
              <div className="seg">
                {(["700", "800", "900"] as Weight[]).map((v) => (
                  <button key={v} className={tweaks.displayWeight === v ? "on" : ""} onClick={() => updateTweak("displayWeight", v)}>
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="tweak-group">
              <label className="tweak-label">Display case</label>
              <div className="seg">
                <button className={tweaks.displayCase === "uppercase" ? "on" : ""} onClick={() => updateTweak("displayCase", "uppercase")}>UPPER</button>
                <button className={tweaks.displayCase === "none" ? "on" : ""} onClick={() => updateTweak("displayCase", "none")}>Mixed</button>
              </div>
            </div>

            <div className="tweak-group">
              <label className="tweak-label">Density</label>
              <div className="seg">
                {(["compact", "normal", "roomy"] as Density[]).map((v) => (
                  <button key={v} className={tweaks.density === v ? "on" : ""} onClick={() => updateTweak("density", v)}>
                    {v.charAt(0).toUpperCase() + v.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        className="tweaks-trigger"
        onClick={() => setTweaksOpen((v) => !v)}
        title="Tweaks"
        aria-label="Open tweaks panel"
      >
        ⚙
      </button>
    </>
  );
};

export default Index;
