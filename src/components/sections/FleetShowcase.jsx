import SectionHead from "../common/SectionHead.jsx";
import { equipment, fleetPhotos } from "../../data/fleet.js";

export default function FleetShowcase() {
  return (
    <section className="section strength">
      <div className="container">
        <SectionHead
          eyebrow="Our fleet"
          title="The largest fleet operator in Thiruvallur & Kanchipuram District"
          text="We own our machines, so we don't wait on hire schedules. Every project moves on our timeline, not someone else's."
        />

        <dl className="equip reveal">
          {equipment.map((e) => (
            <div key={e.name}><dt>{e.count}</dt><dd>{e.name}</dd></div>
          ))}
        </dl>

        <div className="fleet-grid">
          {fleetPhotos.slice(0, 6).map((p, i) => (
            <figure key={p.img} className="reveal" style={{ "--i": i % 3 }}>
              <img src={`/images/${p.img}.webp`} alt={p.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
