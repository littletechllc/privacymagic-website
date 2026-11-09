const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const { extensionLocales } = require("./locales");

const md = new MarkdownIt({ html: false, linkify: true }).use(markdownItAttrs);

const translationDirs = [
  path.join(__dirname, "../../translations/i18n/protections"),
  path.join(__dirname, "../i18n/protections"),
];

/**
 * Load translated protections pages from translations/i18n/protections/{locale}.md
 * (and optionally src/i18n/protections while drafts land there).
 * Front matter: title, description, optional backToTop.
 */
module.exports = () => {
  const allowed = new Set(extensionLocales);
  const byLocale = new Map();

  for (const dir of translationDirs) {
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
          `protections translation ${name} needs title and description front matter`
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
