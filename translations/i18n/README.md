# Website translations

Localized Markdown for pages that should match the Chrome extension’s `_locales` codes.

Canonical location: `translations/i18n/` (outside Eleventy’s `src/` input so sources are not published as pages).

## Pages

| Page | English source | Translations | URL |
| --- | --- | --- | --- |
| Protections | `src/pages/protections.md` | `translations/i18n/protections/{locale}.md` | `/{locale}/protections/` |
| About | `src/pages/about.md` | `translations/i18n/about/{locale}.md` | `/{locale}/about/` |
| Privacy Policy | `src/pages/privacy-policy.md` | `translations/i18n/privacy-policy/{locale}.md` | `/{locale}/privacy-policy/` |
| Author bio | `src/data/arthur-bio.md` | `translations/i18n/arthur-bio/{locale}.md` | (used on localized About pages) |

English URLs stay unprefixed (`/about/`, `/protections/`, `/privacy-policy/`).
Locale codes must match extension folders (`ja`, `pt_BR`, `zh_CN`, `es_419`, …).

See `TRANSLATION_INSTRUCTIONS.md` for front matter and keep-in-English rules.
