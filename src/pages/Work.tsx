import { useEffect } from "react";
import { Link } from "react-router-dom";
import { caseStudies as workItems } from "@/data/caseStudies";

const Work = () => {
  useEffect(() => {
    document.title = "Work | Lucas Daneluz";
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
      <section className="work-section reveal" id="work">
        <div className="wrap">
          <div className="work-head">
            <h2>FEATURED WORK</h2>
            <p>Four case studies and one app I built for myself. Each one shows the problem as I found it, what I changed, and what actually moved.</p>
          </div>
          <div className="work-grid">
            {workItems.map((w) => (
              <Link key={w.id} to={`/case-studies/${w.id}`} className="work-card">
                <div className={`work-card-visual work-card-visual-${w.id}`}>
                  <span className="work-card-index">{w.index}</span>
                  {w.image ? (
                    <img src={w.image} alt={`${w.title} case study preview`} className="work-card-image" />
                  ) : (
                    <div className="work-card-visual-inner">
                      <span className="work-card-visual-label">{w.visualLabel}</span>
                      <div className="work-card-stat">{w.metric}</div>
                      <div className="work-card-mini-bars">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  )}
                </div>
                <div className="work-card-body">
                  <div className="work-card-topline">{w.tags.join(" · ")}</div>
                  <h3>{w.title}</h3>
                  <p>{w.summary}</p>
                  <p className="work-card-problem">{w.problem}</p>
                  <div className="work-card-footer">
                    <span className="work-card-metric">{w.metric}</span>
                    <span className="work-card-cta">View Case Study →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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

export default Work;
