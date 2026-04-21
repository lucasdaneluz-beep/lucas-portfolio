import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
  { title: "Discover", description: "User research, data analysis, and stakeholder interviews to frame the real problem." },
  { title: "Define",   description: "Synthesise insights into a clear strategy, prioritised roadmap, and success metrics." },
  { title: "Baseline", description: "Establish measurable benchmarks before shipping so progress is grounded in data, not assumption." },
  { title: "Deliver",  description: "Ship iteratively, measure outcomes, and refine based on real-world feedback." },
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
  density: "normal",
};

const Index = () => {
  const [tweaks, setTweaks] = useState<Tweaks>(defaultTweaks);
  const [tweaksOpen, setTweaksOpen] = useState(false);
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
          <h1 className="display">
            <span className="line">LUCAS</span>
            <span className="line">DANELUZ</span>
            <span className="line"><span style={{ color: "var(--accent)" }}>PRODUCT</span> MANAGER.</span>
          </h1>
          <div className="hero-foot">
            <a className="scroll-cue" href="#work">
              <span className="scroll-cue-label">Scroll ↓</span>
            </a>
            <div className="hero-tags">
              <span>0→1 Builds</span>
              <span>Stakeholder Alignment</span>
              <span>User Research</span>
              <span>Outcome-Led</span>
            </div>
          </div>
        </div>

        <div className="hero-meta">
          <div><div className="lbl">Role</div><div className="val">Product Manager</div></div>
          <div><div className="lbl">Based in</div><div className="val">London, UK</div></div>
          <div><div className="lbl">Currently</div><div className="val">Open to work</div></div>
          <div>
            <div className="lbl">Availability</div>
            <div className="val accent"><span className="pulse" />Open</div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto reveal">
        <div className="mf-left">
          <h2>TURNING REAL<br /><span style={{ color: "var(--accent)" }}>PAIN POINTS</span> INTO<br /><span style={{ color: "var(--accent)" }}>MEASURABLE IMPACT</span>.</h2>
        </div>
        <div className="mf-right">
          <p>
            A commercially-driven PM with 10+ years across{" "}
            <strong style={{ color: "var(--ink)" }}>B2B SaaS, FMCG, and supply chain</strong>,
            always close to users, data, and business outcomes.
          </p>
          <p>
            I care about the parts of product that don't trend: baselines before launch,
            outcomes over outputs, and alignment as a deliverable.
          </p>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="section reveal">
        <div className="section-head">
          <span>§ METHODOLOGY — 02</span>
          <h2>A structured approach to building the right thing</h2>
          <span className="count">04 / 04</span>
        </div>
        <div className="method">
          {methodology.map((m, i) => (
            <div key={m.title}>
              <div className="n">0{i + 1} / 04</div>
              <h4>{m.title}</h4>
              <p>{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="section reveal" id="work">
        <div className="section-head">
          <span>§ SELECTED WORK — 03</span>
          <h2>Real problems · structured thinking · measurable impact</h2>
          <span className="count">05 / 05</span>
        </div>
        <div className="work-table">
          {workItems.map((w) => {
            const tags = (
              <div className="w-tags">
                {w.tags.slice(0, 3).map((t) => <span key={t}>{t}</span>)}
              </div>
            );
            if (w.comingSoon) {
              return (
                <React.Fragment key={w.id}>
                  <div className="w-idx" style={{ opacity: 0.4 }}>{w.index}</div>
                  <div className="w-marker soon" style={{ opacity: 0.4 }}><span className="dot" /></div>
                  <div style={{ opacity: 0.4, padding: "28px var(--pad)", borderBottom: "1px solid var(--rule)", minHeight: 110, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div className="w-title">{w.title}</div>{tags}
                  </div>
                  <div className="w-summary" style={{ opacity: 0.4 }}>{w.summary}</div>
                  <div className="w-metric none" style={{ opacity: 0.4 }}>IN PROGRESS</div>
                  <div className="w-arrow" style={{ opacity: 0.4 }}>—</div>
                </React.Fragment>
              );
            }
            return (
              <Link
                key={w.id}
                to={`/case-studies/${w.id}`}
                className="work-row"
                style={{ display: "contents" }}
              >
                <div className="w-idx">{w.index}</div>
                <div className="w-marker"><span className="dot" /></div>
                <div>
                  <div className="w-title">{w.title}</div>
                  {tags}
                </div>
                <div className="w-summary">{w.summary}</div>
                <div className="w-metric">↗ {w.metric}</div>
                <div className="w-arrow">→</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <h2>
          WANT TO <em>WORK</em>
          <br />
          TOGETHER?{" "}
          <Link to="/contact">START HERE →</Link>
        </h2>
        <div className="cta-sub">
          <a href="mailto:lucas.daneluz@gmail.com">
            <div className="lbl">Email</div>
            <div className="val">lucas.daneluz@gmail.com</div>
          </a>
          <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer">
            <div className="lbl">LinkedIn</div>
            <div className="val">/in/lucasdaneluz</div>
          </a>
          <div>
            <div className="lbl">Based</div>
            <div className="val">London, UK</div>
          </div>
        </div>
      </section>

      <footer className="footer-b">
        <span>© 2026 Lucas Daneluz · Product Manager · London</span>
        <div className="socials">
          <a href="mailto:lucas.daneluz@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
