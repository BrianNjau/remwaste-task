// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react"; // Import React plugin if your tests use React

export default defineConfig({
  plugins: [react()], // Include any necessary Vite plugins for your components
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    globals: true,
  },
});
