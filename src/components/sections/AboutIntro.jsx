import { Link } from "react-router-dom";
import { Eyebrow } from "../common/SectionHead.jsx";
import Icon from "../common/Icon.jsx";
import { company, stats } from "../../data/company.js";

/** About block. `teaser` shows a shorter version with a link to the About page. */
export default function AboutIntro({ teaser = false }) {
  const years = new Date().getFullYear() - company.since;
  return (
    <section className="section about">
      <div className="container about__grid">
        <figure className="about__media reveal">
          <img src="/images/nh716b-3.webp" alt="Motor grader levelling the six-lane NH716B formation" loading="lazy" />
          <figcaption><b>{years}+ years</b> of groundwork across Tamil Nadu</figcaption>
        </figure>

        <div className="about__text reveal">
          <Eyebrow>About us</Eyebrow>
          <h2 className="title">One of the fastest-growing names in <span className="hl">civil construction</span></h2>
          <p className="lead">Veda Infrastructure has a strong reputation with clients and consultants alike. We work across industrial, road and infrastructure projects, and we hold to our core values so every customer is fully satisfied.</p>
          {teaser ? (
            <Link to="/about" className="btn btn--outline about__more">More About Us <Icon name="arrow" /></Link>
          ) : (
            <>
              <p>Over the years we have built deep experience in civil construction and set benchmarks with prestigious clients in a short time by using the best construction methods.</p>
              <dl className="stats">
                {stats.map((s) => (
                  <div key={s.label}><dt>{s.value}{s.suffix}</dt><dd>{s.label}</dd></div>
                ))}
              </dl>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
