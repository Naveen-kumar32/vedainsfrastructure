import { useState } from "react";
import SectionHead from "../common/SectionHead.jsx";
import useInterval from "../../hooks/useInterval.js";
import { prefersReducedMotion } from "../../hooks/useReveal.js";
import { plants } from "../../data/fleet.js";

export default function PlantTabs() {
  const [active, setActive] = useState(0);
  const [clicks, setClicks] = useState(0); // restarts the auto-rotate timer after a click

  useInterval(() => setActive((a) => (a + 1) % plants.length), prefersReducedMotion() ? null : 4500, clicks);

  return (
    <section className="section plant">
      <div className="container">
        <SectionHead eyebrow="Own Infrastructure" title={<>From <span className="hl">quarry to carpet</span>, all in-house</>} />
        <div className="plant__wrap reveal">
          <div className="plant__tabs" role="tablist">
            {plants.map((p, i) => (
              <button
                key={p.tab}
                role="tab"
                aria-selected={i === active}
                className={i === active ? "is-active" : ""}
                onClick={() => { setActive(i); setClicks((c) => c + 1); }}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>{p.tab}
              </button>
            ))}
          </div>
          <div className="plant__stage">
            {plants.map((p, i) => (
              <figure key={p.img} className={`plant__panel ${i === active ? "is-active" : ""}`}>
                <img src={`/images/${p.img}.webp`} alt={p.desc} loading="lazy" />
                <figcaption><b>{p.title}</b>{p.desc}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
