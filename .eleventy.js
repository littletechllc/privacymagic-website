const yaml = require("js-yaml");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");
const fs = require("fs");
const path = require("path");
const { IdAttributePlugin } = require("@11ty/eleventy");

const arthurBioPath = path.join(__dirname, "src/data/arthur-bio.md");
const imagesDir = path.join(__dirname, "src/static/images");
const md = new MarkdownIt();

function loadArthurBio() {
  const parsed = matter(fs.readFileSync(arthurBioPath, "utf8"));
  return {
    ...parsed.data,
    bio: md.render(parsed.content.trim()),
  };
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(IdAttributePlugin);

  eleventyConfig.addTransform("heading-anchor-links", function (content) {
    if (!this.page.outputPath || !this.page.outputPath.endsWith(".html")) {
      return content;
    }
    return content.replace(
      /<(h[1-6])([^>]*\sid=["']([^"']+)["'][^>]*)>([\s\S]*?)<\/\1>/gi,
      (match, tag, attrs, id, inner) => {
        if (/class=["'][^"']*\bheading-anchor\b/.test(inner)) {
          return match;
        }
        return `<${tag}${attrs}><a href="#${id}" class="heading-anchor">${inner}</a></${tag}>`;
      }
    );
  });

  eleventyConfig.addTransform("table-row-anchors", function (content) {
    if (!this.page.outputPath || !this.page.outputPath.endsWith(".html")) {
      return content;
    }
    const slugify = eleventyConfig.getFilter("slugify");
    const usedIds = new Set();

    return content.replace(/<tbody>([\s\S]*?)<\/tbody>/gi, (tbodyMatch, tbodyInner) => {
      const updated = tbodyInner.replace(
        /<tr>(\s*)<td([^>]*)>([\s\S]*?)<\/td>/gi,
        (rowMatch, whitespace, attrs, inner) => {
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
          return `<tr>${whitespace}<td${attrs}><a href="#${id}" id="${id}" class="heading-anchor">${inner}</a></td>`;
        }
      );
      return `<tbody>${updated}</tbody>`;
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
