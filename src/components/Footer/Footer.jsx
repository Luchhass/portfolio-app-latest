"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const contactLinks = [
  {
    href: "mailto:furkancasar2005@gmail.com",
    label: "furkancasar2005@gmail.com",
  },
  {
    href: "tel:+905061393220",
    label: "+90 506 139 32 20",
  },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: "instagram" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin" },
  { href: "https://github.com", label: "GitHub", icon: "github" },
  { href: "https://x.com", label: "X", icon: "x" },
];

function SocialIcon({ icon }) {
  if (icon === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.76 8.42a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28Zm-1.42 2.02h2.84v8.42H5.34v-8.42Zm4.6 0h2.72v1.15h.04c.38-.72 1.3-1.48 2.68-1.48 2.86 0 3.39 1.88 3.39 4.32v4.43h-2.84v-3.93c0-.94-.02-2.14-1.3-2.14-1.3 0-1.5 1.02-1.5 2.08v3.99H9.94v-8.42Z" />
      </svg>
    );
  }

  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3.6a8.4 8.4 0 0 0-2.65 16.37c.42.08.57-.18.57-.4 0-.2-.01-.86-.01-1.56-2.1.39-2.64-.51-2.81-.98-.1-.24-.54-.98-.92-1.18-.31-.17-.75-.59-.01-.6.7-.01 1.2.64 1.37.91.8 1.35 2.08.97 2.59.74.08-.58.31-.97.56-1.19-1.86-.21-3.81-.93-3.81-4.14 0-.91.32-1.66.86-2.24-.09-.21-.38-1.07.08-2.23 0 0 .71-.23 2.33.86a8 8 0 0 1 4.24 0c1.62-1.1 2.33-.86 2.33-.86.46 1.16.17 2.02.08 2.23.54.58.86 1.32.86 2.24 0 3.22-1.96 3.93-3.82 4.14.32.28.6.81.6 1.64 0 1.19-.01 2.14-.01 2.43 0 .22.15.49.57.4A8.4 8.4 0 0 0 12 3.6Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.08 10.83 20.6 3.6h-1.54l-5.67 6.28L8.86 3.6H3.6l6.84 9.58-6.84 7.22h1.54l5.99-6.32 4.51 6.32h5.26l-6.82-9.57Zm-2.27 2.4-.69-.98-5.47-7.82h2.39l4.41 6.3.69.98 5.73 8.18h-2.39l-4.67-6.66Z" />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();

  function updateTitleFillOrigin(event) {
    const link = event.currentTarget;
    const text = link.firstElementChild;
    const rect = (text || link).getBoundingClientRect();

    const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);

    link.style.setProperty("--gradient-title-fill-x", `${x}px`);
    link.style.setProperty("--gradient-title-fill-y", `${y}px`);
  }

  function updateActionFillOrigin(event) {
    const link = event.currentTarget;
    const rect = link.getBoundingClientRect();

    link.style.setProperty(
      "--gradient-fill-x",
      `${event.clientX - rect.left}px`,
    );
    link.style.setProperty(
      "--gradient-fill-y",
      `${event.clientY - rect.top}px`,
    );
  }

  return (
    <footer data-header-theme="dark" className="grid h-screen grid-rows-[auto_minmax(0,1fr)_auto] bg-black px-8 py-6 text-white md:px-10 md:py-8 lg:px-16 lg:py-12">
      <span></span>

      <div className="grid min-h-0 items-center gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.42fr)] lg:gap-16">
        <h2 className="m-0 max-w-4xl text-[44px] leading-[0.9] font-black tracking-[-0.04em] uppercase md:text-[80px] lg:text-[120px]">
          Designing with
          <br />
          <span className="gradient-text-flow">purpose</span>
          <br />
        </h2>

        <nav aria-label="Footer navigation" className="lg:justify-self-end">
          <ul className="m-0 flex list-none flex-col gap-1 p-0 lg:items-end">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <li key={href} className="w-fit max-w-full">
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    data-active={isActive ? "true" : undefined}
                    onPointerEnter={updateTitleFillOrigin}
                    onPointerLeave={updateTitleFillOrigin}
                    className="gradient-title-button inline-flex w-fit max-w-full text-[28px] leading-[0.82] font-black tracking-[-0.03em] text-white uppercase no-underline md:text-[30px] lg:text-[32px]"
                  >
                    <span className="gradient-title-text">
                      <span>{label}</span>

                      <span
                        className="gradient-text-flow gradient-title-fill"
                        aria-hidden="true"
                      >
                        {label}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <address className="m-0 flex flex-wrap items-center gap-x-2 gap-y-3 text-[13px] leading-tight font-medium tracking-[0.08em] text-white not-italic md:flex-col md:items-start md:gap-3 md:text-sm lg:flex-row lg:items-center lg:gap-4">
          {contactLinks.map((item, index) => (
            <span key={item.href} className="contents">
              <a
                href={item.href}
                className="group relative inline-block w-fit text-white no-underline"
              >
                <span className="relative after:absolute after:bottom-[-0.35rem] after:left-0 after:h-0.5 after:w-full after:bg-current after:[clip-path:inset(0_100%_0_0)] after:opacity-90 after:transition-[clip-path] after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:after:[clip-path:inset(0_0_0_0)] group-focus-visible:after:[clip-path:inset(0_0_0_0)]">
                  {item.label}
                </span>
              </a>

              {index === 0 && (
                <span
                  className="text-white/60 md:hidden lg:inline"
                  aria-hidden="true"
                >
                  |
                </span>
              )}
            </span>
          ))}
        </address>

        <ul
          className="m-0 flex list-none items-center gap-3 p-0 md:gap-5"
          aria-label="Social links"
        >
          {socialLinks.map(({ href, label, icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                onPointerEnter={updateActionFillOrigin}
                onPointerLeave={updateActionFillOrigin}
                className="gradient-action-button group/social relative isolate inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full text-white no-underline"
              >
                <span
                  className="gradient-action-fill pointer-events-none z-0 rounded-full"
                  aria-hidden="true"
                />

                <span
                  className="gradient-action-border pointer-events-none z-20 rounded-full"
                  aria-hidden="true"
                />

                <span
                  className="relative z-10 h-4.5 w-4.5 [&_svg]:h-full [&_svg]:w-full"
                  aria-hidden="true"
                >
                  <SocialIcon icon={icon} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
