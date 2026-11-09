const yaml = require("js-yaml");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const fs = require("fs");
const path = require("path");
const { IdAttributePlugin } = require("@11ty/eleventy");
const { hyphenateSync } = require("hyphen/en-us");
const { localeDir, localeLang } = require("./src/data/locales");

const arthurBioPath = path.join(__dirname, "src/data/arthur-bio.md");
const imagesDir = path.join(__dirname, "src/static/images");
const md = new MarkdownIt().use(markdownItAttrs);

function loadArthurBio() {
  const parsed = matter(fs.readFileSync(arthurBioPath, "utf8"));
  return {
    ...parsed.data,
    bio: md.render(parsed.content.trim()),
  };
}

module.exports = function (eleventyConfig) {
  // Translation sources live under translations/ (and optionally src/i18n while agents write).
  // They are loaded via data files, not published as pages.
  eleventyConfig.ignores.add("src/i18n/**");
  eleventyConfig.ignores.add("./src/i18n/**");
  eleventyConfig.ignores.add("**/translations/i18n/**");

  eleventyConfig.addPlugin(IdAttributePlugin);
  eleventyConfig.setLibrary("md", new MarkdownIt({ html: true, linkify: true }).use(markdownItAttrs));

  eleventyConfig.addFilter("localeLang", localeLang);
  eleventyConfig.addFilter("localeDir", localeDir);

  // Markdown tables emit inline text-align:left from :--- markers; flip for RTL pages.
  eleventyConfig.addTransform("rtl-table-align", function (content) {
    if (!this.page.outputPath || !this.page.outputPath.endsWith(".html")) {
      return content;
    }
    if (!/\bdir=["']rtl["']/i.test(content)) {
      return content;
    }
    return content.replace(/text-align:\s*left/gi, "text-align: right");
  });

  eleventyConfig.addTransform("heading-anchor-links", function (content) {
    if (!this.page.outputPath || !this.page.outputPath.endsWith(".html")) {
      return content;
    }

    const linkHeading = (html) =>
      html.replace(
        /<(h[1-6])([^>]*\sid=["']([^"']+)["'][^>]*)>([\s\S]*?)<\/\1>/gi,
        (headingMatch, tag, attrs, id, headingInner) => {
          if (tag.toLowerCase() === "h1") {
            return headingMatch;
          }
          if (/class=["'][^"']*\bheading-anchor\b/.test(headingInner)) {
            return headingMatch;
          }
          return `<${tag}${attrs}><a href="#${id}" class="heading-anchor">${headingInner}</a></${tag}>`;
        }
      );

    return content.replace(
      /(<article class="post">)([\s\S]*?)(<\/article>)/i,
      (match, open, inner, close) => open + linkHeading(inner) + close
    );
  });

  eleventyConfig.addTransform("table-row-anchors", function (content) {
    if (!this.page.outputPath || !this.page.outputPath.endsWith(".html")) {
      return content;
    }
    const slugify = eleventyConfig.getFilter("slugify");
    const usedIds = new Set();

    const wrapFirstCell = (cellTag) => (rowMatch, whitespace, attrs, inner) => {
      if (/\bid\s*=/.test(attrs) || /class=["'][^"']*\bheading-anchor\b/.test(inner)) {
        return rowMatch;
      }
      const text = inner.replace(/<[^>]+>/g, "").trim();
      if (!text) {
        return rowMatch;
      }
      let id = slugify(text);
      if (!id) {
        return rowMatch;
      }
      if (usedIds.has(id)) {
        let n = 2;
        while (usedIds.has(`${id}-${n}`)) {
          n += 1;
        }
        id = `${id}-${n}`;
      }
      usedIds.add(id);
      const useHyphen = !this.locale || this.locale === "en";
      const prepared = inner.replace(/([a-z])([A-Z])/g, "$1\u00AD$2");
      const label = useHyphen ? hyphenateSync(prepared) : prepared;
      return `<tr>${whitespace}<${cellTag}${attrs}><a href="#${id}" id="${id}" class="heading-anchor">${label}</a></${cellTag}>`;
    };

    return content
      .replace(/<thead>([\s\S]*?)<\/thead>/gi, (match, inner) => {
        return `<thead>${inner.replace(
          /<tr>(\s*)<th([^>]*)>([\s\S]*?)<\/th>/gi,
          wrapFirstCell("th")
        )}</thead>`;
      })
      .replace(/<tbody>([\s\S]*?)<\/tbody>/gi, (match, inner) => {
        return `<tbody>${inner.replace(
          /<tr>(\s*)<td([^>]*)>([\s\S]*?)<\/td>/gi,
          wrapFirstCell("td")
        )}</tbody>`;
      });
  });

  function parseLocalDate(value) {
    if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      const [year, month, day] = value.split("-").map(Number);
      return new Date(year, month - 1, day);
    }
    if (value instanceof Date) {
      return new Date(
        value.getUTCFullYear(),
        value.getUTCMonth(),
        value.getUTCDate()
      );
    }
    return new Date(value);
  }

  eleventyConfig.addFilter("longDate", (value) => {
    const d = parseLocalDate(value);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("isoDate", (value) => {
    const d = parseLocalDate(value);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  });

  eleventyConfig.addFilter("inlineSvg", (filename) => {
    const filePath = path.join(imagesDir, filename);
    if (!fs.existsSync(filePath)) {
      throw new Error(`SVG not found: ${filename}`);
    }
    return fs
      .readFileSync(filePath, "utf8")
      .trim()
      .replace(/<\?xml[^?]*\?>\s*/i, "");
  });

  eleventyConfig.addDataExtension("yaml", {
    parser: (contents) => yaml.load(contents),
  });
  eleventyConfig.addDataExtension("yml", {
    parser: (contents) => yaml.load(contents),
  });

  eleventyConfig.addGlobalData("authors", () => ({
    arthur: loadArthurBio(),
  }));

  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  return {
    dir: {
      input: "src",
      includes: "templates/includes",
      data: "data",
      output: "_site",
    },
  };
};
