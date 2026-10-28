import { Link } from "react-router-dom";

/** Banner at the top of every inner page. */
export default function PageHero({ title, highlight, subtitle, image, crumb }) {
  return (
    <section className="page-hero">
      <img className="page-hero__bg" src={`/images/${image}.webp`} alt="" />
      <div className="container page-hero__content">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span aria-hidden="true">/</span><b>{crumb}</b>
        </nav>
        <h1 className="page-hero__title">{title}{highlight && <> <em>{highlight}</em></>}</h1>
        {subtitle && <p className="page-hero__sub">{subtitle}</p>}
      </div>
    </section>
  );
}
