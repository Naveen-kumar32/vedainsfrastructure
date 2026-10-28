import Icon from "./Icon.jsx";

export default function ProjectCard({ project, index = 0, onOpen }) {
  const { title, client, desc, imgs, live } = project;
  return (
    <button className="pcard reveal" style={{ "--i": index % 3 }} onClick={onOpen} aria-label={`Open ${title} gallery`}>
      <span className="pcard__media">
        <img src={`/images/${imgs[0]}.webp`} alt="" loading="lazy" />
        {live && <span className="pcard__live">Ongoing</span>}
        <span className="pcard__count"><Icon name="camera" />{imgs.length}</span>
      </span>
      <span className="pcard__body">
        <span className="pcard__client">{client}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </span>
    </button>
  );
}
