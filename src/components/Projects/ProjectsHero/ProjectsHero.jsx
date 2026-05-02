import HeroContactButton from "@/components/ContactButton/ContactButton";

export default function ProjectsHero() {
  return (
    <section
      data-header-theme="dark"
      className="grid h-dvh grid-rows-[minmax(0,1fr)_auto_minmax(0,1fr)] bg-black px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-12"
    >
      <div className="row-start-2 flex items-center justify-center">
        <h1 className="m-0 flex flex-col items-center text-center text-[44px] leading-[0.9] font-black tracking-[-0.04em] text-white uppercase md:text-[80px] lg:text-[120px]">
          <span> What I&apos;ve</span>

          <span>Been</span>

          <span className="gradient-text-flow">Building</span>
        </h1>
      </div>

      <div className="row-start-3 grid w-full grid-cols-2 items-end gap-x-4 gap-y-5 self-end md:flex md:items-end md:justify-between md:gap-6">
        <div
          className="pointer-events-auto col-start-1 row-start-2 flex min-w-0 items-center gap-3 pr-3 md:pr-0"
          aria-label="45 completed projects with modern interfaces"
        >
          <span className="gradient-text-flow text-[28px] leading-[0.82] font-black [text-shadow:0_0_16px_rgba(117,82,255,.5)] md:text-[30px] lg:text-[32px]">
            45
          </span>

          <p className="m-0 text-[13px] leading-tight font-medium text-white/90 md:text-sm lg:text-sm">
            completed projects
            <br />
            with modern interfaces
          </p>
        </div>

        <p className="col-span-2 row-start-1 m-0 max-w-none text-center text-[13px] leading-tight font-medium text-white/90 md:max-w-md md:text-sm lg:text-sm">
          Each project here reflects my approach to design, code, and
          problem-solving. From concept to execution, every detail has been
          carefully considered and built with intent.
        </p>

        <div className="col-start-2 row-start-2 flex justify-end">
          <HeroContactButton />
        </div>
      </div>
    </section>
  );
}
