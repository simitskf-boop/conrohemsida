import { getTranslations } from "next-intl/server";
import VideoBackground from "@/components/VideoBackground";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import FloatingParticles from "@/components/FloatingParticles";
import TrustLogos from "@/components/TrustLogos";
import ContactForm from "@/components/ContactForm";
import ServiceCardsAccordion from "@/components/ServiceCardsAccordion";

const serviceKeys = [
  "programming",
  "electrical",
  "risk",
  "commissioning",
  "simulation",
  "it",
  "elSolutions",
] as const;

const serviceSubCounts: Record<string, number> = {
  programming: 4,
  electrical: 2,
  risk: 2,
  commissioning: 2,
  simulation: 1,
  it: 1,
  elSolutions: 1,
};

const serviceStyles = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50 dark:bg-blue-500/10",
    textColor: "text-blue-600 dark:text-blue-400",
    glowColor: "group-hover:shadow-blue-500/20",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-500/10",
    textColor: "text-amber-600 dark:text-amber-400",
    glowColor: "group-hover:shadow-amber-500/20",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    color: "from-red-400 to-rose-500",
    bgColor: "bg-red-50 dark:bg-red-500/10",
    textColor: "text-red-600 dark:text-red-400",
    glowColor: "group-hover:shadow-red-500/20",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
      </svg>
    ),
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
    textColor: "text-emerald-600 dark:text-emerald-400",
    glowColor: "group-hover:shadow-emerald-500/20",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    color: "from-violet-400 to-purple-500",
    bgColor: "bg-violet-50 dark:bg-violet-500/10",
    textColor: "text-violet-600 dark:text-violet-400",
    glowColor: "group-hover:shadow-violet-500/20",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008V17.25zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008V17.25zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50 dark:bg-rose-500/10",
    textColor: "text-rose-600 dark:text-rose-400",
    glowColor: "group-hover:shadow-rose-500/20",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    color: "from-teal-400 to-emerald-500",
    bgColor: "bg-teal-50 dark:bg-teal-500/10",
    textColor: "text-teal-600 dark:text-teal-400",
    glowColor: "group-hover:shadow-teal-500/20",
  },
];

const stats = [
  { value: "50+", labelKey: "experience" as const },
  { value: "200+", labelKey: "projects" as const },
  { value: "50+", labelKey: "customers" as const },
  { value: "24/7", labelKey: "support" as const },
];

const processColors = [
  "from-amber-400 to-orange-500",
  "from-primary to-emerald-400",
  "from-emerald-400 to-green-500",
];

