import { Eyebrow } from "../common/SectionHead.jsx";

const checks = [
  "Field Dry Density tests with client",
  "Layer-wise compaction control",
  "Standards & norms strictly adhered",
  "Aim for zero safety complaints",
];

export default function Quality() {
  return (
    <section className="quality">
      <div className="container quality__grid">
        <div className="quality__imgs">
          <img src="/images/quality-1.webp" alt="Engineer performing a core cutter density test" loading="lazy" className="reveal-left" />
          <img src="/images/nh716b-fdd.webp" alt="Field dry density test with client on NH716B" loading="lazy" className="reveal-up" />
        </div>
        <div className="quality__text">
          <div className="reveal"><Eyebrow light>Quality Policy</Eyebrow></div>
          <h2 className="title reveal">Tested on site. <span className="hl">Signed off</span> with the client.</h2>
          <p className="reveal">We hold to a strict quality policy. Field dry density (FDD) and compaction tests are done on site alongside our clients, layer by layer, before we move on to the next one.</p>
          <ul className="checks">
            {checks.map((c, i) => <li key={c} className="reveal" style={{ "--i": i }}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
