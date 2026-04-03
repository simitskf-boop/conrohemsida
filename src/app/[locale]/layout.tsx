import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const alternates: Record<string, string> = {};
  for (const l of routing.locales) {
    alternates[l] = `/${l}`;
  }

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("ogDescription"),
      locale:
        locale === "sv" ? "sv_SE" :
        locale === "zh" ? "zh_CN" :
        locale === "de" ? "de_DE" :
        locale === "es" ? "es_ES" :
        locale === "fr" ? "fr_FR" :
        locale === "ar" ? "ar_SA" :
        "en_US",
      type: "website",
      siteName: "Conro",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("ogDescription"),
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      languages: alternates,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.remove('dark')}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
