import { getTranslations } from "next-intl/server";
import ScrollReveal from "./ScrollReveal";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const tServices = await getTranslations("Services");

  const serviceKeys = [
    "programming",
    "electrical",
    "risk",
    "commissioning",
    "simulation",
    "it",
    "elSolutions",
  ] as const;

  const services = serviceKeys.map((key) => tServices(`${key}.title`));

  const company = [
    { label: t("aboutLink"), href: "#about" },
    { label: t("servicesLink"), href: "#services" },
    { label: t("processLink"), href: "#why-conro" },
    { label: t("contactLink"), href: "#contact" },
  ];

  return (
    <footer className="bg-[#060d1b] text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <ScrollReveal animation="fade-up" className="md:col-span-1">
            <div className="mb-5">
              <img
                src="/conro-logo.png"
                alt="Conro"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              {t("description")}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-5">
                {t("servicesHeading")}
              </h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="text-sm text-gray-500 hover:text-primary-light transition-colors duration-300"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-5">
                {t("companyHeading")}
              </h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-500 hover:text-primary-light transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-5">
                {t("contactHeading")}
              </h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="hover:text-gray-300 transition-colors">info@conro.se</li>
                <li className="hover:text-gray-300 transition-colors">+46 00 000 00 00</li>
                <li className="hover:text-gray-300 transition-colors">Sverige</li>
              </ul>
              <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer text-gray-500 hover:text-white hover:scale-110"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Conro. {t("copyright")}
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">{t("privacy")}</a>
            <a href="#" className="hover:text-gray-400 transition-colors">{t("cookies")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
