import PageHero from "../components/common/PageHero.jsx";
import FleetShowcase from "../components/sections/FleetShowcase.jsx";
import PlantTabs from "../components/sections/PlantTabs.jsx";
import Quality from "../components/sections/Quality.jsx";
import CtaBand from "../components/common/CtaBand.jsx";

export default function Strength() {
  return (
    <>
      <PageHero
        crumb="Our Strength"
        title="Our Own"
        highlight="Fleet & Plant"
        subtitle="The largest fleet operator in Thiruvallur & Kanchipuram District, with our own aggregate quarry and bitumen plant."
        image="fleet-5"
      />
      <FleetShowcase />
      <PlantTabs />
      <Quality />
      <CtaBand />
    </>
  );
}
