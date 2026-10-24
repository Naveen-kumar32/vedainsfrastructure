import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../../hooks/useReveal.js";

/** Number that counts up from 0 when it scrolls into view. */
export default function Counter({ value, suffix = "", duration = 1600 }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (prefersReducedMotion()) { setN(value); return; }
    let raf;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(raf); };
  }, [value, duration]);

  return <b ref={ref}>{n}{suffix}</b>;
}
