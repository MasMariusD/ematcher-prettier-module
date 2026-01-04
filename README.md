# e-Matcher Prettier Config

Prettier npm configuration module used to format: PHP, HTML, CSS, JS and .phtml files.

## Installation

Install the config module and Prettier (peer dependency):

Step 1: 

```bash
npm install --save-dev ematcher-prettier-module prettier
```

Step 2:

Set the module as the prettier configuration in package.json:

```
{
  ...
  "prettier": "ematcher-prettier-module"
  ...
}
```

Step 3:

Create a .prettierignore file in the project root to prevent formatting of unnecessary files:

```
vendor/
node_modules/
dist/
build/
composer.lock
package-lock.json
```

Step 4:

Set prettier as the default formatter in PHPStorm:

* Go to **Settings > Languages & Frameworks > Prettier**
* Point it towards node_modules/prettier
* Set the Run for files to: {**/*,}*.{js,ts,jsx,tsx,css,scss,html,php,phtml}
* (Optional) Set to reformat on save
