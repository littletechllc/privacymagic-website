/** Chrome extension `_locales` codes (excluding English, which stays at unprefixed URLs). */
const EXTENSION_LOCALES = [
  "am",
  "ar",
  "bg",
  "bn",
  "ca",
  "cs",
  "da",
  "de",
  "el",
  "es",
  "es_419",
  "et",
  "fa",
  "fi",
  "fil",
  "fr",
  "gu",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "ja",
  "kn",
  "ko",
  "lt",
  "lv",
  "ml",
  "mr",
  "ms",
  "nl",
  "no",
  "pl",
  "pt_BR",
  "pt_PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "sw",
  "ta",
  "te",
  "th",
  "tr",
  "uk",
  "vi",
  "zh_CN",
  "zh_TW",
];

const RTL_LANGUAGE_BASES = new Set([
  "ar",
  "dv",
  "fa",
  "he",
  "iw",
  "ku",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi",
]);

function localeLang(locale) {
  return String(locale || "en").replaceAll("_", "-");
}

function localeDir(locale) {
  const base = localeLang(locale).split("-")[0]?.toLowerCase() ?? "en";
  return RTL_LANGUAGE_BASES.has(base) ? "rtl" : "ltr";
}

module.exports = {
  extensionLocales: EXTENSION_LOCALES,
  englishPath: "/protections/",
  localeLang,
  localeDir,
};
