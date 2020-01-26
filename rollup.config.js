import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const outputs = [
  { file: pkg.main, format: 'cjs' },
  { file: pkg.browser, format: 'umd', name: pkg.name },
  { file: pkg.module, format: 'esm' },
];

const baseConfig = {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env'],
    }),
  ],
};

const configs = outputs.map((output) => ({ ...baseConfig, output }));

export default configs;
