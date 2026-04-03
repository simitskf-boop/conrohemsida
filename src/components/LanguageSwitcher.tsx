"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { type ReactNode } from "react";

const flags: Record<string, { label: string; icon: ReactNode }> = {
  sv: {
    label: "Svenska",
    icon: (
      <svg viewBox="0 0 640 480" className="h-5 w-7 rounded-sm">
        <path fill="#005baa" d="M0 0h640v480H0z" />
        <path fill="#fecb00" d="M0 192h640v96H0z" />
        <path fill="#fecb00" d="M176 0h96v480h-96z" />
      </svg>
    ),
  },
  en: {
    label: "English",
    icon: (
      <svg viewBox="0 0 640 480" className="h-5 w-7 rounded-sm">
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
        <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" />
        <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
        <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
      </svg>
    ),
  },
  zh: {
    label: "中文",
    icon: (
      <svg viewBox="0 0 640 480" className="h-5 w-7 rounded-sm">
        <path fill="#EE1C25" d="M0 0h640v480H0z" />
        <path fill="#FF0" d="m167.8 135.2 24.3-74.5 24.2 74.5-63.5-46.2h78.6z" />
        <path fill="#FF0" d="m255.5 58.3 7.2 22-18.8-13.7h23.3l-18.9 13.7z" />
        <path fill="#FF0" d="m288 95.5 7.2 22-18.9-13.7h23.3L281 117.5z" />
        <path fill="#FF0" d="m288 153.5 7.2 22-18.9-13.7h23.3L281 175.5z" />
        <path fill="#FF0" d="m255.5 191.3 7.2 22-18.8-13.7h23.3l-18.9 13.7z" />
      </svg>
    ),
  },
  de: {
    label: "Deutsch",
    icon: (
      <svg viewBox="0 0 640 480" className="h-5 w-7 rounded-sm">
        <path fill="#000" d="M0 0h640v160H0z" />
        <path fill="#D00" d="M0 160h640v160H0z" />
        <path fill="#FFCE00" d="M0 320h640v160H0z" />
      </svg>
    ),
  },
  es: {
    label: "Español",
    icon: (
      <svg viewBox="0 0 640 480" className="h-5 w-7 rounded-sm">
        <path fill="#AA151B" d="M0 0h640v480H0z" />
        <path fill="#F1BF00" d="M0 120h640v240H0z" />
      </svg>
    ),
  },
  fr: {
    label: "Français",
    icon: (
      <svg viewBox="0 0 640 480" className="h-5 w-7 rounded-sm">
        <path fill="#002395" d="M0 0h213.3v480H0z" />
        <path fill="#FFF" d="M213.3 0h213.4v480H213.3z" />
        <path fill="#ED2939" d="M426.7 0H640v480H426.7z" />
      </svg>
    ),
  },
  ar: {
    label: "العربية",
    icon: (
      <svg viewBox="0 0 640 480" className="h-5 w-7 rounded-sm">
        <path fill="#006C35" d="M0 0h640v480H0z" />
        <path fill="#FFF" d="M167 144h306v192H167z" />
        <text x="320" y="260" textAnchor="middle" fill="#006C35" fontSize="72" fontFamily="serif">لا إله إلا الله</text>
        <path fill="#FFF" d="M285 320h70v40h-70z" />
        <path fill="#FFF" d="M305 280h30v80h-30z" />
      </svg>
    ),
  },
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1.5">
      {routing.locales.map((l) => {
        const isActive = l === locale;
        const f = flags[l];
        return (
          <button
            key={l}
            onClick={() => {
              if (!isActive) router.replace(pathname, { locale: l });
            }}
            className={`p-1 rounded-md transition-all duration-200 ${
              isActive
                ? "ring-2 ring-primary opacity-100 scale-105"
                : "opacity-50 hover:opacity-80 hover:scale-105"
            }`}
            aria-label={f?.label}
            title={f?.label}
          >
            {f?.icon}
          </button>
        );
      })}
    </div>
  );
}
