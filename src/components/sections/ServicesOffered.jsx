import { Link } from "react-router-dom";
import SectionHead from "../common/SectionHead.jsx";
import { serviceList, serviceTiles } from "../../data/services.js";

export default function ServicesOffered() {
  return (
    <section className="section services">
      <div className="container">
        <SectionHead eyebrow="Services Offered" title={<>All civil construction works, <span className="hl">under one roof</span></>} />
        <div className="services__layout">
          <aside className="services__list reveal-left">
            <h3>We deliver</h3>
            <ul>{serviceList.map((s) => <li key={s}>{s}</li>)}</ul>
            <Link to="/contact" className="btn btn--primary">Start a Project</Link>
          </aside>
          <div className="tiles">
            {serviceTiles.map((t, i) => (
              <figure key={t.title} className="tile reveal" style={{ "--i": i % 3 }}>
                <img src={`/images/${t.img}.webp`} alt="" loading="lazy" />
                <figcaption>{t.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
