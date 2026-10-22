import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const currentFile = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFile);

export default defineConfig({
plugins: [
react(),
tailwindcss()
],

resolve: {
alias: {
'@': currentDirectory
}
},

server: {
host: '0.0.0.0',
port: 3000
},

build: {
outDir: 'dist',
emptyOutDir: true
}
});
