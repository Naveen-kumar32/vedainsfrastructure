import { Link } from "react-router-dom";
import { company } from "../../data/company.js";

export default function CtaBand() {
  return (
    <section className="cta">
      <div className="cta__stripes" aria-hidden="true" />
      <div className="container cta__inner">
        <h2 className="reveal">Have land to level, a road to lay or a structure to raise?</h2>
        <div className="cta__actions reveal">
          <a href={company.phones[0].href} className="btn btn--dark">Call {company.phones[0].label}</a>
          <Link to="/contact" className="btn btn--outline">Get a Quote</Link>
        </div>
      </div>
    </section>
  );
}
