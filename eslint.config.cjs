const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");

const {
    fixupConfigRules,
    fixupPluginRules,
} = require("@eslint/compat");

const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const react = require("eslint-plugin-react");
const prettier = require("eslint-plugin-prettier");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
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

    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@tanstack/eslint-plugin-query/recommended",
        "plugin:react/jsx-runtime",
        "prettier",
        "plugin:prettier/recommended",
    )),

    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        react: fixupPluginRules(react),
        prettier: fixupPluginRules(prettier),
    },

    rules: {
        "@typescript-eslint/no-misused-promises": ["error", {
            checksVoidReturn: false,
        }],
    },

    settings: {
        react: {
            version: "detect",
        },
    },
}, {
    languageOptions: {
        globals: {
            ...globals.node,
        },

        sourceType: "script",
        parserOptions: {},
    },

    files: ["**/.eslintrc.{js,cjs}"],
}, globalIgnores([
    "**/.next",
    "**/.vscode",
    "**/node_modules",
    "**/.eslintrc.cjs",
    "**/package-lock.json",
    "**/package.json",
    "**/README.md",
    "**/next-env.d.ts",
    "**/next.config.js",
    "**/tsconfig.json",
    "**/postcss.config.js",
])]);
