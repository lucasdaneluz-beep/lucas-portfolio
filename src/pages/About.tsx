import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, Rocket, Search, TrendingUp, Download, Linkedin, Mail, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/lucas-profile.png";

const experience = [
  {
    role: "Senior Product Manager",
    company: "<!-- TODO: Add company name -->",
    period: "2022 – Present",
    description: "<!-- TODO: Add 1–2 sentence summary of key responsibilities and outcomes. -->",
  },
  {
    role: "Product Manager",
    company: "<!-- TODO: Add company name -->",
    period: "2019 – 2022",
    description: "<!-- TODO: Add 1–2 sentence summary of key responsibilities and outcomes. -->",
  },
  {
    role: "<!-- TODO: Add role -->",
    company: "<!-- TODO: Add company name -->",
    period: "2016 – 2019",
    description: "<!-- TODO: Add 1–2 sentence summary of key responsibilities and outcomes. -->",
  },
];

const skills = [
  { icon: <Rocket size={12} />, label: "0→1 Builds" },
  { icon: <Briefcase size={12} />, label: "Stakeholder Alignment" },
  { icon: <Search size={12} />, label: "User Research" },
  { icon: <TrendingUp size={12} />, label: "Outcome-Led PM" },
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
        {/* Location badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
          style={{ background: "hsl(174 80% 60% / 0.1)", border: "1px solid hsl(174 80% 60% / 0.25)" }}
        >
          <MapPin size={11} style={{ color: "hsl(174 80% 60%)" }} />
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "hsl(174 80% 60%)" }}>
            London, UK
          </span>
        </div>

        {/* Photo + name row */}
        <div className="flex items-center gap-5 mb-6">
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
        <div className="space-y-4 mb-8">
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "hsl(210 20% 62%)" }}>
            A commercially-driven PM with 10+ years across B2B SaaS, FMCG, and supply chain — always close to users, data, and business outcomes.
          </p>
          {/* TODO: Replace the paragraph below with your own personal story / what drives you as a PM */}
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "hsl(210 20% 62%)" }}>
            I believe the best products are built when teams deeply understand the problem before reaching for a solution. My approach combines structured discovery, cross-functional collaboration, and a bias toward shipping incrementally — measuring outcomes, not outputs.
          </p>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "hsl(210 20% 62%)" }}>
            Outside of product, I'm drawn to anything that sits at the intersection of behaviour, technology, and design — and I'm always up for a good product conversation.
          </p>
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {skills.map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
              style={{ background: "hsl(210 28% 12%)", border: "1px solid hsl(210 20% 20%)", color: "hsl(210 20% 65%)" }}
            >
              <span style={{ color: "hsl(174 80% 60%)" }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>

        {/* CV download */}
        {/* TODO: Add your CV file to /public/lucas-daneluz-cv.pdf and uncomment the link below */}
        {/*
        <a
          href="/lucas-daneluz-cv.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
          style={{ background: "hsl(174 80% 60%)", color: "hsl(210 35% 5%)" }}
        >
          <Download size={14} />
          Download CV
        </a>
        */}
      </section>

      {/* Experience */}
      <section className="fade-section max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 mt-14 sm:mt-16">
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
