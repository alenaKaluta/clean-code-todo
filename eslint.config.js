import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': 'error',
    },
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.js'],
    ignores: ['eslint.config.js'],
    languageOptions: { sourceType: 'script' },
  },
  {
    files: ['eslint.config.js'],
    languageOptions: { sourceType: 'module' },
  },
  eslintConfigPrettier,
]);
