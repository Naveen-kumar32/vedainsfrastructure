import { Link, useOutletContext } from "react-router-dom";

/** Banner at the top of every inner page. */
export default function PageHero({ title, highlight, subtitle, image, crumb }) {
  const { loaded } = useOutletContext();
  return (
    <section className={`page-hero ${loaded ? "is-ready" : ""}`}>
      <div className="page-hero__bg" style={{ backgroundImage: `url(/images/${image}.webp)` }} />
      <div className="page-hero__overlay" />
      <div className="page-hero__shape" aria-hidden="true" />
      <div className="page-hero__ring" aria-hidden="true" />
      <i className="page-hero__dot page-hero__dot--a" aria-hidden="true" />
      <i className="page-hero__dot page-hero__dot--b" aria-hidden="true" />

      <div className="container page-hero__content">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span><b>{crumb}</b>
        </nav>
        <h1 className="page-hero__title">
          <span className="line"><span>{title}</span></span>
          {highlight && <span className="line"><span><em>{highlight}</em></span></span>}
        </h1>
        {subtitle && <p className="page-hero__sub">{subtitle}</p>}
      </div>
    </section>
  );
}
