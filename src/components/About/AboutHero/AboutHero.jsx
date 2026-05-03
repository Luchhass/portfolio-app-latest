import Hero from "@/components/Hero/Hero";

export default function AboutHero() {
  return (
    <Hero
      titleLines={[
        { text: "THE MIND" },
        { text: "BEHIND" },
        { text: "THE INTERFACE", gradient: true },
      ]}
      stat={{
        value: "45",
        labelLines: ["completed projects", "with modern interfaces"],
        ariaLabel: "45 completed projects with modern interfaces",
      }}
      copyLines={[
        "I'm Furkan Cosar, a frontend developer focused on creating responsive,",
        "animated and user-friendly web interfaces with React, Next.js, GSAP",
        "and Tailwind CSS. I build clean digital experiences where design,",
        "performance and interaction details work together.",
      ]}
      action={{
        href: "/contact",
        id: "about-hero-cv",
        label: "CHECK MY CV",
      }}
    />
  );
}
