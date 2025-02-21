import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite para habilitar o suporte ao React
export default defineConfig({
  plugins: [react()] // Adiciona o plugin React ao Vite
});