import CollaborationCTA from "@/components/CollaborationCTA/CollaborationCTA";
import ProjectsHero from "@/components/Projects/ProjectsHero/ProjectsHero";
import ProjectsIntro from "@/components/Projects/ProjectsIntro/ProjectsIntro";
import ProjectsList from "@/components/Projects/ProjectsList/ProjectsList";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsIntro />
      <ProjectsList />
      <CollaborationCTA />
    </main>
  );
}
