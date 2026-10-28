import { Link } from "react-router-dom";
import Counter from "../common/Counter.jsx";
import { Eyebrow } from "../common/SectionHead.jsx";
import Icon from "../common/Icon.jsx";
import { company, stats } from "../../data/company.js";

/** About block. `teaser` shows a shorter version with a link to the About page. */
export default function AboutIntro({ teaser = false }) {
  const years = new Date().getFullYear() - company.since;
  return (
    <section className="section about">
      <div className="container about__grid">
        <div className="about__media reveal-left">
          <div className="about__img about__img--main"><img src="/images/nh716b-3.webp" alt="Motor grader levelling the six-lane NH716B formation" loading="lazy" /></div>
          <div className="about__img about__img--sub"><img src="/images/sameera-bt-1.webp" alt="Night-time BT road rolling with tandem roller" loading="lazy" /></div>
          <div className="about__years"><Counter value={years} /><span>+ Years of<br />Groundwork</span></div>
          <div className="about__ring" />
        </div>

        <div className="about__text">
          <div className="reveal"><Eyebrow>About Us</Eyebrow></div>
          <h2 className="title reveal">One of the fastest-growing names in <span className="hl">civil construction</span></h2>
          <p className="reveal">VEDA INFRASTRUCTURE has a good reputation with clients and consultants alike. We work across industrial, roads and infrastructure projects, and we hold to our core values so every customer is fully satisfied.</p>
          {!teaser && (
            <p className="reveal">Over the years we have built deep experience in civil construction and set benchmarks with prestigious clients in a short time by using the best construction methods.</p>
          )}
          <div className="stats">
            {stats.map((s, i) => (
              <div key={s.label} className="stat reveal" style={{ "--i": i }}>
                <Counter value={s.value} suffix={s.suffix} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          {teaser && <Link to="/about" className="btn btn--primary about__more reveal">More About Us <Icon name="arrow" /></Link>}
        </div>
      </div>
    </section>
  );
}
