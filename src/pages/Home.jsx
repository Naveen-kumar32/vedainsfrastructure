import Hero from "../components/sections/Hero.jsx";
import AboutIntro from "../components/sections/AboutIntro.jsx";
import Expertise from "../components/sections/Expertise.jsx";
import ProjectsGallery from "../components/sections/ProjectsGallery.jsx";
import Clients from "../components/common/Clients.jsx";
import CtaBand from "../components/common/CtaBand.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro teaser />
      <ProjectsGallery featured />
      <Expertise />
      <Clients />
      <CtaBand />
    </>
  );
}
