const yaml = require("js-yaml");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");
const fs = require("fs");
const path = require("path");

const arthurBioPath = path.join(__dirname, "src/_data/arthur-bio.md");
const imagesDir = path.join(__dirname, "src/images");
const md = new MarkdownIt();

function loadArthurBio() {
  const parsed = matter(fs.readFileSync(arthurBioPath, "utf8"));
  return {
    ...parsed.data,
    bio: md.render(parsed.content.trim()),
  };
}

module.exports = function (eleventyConfig) {
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

  eleventyConfig.addPassthroughCopy("src/css/**");
  eleventyConfig.addPassthroughCopy("src/images/**/*.png");
  eleventyConfig.addPassthroughCopy({
    "fonts/**": "fonts",
    "favicon.ico": "favicon.ico",
    "favicon-32x32.png": "favicon-32x32.png",
    "favicon-192x192.png": "favicon-192x192.png",
    "apple-touch-icon.png": "apple-touch-icon.png",
    "CNAME": "CNAME",
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
