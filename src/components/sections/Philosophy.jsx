import { Eyebrow } from "../common/SectionHead.jsx";
import { values } from "../../data/company.js";

export default function Philosophy() {
  return (
    <section className="section section--sand philosophy">
      <div className="container philosophy__grid">
        <div className="vision reveal">
          <Eyebrow light>Our vision</Eyebrow>
          <blockquote>
            To establish Veda Infrastructure as a nationally recognised brand, synonymous with professionalism, innovation, expertise and customer friendliness.
          </blockquote>
        </div>
        <div className="values">
          <div className="reveal">
            <Eyebrow>Core business values</Eyebrow>
            <h2 className="title">Principles we build by</h2>
          </div>
          <ol className="values__list">
            {values.map((v, i) => <li key={v} className="reveal" style={{ "--i": i % 2 }}>{v}</li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
