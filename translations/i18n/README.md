# Website translations

Localized Markdown for pages that should match the Chrome extension’s `_locales` codes.

Canonical location: `translations/i18n/` (kept outside Eleventy’s `src/` input so sources are not published as pages).
`src/i18n` is a symlink to this folder for convenience.

## Protections

- English source of truth: `src/pages/protections.md` → `/protections/`
- Translations: `translations/i18n/protections/{locale}.md` → `/{locale}/protections/`
- Locale codes must match extension folders (`ja`, `pt_BR`, `zh_CN`, `es_419`, …)

Each translation file needs front matter:

```yaml
---
title: "..."
description: "..."
backToTop: "↑ ..."
---
```

Keep the English `{#heading-id}` suffixes on `##` / `###` headings so in-page links stay stable.
Keep product names, API names, and code identifiers in English (`Privacy Magic`, `EasyList`, `navigator.platform`, `window.name`, etc.).
