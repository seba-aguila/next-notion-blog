//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts"

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/clientComponents.ts"),
        resolve(__dirname, "src/serverComponents.ts"),
      ],
      name: "ReactNotionBlog",
      fileName: (format, name) => {
        return `${name}.js`;
      },
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ["react"],
      output: {
        banner: (chunkInfo) => {
          if (chunkInfo.name === "clientComponents") {
            return "'use client';";
          }
          return "";
        }
      }
    },
  },
  plugins: [
    dts()
  ]
});