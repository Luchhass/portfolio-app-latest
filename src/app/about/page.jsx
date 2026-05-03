import AboutHero from "@/components/About/AboutHero/AboutHero";
import MarqueeText from "@/components/MarqueeText/MarqueeText";
import AboutIntro from "@/components/About/AboutIntro/AboutIntro";
import GitHubStats from "@/components/About/GitHubStats/GitHubStats";
import TechStackAccordion from "@/components/About/TechStackAccordion/TechStackAccordion";
import CollaborationCTA from "@/components/CollaborationCTA/CollaborationCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <MarqueeText text="FURKAN COSAR" duration="50s" />
      <AboutIntro />
      <GitHubStats />
      <TechStackAccordion />
      <CollaborationCTA />
    </main>
  );
}
