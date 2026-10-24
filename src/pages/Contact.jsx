import PageHero from "../components/common/PageHero.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";

export default function Contact() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Let's Talk"
        highlight="Projects"
        subtitle="Tell us about your site. We'll get back to you with a plan and a quote."
        image="sameera-bt-2"
      />
      <ContactSection />
    </>
  );
}
