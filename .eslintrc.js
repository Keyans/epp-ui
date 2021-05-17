module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    '@tencent/eslint-config-tencent',
    'plugin:vue/essential',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    wx: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: [
  ],
  rules: {},
};
