const services = [
  {
    title: "Elkonstruktion",
    description:
      "Komplett elkonstruktion för industri och automation. Vi designar, dokumenterar och levererar elritningar enligt gällande standarder.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Programmering",
    description:
      "PLC-, HMI- och SCADA-programmering. Vi utvecklar styrsystem som optimerar er produktion och processer.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Idrifttagning",
    description:
      "Professionell idrifttagning av automationssystem. Vi säkerställer att er anläggning fungerar optimalt från dag ett.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
      </svg>
    ),
  },
  {
    title: "Simulering",
    description:
      "Flödessimulering och virtuell idrifttagning. Minimera risker och optimera processer innan fysisk installation.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "IT-lösningar",
    description:
      "Skräddarsydda IT-lösningar för industrin. Nätverksdesign, cybersäkerhet och systemintegration.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008V17.25zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008V17.25zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Ellösningar",
    description:
      "Kraft- och lågspänningsinstallationer. Projektering och installation av kompletta elsystem för industri.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.77 2.77 0 010-3.92 2.77 2.77 0 013.92 0l1.18 1.18 1.18-1.18a2.77 2.77 0 013.92 0 2.77 2.77 0 010 3.92l-5.1 5.1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "15+", label: "Års erfarenhet" },
  { value: "200+", label: "Genomförda projekt" },
  { value: "50+", label: "Nöjda kunder" },
  { value: "100%", label: "Engagemang" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, rgba(14,116,144,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(34,211,238,0.2) 0%, transparent 50%)",
          }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
              Automation &amp; Industrilösningar
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Vi effektiviserar{" "}
              <span className="text-primary-light">er produktion</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Conro levererar helhetslösningar inom elkonstruktion, programmering,
              idrifttagning och simulering. Från koncept till färdig anläggning.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#tjanster"
                className="rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors text-center"
              >
                Våra tjänster
              </a>
              <a
                href="#kontakt"
                className="rounded-lg border border-gray-500 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors text-center"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjanster" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Vårt erbjudande
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Kompletta automationslösningar
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Vi erbjuder ett brett spektrum av tjänster inom automation och
              industri — från design till idrifttagning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm sm:text-base text-cyan-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-oss" className="py-20 sm:py-28 bg-section-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Om Conro
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Er partner inom automation och industri
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Conro är ett specialistföretag inom automationsprodukter och
                industrilösningar. Vi arbetar nära våra kunder för att leverera
                lösningar som effektiviserar produktion och processer.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Med djup kompetens inom elkonstruktion, PLC-programmering,
                idrifttagning och simulering tar vi oss an projekt från koncept
                till färdig anläggning. Vårt mål är alltid att leverera
                kvalitet, i tid.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Certifierade ingenjörer",
                  "Agilt arbetssätt",
                  "Helhetsleverantör",
                  "Långsiktiga relationer",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="h-3.5 w-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-cyan-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="h-20 w-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-10 w-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <p className="text-primary-dark font-semibold text-lg">Professionellt team</p>
                  <p className="text-gray-500 mt-1">Erfarna automationsingenjörer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Conro Section */}
      <section id="varfor-conro" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Varför Conro
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Från koncept till färdig anläggning
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Analys & Design",
                description:
                  "Vi analyserar era behov och designar en lösning som passar er produktion och budget.",
              },
              {
                step: "02",
                title: "Utveckling & Test",
                description:
                  "Elkonstruktion, programmering och simulering — allt testas noggrant innan installation.",
              },
              {
                step: "03",
                title: "Idrifttagning & Support",
                description:
                  "Professionell idrifttagning på plats följt av löpande support och optimering.",
              },
            ].map((phase) => (
              <div key={phase.step} className="relative p-8">
                <span className="text-6xl font-bold text-primary/10">
                  {phase.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {phase.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="kontakt" className="py-20 sm:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-primary-light font-semibold text-sm uppercase tracking-widest mb-3">
                Kontakt
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Redo att effektivisera er produktion?
              </h2>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Berätta om ert projekt så återkommer vi med en lösning. Vi tar
                oss an uppdrag i hela Sverige.
              </p>
              <div className="mt-10 space-y-6">
                {[
                  { label: "E-post", value: "info@conro.se" },
                  { label: "Telefon", value: "+46 00 000 00 00" },
                  { label: "Plats", value: "Sverige" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="h-5 w-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Namn
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ditt namn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    E-post
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="din@epost.se"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Meddelande
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Beskriv ert projekt..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Skicka förfrågan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
