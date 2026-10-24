import { useCallback, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SectionHead from "../common/SectionHead.jsx";
import ProjectCard from "../common/ProjectCard.jsx";
import Lightbox from "../common/Lightbox.jsx";
import Icon from "../common/Icon.jsx";
import useReveal from "../../hooks/useReveal.js";
import { projects, projectFilters } from "../../data/projects.js";

/** Project grid. `featured` shows a short selection with a link to the Projects page. */
export default function ProjectsGallery({ featured = false }) {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);
  const gridRef = useRef(null);

  const list = useMemo(() => {
    if (featured) return projects.filter((p) => p.featured);
    return filter === "all" ? projects : projects.filter((p) => p.cats.includes(filter));
  }, [featured, filter]);

  useReveal(gridRef, [filter]);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section className="section projects">
      <div className="projects__shape" aria-hidden="true" />
      <div className="container">
        <SectionHead variant="row" eyebrow="Project Portfolio" title={<>Work that <span className="hl">speaks</span> for itself</>}>
          {featured ? (
            <Link to="/projects" className="btn btn--outline reveal">View All Projects <Icon name="arrow" /></Link>
          ) : (
            <div className="filters reveal" role="tablist" aria-label="Filter projects">
              {projectFilters.map((f) => (
                <button key={f.id} role="tab" aria-selected={filter === f.id} className={filter === f.id ? "is-active" : ""} onClick={() => setFilter(f.id)}>
                  {f.label}
                </button>
              ))}
            </div>
          )}
        </SectionHead>

        <div className="pgrid" ref={gridRef} key={filter}>
          {list.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} onOpen={() => setOpen(p)} />
          ))}
        </div>
      </div>
      {open && <Lightbox project={open} onClose={close} />}
    </section>
  );
}
