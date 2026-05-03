import Hero from "@/components/Hero/Hero";

export default function ProjectsHero() {
  return (
    <Hero
      titleLines={[
        { text: "What I've" },
        { text: "Been" },
        { text: "Building", gradient: true },
      ]}
      stat={{
        value: "45",
        labelLines: ["completed projects", "with modern interfaces"],
        ariaLabel: "45 completed projects with modern interfaces",
      }}
      copyLines={[
        "Each project here reflects my approach to design, code, and",
        "problem-solving. From concept to execution, every detail has been",
        "carefully considered and built with intent.",
      ]}
      action={{
        href: "/contact",
        id: "projects-hero-contact",
        label: "CONTACT ME",
      }}
    />
  );
}
