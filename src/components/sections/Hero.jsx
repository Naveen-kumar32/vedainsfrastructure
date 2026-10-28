import { useRef, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Icon from "../common/Icon.jsx";
import useInterval from "../../hooks/useInterval.js";
import { prefersReducedMotion } from "../../hooks/useReveal.js";

const slides = ["hero-road", "hero-grader", "hero-bridge", "hero-quarry", "hero-lake"];
const dots = [
  { s: 140, x: "-50px", y: "86%", d: "0s" },
  { s: 46, x: "70px", y: "93%", d: "1.2s" },
  { s: 16, x: "52%", y: "12%", d: ".6s" },
  { s: 34, x: "90%", y: "20%", d: "2s" },
];

export default function Hero() {
  const { loaded } = useOutletContext();
  const [current, setCurrent] = useState(0);
  const parallax = useRef([]);

  useInterval(() => setCurrent((c) => (c + 1) % slides.length), prefersReducedMotion() ? null : 5500);

  const onMove = (e) => {
    if (prefersReducedMotion() || !window.matchMedia("(pointer:fine)").matches) return;
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    parallax.current.forEach((el, i) => {
      if (!el) return;
      const depth = ((i % 3) + 1) * 10;
      el.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
  };
  const addRef = (i) => (el) => { parallax.current[i] = el; };

  return (
    <section className={`hero ${loaded ? "is-ready" : ""}`} onMouseMove={onMove}>
      <div className="hero__slides">
        {slides.map((s, i) => (
          <div key={s} className={`hero__slide ${i === current ? "is-active" : ""}`} style={{ backgroundImage: `url(/images/${s}.webp)` }} />
        ))}
      </div>
      <div className="hero__overlay" />
      <div className="hero__shape hero__shape--orange" ref={addRef(0)} />
      <div className="hero__shape hero__shape--gold" ref={addRef(1)} />
      <div className="hero__dots" aria-hidden="true">
        {dots.map((d, i) => (
          <i key={i} ref={addRef(i + 2)} style={{ "--s": `${d.s}px`, "--x": d.x, "--y": d.y, "--d": d.d }} />
        ))}
      </div>

      <div className="container hero__content">
        <p className="eyebrow eyebrow--light hero__fade"><span className="eyebrow__line" />Civil Contractors · Since 2009</p>
        <h1 className="hero__title">
          <span className="line"><span>We Build</span></span>
          <span className="line"><span>The <em>Ground</em></span></span>
          <span className="line"><span>Cities Stand On.</span></span>
        </h1>
        <p className="hero__lead hero__fade">
          Roads, bridges, industrial filling, land development and buildings, carried out with our own fleet, quarry and bitumen plant in Thiruvallur &amp; Kanchipuram.
        </p>
        <div className="hero__actions hero__fade">
          <Link to="/projects" className="btn btn--primary">Explore Projects <Icon name="arrow" /></Link>
          <Link to="/contact" className="btn btn--ghost">Talk to Us</Link>
        </div>
      </div>

      <div className="hero__badge" aria-hidden="true" ref={addRef(6)}>
        <svg viewBox="0 0 200 200">
          <defs><path id="circlePath" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
          <text><textPath href="#circlePath">QUALITY · SAFETY · DEADLINES · SINCE 2009 · </textPath></text>
        </svg>
        <img src="/images/logo-mark.png" alt="" />
      </div>

      <div className="hero__counter"><b>{String(current + 1).padStart(2, "0")}</b><span>/ {String(slides.length).padStart(2, "0")}</span></div>
    </section>
  );
}
