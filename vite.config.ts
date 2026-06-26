import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  envPrefix: ["VITE_", "APP_"],
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (
            id.includes("/react/") ||
            id.includes("/react-dom/") ||
            id.includes("/react-router") ||
            id.includes("/scheduler/") ||
            id.includes("/@mui/") ||
            id.includes("/@emotion/") ||
            id.includes("/react-is/")
          ) {
            return "vendor-react-ui";
          }

          if (id.includes("/@reduxjs/") || id.includes("/react-redux/") || id.includes("/redux") || id.includes("/redux-persist/")) {
            return "vendor-redux";
          }

          if (id.includes("/@radix-ui/") || id.includes("/lucide-react/")) {
            return "vendor-ui";
          }
        },
      },
    },
  },
});
