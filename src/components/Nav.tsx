import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isWork = pathname.startsWith("/case-studies");
  const [open, setOpen] = useState(false);

  const linkColor = (active: boolean) =>
    active ? "hsl(174 80% 60%)" : "hsl(210 20% 55%)";

  const desktopCls = "text-xs font-semibold transition-opacity hover:opacity-70";
  const mobileCls  = "text-base font-semibold transition-opacity hover:opacity-70 py-4 sm:py-0";

  const navLinks = (isMobile = false) => {
    const cls = isMobile ? mobileCls : desktopCls;
    return (
      <>
        <a
          href={isHome ? "#case-studies" : "/#case-studies"}
          onClick={() => setOpen(false)}
          className={cls}
          style={{ color: linkColor(isWork) }}
        >
          Case Studies
        </a>
        <Link
          to="/about"
          onClick={() => setOpen(false)}
          className={cls}
          style={{ color: linkColor(pathname === "/about") }}
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className={cls}
          style={{ color: linkColor(pathname === "/contact") }}
        >
          Contact
        </Link>
      </>
    );
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "hsl(210 35% 5% / 0.92)",
        borderBottom: "1px solid hsl(210 20% 13%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Main bar */}
      <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-bold transition-opacity hover:opacity-70"
          style={{ color: "hsl(210 25% 82%)" }}
        >
          Lucas Daneluz
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks()}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex items-center justify-center w-8 h-8 rounded-lg transition-opacity hover:opacity-70"
          style={{ color: "hsl(210 20% 65%)" }}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="sm:hidden px-6 pb-2 pt-1 flex flex-col border-t"
          style={{
            background: "hsl(210 35% 5% / 0.97)",
            borderColor: "hsl(210 20% 13%)",
          }}
        >
          {navLinks(true)}
        </div>
      )}
    </nav>
  );
};

export default Nav;
