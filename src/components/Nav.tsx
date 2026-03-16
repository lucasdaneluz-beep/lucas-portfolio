import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14"
      style={{
        background: "hsl(210 35% 5% / 0.85)",
        borderBottom: "1px solid hsl(210 20% 13%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-bold transition-opacity hover:opacity-70"
          style={{ color: "hsl(210 25% 82%)" }}
        >
          Lucas Daneluz
        </Link>
        <div className="flex items-center gap-6">
          {isHome ? (
            <a
              href="#case-studies"
              className="text-xs font-semibold transition-opacity hover:opacity-70"
              style={{ color: "hsl(210 20% 55%)" }}
            >
              Work
            </a>
          ) : (
            <Link
              to="/"
              className="text-xs font-semibold transition-opacity hover:opacity-70"
              style={{ color: "hsl(210 20% 55%)" }}
            >
              Work
            </Link>
          )}
          <a
            href="mailto:lucas.daneluz@gmail.com"
            className="text-xs font-semibold transition-opacity hover:opacity-70"
            style={{ color: "hsl(210 20% 55%)" }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
