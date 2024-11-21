import { defineConfig } from "vite";

export default defineConfig({
  base: "/",  // Ensure the base path is set to root for correct asset paths
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'mui-vendor': ['@mui/material'],
        },
      },
    },
  },
});
