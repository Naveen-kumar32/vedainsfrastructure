import PageHero from "../components/common/PageHero.jsx";
import AboutIntro from "../components/sections/AboutIntro.jsx";
import Philosophy from "../components/sections/Philosophy.jsx";
import Quality from "../components/sections/Quality.jsx";
import Clients from "../components/common/Clients.jsx";
import CtaBand from "../components/common/CtaBand.jsx";

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="Building Since"
        highlight="2009"
        subtitle="A trusted civil contractor for industrial, road and infrastructure projects, guided by strong values and strict quality."
        image="nh716b-1"
      />
      <AboutIntro />
      <Philosophy />
      <Quality />
      <Clients />
      <CtaBand />
    </>
  );
}
