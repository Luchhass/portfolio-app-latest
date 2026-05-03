export default function AboutIntro() {
  return (
    <section
      data-header-theme="light"
      className="min-h-dvh overflow-hidden bg-white px-8 py-20 text-black md:px-10 md:py-24 lg:px-16 lg:py-32"
      aria-labelledby="about-intro-title"
    >
      <div className="grid w-full max-w-205 grid-cols-1 gap-y-5 md:grid-cols-[120px_minmax(0,1fr)] md:gap-x-5 md:gap-y-0 lg:grid-cols-[160px_minmax(0,1fr)]">
        <p className="m-0 inline-flex items-center gap-2 self-start text-[13px] leading-none font-black tracking-[0.08em] text-black/55 uppercase md:pt-3 md:text-sm">
          <span
            className="gradient-action-dot h-2 w-2 rounded-full"
            aria-hidden="true"
          />
          NOW
        </p>

        <div className="grid min-w-0 gap-5 md:col-start-2 md:gap-7">
          <h2
            id="about-intro-title"
            className="m-0 flex flex-col text-[44px] leading-[0.9] font-black tracking-[-0.04em] uppercase md:text-[80px] lg:text-[120px]"
          >
            <span>What I&apos;m</span>
            <span className="gradient-text-flow">Doing</span>
          </h2>

          <div className="grid max-w-2xl gap-3">
            <p className="m-0 text-[13px] leading-tight font-medium text-black/65 md:text-sm">
              I&apos;m a Frontend Developer and a final-year Web Design student
              at Istanbul University. Throughout my journey, I&apos;ve had the
              opportunity to intern at several companies, gaining hands-on
              experience in building modern, responsive and user-focused web
              interfaces. Alongside my studies, I also work on freelance
              projects, helping turn ideas into clean and polished digital
              experiences. I&apos;m currently also actively involved in a
              startup, where I contribute to real-world product development and
              continue to grow through practical experience.
            </p>

            <p className="m-0 text-[13px] leading-tight font-medium text-black/65 md:text-sm">
              To further enhance my skills, I completed a Software
              Specialization course at Ni&#351;anta&#351;&#305; University,
              where I deepened my knowledge of development practices and
              technologies. Today, I combine creativity, technical expertise and
              real project experience to craft seamless digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
