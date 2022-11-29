module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'eslint:recommended',],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {}
}
