import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  const isWork = pathname === "/work" || pathname.startsWith("/case-studies");
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-mark">
          Lucas Daneluz — <b>Product Manager</b>
        </Link>
        <div className="nav-status" />
        <div className="nav-links">
          <Link to="/" className={isHome ? "active" : ""}>Home</Link>
          <Link to="/work" className={isWork ? "active" : ""}>Work</Link>
          <Link to="/about" className={isAbout ? "active" : ""}>About</Link>
          <Link to="/contact" className={isContact ? "active" : ""}>Contact</Link>
          <button
            className="nav-hamburger"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-mobile">
          <Link to="/" onClick={() => setOpen(false)} className={isHome ? "active" : ""}>Home</Link>
          <a href="/#work" onClick={() => setOpen(false)} className={isWork ? "active" : ""}>Work</a>
          <Link to="/about" onClick={() => setOpen(false)} className={isAbout ? "active" : ""}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className={isContact ? "active" : ""}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
