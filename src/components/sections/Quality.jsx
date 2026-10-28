import { Eyebrow } from "../common/SectionHead.jsx";

const checks = [
  "Field dry density tests with the client",
  "Layer-wise compaction control",
  "Standards & norms strictly followed",
  "Aim for zero safety complaints",
];

export default function Quality() {
  return (
    <section className="section quality">
      <div className="container quality__grid">
        <div className="quality__imgs reveal">
          <img src="/images/quality-1.webp" alt="Engineer performing a core cutter density test" loading="lazy" />
          <img src="/images/nh716b-fdd.webp" alt="Field dry density test with client on NH716B" loading="lazy" />
        </div>
        <div className="quality__text reveal">
          <Eyebrow light>Quality policy</Eyebrow>
          <h2 className="title">Tested on site. Signed off with the client.</h2>
          <p>Field dry density (FDD) and compaction tests are done on site alongside our clients, layer by layer, before we move on to the next one.</p>
          <ul className="checks">
            {checks.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
