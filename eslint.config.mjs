import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
  rules: {
    'no-console': 'warn',
    'vue/html-self-closing': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/prop-name-casing': 'error',
    'vue/attribute-hyphenation': 'error',
  },
});
