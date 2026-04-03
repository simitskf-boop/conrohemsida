"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/info@conro.se", {
        method: "POST",
        body: data,
      });
      setSubmitted(true);
    } catch {
      form.submit();
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center mb-6 animate-cta-pulse">
          <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{t("successHeading")}</h3>
        <p className="text-gray-400 max-w-sm">
          {t("successText")}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl animate-border-glow">
      <h3 className="text-xl font-bold text-white mb-6">{t("title")}</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="_subject" value={t("emailSubject")} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <div>
          <label className="block text-sm font-semibold text-gray-400 mb-2">{t("nameLabel")}</label>
          <input
            type="text"
            name="namn"
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent input-glow transition-all"
            placeholder={t("namePlaceholder")}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-400 mb-2">{t("emailLabel")}</label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent input-glow transition-all"
            placeholder={t("emailPlaceholder")}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-400 mb-2">{t("messageLabel")}</label>
          <textarea
            name="meddelande"
            rows={4}
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none input-glow transition-all"
            placeholder={t("messagePlaceholder")}
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="w-full rounded-xl bg-gradient-to-r from-primary to-emerald-400 px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {sending ? (
            <span className="inline-flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {t("sending")}
            </span>
          ) : (
            t("submit")
          )}
        </button>
      </form>
    </div>
  );
}
