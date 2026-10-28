import { useState } from "react";
import { Eyebrow } from "../common/SectionHead.jsx";
import Icon from "../common/Icon.jsx";
import { company } from "../../data/company.js";

const projectTypes = [
  "Road / BT Road Work",
  "Mass Filling & Compaction",
  "Land / Plot Development",
  "Building Construction",
  "Compound / Retaining Wall",
  "Bridge / Culvert",
  "Aggregate / M-Sand Supply",
  "Other",
];
const empty = { name: "", phone: "", type: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [note, setNote] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend yet: opens the visitor's email app with the enquiry filled in.
  const submit = (e) => {
    e.preventDefault();
    const errs = { name: !form.name.trim(), phone: !form.phone.trim(), type: !form.type };
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) {
      setNote("Please fill in your name, phone and project type.");
      return;
    }
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nProject Type: ${form.type}\n\n${form.message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Project Enquiry – " + form.type)}&body=${encodeURIComponent(body)}`;
    setNote(`Opening your email app… You can also call us on ${company.phones[0].label}.`);
    setForm(empty);
  };

  return (
    <section className="section contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <div className="reveal"><Eyebrow>Contact</Eyebrow></div>
          <h2 className="title reveal">Let's build <span className="hl">something lasting</span></h2>

          <div className="cinfo reveal">
            <div className="cinfo__icon"><Icon name="pin" /></div>
            <div><h4>Registered Office</h4><p>{company.address[0]}<br />{company.address[1]}</p></div>
          </div>
          <div className="cinfo reveal">
            <div className="cinfo__icon"><Icon name="phone" /></div>
            <div>
              <h4>Call Us</h4>
              <p>{company.phones.map((p, i) => <span key={p.href}>{i > 0 && <br />}<a href={p.href}>{p.label}</a></span>)}</p>
            </div>
          </div>
          <div className="cinfo reveal">
            <div className="cinfo__icon"><Icon name="mail" /></div>
            <div><h4>Email</h4><p><a href={`mailto:${company.email}`}>{company.email}</a></p></div>
          </div>
          <div className="map reveal">
            <iframe title="Veda Infrastructure office location" src={company.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>

        <form className="cform reveal-up" onSubmit={submit} noValidate>
          <h3>Request a Quote</h3>
          <p className="cform__sub">Tell us about your project and we'll get back to you.</p>
          <div className={`field ${errors.name ? "has-error" : ""}`}>
            <input id="f-name" name="name" value={form.name} onChange={update} placeholder=" " required />
            <label htmlFor="f-name">Your Name</label>
          </div>
          <div className={`field ${errors.phone ? "has-error" : ""}`}>
            <input id="f-phone" name="phone" type="tel" value={form.phone} onChange={update} placeholder=" " required />
            <label htmlFor="f-phone">Phone Number</label>
          </div>
          <div className={`field ${errors.type ? "has-error" : ""}`}>
            <select id="f-type" name="type" value={form.type} onChange={update} required>
              <option value="" disabled hidden />
              {projectTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
            <label htmlFor="f-type">Project Type</label>
          </div>
          <div className="field">
            <textarea id="f-msg" name="message" rows="4" value={form.message} onChange={update} placeholder=" " />
            <label htmlFor="f-msg">Project Details</label>
          </div>
          <button className="btn btn--primary btn--block" type="submit">Send Enquiry <Icon name="arrow" /></button>
          <p className="cform__note" role="status">{note}</p>
        </form>
      </div>
    </section>
  );
}
