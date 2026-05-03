export default function ContactHero() {
  return (
    <section
      data-header-theme="dark"
      className="grid h-dvh grid-rows-[minmax(0,1fr)_auto_minmax(0,1fr)] bg-black px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-12"
    >
      <div className="row-start-2 flex items-center justify-center">
        <h1 className="m-0 flex flex-col items-center text-center text-[44px] leading-[0.9] font-black tracking-[-0.04em] text-white uppercase md:text-[80px] lg:text-[120px]">
          <span>Let&apos;s</span>

          <span>Shape Your</span>

          <span className="gradient-text-flow">Next Build</span>
        </h1>
      </div>

      <div className="row-start-3 grid w-full grid-cols-2 items-end gap-x-4 gap-y-5 self-end md:flex md:items-end md:justify-between md:gap-6">
        <span></span>

        <p className="col-span-2 row-start-1 m-0 max-w-md justify-self-center text-center text-[13px] leading-tight font-medium text-white/90 md:max-w-md md:text-sm lg:text-sm">
          Share the idea, goal or interface you want to build. I&apos;ll help
          turn it into a clean, responsive and polished frontend experience.
        </p>

        <span></span>
      </div>
    </section>
  );
}
