import Hero from "../components/sections/Hero.jsx";
import Ticker from "../components/common/Ticker.jsx";
import AboutIntro from "../components/sections/AboutIntro.jsx";
import Expertise from "../components/sections/Expertise.jsx";
import ProjectsGallery from "../components/sections/ProjectsGallery.jsx";
import ClientsMarquee from "../components/common/ClientsMarquee.jsx";
import CtaBand from "../components/common/CtaBand.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <AboutIntro teaser />
      <Expertise />
      <ProjectsGallery featured />
      <ClientsMarquee />
      <CtaBand />
    </>
  );
}
