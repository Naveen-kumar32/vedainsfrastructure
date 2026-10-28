import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { company } from "../../data/company.js";

export default function CtaBand() {
  return (
    <section className="cta">
      <div className="container cta__inner reveal">
        <div>
          <h2>Have land to level, a road to lay or a structure to raise?</h2>
          <p>Tell us about your site. We'll visit, assess and send you a clear quote.</p>
        </div>
        <div className="cta__actions">
          <Link to="/contact" className="btn btn--primary">Get a Quote <Icon name="arrow" /></Link>
          <a href={company.phones[0].href} className="btn btn--ghost">Call {company.phones[0].label}</a>
        </div>
      </div>
    </section>
  );
}
