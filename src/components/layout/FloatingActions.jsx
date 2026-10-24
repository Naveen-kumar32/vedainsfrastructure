import { useEffect, useState } from "react";
import Icon from "../common/Icon.jsx";
import { company } from "../../data/company.js";

/** Scroll progress bar, floating call button and back-to-top button. */
export default function FloatingActions() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
      setShowTop(y > 800);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <a href={company.phones[0].href} className="fab" aria-label="Call Veda Infrastructure">
        <Icon name="phone" />
      </a>
      <button
        className={`totop ${showTop ? "is-shown" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Icon name="arrowUp" />
      </button>
    </>
  );
}
