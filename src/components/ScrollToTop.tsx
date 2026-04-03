"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function ScrollToTop() {
  const t = useTranslations("Common");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("scrollTopAriaLabel")}
      className={`fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-gradient-to-br from-primary to-emerald-400 text-white shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-primary/50 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
}
