module.exports = {
  // JS, CSS, HTML
  semi: true,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: "es5",
  printWidth: 100,

  // PHP
  phpVersion: "7.1",
  braceStyle: "1tbs",

  // Plugin for PHP
  plugins: [require.resolve("@prettier/plugin-php")],

  overrides: [
    {
      // Use PHP parser for .phtml files (And .php just to be sure)
      files: ['*.php', '*.phtml'],
      options: {
        parser: "php",
      },
    },
    {
      // HTML and CSS standardly use double quotes, unlike JS/PHP
      files: ["*.html", "*.css"],
      options: {
        singleQuote: false,
      },
    },
  ],
};
