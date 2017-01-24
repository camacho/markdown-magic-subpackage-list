# Subpackage list plugin

Add a list of sub-packages with links via [markdown-magic](https://github.com/DavidWells/markdown-magic)

## Install

```
npm i markdown-magic markdown-magic-subpackage-list --save-dev
```

## Adding the plugin

See `example.js` for usage.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./example.js) -->
<!-- The below code snippet is automatically added from ./example.js -->
```js
const fs = require('fs');
const path = require('path');
const markdownMagic = require('markdown-magic');

const config = {
  transforms: {
    SUBPACKAGELIST: require('./index.js'),
  }
}

const markdownPath = path.join(__dirname, 'README.md');
markdownMagic(markdownPath, config);
```
<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./example.js) -->
<!-- AUTO-GENERATED-CONTENT:END *-->

## Usage in markdown

<!-- AUTO-GENERATED-CONTENT:START (SUBPACKAGELIST:verbose=true) -->
* [example-package](packages/example) - example package description for the demo
<!-- AUTO-GENERATED-CONTENT:END -->

## Options
* **dir** - `./packages` by default
* **verbose** - `false` by default - print out description of package
* **bullet** - `*` by default - set to `1.` to create a numbered list
