"use client";

import Image from "next/image";
import { useState } from "react";
import { Code2, Sparkles, Workflow } from "lucide-react";

const techGroups = [
  {
    id: "core",
    title: "Core Frontend",
    description:
      "The base I use for structure, styling, behavior, typing and scalable CSS details.",
    Icon: Code2,
    items: [
      { name: "HTML5", logo: "/tech-logos/html5.svg" },
      { name: "CSS3", logo: "/tech-logos/css3.svg" },
      { name: "JavaScript", logo: "/tech-logos/javascript.svg" },
      { name: "TypeScript", logo: "/tech-logos/typescript.svg" },
      { name: "Sass", logo: "/tech-logos/sass.svg" },
    ],
  },
  {
    id: "interface",
    title: "Interface Stack",
    description:
      "The stack I use to build responsive interfaces, reusable components and polished layouts.",
    Icon: Sparkles,
    items: [
      { name: "React", logo: "/tech-logos/react.svg" },
      { name: "Next.js", logo: "/tech-logos/nextjs.svg" },
      { name: "Tailwind CSS", logo: "/tech-logos/tailwindcss.svg" },
      { name: "Bootstrap", logo: "/tech-logos/bootstrap.svg" },
      { name: "Lucide", logo: "/tech-logos/lucide.svg" },
    ],
  },
  {
    id: "workflow",
    title: "Development Workflow",
    description:
      "The tools that help me version, format, ship and keep the development process organized.",
    Icon: Workflow,
    items: [
      { name: "Git", logo: "/tech-logos/git.svg" },
      { name: "GitHub", logo: "/tech-logos/github.svg" },
      { name: "Vercel", logo: "/tech-logos/vercel.svg" },
      { name: "Vite", logo: "/tech-logos/vite.svg" },
      { name: "ESLint", logo: "/tech-logos/eslint.svg" },
      { name: "Prettier", logo: "/tech-logos/prettier.svg" },
      { name: "npm", logo: "/tech-logos/npm.svg" },
      { name: "Yarn", logo: "/tech-logos/yarn.svg" },
      { name: "VS Code", logo: "/tech-logos/vscode.svg" },
      { name: "Postman", logo: "/tech-logos/postman.svg" },
    ],
  },
  {
    id: "product",
    title: "Product Collaboration",
    description:
      "The apps I use while planning screens, discussing details and tracking real product work.",
    Icon: Sparkles,
    items: [
      { name: "Figma", logo: "/tech-logos/figma.svg" },
      { name: "Discord", logo: "/tech-logos/discord.svg" },
      { name: "Jira", logo: "/tech-logos/jira.svg" },
    ],
  },
];

export default function TechStackAccordion() {
  const [openId, setOpenId] = useState(techGroups[0].id);

  function updateTitleFillOrigin(event) {
    const button = event.currentTarget;
    const text = button.firstElementChild;
    const rect = text.getBoundingClientRect();

    const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);

    button.style.setProperty("--gradient-title-fill-x", `${x}px`);
    button.style.setProperty("--gradient-title-fill-y", `${y}px`);
  }

  return (
    <section
      data-header-theme="light"
      className="min-h-dvh bg-white px-8 py-20 text-black md:px-10 md:py-24 lg:px-16 lg:py-32"
    >
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <linearGradient
            id="tech-stack-icon-gradient"
            x1="-1"
            y1="0"
            x2="2"
            y2="1"
          >
            <stop stopColor="#6768ff" />
            <stop offset=".35" stopColor="#884cff" />
            <stop offset=".6" stopColor="#cf3d9f" />
            <stop offset="1" stopColor="#ee4b67" />

            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="-1 0; 1 0; -1 0"
              dur="8s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
      </svg>

      <div className="grid w-full max-w-205 grid-cols-[40px_minmax(0,1fr)] gap-x-4 md:grid-cols-[120px_minmax(0,1fr)] md:gap-x-5 lg:grid-cols-[160px_minmax(0,1fr)]">
        <h2 className="col-start-2 m-0 flex flex-col text-[44px] leading-[0.9] font-black tracking-[-0.04em] uppercase md:text-[80px] lg:text-[120px]">
          <span>TOOLS</span>
          <span className="gradient-text-flow">I USE</span>
        </h2>

        <div className="col-span-2 mt-8 border-t border-black/10 md:mt-10">
          {techGroups.map((item) => {
            const isOpen = openId === item.id;
            const Icon = item.Icon;

            return (
              <div
                key={item.id}
                className="grid grid-cols-[40px_minmax(0,1fr)] gap-x-4 border-b border-black/10 py-5 md:grid-cols-[120px_minmax(0,1fr)] md:gap-x-5 md:py-6 lg:grid-cols-[160px_minmax(0,1fr)]"
              >
                <Icon
                  color="url(#tech-stack-icon-gradient)"
                  strokeWidth={2.3}
                  className="gradient-icon-flow mt-1 h-5 w-5 md:h-6 md:w-6"
                  aria-hidden="true"
                />

                <div className="min-w-0">
                  <button
                    type="button"
                    className="gradient-title-button w-full cursor-pointer border-0 bg-transparent p-0 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`tech-panel-${item.id}`}
                    data-active={isOpen ? "true" : undefined}
                    onClick={() => setOpenId(item.id)}
                    onPointerEnter={updateTitleFillOrigin}
                    onPointerLeave={updateTitleFillOrigin}
                  >
                    <span className="gradient-title-text text-[28px] leading-[0.82] font-black tracking-[-0.03em] text-black/90 uppercase md:text-[30px] lg:text-[32px]">
                      <span>{item.title}</span>

                      <span
                        className="gradient-text-flow gradient-title-fill"
                        aria-hidden="true"
                      >
                        {item.title}
                      </span>
                    </span>
                  </button>

                  <div
                    id={`tech-panel-${item.id}`}
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="m-0 max-w-md pt-2 text-[13px] leading-tight font-medium text-black/70 md:text-sm">
                        {item.description}
                      </p>

                      <ul className="m-0 flex max-w-xl list-none flex-wrap gap-x-5 gap-y-4 p-0 pt-4 md:gap-x-6">
                        {item.items.map((tech) => (
                          <li
                            key={tech.name}
                            className="flex w-16.5 min-w-0 flex-col items-center gap-2 text-center md:w-18.5"
                          >
                            <span className="relative block h-7 w-7 md:h-8 md:w-8">
                              <Image
                                src={tech.logo}
                                alt=""
                                fill
                                sizes="32px"
                                className="object-contain"
                                unoptimized
                              />
                            </span>

                            <span className="max-w-full text-center text-[12px] leading-tight font-medium text-black/70 md:text-[13px]">
                              {tech.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
