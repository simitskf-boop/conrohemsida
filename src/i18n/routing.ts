import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["sv", "en", "zh", "de", "es", "fr", "ar"],
  defaultLocale: "sv",
  localePrefix: "always",
});
