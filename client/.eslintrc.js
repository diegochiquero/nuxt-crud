module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:cypress/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here https://github.com/vuejs/eslint-plugin-vue/issues/899
  rules: {
    'vue/v-bind-style': 'error'
  }
}
