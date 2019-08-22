const { CLIEngine } = require('eslint');

const createESLint = config => {
  const cli = new CLIEngine(Object.assign({
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
    }
  }, config));
  const formatter = cli.getFormatter();
  return files => {
    const report = cli.executeOnFiles(files);
    return formatter(report.results);
  };
};

module.exports = createESLint;;