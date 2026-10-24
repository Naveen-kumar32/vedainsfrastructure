import { Eyebrow } from "../common/SectionHead.jsx";
import { values } from "../../data/company.js";

export default function Philosophy() {
  return (
    <section className="section philosophy">
      <div className="container philosophy__grid">
        <div className="vision reveal-left">
          <div className="vision__chev" aria-hidden="true"><i /><i /></div>
          <Eyebrow light>Our Vision</Eyebrow>
          <blockquote>
            To establish VEDA INFRASTRUCTURE as a nationally recognized brand, synonymous with <em>professionalism, innovation, expertise</em> and <em>customer friendliness.</em>
          </blockquote>
        </div>
        <div className="values">
          <div className="reveal"><Eyebrow>Core Business Values</Eyebrow></div>
          <h2 className="title reveal">Principles we <span className="hl">build by</span></h2>
          <ol className="values__list">
            {values.map((v, i) => <li key={v} className="reveal" style={{ "--i": i % 4 }}>{v}</li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
