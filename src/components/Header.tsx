"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const navKeys = [
  { key: "services", href: "#services" },
  { key: "about", href: "#about" },
  { key: "whyConro", href: "#why-conro" },
  { key: "contact", href: "#contact" },
] as const;

export default function Header() {
  const t = useTranslations("Header");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navKeys.map((item) => item.href.replace("#", ""));
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0a1628]/95 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/conro-logo.png"
              alt="Conro"
              width={140}
              height={46}
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navKeys.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.key}
                  href={item.href}
                  className={`relative text-sm font-semibold transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${
                    isActive
                      ? "text-primary after:w-full"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary after:w-0 hover:after:w-full"
                  }`}
                >
                  {t(item.key)}
                </a>
              );
            })}
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-primary to-emerald-500 px-6 py-2.5 text-sm font-bold text-white hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
            >
              {t("cta")}
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label={t("menuAriaLabel")}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a1628] border-t border-gray-100 dark:border-white/10 shadow-lg animate-mobile-menu">
          <div className="px-4 py-6 space-y-4">
            {navKeys.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-base font-semibold transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary"
                  }`}
                >
                  {t(item.key)}
                </a>
              );
            })}
            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 rounded-xl bg-gradient-to-r from-primary to-emerald-500 px-5 py-3 text-center text-sm font-bold text-white"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
