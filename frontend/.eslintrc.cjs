/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/typescript/recommended',
    // 'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off', // Desativa a regra que proíbe o uso de 'any'
  }
}
