"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const projectsList = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio focused on strong typography, smooth motion, responsive sections, and clean project presentation.",
    href: "/projects",
  },
  {
    title: "Auto Parts Store",
    description:
      "A modern ecommerce interface for car parts with category pages, product cards, filters, and a clean shopping flow.",
    href: "/projects",
  },
  {
    title: "Restaurant POS",
    description:
      "A responsive restaurant management dashboard with table states, order flow, reports, and quick order interactions.",
    href: "/projects",
  },
  {
    title: "Agency Landing",
    description:
      "A sharp landing page concept with bold sections, animated details, strong hierarchy, and polished call-to-actions.",
    href: "/projects",
  },
  {
    title: "Product Detail",
    description:
      "A detailed product page design with focused visuals, clear information layout, and mobile-first interaction details.",
    href: "/projects",
  },
  {
    title: "Animated UI Kit",
    description:
      "A collection of reusable interface pieces with gradient effects, hover states, motion details, and responsive layouts.",
    href: "/projects",
  },
];

export default function ProjectsList({ projects = projectsList }) {
  const cardTiltFrameRef = useRef(null);
  const pendingCardTiltRef = useRef(null);
  const projectCards = projects.length ? projects : projectsList;

  useEffect(() => {
    return () => {
      if (cardTiltFrameRef.current !== null) {
        window.cancelAnimationFrame(cardTiltFrameRef.current);
      }
    };
  }, []);

  function resetCardTilt(card) {
    if (cardTiltFrameRef.current !== null) {
      window.cancelAnimationFrame(cardTiltFrameRef.current);
      cardTiltFrameRef.current = null;
    }

    pendingCardTiltRef.current = null;

    card.style.setProperty("--card-tilt-x", "0deg");
    card.style.setProperty("--card-tilt-y", "0deg");
    card.style.setProperty("--lift-x", "0px");
    card.style.setProperty("--lift-y", "0px");
  }

  function handleCardPointerMove(event) {
    if (event.pointerType === "touch") return;

    pendingCardTiltRef.current = {
      card: event.currentTarget,
      clientX: event.clientX,
      clientY: event.clientY,
    };

    if (cardTiltFrameRef.current !== null) return;

    cardTiltFrameRef.current = window.requestAnimationFrame(() => {
      const pendingCardTilt = pendingCardTiltRef.current;

      cardTiltFrameRef.current = null;
      pendingCardTiltRef.current = null;

      if (!pendingCardTilt) return;

      const { card, clientX, clientY } = pendingCardTilt;
      const rect = card.getBoundingClientRect();

      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;

      card.style.setProperty("--card-tilt-x", `${(x - 50) * 0.108}deg`);
      card.style.setProperty("--card-tilt-y", `${(50 - y) * 0.122}deg`);
      card.style.setProperty("--lift-x", `${(x - 50) * 0.28}px`);
      card.style.setProperty("--lift-y", `${(y - 50) * 0.22}px`);
    });
  }

  return (
    <section
      data-header-theme="dark"
      className="min-h-dvh bg-[#141414] px-8 py-12 text-white md:px-10 md:py-16 lg:px-16 lg:py-20"
      aria-labelledby="projects-list-title"
    >
      <div className="grid min-h-0 gap-7 md:gap-8 lg:grid-cols-[160px_minmax(0,1fr)_160px] lg:gap-x-5">
        <p className="m-0 text-sm leading-none font-black tracking-[0.08em] uppercase">
          PROJECTS
        </p>

        <div className="min-w-0 lg:col-start-2">
          <h2
            id="projects-list-title"
            className="m-0 mt-[-0.08em] text-[44px] leading-[0.78] font-black tracking-[-0.04em] uppercase md:text-[80px] lg:text-[120px]"
          >
            Selected
            <br className="md:hidden" /> Work
          </h2>

          <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
            {projectCards.map((project, index) => {
              const itemNumber = String(index + 1).padStart(2, "0");
              const isExternalLink = project.href.startsWith("http");
              const hasImage = Boolean(project.image);

              return (
                <article
                  key={project.title}
                  className="project-card-motion group/project relative isolate min-w-0 overflow-visible"
                  onPointerMove={handleCardPointerMove}
                  onPointerLeave={(event) => resetCardTilt(event.currentTarget)}
                >
                  <div className="relative flex h-full flex-col overflow-hidden border border-white/10 bg-[#181818] transition-colors duration-300 group-hover/project:border-white/20 group-focus-within/project:border-white/20">
                    <span
                      className="gradient-action-border pointer-events-none z-30 opacity-0 transition-opacity duration-300 group-hover/project:opacity-100 group-focus-within/project:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="relative overflow-hidden bg-black">
                      <div
                        className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.48))]"
                        aria-hidden="true"
                      />

                      {hasImage ? (
                        <Image
                          className="pointer-events-none block aspect-16/10 w-full object-cover object-center"
                          src={project.image}
                          alt={project.alt || `${project.title} preview.`}
                          width={900}
                          height={563}
                          loading="lazy"
                          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                          draggable={false}
                        />
                      ) : (
                        <div
                          className="gradient-bg-flow aspect-16/10 w-full opacity-80"
                          aria-hidden="true"
                        />
                      )}

                      <span className="project-card-lift project-card-number gradient-text-flow absolute bottom-3 left-4 z-20 text-[64px] leading-[0.88] font-black md:text-[76px] lg:text-[88px]">
                        {itemNumber}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col gap-3 bg-[#202020] px-5 py-5 md:px-6">
                      <div className="flex flex-col gap-3">
                        <h3 className="project-card-lift m-0 max-w-[10ch] text-[28px] leading-[0.82] font-black tracking-[-0.03em] uppercase md:text-[30px] lg:text-[32px]">
                          {project.title}
                        </h3>

                        <p className="project-card-lift m-0 max-w-[28ch] text-[13px] leading-tight font-medium text-white/50 md:text-sm">
                          {project.description}
                        </p>
                      </div>

                      <Link
                        href={project.href}
                        target={isExternalLink ? "_blank" : undefined}
                        rel={isExternalLink ? "noreferrer" : undefined}
                        className="project-card-lift mt-auto inline-flex w-fit items-center gap-2 pt-1 text-sm leading-none font-black tracking-[0.02em] uppercase no-underline"
                      >
                        <span
                          className="gradient-action-dot h-2 w-2 rounded-full"
                          aria-hidden="true"
                        />
                        View Project
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
