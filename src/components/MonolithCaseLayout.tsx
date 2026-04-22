import { Link } from "react-router-dom";

interface Props {
  title: string;
  lede: string;
  role?: string;
  focus: string;
  metric: string;
  tags: string[];
  disclaimer?: string;
  children: React.ReactNode;
}

const MonolithCaseLayout = ({
  title, lede, role = "Product Manager", focus, metric, tags, disclaimer, children,
}: Props) => (
  <>
    <section className="case-hero-b">
      <div className="wrap">
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </section>

    <section className="case-grid-b">
      <div className="wrap">
        <div className="case-meta-row">
          <div>
            <div className="lbl">Role</div>
            <div className="val">{role}</div>
          </div>
          <div>
            <div className="lbl">Focus</div>
            <div className="val">{focus}</div>
          </div>
          <div>
            <div className="lbl">Outcome</div>
            <div className="val big">{metric}</div>
          </div>
          <div>
            <div className="lbl">Tags</div>
            <div className="val mono">{tags.join(" · ")}</div>
          </div>
        </div>
      </div>
    </section>

    <section className="case-body-b">
      <div className="wrap">
        {children}
      </div>
    </section>

    <section className="cta" style={{ paddingTop: "clamp(64px,8vw,96px)", paddingBottom: "clamp(64px,8vw,96px)" }}>
      <div className="wrap">
        <h2><Link to="/">← ALL WORK</Link></h2>
      </div>
    </section>

    {disclaimer && <p className="case-disclaimer">{disclaimer}</p>}

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

export default MonolithCaseLayout;
