import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { babel } from '@rollup/plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'bundled',
      presets: [['@babel/preset-typescript', { allowDeclareFields: true }]],
      plugins: [['@babel/plugin-proposal-decorators', { version: '2023-05' }]],
      exclude: /node_modules/,
    }),
    react()
  ],
  esbuild: {
    drop: ['console', 'debugger'],
  } as any,
});
