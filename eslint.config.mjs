import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Custom rules
  {
    rules: {
      // Reduce severity of link warnings - allow <a> tags (user can migrate later)
      "@next/next/no-html-link-for-pages": "warn",
      // Allow <img> tags (nextImage can be added later if needed)
      "@next/next/no-img-element": "off",
      // Allow unescaped entities in JSX
      "react/no-unescaped-entities": "off",
      // Reduce severity of unused vars
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
