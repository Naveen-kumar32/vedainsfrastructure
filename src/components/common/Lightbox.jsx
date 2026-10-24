import { useCallback, useEffect, useRef, useState } from "react";

/** Full-screen gallery for one project. Arrow keys, swipe and Esc supported. */
export default function Lightbox({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const closeRef = useRef(null);
  const touchX = useRef(0);
  const total = project.imgs.length;

  const step = useCallback((d) => setIndex((i) => (i + d + total) % total), [total]);

  useEffect(() => {
    const prevFocus = document.activeElement;
    document.body.classList.add("is-locked");
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("is-locked");
      prevFocus?.focus?.();
    };
  }, [onClose, step]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
      }}
    >
      <button ref={closeRef} className="lightbox__close" aria-label="Close" onClick={onClose}>×</button>
      {total > 1 && <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous image" onClick={() => step(-1)}>‹</button>}
      <figure className="lightbox__fig">
        <img key={index} src={`/images/${project.imgs[index]}.webp`} alt={`${project.title}, photo ${index + 1}`} />
        <figcaption>
          <b>{project.title}</b>
          <span>{project.client} · {project.desc}</span>
          <small>{index + 1} / {total}</small>
        </figcaption>
      </figure>
      {total > 1 && <button className="lightbox__nav lightbox__nav--next" aria-label="Next image" onClick={() => step(1)}>›</button>}
    </div>
  );
}
