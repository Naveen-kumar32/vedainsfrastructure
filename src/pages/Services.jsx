import PageHero from "../components/common/PageHero.jsx";
import Expertise from "../components/sections/Expertise.jsx";
import ServicesOffered from "../components/sections/ServicesOffered.jsx";
import CtaBand from "../components/common/CtaBand.jsx";

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="What We"
        highlight="Build"
        subtitle="All civil construction works under one roof, from site surveying and foundations to roads, bridges and finishes."
        image="nova-2"
      />
      <ServicesOffered />
      <Expertise />
      <CtaBand />
    </>
  );
}
