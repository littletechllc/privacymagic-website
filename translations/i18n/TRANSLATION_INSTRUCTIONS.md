# Page translation instructions

English sources:
- `src/pages/protections.md`
- `src/pages/about.md`
- `src/pages/privacy-policy.md`
- `src/data/arthur-bio.md`

Write one file per locale:

`translations/i18n/{page}/{locale}.md`

Examples: `translations/i18n/about/ja.md`, `translations/i18n/privacy-policy/de.md`, `translations/i18n/arthur-bio/ja.md`

## Front matter (required)

For page translations (`protections`, `about`, `privacy-policy`):

```yaml
---
title: "translated title"
description: "translated description"
backToTop: "↑ translated back-to-top label"
---
```

For `arthur-bio` translations:

```yaml
---
name: "translated or transliterated author name"
title: "translated role / company line"
byPrefix: "translated 'by' word used in the byline"
---
```

Do **not** include `permalink`, `locale`, `author`, `date`, or `photo` in translation files (photo is inherited from English).

## Rules

1. Translate all prose, headings, table headers, and table cell explanations.
2. Keep these in English (do not translate):
   - Privacy Magic
   - Product/API/feature proper names when they are standards: EasyList, EasyPrivacy, Fanboy's Annoyance List, oisd, Global Privacy Control, WebRTC, WebGL, Canvas, Service Workers, Shared Storage, Shared Workers, Web Workers, Topics API, Protected Audience API, Ad Measurement API, Private Aggregation API, Touch API, Safe Browsing, Ad Measurement, Total Cookie Protection, HTTPS-Only Mode, HTTPS by Default, Pool-Party Attack
   - Browser / project / org names: Tor, Tor Browser, Firefox, Brave, Chrome, Edge, Chromium, Chrome Web Store, Privacy Guides, Little Tech LLC, PrivacyTests.org, Project Timestamper
   - Code/identifiers in backticks: `navigator.platform`, `window.name`, `4`
   - URLs and path links such as `/technical/#remote-setting-control`
   - HTML snippets (e.g. the `<span class="post-inline-logo">...</span>` in about.md) — keep markup identical; translate surrounding prose only
   - The English `{#heading-id}` suffixes on every `##` and `###` heading (copy them exactly from English)
   - The English fragment targets in in-page links
3. Preserve Markdown structure exactly: same headings, tables, link targets, blank lines, emphasis markers.
4. Use natural, clear language suitable for a privacy product page (not overly literal).
5. For `es_419`, use Latin American Spanish. For `pt_BR` vs `pt_PT`, use the appropriate regional variant. For `zh_CN` use Simplified Chinese; `zh_TW` Traditional Chinese.
6. `backToTop` should be a short localized equivalent of "↑ Back to top" (keep the ↑).
7. Author name (`arthur-bio` `name` field):
   - Latin-script locales, plus Japanese (`ja`) and Korean (`ko`): keep **Arthur Edelstein** in Latin letters (no transliteration). Use the same form at the start of the bio body.
   - Other non-Latin-script locales (e.g. zh_CN, zh_TW, ru, uk, bg, el, ar, fa, he, hi, bn, gu, kn, ml, mr, ta, te, th, am): use a conventional local **transliteration**, then the original Latin name in parentheses, e.g. `Артур Эдельштейн (Arthur Edelstein)`. Use the same form at the start of the bio body. Do not invent unrelated nicknames.
