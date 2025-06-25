import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api-proxy": {
        target: "https://hit-me-up-api.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-proxy/, "/api"),
        secure: false,
      },
    },
  },
});

// local development configuration
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api-proxy": {
//         target: "https://hit-me-up-api.vercel.app",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api-proxy/, "/api"),
//         secure: false,
//       },
//     },
//   },
// });
