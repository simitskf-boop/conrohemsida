const services = [
  "Elkonstruktion",
  "Programmering",
  "Idrifttagning",
  "Simulering",
  "IT-lösningar",
  "Ellösningar",
];

const company = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Tjänster", href: "#tjanster" },
  { label: "Vår process", href: "#varfor-conro" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060d1b] text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                <span className="text-white font-black text-xl">C</span>
              </div>
              <div>
                <span className="text-lg font-black text-white">CONRO</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-600 font-semibold -mt-0.5">
                  Automation &amp; Industri
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Helhetslösningar inom automation och industri.
              Från koncept till färdig anläggning.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-5">
              Tjänster
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#tjanster"
                    className="text-sm text-gray-500 hover:text-primary-light transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-5">
              Företaget
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-primary-light transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-5">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>info@conro.se</li>
              <li>+46 00 000 00 00</li>
              <li>Sverige</li>
            </ul>
            <div className="flex gap-3 mt-6">
              <span className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer text-gray-500 hover:text-white">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Conro. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Integritetspolicy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
