import { useEffect } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const SELECTOR = ".reveal:not(.is-visible)";

/**
 * Adds `.is-visible` to reveal elements as they scroll into view.
 * Pass a ref to limit it to one subtree, and deps to re-scan after re-renders.
 */
export default function useReveal(rootRef, deps = []) {
  useEffect(() => {
    const root = rootRef?.current ?? document;
    const els = root.querySelectorAll(SELECTOR);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
