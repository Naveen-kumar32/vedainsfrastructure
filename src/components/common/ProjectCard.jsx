import Icon from "./Icon.jsx";

export default function ProjectCard({ project, index = 0, onOpen }) {
  const { title, client, desc, imgs, size, live } = project;
  return (
    <button
      className={`pcard reveal-up ${size ? `pcard--${size}` : ""}`}
      style={{ "--i": index % 3 }}
      onClick={onOpen}
      aria-label={`Open ${title} gallery`}
    >
      <img src={`/images/${imgs[0]}.webp`} alt={`${title}: ${desc}`} loading="lazy" />
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
