import { useEffect } from "react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/lucas-profile.png";

const values = [
  { title: "Discovery",        description: "Research before building. User interviews, data analysis, and stakeholder mapping to frame the right problem." },
  { title: "Outcome-Led",      description: "Metrics defined before shipping. Progress measured against baselines, not gut feel." },
  { title: "Commercial Lens",  description: "Decisions weighed against business value — close to revenue, cost, and customer impact." },
  { title: "Cross-functional", description: "Bridging design, engineering, and stakeholders. Alignment is as much a deliverable as the feature." },
];

const personal = [
  "Outside of product, my favourite people are my wife and our maltipoo, who also happen to be my best motivators and harshest critics.",
  "I produce music and play in an alternative rock band. Working on a track, mixing and releasing has a similar feel to shipping a solid product.",
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
          <div className="hero-index">
            PROFILE / 01 <span className="sep">·</span> LUCAS DANELUZ
          </div>
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

      {/* WHAT I BRING */}
      <section className="section reveal">
        <div className="section-head">
          <span>§ WHAT I BRING</span>
          <h2>Four principles I return to</h2>
          <span className="count">04 / 04</span>
        </div>
        <div className="method">
          {values.map((v, i) => (
            <div key={v.title}>
              <div className="n">0{i + 1} / 04</div>
              <h4>{v.title}</h4>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFF THE CLOCK */}
      <section className="manifesto reveal">
        <div className="mf-left">
          <h2>OFF THE <em>CLOCK</em>.</h2>
        </div>
        <div className="mf-right">
          {personal.map((p, i) => (
            <p key={i} style={{ fontStyle: "italic" }}>{p}</p>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section reveal">
        <div className="section-head">
          <span>§ EXPERIENCE / 10+ YRS</span>
          <h2>Building products people actually use</h2>
          <span className="count">05 ROLES</span>
        </div>
        <div className="exp-table">
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
        </div>
        <div style={{ padding: "32px var(--pad)", borderBottom: "1px solid var(--rule)" }}>
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
      <section
        className="cta reveal"
        style={{ paddingTop: "clamp(60px, 10vw, 120px)", paddingBottom: "clamp(60px, 10vw, 120px)" }}
      >
        <h2>LET'S <em>TALK</em>. <Link to="/contact">START →</Link></h2>
      </section>

      <footer className="footer-b">
        <span>© 2026 Lucas Daneluz · Product Manager</span>
        <div className="socials">
          <a href="mailto:lucas.daneluz@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/lucasdaneluz" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </>
  );
};

export default About;
