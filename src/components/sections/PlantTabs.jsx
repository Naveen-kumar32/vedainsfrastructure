import { useState } from "react";
import SectionHead from "../common/SectionHead.jsx";
import { plants } from "../../data/fleet.js";

export default function PlantTabs() {
  const [active, setActive] = useState(0);
  const p = plants[active];

  return (
    <section className="section section--sand plant">
      <div className="container">
        <SectionHead eyebrow="Own infrastructure" title="From quarry to carpet, all in-house" />
        <div className="plant__wrap reveal">
          <div className="plant__tabs" role="tablist" aria-label="Plant and materials">
            {plants.map((t, i) => (
              <button
                key={t.tab}
                role="tab"
                id={`plant-tab-${i}`}
                aria-selected={i === active}
                aria-controls="plant-panel"
                className={i === active ? "is-active" : ""}
                onClick={() => setActive(i)}
              >
                <b>{t.tab}</b>
                <span>{t.desc}</span>
              </button>
            ))}
          </div>
          <figure className="plant__stage" id="plant-panel" role="tabpanel" aria-labelledby={`plant-tab-${active}`}>
            <img key={p.img} src={`/images/${p.img}.webp`} alt={p.desc} loading="lazy" />
            <figcaption>{p.title}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
