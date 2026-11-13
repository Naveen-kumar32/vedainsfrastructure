import { useState } from "react";
import SectionHead from "./SectionHead.jsx";
import { clients } from "../../data/company.js";

export default function ClientsMarquee() {
  const half = Math.ceil(clients.length / 2);
  const rows = [clients.slice(0, half), clients.slice(half)];
  return (
    <section className="section clients">
      <div className="container">
        <SectionHead variant="center" eyebrow="Trusted By" title={<>Some of our <span className="hl">prestigious clients</span></>} />
      </div>
      {rows.map((row, r) => (
        <div key={r} className={`cmarquee ${r ? "cmarquee--rev" : ""}`}>
          <div className="cmarquee__track">
            {[...row, ...row].map((c, i) => (
              <figure key={i} className="ccard" aria-hidden={i >= row.length || undefined}>
                <div className="ccard__logo"><Logo client={c} /></div>
                <figcaption>{c.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

// Falls back to the client's initials when there is no logo file (or it fails to load).
function Logo({ client }) {
  const [failed, setFailed] = useState(false);
  if (client.logo && !failed) {
    return <img src={`/images/clients/${client.logo}.png`} alt={`${client.name} logo`} loading="lazy" onError={() => setFailed(true)} />;
  }
  const initials = client.name.replace(/[^A-Za-z ]/g, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("");
  return <b>{initials}</b>;
}
