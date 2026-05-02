import ProjectsHero from "@/components/Projects/ProjectsHero/ProjectsHero";
import MarqueeText from "@/components/MarqueeText/MarqueeText";
import ProjectsIntro from "@/components/Projects/ProjectsIntro/ProjectsIntro";
import ProjectsList from "@/components/Projects/ProjectsList/ProjectsList";
import CollaborationCTA from "@/components/CollaborationCTA/CollaborationCTA";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <MarqueeText text="MY PROJECTS" duration="50s" />
      <ProjectsIntro />
      <ProjectsList />
      <CollaborationCTA />
    </main>
  );
}
