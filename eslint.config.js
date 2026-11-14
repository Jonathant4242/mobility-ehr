import js from '@eslint/js';
import {defineConfig, globalIgnores} from 'eslint/config';
import prettier from 'eslint-config-prettier/flat';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['node_modules/**', 'coverage/**', 'dist/**']),
  {
    files: ['**/*.js'],
    extends: [js.configs.recommended, prettier],
    languageOptions: {ecmaVersion: 'latest', sourceType: 'module'},
    linterOptions: {reportUnusedDisableDirectives: 'error'},
    rules: {
      camelcase: ['error', {properties: 'never'}],
      // Requiring all braces is compatible with Prettier's formatting.
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-throw-literal': 'error',
      'no-var': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-promise-reject-errors': 'error',
    },
  },
  {
    files: ['src/**/*.js', 'scripts/**/*.js', '*.config.js'],
    languageOptions: {globals: globals.node},
  },
  {
    files: ['public/js/**/*.js'],
    languageOptions: {globals: globals.browser},
  },
]);
