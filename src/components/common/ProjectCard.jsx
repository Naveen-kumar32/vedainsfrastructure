import { useState } from "react";
import Icon from "./Icon.jsx";
import useInterval from "../../hooks/useInterval.js";
import { prefersReducedMotion } from "../../hooks/useReveal.js";

export default function ProjectCard({ project, index = 0, onOpen }) {
  const { title, client, desc, imgs, size, live } = project;
  const [shown, setShown] = useState(0);

  // Cycle through the project's photos; the delay varies by card so they don't all change together.
  const auto = imgs.length > 1 && !prefersReducedMotion();
  useInterval(() => setShown((s) => (s + 1) % imgs.length), auto ? 3800 + (index % 4) * 450 : null);

  return (
    <button
      className={`pcard reveal-up ${size ? `pcard--${size}` : ""}`}
      style={{ "--i": index % 3 }}
      onClick={onOpen}
      aria-label={`Open ${title} gallery`}
    >
      {imgs.map((img, i) => (
        <img
          key={img}
          src={`/images/${img}.webp`}
          alt={i === 0 ? `${title}: ${desc}` : ""}
          loading="lazy"
          className={i === shown ? "is-active" : ""}
        />
      ))}
      <span className="pcard__plus">+</span>
      <span className="pcard__count"><Icon name="camera" />{imgs.length}</span>
      <span className="pcard__body">
        <span className={`pcard__tag ${live ? "pcard__tag--live" : ""}`}>{live ? "Ongoing" : client}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </span>
    </button>
  );
}
