import { Hero } from "../../components/layouts/Hero";
import { ProjectsSection } from "../../components/layouts/ProjestsSection";
import { ServicesSection } from "../../components/layouts/ServicesSection";
/**
 * Accroche : Hero
 * section services: Des cards (4) avec description et button en "savoir plus" vers page du service correspondant;
 * section projects: Des card avec description et button en "savoir plus" vers page du project correspondant;
 * témoignage,
 * CTA,
 * A propos
 */
function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProjectsSection />
    </>
  );
}

export default Home;
