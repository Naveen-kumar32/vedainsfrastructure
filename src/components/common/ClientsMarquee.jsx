import SectionHead from "./SectionHead.jsx";
import { clients } from "../../data/company.js";

export default function ClientsMarquee() {
  const half = Math.ceil(clients.length / 2);
  const rows = [clients.slice(0, half), clients.slice(half)];
  return (
    <section className="section clients">
      <div className="container">
        <SectionHead variant="center" eyebrow="Trusted By" title={<>Some of our <span className="hl">prestigious clients</span></>} />
      </div>
      {rows.map((row, r) => (
        <div key={r} className={`cmarquee ${r ? "cmarquee--rev" : ""}`}>
          <div className="cmarquee__track">
            {[...row, ...row].map((c, i) => <span key={i}>{c}</span>)}
          </div>
        </div>
      ))}
    </section>
  );
}
