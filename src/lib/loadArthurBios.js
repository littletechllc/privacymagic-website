const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const { extensionLocales } = require("../data/locales");

const md = new MarkdownIt({ html: true, linkify: true }).use(markdownItAttrs);
const englishPath = path.join(__dirname, "../data/arthur-bio.md");
const translationDirs = [
  path.join(__dirname, "../../translations/i18n/arthur-bio"),
  path.join(__dirname, "../i18n/arthur-bio"),
];

function parseBioFile(filePath) {
  const parsed = matter(fs.readFileSync(filePath, "utf8"));
  if (!parsed.data.name || !parsed.data.title) {
    throw new Error(`${filePath} needs name and title front matter`);
  }
  return {
    name: parsed.data.name,
    title: parsed.data.title,
    photo: parsed.data.photo || "/images/arthur.png",
    byPrefix: parsed.data.byPrefix || "by",
    bio: md.render(parsed.content.trim()),
  };
}

/**
 * English bio plus per-locale translations keyed by extension locale code.
 */
module.exports = function loadArthurBios() {
  const english = parseBioFile(englishPath);
  const byLocale = {};
  const allowed = new Set(extensionLocales);

  for (const dir of translationDirs) {
    if (!fs.existsSync(dir)) {
      continue;
    }
    for (const name of fs.readdirSync(dir)) {
      if (!name.endsWith(".md")) {
        continue;
      }
      const locale = name.slice(0, -3);
      if (!allowed.has(locale) || byLocale[locale]) {
        continue;
      }
      const parsed = parseBioFile(path.join(dir, name));
      // Always reuse the English photo path unless a translation overrides it.
      byLocale[locale] = {
        ...parsed,
        photo: parsed.photo || english.photo,
      };
    }
  }

  return {
    ...english,
    byLocale,
  };
};
