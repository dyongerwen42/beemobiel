import js from "@eslint/js";
import nextConfig from "eslint-config-next";

export default [
  js.configs.recommended,
  ...nextConfig,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "dist/**"]
  }
];