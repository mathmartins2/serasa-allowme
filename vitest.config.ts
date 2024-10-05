import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['src/**/*.{test,spec}.{ts,tsx}'], // Apenas inclui os testes dentro da pasta src
    exclude: [
      'node_modules/**', // Exclui arquivos dentro de node_modules
      'dist/**', // Exclui arquivos dentro da pasta dist
      'build/**', // Exclui arquivos dentro da pasta build
      'coverage/**', // Exclui relatórios de cobertura
    ],
  },
});
