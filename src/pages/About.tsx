import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/lucas-profile.png";

const reasons = [
  {
    title: "Commercially Grounded",
    description: "I spent years managing supplier relationships, cost programmes and category P&Ls, so the commercial pressure behind a roadmap decision isn't abstract to me. I'm comfortable making Product decisions close to revenue and cost, because I've had to live with the consequences of getting that wrong.",
  },
  {
    title: "Strong In Ambiguity",
    description: "I'm drawn to the early stages of a problem, when the brief is loose, the data is incomplete and the right path isn't obvious. That's where I tend to have the most impact: helping a team agree what they're actually solving before they start building. It's slower at the start and faster afterwards.",
  },
  {
    title: "Built For Cross-Functional Work",
    description: "I've worked across Procurement, operations, finance and Product, which mostly means translating between teams who don't share vocabulary. Alignment is a delivery prerequisite, not a soft skill. Without it you ship the wrong thing on time.",
  },
];

const experience = [
  {
    role: "Founding Product Manager",
    company: "Platter",
    meta: "B2B SaaS · London (Hybrid)",
    period: "Sep 2026 – Nov 2026 · The company restructured and cut the role.",
    description: "Founding PM at an early-stage B2B SaaS platform for food manufacturers and wholesalers (procurement, sales, stock, invoicing, reporting). Owned the tiered pricing model, end-to-end customer onboarding, and the product delivery system, taking day-to-day delivery from founder-led to repeatable as the company scaled.",
  },
  {
    role: "Product Manager",
    company: "Hipen Media",
    meta: "SaaS · London, Remote",
    period: "Nov 2025 – Mar 2026",
    description: "Owned end-to-end product discovery and early delivery for a B2B SaaS platform enabling independent, Latina-led media organisations. Conducted user research with target publishers, translated insights into problem statements and acceptance criteria, and managed backlog refinement and prioritisation.",
  },
  {
    role: "Category Manager – Portfolio Prioritisation & Delivery",
    company: "KP Snacks",
    meta: "FMCG · UK",
    period: "Jul 2025 – Oct 2025",
    description: "Led resolution of a critical supply disruption, aligning Operations, Manufacturing and Supply Chain to restore 100% on-time delivery within two weeks. Ran portfolio deep-dive with Finance identifying a £500k+ initiative pipeline, and segmented SKUs by brand criticality to sharpen delivery focus.",
  },
  {
    role: "Strategic Sourcing Manager – Product Launch & GTM",
    company: "Westpak",
    meta: "FMCG, Supply Chain · UK",
    period: "Jul 2021 – Jul 2025",
    description: "Co-created and launched a new product line (Crave) from research to market, contributing to a 10% revenue increase. Applied prioritisation frameworks with senior stakeholders to inform roadmap and investment decisions, and used performance dashboards to deliver a 25% cost optimisation on core SKUs.",
  },
  {
    role: "Procurement Manager",
    company: "HAVI/TMS",
    meta: "FMCG / Supply Chain · UK",
    period: "Jul 2017 – Jul 2021",
    description: "Defined prioritisation frameworks for new product introductions and process automation across packaging portfolios. Introduced cost-to-serve analytics to improve transparency and decision-making, reducing total cost by 9.5% while maintaining service levels at scale.",
  },
  {
    role: "Buying Executive",
    company: "Arena Online Ltd",
    meta: "E-commerce / Retail · London",
    period: "Jun 2016 – Jul 2017",
    description: "Supported product development by sourcing and launching non-core product lines with commercial and merchandising stakeholders. Managed supplier relationships, inventory levels, and catalogue data to maintain availability across seasonal and fast-moving categories.",
  },
];

const About = () => {
  const [openReason, setOpenReason] = useState<number | null>(0);

  useEffect(() => {
    document.title = "About | Lucas Daneluz";
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
      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="left">
          <h1>
            CLOSE TO <em>USERS</em>,<br />
            DATA, AND BUSINESS <em>OUTCOMES</em>.
          </h1>
          <p className="bio">
            I didn't start in Product. I spent a decade in commercial and operational roles, in category management, Procurement and supply chain, before making the transition. That path gives me a different angle: I understand commercial pressure from the inside, I've seen how Product decisions ripple through operations and finance, and I know what alignment actually costs when it's missing.
          </p>
        </div>
        <div className="right">
          <img src={profilePhoto} alt="Lucas Daneluz" />
        </div>
      </section>

      {/* BUILT ACROSS INDUSTRIES */}
      <section className="manifesto reveal">
        <div className="wrap">
          <h2>BUILT ACROSS INDUSTRIES.<br />WIRED FOR <em>PRODUCT</em>.</h2>
          <div className="mf-body">
            <p>My Product instincts were shaped where customer needs, commercial pressure and operational complexity all had to be satisfied at once. I'm at my best in roles where clarity is a prerequisite to progress rather than a nice extra.</p>
          </div>
          <div className="reasons-accordion">
            {reasons.map((reason, i) => {
              const isOpen = openReason === i;
              return (
                <div key={reason.title} className="reasons-item">
                  <button
                    className="reasons-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenReason(isOpen ? null : i)}
                  >
                    <span className="reasons-icon" aria-hidden="true" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                    <h3 className={`reasons-title${isOpen ? " open" : ""}`}>{reason.title}</h3>
                  </button>
                  <div className={`reasons-body${isOpen ? " open" : ""}`}>
                    <div className="reasons-content">
                      <p>{reason.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFF THE CLOCK */}
      <section className="manifesto reveal">
        <div className="wrap">
          <h2>OFF THE <em>CLOCK</em>.</h2>
          <div className="mf-body">
            <p>
              Outside of Product, my favourite people are my wife and our maltipoo.
            </p>
            <p>
              I produce music and play in an alternative rock band.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="about-exp reveal">
        <div className="wrap">
          <div className="about-exp-head">
            <div className="hw-head">
              <h2>EXPERIENCE</h2>
            </div>
          </div>
          {experience.map((e) => (
            <div className="exp-row-b" key={`${e.company}-${e.period}`}>
              <div className="period">{e.period}</div>
              <div className="company">{e.company}</div>
              <div>
                <div style={{ fontWeight: 500, color: "var(--ink)", marginBottom: 8 }}>{e.role}</div>
                <div style={{ color: "var(--ink-dim)", fontSize: 14 }}>{e.description}</div>
              </div>
              <div className="meta-b">{e.meta}</div>
            </div>
          ))}
          <div style={{ paddingTop: "32px" }}>
            <a
              href="/Lucas_Daneluz-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--display)", fontSize: 18, fontWeight: 700,
                letterSpacing: "0.04em", textTransform: "uppercase",
                color: "var(--accent)", borderBottom: "2px solid var(--accent)",
                paddingBottom: 4, textDecoration: "none",
              }}
            >
              DOWNLOAD FULL CV →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <div className="wrap">
          <h2>LET'S <em>TALK</em>. <Link to="/contact">START →</Link></h2>
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

export default About;
