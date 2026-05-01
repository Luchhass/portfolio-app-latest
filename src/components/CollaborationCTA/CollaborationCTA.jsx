import HeroContactButton from "@/components/ContactButton/ContactButton";

export default function CollaborationCTA() {
  return (
    <section
      data-header-theme="dark"
      className="grid h-dvh grid-rows-[minmax(0,1fr)_auto_minmax(0,1fr)] bg-black px-8 py-6 text-white md:px-10 md:py-8 lg:px-16 lg:py-12"
      aria-labelledby="collaboration-title"
    >
      <div className="row-start-2 flex flex-col items-center justify-center text-center">
        <h2
          id="collaboration-title"
          className="m-0 flex flex-col items-center text-center text-[44px] leading-[0.9] font-black tracking-[-0.04em] uppercase md:text-[80px] lg:text-[120px]"
        >
          <span>LET&apos;S BUILD</span>
          <span className="gradient-text-flow">TOGETHER</span>
        </h2>

        <p className="m-0 mt-6 max-w-md text-[13px] leading-tight font-medium text-white/90 md:mt-8 md:text-sm">
          Have an idea, project or interface that needs a clean frontend touch?
          Let&apos;s turn it into a polished web experience.
        </p>

        <HeroContactButton
          className="mt-8 w-fit! px-8 md:mt-10"
          href="/contact"
          id="collaboration-contact"
          label="CONTACT ME"
        />
      </div>

      <div className="row-start-3 flex flex-col gap-4 self-end md:flex-row md:items-end md:justify-between">
        <p className="m-0 text-[13px] leading-none font-black tracking-[0.08em] text-white/90 uppercase md:text-sm">
          FURKANCOSAR
          <span className="relative -top-1 ml-1 text-[9px]">&reg;</span>
        </p>

        <p className="m-0 max-w-45 text-left text-[10px] leading-[1.12] font-bold tracking-[0.18em] text-white/60 uppercase md:text-right">
          Open For New Projects
        </p>
      </div>
    </section>
  );
}
