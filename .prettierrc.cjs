module.exports = {
    arrowParens: 'avoid', // Avoid braces for single param in arrow functions a => { }
    bracketSameLine: true,
    bracketSpacing: true, // import { some } ... instead of import {some} ...
    endOfLine: 'lf', // 'lf' for linux, 'crlf' for windows, we need to use 'lf' for git
    plugins: ['prettier-plugin-sort-imports'],
    printWidth: 120, // max 120 chars in line, code is easy to read
    semi: true, // add ; when needed
    singleQuote: true, // '' for stings instead of ""
    tabWidth: 2, // "visual width" of of the "tab"
    trailingComma: 'es5', // add trailing commas in objects, arrays, etc.
    useTabs: false, // use spaces instead of tabs
  };