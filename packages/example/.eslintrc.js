module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    '@tencent/eslint-config-tencent',
    'plugin:vue/essential'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: [

  ],
  rules: {
    indent: ["error", 2],
    radix: ["error", "as-needed"],
    semi: [2, 'always'],
    quotes: [1, 'single'],
    'no-new': 0,
    'no-console': "error"
  }
}
