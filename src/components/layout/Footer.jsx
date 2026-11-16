import { Link } from "react-router-dom";
import { company, navLinks } from "../../data/company.js";
import { expertise } from "../../data/services.js";
import Icon from "../common/Icon.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo"><img src="/images/veda-logo.png" alt="Veda Infrastructure" /></div>
          <p>Expert civil contractors since {company.since}. High-rise buildings, roads &amp; bridges and land development projects across Tamil Nadu.</p>
        </div>
        <div>
          <h4>Explore</h4>
          {navLinks.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Expertise</h4>
          {expertise.slice(0, 5).map((e) => <Link key={e.title} to="/services">{e.title}</Link>)}
        </div>
        <div>
          <h4>Reach Us</h4>
          <div className="footer__group">
            {company.phones.map((p) => <a key={p.href} href={p.href} className="footer__item"><Icon name="phone" />{p.label}</a>)}
          </div>
          <div className="footer__group">
            {company.emails.map((e) => <a key={e} href={`mailto:${e}`} className="footer__item"><Icon name="mail" />{e}</a>)}
          </div>
          <div className="footer__group">
            <span className="footer__item footer__addr"><Icon name="pin" />{company.address.join(" ")}</span>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Veda Infrastructure. All rights reserved.</span>
        <span>Designed &amp; Developed by <b className="footer__credit">Leadbig Solutions</b></span>
      </div>
    </footer>
  );
}
