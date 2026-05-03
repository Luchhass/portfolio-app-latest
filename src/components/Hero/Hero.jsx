"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GradientActionButton from "@/components/ContactButton/ContactButton";

gsap.registerPlugin(useGSAP);

function normalizeCopyLines(copyLines) {
  if (Array.isArray(copyLines)) {
    return copyLines.filter(Boolean);
  }

  return String(copyLines || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export default function Hero({
  titleLines,
  copyLines,
  stat,
  action,
  copyClassName = "",
}) {
  const heroRef = useRef(null);
  const heroCopyLines = normalizeCopyLines(copyLines);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

      if (prefersReducedMotion.matches) return;

      const q = gsap.utils.selector(heroRef);
      const isVisibleElement = (element) => {
        if (!(element instanceof HTMLElement)) return false;

        const rect = element.getBoundingClientRect();

        return rect.width > 0 && rect.height > 0;
      };

      const headerProjectsLink = document.querySelector(
        "[data-hero-intro='projects-link']",
      );
      const headerBrand = document.querySelector("[data-hero-intro='brand']");
      const headerMenuButton = document.querySelector(
        "[data-hero-intro='menu-button']",
      );
      const headerTargets = [
        headerProjectsLink,
        headerBrand,
        headerMenuButton,
      ].filter(isVisibleElement);

      const titleItems = q("[data-hero-title]");
      const statItem = q("[data-hero-stat]");
      const copyItems = q("[data-hero-copy-line]");
      const buttonItem = q("[data-hero-button]");
      const buttonFillItems = q("[data-hero-button] .gradient-action-fill");
      const bottomItems = [...statItem, ...copyItems, ...buttonItem];
      const leftIntroTargets = [headerProjectsLink, ...statItem].filter(
        isVisibleElement,
      );
      const centerIntroTargets = [headerBrand, ...copyItems].filter(
        isVisibleElement,
      );
      const rightIntroTargets = [headerMenuButton, ...buttonItem].filter(
        isVisibleElement,
      );

      // Header intro start state: top nav items wait above their own masked row.
      gsap.set(headerTargets, {
        autoAlpha: 1,
        y: -34,
        willChange: "transform",
      });

      // Hero title start state: title rows alternate from left, right, left.
      titleItems.forEach((item, index) => {
        gsap.set(item, {
          autoAlpha: 1,
          xPercent: index % 2 === 0 ? -112 : 112,
          willChange: "transform",
        });
      });

      // Bottom hero start state: stat, paragraph lines and button sit below their masks.
      gsap.set(bottomItems, {
        autoAlpha: 1,
        yPercent: 115,
        rotateX: -8,
        transformOrigin: "50% 100%",
        willChange: "transform",
      });

      // Hero action hover-fill start state: button enters with its full gradient fill visible.
      gsap.set(buttonFillItems, {
        opacity: 1,
        clipPath: "circle(145% at 50% 50%)",
        willChange: "clip-path, opacity",
      });

      const timeline = gsap.timeline({
        delay: 0.33,
        defaults: {
          ease: "power4.out",
        },
      });

      // Left column intro: top-left header item and bottom-left stat enter together.
      timeline.to(leftIntroTargets, {
        y: 0,
        yPercent: 0,
        rotateX: 0,
        duration: 0.78,
        clearProps: "transform,willChange",
      });

      // Center column intro: brand and bottom paragraph enter together.
      timeline.to(
        centerIntroTargets,
        {
          y: 0,
          yPercent: 0,
          rotateX: 0,
          duration: 0.78,
          clearProps: "transform,willChange",
        },
        "-=0.56",
      );

      // Right column intro: menu button and hero action enter together.
      timeline.to(
        rightIntroTargets,
        {
          y: 0,
          yPercent: 0,
          rotateX: 0,
          duration: 0.78,
          clearProps: "transform,willChange",
        },
        "-=0.56",
      );

      // Main title intro: center title starts after top and bottom rows finish.
      timeline.to(
        titleItems,
        {
          xPercent: 0,
          duration: 1.12,
          stagger: 0.16,
          clearProps: "transform,willChange",
        },
        "-=0.5",
      );

      // Hero action hover-fill release: button returns to normal after intro completes.
      timeline.to(buttonFillItems, {
        opacity: 0,
        clipPath: "circle(0% at 50% 50%)",
        duration: 0.34,
        ease: "power2.out",
        clearProps: "opacity,clipPath,willChange",
      });
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      data-header-theme="dark"
      data-scroll-reveal="off"
      className="grid h-dvh grid-rows-[minmax(0,1fr)_auto_minmax(0,1fr)] bg-black px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-12"
    >
      <div className="row-start-2 flex items-center justify-center">
        <h1 className="m-0 flex flex-col items-center text-center text-[44px] leading-[0.9] font-black tracking-[-0.04em] text-white uppercase md:text-[80px] lg:text-[120px]">
          {titleLines.map((line) => (
            <span key={line.text} className="block overflow-hidden">
              <span
                data-hero-title
                className={`${line.gradient ? "gradient-text-flow " : ""}block`}
              >
                {line.text}
              </span>
            </span>
          ))}
        </h1>
      </div>

      <div className="row-start-3 grid w-full grid-cols-2 items-end gap-x-4 gap-y-5 self-end md:flex md:items-end md:justify-between md:gap-6">
        {stat ? (
          <div
            className="pointer-events-auto col-start-1 row-start-2 min-w-0 overflow-hidden pr-3 md:pr-0"
            aria-label={stat.ariaLabel}
          >
            <div data-hero-stat className="flex items-center gap-3">
              <span className="gradient-text-flow text-[28px] leading-[0.82] font-black [text-shadow:0_0_16px_rgba(117,82,255,.5)] md:text-[30px] lg:text-[32px]">
                {stat.value}
              </span>

              <p className="m-0 text-[13px] leading-tight font-medium text-white/90 md:text-sm lg:text-sm">
                {stat.labelLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ) : (
          <span className="col-start-1 row-start-2" aria-hidden="true" />
        )}

        <p
          className={`col-span-2 row-start-1 m-0 max-w-none text-center text-[13px] leading-tight font-medium text-white/90 md:max-w-md md:text-sm lg:text-sm ${copyClassName}`}
        >
          {heroCopyLines.map((line) => (
            <span key={line} className="block overflow-hidden">
              <span data-hero-copy-line className="block">
                {line}
              </span>
            </span>
          ))}
        </p>

        {action ? (
          <div className="col-start-2 row-start-2 flex justify-end overflow-hidden">
            <div data-hero-button>
              <GradientActionButton
                href={action.href}
                id={action.id}
                label={action.label}
              />
            </div>
          </div>
        ) : (
          <span className="col-start-2 row-start-2" aria-hidden="true" />
        )}
      </div>
    </section>
  );
}
