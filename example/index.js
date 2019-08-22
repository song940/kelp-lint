const createESLint = require('..');

const lint = createESLint({
  useEslintrc: false,
  envs: ['browser', 'node'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true
    }
  },
  rules: {
    'no-console': 'warn'
  }
});

console.log(lint(['index.js']));