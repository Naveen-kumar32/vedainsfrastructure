import { useEffect, useRef, useState } from "react";
import SectionHead from "../common/SectionHead.jsx";
import { plants } from "../../data/fleet.js";

export default function PlantTabs() {
  const [active, setActive] = useState(0);
  const track = useRef(null);
  const sticky = useRef(null);

  // The section pins while scrolling; scroll progress through the track picks the active tab.
  // offsetTop of a stuck element shifts while it is pinned, so read the fixed `top` offset instead.
  const stickyTop = () => parseFloat(getComputedStyle(sticky.current).top) || 0;
  const scrollRange = () => track.current.offsetHeight - sticky.current.offsetHeight;

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const top = track.current.getBoundingClientRect().top - stickyTop();
      const range = scrollRange();
      const progress = range > 0 ? Math.min(Math.max(-top / range, 0), 1) : 0;
      setActive(Math.min(plants.length - 1, Math.floor(progress * plants.length)));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = (i) => {
    const start = track.current.getBoundingClientRect().top + window.scrollY - stickyTop();
    window.scrollTo({ top: start + ((i + 0.5) / plants.length) * scrollRange(), behavior: "smooth" });
  };

  return (
    <section className="section plant">
      <div className="container">
        <SectionHead eyebrow="Own Infrastructure" title={<>From <span className="hl">quarry to carpet</span>, all in-house</>} />
      </div>
      <div className="plant__track" ref={track} style={{ "--steps": plants.length }}>
        <div className="plant__sticky" ref={sticky}>
          <div className="container plant__wrap reveal">
            <div className="plant__tabs" role="tablist">
              {plants.map((p, i) => (
                <button
                  key={p.tab}
                  role="tab"
                  aria-selected={i === active}
                  className={i === active ? "is-active" : ""}
                  onClick={() => goTo(i)}
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
      </div>
    </section>
  );
}
