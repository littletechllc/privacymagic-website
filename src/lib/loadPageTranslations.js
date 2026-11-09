const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const { extensionLocales } = require("../data/locales");

const md = new MarkdownIt({ html: true, linkify: true }).use(markdownItAttrs);

/**
 * Load translated pages from translations/i18n/{pageName}/{locale}.md
 * Front matter: title, description, optional backToTop, plus any extras.
 */
module.exports = function loadPageTranslations(pageName) {
  const dirs = [
    path.join(__dirname, "../../translations/i18n", pageName),
    path.join(__dirname, "../i18n", pageName),
  ];
  const allowed = new Set(extensionLocales);
  const byLocale = new Map();

  for (const dir of dirs) {
    if (!fs.existsSync(dir)) {
      continue;
    }
    for (const name of fs.readdirSync(dir)) {
      if (!name.endsWith(".md")) {
        continue;
      }
      const locale = name.slice(0, -3);
      if (!allowed.has(locale) || byLocale.has(locale)) {
        continue;
      }
      const parsed = matter(fs.readFileSync(path.join(dir, name), "utf8"));
      if (!parsed.data.title || !parsed.data.description) {
        throw new Error(
          `${pageName} translation ${name} needs title and description front matter`
        );
      }
      byLocale.set(locale, {
        locale,
        title: parsed.data.title,
        description: parsed.data.description,
        backToTop: parsed.data.backToTop || "↑ Back to top",
        content: md.render(parsed.content.trim()),
      });
    }
  }

  return [...byLocale.values()].sort((a, b) =>
    a.locale.localeCompare(b.locale)
  );
};
