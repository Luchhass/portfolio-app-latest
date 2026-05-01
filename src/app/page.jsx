import HomeHero from "@/components/Home/HomeHero/HomeHero";
import AboutMeAccordion from "@/components/Home/AboutMeAccordion/AboutMeAccordion";
import ProjectsHighlights from "@/components/Home/ProjectsHighlights/ProjectsHighlights";
import CollaborationCTA from "@/components/CollaborationCTA/CollaborationCTA";
import IdentityBand from "@/components/Home/IdentityBand/IdentityBand";
import MarqueeText from "@/components/MarqueeText/MarqueeText";

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
