import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, Linkedin, Mail, Search, TrendingUp, Briefcase, Users } from "lucide-react";
import profilePhoto from "@/assets/lucas-profile.png";

const experience = [
  {
    role: "Product Manager",
    company: "Hipen Media (SaaS) · London, Remote",
    period: "Nov 2025 – Present",
    description: "Owning end-to-end product discovery and early delivery for a B2B SaaS platform enabling independent, Latina-led media organisations. Conducting user research with target publishers, translating insights into problem statements and acceptance criteria, and managing backlog refinement and prioritisation.",
  },
  {
    role: "Category Manager – Portfolio Prioritisation & Delivery",
    company: "Intersnack (FMCG) · UK",
    period: "Jul 2025 – Oct 2025",
    description: "Led resolution of a critical supply disruption, aligning Operations, Manufacturing and Supply Chain to restore 100% on-time delivery within two weeks. Ran portfolio deep-dive with Finance identifying a £500k+ initiative pipeline, and segmented SKUs by brand criticality to sharpen delivery focus.",
  },
  {
    role: "Strategic Sourcing Manager – Product Launch & GTM",
    company: "Westpak (FMCG, Supply Chain) · UK",
    period: "Jul 2021 – Jul 2025",
    description: "Co-created and launched a new product line (Crave) from research to market, contributing to a 10% revenue increase. Applied prioritisation frameworks with senior stakeholders to inform roadmap and investment decisions, and used performance dashboards to deliver a 25% cost optimisation on core SKUs.",
  },
  {
    role: "Procurement Manager",
    company: "HAVI/TMS (FMCG / Supply Chain) · UK",
    period: "Jul 2017 – Jul 2021",
    description: "Defined prioritisation frameworks for new product introductions and process automation across packaging portfolios. Introduced cost-to-serve analytics to improve transparency and decision-making, reducing total cost by 9.5% while maintaining service levels at scale.",
  },
  {
    role: "Buying Executive",
    company: "Arena Online Ltd (E-commerce / Retail) · London",
    period: "Jun 2016 – Jul 2017",
    description: "Supported product development by sourcing and launching non-core product lines with commercial and merchandising stakeholders. Managed supplier relationships, inventory levels, and catalogue data to maintain availability across seasonal and fast-moving categories.",
  },
];

