const { ESLint, Linter } = require('eslint');

const createESLint = async (config = {}) => {
  const eslint = new ESLint({
    useEslintrc: false,
    baseConfig: {
      env: {
        browser: true,
        node: true,
      },
      extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/node',
        './rules/style',
        './rules/variables',
        './rules/es6',
        './rules/strict',
        './rules/react',
        './rules/react-hooks',
      ].map(require.resolve),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
          legacyDecorators: true
        }
      }
    },
    overrideConfig: config,
  });
  const { formatter: formatterName = 'stylish', fix } = config;
  const formatter = await eslint.loadFormatter(formatterName);
  return async files => {
    const results = await eslint.lintFiles(files);
    const resultText = formatter.format(results);
    if (fix) await ESLint.outputFixes(results);
    return resultText;
  };
};

module.exports = {
  createESLint,
};
