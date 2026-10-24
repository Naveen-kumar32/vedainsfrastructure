import PageHero from "../components/common/PageHero.jsx";
import ProjectsGallery from "../components/sections/ProjectsGallery.jsx";
import CtaBand from "../components/common/CtaBand.jsx";

export default function Projects() {
  return (
    <>
      <PageHero
        crumb="Projects"
        title="Our Project"
        highlight="Portfolio"
        subtitle="Highways, metro depots, industrial plants, townships, bridges and lakes, completed and ongoing."
        image="rwd-chemba-2"
      />
      <ProjectsGallery />
      <CtaBand />
    </>
  );
}
