import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve, { nodeResolve } from '@rollup/plugin-node-resolve';
import run from '@rollup/plugin-run';

const isDev = process.env.ROLLUP_WATCH === 'true';

console.log(`Development mode: ${isDev}`);

export default {
  input: 'index.js',
  output: {
    file: 'dist/server.mjs',
    format: 'es',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    run()
  ],
  watch: {
    clearScreen: false
  }
};
