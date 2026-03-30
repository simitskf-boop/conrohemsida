"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Varför Conro", href: "#varfor-conro" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow">
              <span className="text-white font-black text-xl">C</span>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary to-emerald-400 opacity-0 group-hover:opacity-30 blur transition-opacity" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-gray-900">
                CONRO
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold -mt-1">
                Automation & Industri
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-semibold text-gray-600 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="rounded-xl bg-gradient-to-r from-primary to-emerald-500 px-6 py-2.5 text-sm font-bold text-white hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
            >
              Kontakta oss
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label="Meny"
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
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base font-semibold text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 rounded-xl bg-gradient-to-r from-primary to-emerald-500 px-5 py-3 text-center text-sm font-bold text-white"
            >
              Kontakta oss
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
