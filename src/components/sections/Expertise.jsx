import SectionHead from "../common/SectionHead.jsx";
import { expertise } from "../../data/services.js";
import { prefersReducedMotion } from "../../hooks/useReveal.js";

const tilt = (e) => {
  if (prefersReducedMotion() || !window.matchMedia("(pointer:fine)").matches) return;
  const card = e.currentTarget;
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
};
const untilt = (e) => { e.currentTarget.style.transform = ""; };

export default function Expertise() {
  return (
    <section className="section expertise">
      <div className="expertise__bg" aria-hidden="true" />
      <div className="container">
        <SectionHead light eyebrow="What We Master" title={<>Six fields. One standard of <span className="hl">excellence.</span></>} />
        <div className="hexgrid">
          {expertise.map((f, i) => (
            <article key={f.title} className="hexcard reveal" style={{ "--i": i }} onMouseMove={tilt} onMouseLeave={untilt}>
              <div className="hexcard__icon">
                <svg viewBox="0 0 48 48" aria-hidden="true">{f.icon.map((d) => <path key={d} d={d} />)}</svg>
              </div>
              <span className="hexcard__no">{String(i + 1).padStart(2, "0")}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
