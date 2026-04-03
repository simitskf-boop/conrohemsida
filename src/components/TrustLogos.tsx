"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const partners = [
  { name: "Siemens", abbr: "SIEMENS" },
  { name: "ABB", abbr: "ABB" },
  { name: "Allen-Bradley", abbr: "ALLEN-BRADLEY" },
  { name: "Sick", abbr: "SICK" },
  { name: "Beckhoff", abbr: "BECKHOFF" },
  { name: "Mitsubishi", abbr: "MITSUBISHI" },
  { name: "Omron", abbr: "OMRON" },
  { name: "EPLAN", abbr: "EPLAN" },
  { name: "ELPROCAD", abbr: "ELPROCAD" },
  { name: "Codesys", abbr: "CODESYS" },
  { name: "Ignition", abbr: "IGNITION" },
  { name: "SISTEMA", abbr: "SISTEMA" },
  { name: "Softtema", abbr: "SOFTTEMA" },
  { name: "SIMIT", abbr: "SIMIT" },
  { name: "Unity", abbr: "UNITY" },
  { name: "CEDOC", abbr: "CEDOC" },
  { name: "SCADA", abbr: "SCADA" },
  { name: "WinCC", abbr: "WINCC" },
];

function LogoPlaceholder({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div
      className="flex-shrink-0 mx-8 flex items-center justify-center h-12 px-6 rounded-lg border border-white/5 bg-white/[0.02] logo-item select-none"
      title={name}
    >
      <span className="text-sm font-bold tracking-[0.15em] text-gray-400 whitespace-nowrap">
        {abbr}
      </span>
    </div>
  );
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TrustLogos() {
  const t = useTranslations("TrustLogos");
  const shuffled = shuffle(partners);
  const doubled = [...shuffled, ...shuffled];

  return (
    <section className="relative py-16 bg-[#0a1628] overflow-hidden border-t border-b border-white/5">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in">
          <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-[0.25em] mb-10">
            {t("label")}
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="flex animate-marquee">
            {doubled.map((p, i) => (
              <LogoPlaceholder key={`${p.name}-${i}`} name={p.name} abbr={p.abbr} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
