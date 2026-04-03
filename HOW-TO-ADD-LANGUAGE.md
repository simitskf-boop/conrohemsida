# How to Add a New Language to Conro Website

## Quick Steps (2 files to touch)

### Step 1: Add locale to routing config

Open `src/i18n/routing.ts` and add the new locale code to the `locales` array:

```ts
locales: ['sv', 'en', 'de'],  // <-- add your new locale here
```

### Step 2: Create the translation file

Copy `messages/en.json` to `messages/{locale}.json` (e.g., `messages/de.json`) and translate all values. Keep the keys identical.

```bash
cp messages/en.json messages/de.json
# Then translate all values in de.json
```

### Step 3: Add a flag icon

Add a flag SVG or emoji for the new locale in `src/components/LanguageSwitcher.tsx`. Find the `flags` object and add an entry:

```ts
const flags: Record<string, { icon: ReactNode; label: string }> = {
  sv: { icon: /* Swedish flag */, label: "Svenska" },
  en: { icon: /* UK flag */, label: "English" },
  de: { icon: /* German flag */, label: "Deutsch" },  // <-- add this
};
```

### That's it! No other code changes needed.

---

## Translation file structure

Each `messages/{locale}.json` follows this namespace structure:

- `Metadata` -- Page title, meta description, OG tags
- `Header` -- Navigation labels, CTA button, aria-labels
- `Hero` -- Hero section headlines, description, buttons
- `TrustLogos` -- Section label
- `Services` -- Section heading, all 7 service cards (titles, descriptions, sub-headings, sub-items)
- `Stats` -- Stat labels (values like "50+" are shared across languages)
- `About` -- About section heading, paragraphs, feature cards
- `Process` -- Process steps (titles, descriptions)
- `CTA` -- CTA banner heading, description, button
- `Contact` -- Contact section heading, description, info labels
- `ContactForm` -- Form labels, placeholders, button text, success/error messages
- `Footer` -- Column headers, links, copyright
- `Common` -- Theme toggle, scroll-to-top, shared strings

### Rules:
- Brand names (Siemens, EPLAN, TIA Portal, etc.) are NOT translated -- keep identical
- Technical abbreviations (PLC, HMI, SCADA, FAT/SAT) stay the same
- Email addresses and phone numbers stay the same
- JSON keys must match exactly across all locale files

## Architecture overview

- **Framework**: next-intl v4
- **Routing**: URL-based (`/sv`, `/en`, `/de`)
- **Default locale**: `sv` (Swedish)
- **Locale detection**: `src/proxy.ts` (Next.js 16 convention)
- **Config**: `src/i18n/routing.ts`, `src/i18n/request.ts`, `src/i18n/navigation.ts`
- **Translations**: `messages/{locale}.json`
- **Components**: Server components use `getTranslations()`, client components use `useTranslations()`
