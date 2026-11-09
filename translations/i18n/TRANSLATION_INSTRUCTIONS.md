# Page translation instructions

English sources:
- `src/pages/protections.md`
- `src/pages/about.md`
- `src/pages/privacy-policy.md`

Write one file per locale:

`translations/i18n/{page}/{locale}.md`

Examples: `translations/i18n/about/ja.md`, `translations/i18n/privacy-policy/de.md`

## Front matter (required)

```yaml
---
title: "translated title"
description: "translated description"
backToTop: "↑ translated back-to-top label"
---
```

Do **not** include `permalink`, `locale`, `author`, or `date` in translation files.

## Rules

1. Translate all prose, headings, table headers, and table cell explanations.
2. Keep these in English (do not translate):
   - Privacy Magic
   - Product/API/feature proper names when they are standards: EasyList, EasyPrivacy, Fanboy's Annoyance List, oisd, Global Privacy Control, WebRTC, WebGL, Canvas, Service Workers, Shared Storage, Shared Workers, Web Workers, Topics API, Protected Audience API, Ad Measurement API, Private Aggregation API, Touch API, Safe Browsing, Ad Measurement
   - Browser / project names: Tor Browser, Firefox, Brave, Chrome, Edge, Chromium, Chrome Web Store, Privacy Guides
   - Code/identifiers in backticks: `navigator.platform`, `window.name`, `4`
   - URLs and path links such as `/technical/#remote-setting-control`
   - HTML snippets (e.g. the `<span class="post-inline-logo">...</span>` in about.md) — keep markup identical; translate surrounding prose only
   - The English `{#heading-id}` suffixes on every `##` and `###` heading (copy them exactly from English)
   - The English fragment targets in in-page links
3. Preserve Markdown structure exactly: same headings, tables, link targets, blank lines, emphasis markers.
4. Use natural, clear language suitable for a privacy product page (not overly literal).
5. For `es_419`, use Latin American Spanish. For `pt_BR` vs `pt_PT`, use the appropriate regional variant. For `zh_CN` use Simplified Chinese; `zh_TW` Traditional Chinese.
6. `backToTop` should be a short localized equivalent of "↑ Back to top" (keep the ↑).
