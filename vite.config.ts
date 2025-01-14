import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Necesario para pruebas en React
    globals: true,        // Habilita las funciones globales como `test`, `expect`, etc.
    setupFiles: './setupTest.js', // Archivo de configuración opcional
  },
});