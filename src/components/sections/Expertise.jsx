import SectionHead from "../common/SectionHead.jsx";
import { expertise } from "../../data/services.js";

export default function Expertise() {
  return (
    <section className="section section--sand expertise">
      <div className="container">
        <SectionHead
          eyebrow="What we do"
          title="Six fields, one standard of work"
          text="From the first cut of earth to the final road layer, every job runs on our own machines and is tested on site."
        />
        <div className="xgrid">
          {expertise.map((f, i) => (
            <article key={f.title} className="xcard reveal" style={{ "--i": i % 3 }}>
              <svg viewBox="0 0 48 48" aria-hidden="true">{f.icon.map((d) => <path key={d} d={d} />)}</svg>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