export default async function Home() {
  const tHero = await getTranslations("Hero");
  const tServices = await getTranslations("Services");
  const tStats = await getTranslations("Stats");
  const tAbout = await getTranslations("About");
  const tProcess = await getTranslations("Process");
  const tCTA = await getTranslations("CTA");
  const tContact = await getTranslations("Contact");

  const services = serviceKeys.map((key, i) => {
    const subCount = serviceSubCounts[key];
    const subs = [];
    for (let s = 0; s < subCount; s++) {
      subs.push({
        heading: tServices(`${key}.sub${s}heading`),
        items: tServices(`${key}.sub${s}items`).split(", "),
        hoverDetail: tServices(`${key}.sub${s}hoverDetail`),
      });
    }
    return {
      title: tServices(`${key}.title`),
      description: tServices(`${key}.description`),
      detailText: tServices(`${key}.detailText`),
      workflowTitle: tServices(`${key}.workflowTitle`),
      workflowText: tServices(`${key}.workflowText`),
      helpTitle: tServices(`${key}.helpTitle`),
      helpItems: tServices(`${key}.helpItems`).split(", "),
      subs,
      ...serviceStyles[i],
    };
  });

  const phases = [1, 2, 3].map((n) => ({
    step: tProcess(`step${n}number`),
    title: tProcess(`step${n}title`),
    description: tProcess(`step${n}description`),
    color: processColors[n - 1],
  }));

  const features = [1, 2, 3, 4].map((n) => ({
    title: tAbout(`feature${n}title`),
    desc: tAbout(`feature${n}desc`),
  }));

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0a1628] overflow-hidden">
        <VideoBackground src="/hero-video-1.mp4" className="opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-[#0a1628]/80" />
        <div className="absolute inset-0 hero-grid opacity-30" />
        <FloatingParticles count={35} className="z-[1]" />

        <div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div
              className="animate-badge inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 mb-8"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">
                {tHero("badge")}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
              <span className="animate-hero-text inline-block" style={{ animationDelay: "0.4s" }}>
                {tHero("headline1")}
              </span>
              <br />
              <span className="animate-hero-text inline-block" style={{ animationDelay: "0.6s" }}>
                <span className="gradient-text neon-glow">{tHero("headline2")}</span>
              </span>
              <br />
              <span className="animate-hero-text inline-block" style={{ animationDelay: "0.8s" }}>
                {tHero("headline3")}
              </span>
            </h1>

            <p
              className="animate-hero-text mt-8 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl"
              style={{ animationDelay: "1s" }}
            >
              {tHero("description")}
              <span className="text-gray-200 font-medium">{tHero("descriptionHighlight")}</span>
              {tHero("descriptionEnd")}
            </p>

            <div
              className="animate-hero-text mt-10 flex flex-col sm:flex-row gap-4"
              style={{ animationDelay: "1.2s" }}
            >
              <a
                href="#services"
                className="group rounded-xl bg-gradient-to-r from-primary to-emerald-400 px-8 py-4 text-base font-bold text-white animate-cta-pulse hover:-translate-y-0.5 transition-transform text-center inline-flex items-center justify-center gap-2"
              >
                {tHero("ctaPrimary")}
                <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-bold text-white hover:bg-white/5 hover:border-white/30 transition-all text-center"
              >
                {tHero("ctaSecondary")}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0a1628] to-transparent" />
      </section>

      {/* ===== TRUST LOGOS ===== */}
      <TrustLogos />

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="relative py-24 sm:py-32 bg-white dark:bg-[#0a1628] overflow-hidden">
        <VideoBackground src="/video-services.mp4" className="opacity-30 dark:opacity-20" />
        <div className="absolute inset-0 bg-white/85 dark:bg-[#0a1628]/80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="max-w-2xl mb-16">
              <span className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-3 bg-primary/5 px-3 py-1 rounded-full">
                {tServices("label")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                {tServices("heading1")}
                <br />
                <span className="text-gray-400">{tServices("heading2")}</span>
              </h2>
              <p className="mt-5 text-lg text-gray-500 leading-relaxed">
                {tServices("description")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <ServiceCardsAccordion services={services} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative py-20 bg-[#0a1628] overflow-hidden">
        <VideoBackground src="/hero-video-3.mp4" className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-primary-dark/60 to-[#0a1628]/80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.labelKey} animation="scale" delay={i * 150}>
                <div className="text-center group">
                  <AnimatedCounter
                    value={stat.value}
                    className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
                    duration={2000}
                  />
                  <div className="mt-2 text-sm sm:text-base text-emerald-200/70 font-medium uppercase tracking-wide">
                    {tStats(stat.labelKey)}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="relative py-24 sm:py-32 bg-section-bg dark:bg-[#0d1f35] overflow-hidden">
        <VideoBackground src="/video-about.mp4" className="opacity-30 dark:opacity-20" />
        <div className="absolute inset-0 bg-section-bg/85 dark:bg-[#0d1f35]/80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal animation="fade-right">
                <span className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-3 bg-primary/5 px-3 py-1 rounded-full">
                  {tAbout("label")}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                  {tAbout("heading1")}
                  <br />
                  {tAbout("heading2")}
                  <br />
                  <span className="gradient-text">{tAbout("heading3")}</span>
                </h2>
                <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                  {tAbout("paragraph1")}
                </p>
                <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                  {tAbout("paragraph2")}
                </p>
              </ScrollReveal>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map((item, i) => (
                  <ScrollReveal key={item.title} animation="fade-up" delay={i * 100}>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-white/5 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-gray-900 dark:text-white font-bold text-sm">{item.title}</span>
                        <span className="block text-gray-400 text-xs mt-0.5">{item.desc}</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-[#0a1628] flex items-center justify-center relative overflow-hidden animate-glow-pulse">
                  <VideoBackground src="/hero-video-2.mp4" className="opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/70 to-primary-dark/50" />

                  <div className="relative text-center z-10 p-10">
                    <img
                      src="/conro-logo.png"
                      alt="Conro"
                      className="mx-auto h-20 w-auto mb-6"
                    />
                    <p className="text-emerald-300/60 text-sm font-semibold uppercase tracking-[0.25em]">
                      {tAbout("boxLabel")}
                    </p>
                    <div className="mt-8 flex justify-center gap-3">
                      {["El", "PLC", "HMI", "SIM"].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-bold border border-white/10 hover:bg-white/20 hover:text-white transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section id="why-conro" className="relative py-24 sm:py-32 bg-white dark:bg-[#0a1628] overflow-hidden">
        <VideoBackground src="/video-process.mp4" className="opacity-30 dark:opacity-20" />
        <div className="absolute inset-0 bg-white/85 dark:bg-[#0a1628]/80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-3 bg-primary/5 px-3 py-1 rounded-full">
                {tProcess("label")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                {tProcess("heading1")}
                <br />
                <span className="gradient-text">{tProcess("heading2")}</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <ScrollReveal animation="fade-in" className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20 process-line visible" />
            </ScrollReveal>

            {phases.map((phase, i) => (
              <ScrollReveal key={phase.step} animation="fade-up" delay={i * 200}>
                <div className="relative text-center group">
                  <div className={`mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                    <span className="text-white font-black text-lg">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                    {phase.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-20 bg-gradient-to-r from-primary-dark via-primary to-emerald-500 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <FloatingParticles count={20} className="opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="scale">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
              {tCTA("heading")}
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              {tCTA("description")}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-primary shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {tCTA("button")}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="relative py-24 sm:py-32 bg-[#0a1628] overflow-hidden">
        <VideoBackground src="/video-contact.mp4" className="opacity-25" />
        <div className="absolute inset-0 bg-[#0a1628]/75" />
        <div className="absolute inset-0 hero-grid" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal animation="fade-right">
              <div>
                <span className="inline-block text-sm font-bold text-primary-light uppercase tracking-widest mb-3 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  {tContact("label")}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  {tContact("heading1")}
                  <br />
                  <span className="text-gray-500">{tContact("heading2")}</span>
                </h2>
                <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                  {tContact("description")}
                </p>

                <div className="mt-10 space-y-5">
                  {[
                    {
                      label: tContact("emailLabel"),
                      value: "info@conro.se",
                      icon: (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      ),
                    },
                    {
                      label: tContact("phoneLabel"),
                      value: "+46 00 000 00 00",
                      icon: (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      ),
                    },
                    {
                      label: tContact("locationLabel"),
                      value: tContact("locationValue"),
                      icon: (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      ),
                    },
                  ].map((item, i) => (
                    <ScrollReveal key={item.label} animation="fade-up" delay={i * 100}>
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
                        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center flex-shrink-0 text-white">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{item.label}</p>
                          <p className="text-white font-bold">{item.value}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
