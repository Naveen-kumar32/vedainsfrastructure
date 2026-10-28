import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { company, navLinks } from "../../data/company.js";
import Icon from "../common/Icon.jsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
  }, [open]);

  return (
    <header className={`header ${scrolled || open ? "is-solid" : ""}`}>
      <div className="container header__inner">
        <Link to="/" className="brand" aria-label="Veda Infrastructure home">
          <img src="/images/logo-mark.png" alt="" className="brand__mark" />
          <span className="brand__text"><b>Veda</b><small>Infrastructure</small></span>
        </Link>

        <nav className={`nav ${open ? "is-open" : ""}`} id="nav" aria-label="Main">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => (isActive ? "is-active" : "")}>
              {l.label}
            </NavLink>
          ))}
          <a href={company.phones[0].href} className="nav__phone"><Icon name="phone" />{company.phones[0].label}</a>
          <Link to="/contact" className="btn btn--primary nav__cta">Get a Quote</Link>
        </nav>

        <button
          className={`burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
}
