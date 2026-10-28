import Counter from "../common/Counter.jsx";
import { Eyebrow } from "../common/SectionHead.jsx";
import { equipment, fleetPhotos } from "../../data/fleet.js";

export default function FleetShowcase() {
  const max = Math.max(...equipment.map((e) => e.count));
  return (
    <section className="section strength">
      <div className="container">
        <div className="strength__head">
          <div>
            <div className="reveal"><Eyebrow>Our Strength</Eyebrow></div>
            <h2 className="title reveal">The <span className="hl">largest fleet operator</span> in Thiruvallur &amp; Kanchipuram District</h2>
          </div>
          <p className="strength__note reveal">We own our own machines, so we don't wait on hire schedules. Every project moves on our timeline, not someone else's.</p>
        </div>
      </div>

      <div className="fleet-strip">
        <div className="fleet-strip__track">
          {[...fleetPhotos, ...fleetPhotos].map((p, i) => (
            <figure key={i} aria-hidden={i >= fleetPhotos.length}>
              <img src={`/images/${p.img}.webp`} alt={i < fleetPhotos.length ? p.alt : ""} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="equip">
          {equipment.map((e, i) => (
            <div key={e.name} className="equip__card reveal" style={{ "--i": i }}>
              <Counter value={e.count} />
              <span>{e.name}</span>
              <div className="equip__bar"><i style={{ "--w": `${Math.max((e.count / max) * 100, 22)}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
