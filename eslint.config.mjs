import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "**/.next/**",
      "**/.turbo/**",
      "**/.vercel/**",
      "**/.vscode/**",
      "**/coverage/**",
      "**/dist/**",
      "**/out/**",
      "**/build/**",
      "**/public/**",
      "**/node_modules/**",
      "**/.eslintrc.cjs",
      "**/.prettierrc.cjs",
      "**/eslint.config.mjs",
      "**/package-lock.json",
      "**/package.json",
      "**/README.md",
      "**/next-env.d.ts",
      "**/next.config.js",
      "**/next.config.ts",
      "**/tsconfig.json",
      "**/postcss.config.js",
      "/",
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
      "plugin:react/recommended",
      "plugin:@tanstack/eslint-plugin-query/recommended",
      "plugin:react/jsx-runtime",
      "prettier",
      "plugin:prettier/recommended"
    )
  ),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      react: fixupPluginRules(react),
      prettier: fixupPluginRules(prettier),
    },
    rules: {
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],
      // Disable strict type checking
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-argument": "off",

      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/static-components": "warn",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/.eslintrc.{js,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: "script",
    },
  },
];
