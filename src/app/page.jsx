import HomeHero from "@/components/Home/HomeHero/HomeHero";
import MarqueeText from "@/components/MarqueeText/MarqueeText";
import AboutMeAccordion from "@/components/Home/AboutMeAccordion/AboutMeAccordion";
import ProjectsHighlights from "@/components/Home/ProjectsHighlights/ProjectsHighlights";
import CollaborationCTA from "@/components/CollaborationCTA/CollaborationCTA";
import IdentityBand from "@/components/Home/IdentityBand/IdentityBand";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <MarqueeText text="Welcome" duration="50s" />
      <AboutMeAccordion />
      <ProjectsHighlights />
      <CollaborationCTA />
      <IdentityBand />
    </main>
  );
}
