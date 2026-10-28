import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../common/Icon.jsx";
import useInterval from "../../hooks/useInterval.js";
import { prefersReducedMotion } from "../../hooks/useReveal.js";
import { company, stats } from "../../data/company.js";

const slides = ["hero-road", "hero-grader", "hero-bridge", "hero-quarry", "hero-lake"];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const years = new Date().getFullYear() - company.since;

  useInterval(() => setCurrent((c) => (c + 1) % slides.length), prefersReducedMotion() ? null : 6500);

  return (
    <section className="hero">
      <div className="hero__slides" aria-hidden="true">
        {slides.map((s, i) => (
          <img key={s} src={`/images/${s}.webp`} alt="" className={i === current ? "is-active" : ""} fetchpriority={i === 0 ? "high" : "low"} />
        ))}
      </div>

      <div className="container hero__content">
        <p className="eyebrow eyebrow--light">Civil contractors · Chennai · Since {company.since}</p>
        <h1 className="hero__title">We build the ground <em>cities stand on.</em></h1>
        <p className="hero__lead">
          Roads, bridges, industrial filling, land development and buildings, delivered with our own fleet, quarry and bitumen plant across Thiruvallur &amp; Kanchipuram.
        </p>
        <div className="hero__actions">
          <Link to="/contact" className="btn btn--primary">Get a Quote <Icon name="arrow" /></Link>
          <Link to="/projects" className="btn btn--ghost">View Projects</Link>
        </div>
      </div>

      <div className="hero__facts">
        <dl className="container">
          <div><dt>{years}+</dt><dd>Years in civil works</dd></div>
          {stats.slice(0, 3).map((s) => (
            <div key={s.label}><dt>{s.value}{s.suffix}</dt><dd>{s.label}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}
