module.exports = {
    // JS, CSS, HTML
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'es5',
    printWidth: 100,

    // PHP
    phpVersion: '7.1',
    braceStyle: '1tbs',

    // Plugin for PHP
    plugins: [require.resolve('@prettier/plugin-php')],

    overrides: [
    {
      // Use PHP parser for .phtml files
      files: '*.phtml',
      options: {
        parser: 'php',
      },
    },
    {
      files: ['*.html', '*.css'],
      options: {
        singleQuote: true,
      },
    },
  ],
}