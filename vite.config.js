import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({

    include: "**/*.{jsx,js}",
  })],
  
  base: "/",
  server: {
    // port: 3000,
    port: 8080
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  test: {
    globals: true,
    include: ["src/**/*.test.js", "src/**/*.test.jsx"],
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
    transformMode: {
      web: [/\.[jt]sx?$/],  // ��� JS/JSX/TS/TSX ������ web ���� ��ȯ
    },
  },
  build: {
    chunkSizeWarningLimit: 100000000,
  },
  esbuild: {
    loader: "jsx",
    include: /\.[jt]sx?$/,  // .js, .jsx, .ts, .tsx ��� ����
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".jsx": "jsx",
      },
    },
  },
});
