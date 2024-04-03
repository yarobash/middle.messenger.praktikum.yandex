import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        document: "writable",
        window: "writable"
      },
      parser: tsParser,
    },
    plugins: {
      tsPlugin,
    },
    ignores: ['node_modules', 'dist'],
    files: ['src/**/*.ts'],
    ...js.configs.recommended,
    rules: {
      'semi': 'error',
      'no-unused-vars': 'off',
      'no-console': 'error',
      'tsPlugin/no-unused-vars': ['error']
    }
  }
]
