import SectionHead from "./SectionHead.jsx";
import { clients } from "../../data/company.js";

export default function Clients() {
  return (
    <section className="section clients">
      <div className="container">
        <SectionHead variant="center" eyebrow="Trusted by" title="Clients who have built with us" />
        <ul className="clients__grid">
          {clients.map((c, i) => <li key={c} className="reveal" style={{ "--i": i % 4 }}>{c}</li>)}
        </ul>
      </div>
    </section>
  );
}
