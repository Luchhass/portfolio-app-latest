export default function ProjectsIntro() {
  return (
    <section
      data-header-theme="light"
      className="min-h-dvh overflow-hidden bg-white px-8 py-20 text-black md:px-10 md:py-24 lg:px-16 lg:py-32"
      aria-labelledby="projects-intro-title"
    >
      <div className="grid w-full max-w-205 grid-cols-1 gap-y-5 md:grid-cols-[120px_minmax(0,1fr)] md:gap-x-5 md:gap-y-0 lg:grid-cols-[160px_minmax(0,1fr)]">
        <p className="m-0 inline-flex items-center gap-2 self-start text-[13px] leading-none font-black tracking-[0.08em] text-black/55 uppercase md:pt-3 md:text-sm">
          <span
            className="gradient-action-dot h-2 w-2 rounded-full"
            aria-hidden="true"
          />
          Archive
        </p>

        <div className="grid min-w-0 gap-5 md:col-start-2 md:gap-7">
          <h2
            id="projects-intro-title"
            className="m-0 flex flex-col text-[44px] leading-[0.9] font-black tracking-[-0.04em] uppercase md:text-[80px] lg:text-[120px]"
          >
            <span>Projects</span>
            <span className="gradient-text-flow">Showcase</span>
          </h2>

          <p className="m-0 max-w-2xl text-[13px] leading-tight font-medium text-black/65 md:text-sm">
            This archive brings together interfaces built with clean structure,
            responsive layouts, strong visual rhythm and polished interaction
            details. Each project is shaped to turn a simple idea into a clear
            digital experience that feels modern, usable and carefully finished.
          </p>

          <div
            className="flex w-fit items-center gap-3 border-t border-black/10 pt-4"
            aria-label={`45 selected projects`}
          >
            <span className="gradient-text-flow text-[28px] leading-[0.82] font-black md:text-[30px] lg:text-[32px]">
              45
            </span>

            <span className="text-[10px] leading-none font-black tracking-[0.16em] text-black/45 uppercase">
              selected projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
