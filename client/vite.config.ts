import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

console.log("PATHH", path.resolve(__dirname, "src/"));
// console.log(path);
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@pages": path.resolve(__dirname, "src/pages") },
  },
});