const About = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(210_35%_5%)] text-white">
      <style>{`
        .fade-section { opacity: 0; transform: translateY(18px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .fade-section.in-view { opacity: 1; transform: translateY(0); }
        .exp-card { transition: border-color 0.18s ease; }
        .exp-card:hover { border-color: hsl(174 80% 60% / 0.35) !important; }
      `}</style>

      {/* Hero */}
      <section className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 pt-10 sm:pt-14 pb-4">
        {/* Photo + name row */}
        <div className="flex items-center gap-5 mb-8">
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0 overflow-hidden"
            style={{ background: "hsl(210 35% 5%)", outline: "1px solid hsl(210 20% 18%)" }}
          >
            <img
              src={profilePhoto}
              alt="Lucas Daneluz profile photo"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight" style={{ color: "hsl(210 40% 98%)" }}>
              Lucas Daneluz
            </h1>
            <p className="text-base sm:text-lg font-semibold" style={{ color: "hsl(174 80% 60%)" }}>
              Product Manager
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-8">
          <p className="text-lg sm:text-xl leading-snug font-medium" style={{ color: "hsl(210 25% 78%)" }}>
            A commercially-driven PM with 10+ years across B2B SaaS, FMCG, and supply chain, always close to users, data, and business outcomes.
          </p>
        </div>

      </section>

      {/* What I bring */}
      <section className="fade-section max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: <Search size={20} />, title: "Discovery", description: "Research before building. User interviews, data analysis, and stakeholder mapping to frame the right problem." },
            { icon: <TrendingUp size={20} />, title: "Outcome-Led", description: "Metrics defined before shipping. Progress measured against baselines, not gut feel." },
            { icon: <Briefcase size={20} />, title: "Commercial Lens", description: "Decisions weighed against business value — close to revenue, cost, and customer impact." },
            { icon: <Users size={20} />, title: "Cross-functional", description: "Bridging design, engineering, and stakeholders. Alignment is as much a deliverable as the feature." },
          ].map(({ icon, title, description }, i) => (
            <div
              key={title}
              className="rounded-2xl p-6"
              style={{ background: "hsl(210 28% 11%)", border: "1px solid hsl(210 20% 20%)" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "hsl(174 80% 60% / 0.1)", color: "hsl(174 80% 60%)" }}
              >
                {icon}
              </div>
              <p className="text-xl font-black mb-2" style={{ color: "hsl(174 90% 72%)" }}>{title}</p>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(210 20% 55%)" }}>{description}</p>
            </div>
          ))}
        </div>

        {/* Personal note */}
        <div className="mt-10 space-y-2">
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "hsl(210 20% 55%)" }}>
            Outside of product, my favourite people are my wife and our maltipoo, who also happen to be my harshest critics.
          </p>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "hsl(210 20% 55%)" }}>
            I produce music and play in an alternative rock band. There's something about the craft of arranging a track that scratches the same itch as building a great product.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-14">
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, hsl(210 20% 20%), transparent)" }} />
      </div>

      {/* Experience */}
      <section className="fade-section max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-8 sm:mt-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: "hsl(210 25% 82%)" }}>
          Experience
        </h2>
        <p className="text-base font-medium italic mb-8" style={{ color: "hsl(210 25% 72%)" }}>
          10+ years building products people actually use.
        </p>

        <div className="space-y-3">
          {experience.map(({ role, company, period, description }) => (
            <div
              key={`${role}-${company}`}
              className="exp-card rounded-2xl p-6"
              style={{ background: "hsl(210 28% 11%)", border: "1px solid hsl(210 20% 20%)" }}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                <div>
                  <p className="text-sm font-bold" style={{ color: "hsl(210 25% 88%)" }}>{role}</p>
                  <p className="text-xs font-semibold" style={{ color: "hsl(174 80% 60%)" }}>{company}</p>
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{ background: "hsl(210 20% 14%)", color: "hsl(210 15% 50%)", border: "1px solid hsl(210 20% 22%)" }}
                >
                  {period}
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "hsl(210 20% 55%)" }}>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CV link */}
        <div className="mt-6">
          <a
            href="/Lucas_Daneluz-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
            style={{ background: "hsl(174 80% 60%)", color: "hsl(210 35% 5%)" }}
          >
            <Download size={14} />
            View Full CV
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="fade-section max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-16 sm:mt-20">
        <div
          className="rounded-2xl p-12 sm:p-14 text-center"
          style={{ background: "hsl(210 28% 11%)", border: "1px solid hsl(210 20% 20%)" }}
        >
          <h2 className="text-xl sm:text-2xl font-black mb-3" style={{ color: "hsl(210 40% 98%)" }}>
            Want to work together?
          </h2>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "hsl(210 20% 55%)" }}>
            I'm open to PM roles, contract work, or just a good product conversation.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: "hsl(174 80% 60%)", color: "hsl(210 35% 5%)" }}
            >
              <Mail size={14} />
              Get in Touch
            </Link>
            <a
              href="https://www.linkedin.com/in/lucasdaneluz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: "transparent", border: "1px solid hsl(174 80% 60% / 0.4)", color: "hsl(174 80% 60%)" }}
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-8 pb-16">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span className="text-[11px]" style={{ color: "hsl(210 15% 40%)" }}>
            © {new Date().getFullYear()} Lucas Daneluz
          </span>
          <div className="flex items-center gap-4">
            <a
              href="mailto:lucas.daneluz@gmail.com"
              className="text-[11px] flex items-center gap-1.5 transition-opacity hover:opacity-70"
              style={{ color: "hsl(210 15% 45%)" }}
            >
              <Mail size={11} />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/lucasdaneluz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] flex items-center gap-1.5 transition-opacity hover:opacity-70"
              style={{ color: "hsl(210 15% 45%)" }}
            >
              <Linkedin size={11} />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
