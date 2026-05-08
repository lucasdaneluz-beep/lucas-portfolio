import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ListOrdered, Users, TrendingUp } from "lucide-react";
import profilePhoto from "@/assets/lucas-profile.png";

const frameworkSteps = [
  {
    title: "Understand",
    description: "User research, workflow mapping, and problem framing before solutions.",
    icon: Search,
  },
  {
    title: "Prioritise",
    description: "Trade-offs, baselines, and scope decisions shaped by value and feasibility.",
    icon: ListOrdered,
  },
  {
    title: "Align",
    description: "Shared clarity across stakeholders, engineering, operations, and delivery.",
    icon: Users,
  },
  {
    title: "Measure",
    description: "Success metrics defined early so progress is visible after launch.",
    icon: TrendingUp,
  },
];

const reasons = [
  {
    title: "Commercially Grounded",
    description: "I'm comfortable making product decisions close to revenue, cost, and operational reality.",
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

const experience = [
  {
    role: "Product Manager",
    company: "Hipen Media",
    meta: "SaaS · London, Remote",
    period: "Nov 2025 – Present",
    description: "Owning end-to-end product discovery and early delivery for a B2B SaaS platform enabling independent, Latina-led media organisations. Conducting user research with target publishers, translating insights into problem statements and acceptance criteria, and managing backlog refinement and prioritisation.",
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
            A commercially-driven PM with 10+ years across B2B SaaS, FMCG, and supply chain.
            I care about the parts of product that don't trend — research before building,
            metrics defined before shipping, alignment treated as a deliverable.
          </p>
        </div>
        <div className="right">
          <img src={profilePhoto} alt="Lucas Daneluz" />
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="how-i-work reveal">
        <div className="wrap">
          <div className="hw-head">
            <h2>HOW I WORK</h2>
            <p>A practical product rhythm from unclear problems to focused, measurable execution.</p>
          </div>
          <div className="framework-steps">
            {frameworkSteps.map((step) => (
              <article key={step.title} className="framework-step">
                <div className="step-icon">
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT ACROSS INDUSTRIES */}
      <section className="manifesto reveal">
        <div className="wrap">
          <h2>BUILT ACROSS INDUSTRIES.<br />WIRED FOR <em>PRODUCT</em>.</h2>
          <div className="mf-body">
            <p>My product instincts were shaped in environments where customer needs, commercial pressure, and operational complexity collide. That makes me especially effective in roles where clarity and alignment are prerequisites to progress.</p>
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
            <p style={{ fontStyle: "italic" }}>
              Outside of product, my favourite people are my wife and our maltipoo,
              who also happen to be my best motivators and harshest critics.
            </p>
            <p style={{ fontStyle: "italic" }}>
              I produce music and play in an alternative rock band. Working on a track,
              mixing and releasing has a similar feel to shipping a solid product.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="about-exp reveal">
        <div className="wrap about-exp-head">
          <div className="hw-head">
            <h2>EXPERIENCE</h2>
            <p>10+ years across B2B SaaS, FMCG, and supply chain.</p>
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
        <div style={{ padding: "32px var(--pad)" }}>
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
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <div className="wrap">
          <h2>LET'S <em>TALK</em>. <Link to="/contact">START →</Link></h2>
        </div>
      </section>

      <footer className="footer-b">
        <div className="wrap">
          <span>© 2026 Lucas Daneluz · Product Manager</span>
          <div className="socials">
            <a href="mailto:lucas.daneluz@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
