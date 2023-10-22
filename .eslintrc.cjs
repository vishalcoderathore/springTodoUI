module.exports = {
  env: {
    browser: true, // This project runs in a browser environment
    es2021: true, // This project uses ECMAScript 2021 syntax
    node: true, // This project runs in a Node.js environment
  },
  extends: [
    'eslint:recommended', // Use the recommended ESLint rules
    'plugin:@typescript-eslint/recommended', // Use recommended rules from the TypeScript plugin
    'plugin:import/recommended', // Use recommended rules for ES6+ import/export syntax
    'plugin:import/typescript', // Use TypeScript rules for ES6+ import/export syntax
    'plugin:jsx-a11y/recommended', // Use recommended rules for accessible JSX
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors
    'plugin:react-hooks/recommended', // Rules of Hooks and exhaustive deps
    'plugin:react/recommended', // Use recommended rules for React
    'prettier', // Turns off all rules that are unnecessary or might conflict with Prettier
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX syntax
    },
    ecmaVersion: 2021, // Use ECMAScript 2021 syntax
    project: './tsconfig.json', // Specify the TypeScript configuration file
    sourceType: 'module', // Treat code as ECMAScript modules
    tsconfigRootDir: __dirname, // Specify the root directory for the TypeScript configuration
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks'],
  rules: {
    // This rule enforces that members of an interface, type literal, or class are sorted alphabetically.
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // This rule bans specific types from being used.
    '@typescript-eslint/ban-types': 'error',

    // This rule enforces consistent brace style for all control statements.
    curly: 'error',

    // This rule requires all exported functions to have explicit return types for better type checking and code readability.
    '@typescript-eslint/explicit-function-return-type': 'error',

    // This rule requires all module boundaries (like function return values) to have explicit types. This enhances type checking and understanding of code.
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // This rule enforces the use of === and !== over == and != for comparisons.
    eqeqeq: 'error',

    // This rule is turned off because it can conflict with some TypeScript configurations where a default export is allowed even if not present.
    'import/default': 'off',

    // This rule disallows empty functions to avoid confusion and potential mistakes in the code.
    'no-empty-function': 'error',

    // This rule disallows the declaration of empty interfaces.
    '@typescript-eslint/no-empty-interface': 'warn',

    // This rule disallows using an async function as a Promise executor.
    'no-async-promise-executor': 'error',

    // This rule disallows usage of the `any` type.
    '@typescript-eslint/no-explicit-any': 'warn',

    // This rule disallows the use of eval() which can be dangerous and lead to potential XSS vulnerabilities.
    'no-eval': 'error',

    // This rule disallows the use of methods that can be used to perform eval()-like operations.
    'no-implied-eval': 'error',

    // This rule disallows calling some Object.prototype methods directly on an object.
    'no-prototype-builtins': 'error',

    // This rule triggers a warning when a defined variable or argument is not used in the code.
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'all', argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

    // This rule has been turned off in favor of TypeScript's own version of it (see the next rule).
    'no-unused-vars': 'off',

    // This rule disallows non-null assertions using the `!` postfix operator.
    '@typescript-eslint/no-non-null-assertion': 'error',

    // This rule disallows custom TypeScript modules and namespaces.
    '@typescript-eslint/no-namespace': 'error',

    // This rule disallows assignments that can lead to race conditions due to usage of await or yield.
    'require-atomic-updates': 'error',

    // This rule reports duplicate import declarations of the same name in the same file.
    'no-duplicate-imports': 'error',

    // This rule flags variable declarations using let where const could be used instead, indicating that the variable does not get reassigned.
    'prefer-const': 'error',

    // This rule marks code formatting issues from Prettier as errors, helping maintain consistent code style.
    'prettier/prettier': 'error',

    // This rule disallows characters which are made with multiple code points in character class syntax.
    'no-misleading-character-class': 'error',

    // React scope no longer necessary with new JSX transform
    'react/react-in-jsx-scope': 'off',

    // This rule helps prevent a common mistake with Promise-based functions where a Promise is incorrectly used as a boolean.
    '@typescript-eslint/no-misused-promises': 'error',

    // This rule enforces that Promises must always be handled appropriately with a .then, .catch, or await.
    '@typescript-eslint/no-floating-promises': 'error',

    // Triple slash references (/// <reference ... />) are part of TypeScript's old module resolution strategy and are discouraged in modern code.
    '@typescript-eslint/triple-slash-reference': 'off',

    // This rule disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
    '@typescript-eslint/no-inferrable-types': 'warn',

    // This rule disallows the use of `require` statements except in import statements.
    '@typescript-eslint/no-var-requires': 'error',

    'react/prop-types': 'off',
  },

  settings: {
    'import/resolver': {
      typescript: {}, // Use TypeScript for module resolution
    },
    react: {
      version: 'detect', // Automatically detect the version of React
    },
  },
};
