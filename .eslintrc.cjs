module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["react-refresh", "@typescript-eslint", "prettier", "jsx-a11y"],
  ignorePatterns: ["dist", ".eslintrc.cjs", "*.config.*"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "off",
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: "all",
        printWidth: 80,
      },
    ],
  },
}
