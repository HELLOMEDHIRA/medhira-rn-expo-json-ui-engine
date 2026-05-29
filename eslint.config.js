const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      'lib/**',
      'site/**',
      '_readthedocs/**',
      'example/**',
      'minify.js',
      'babel.config.js',
      'jest.setup.js',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          quoteProps: 'consistent',
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'es5',
          useTabs: false,
        },
      ],
    },
  }
);
