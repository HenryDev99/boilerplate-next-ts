module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "react", "no-relative-import-paths"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "prettier/prettier": ["error", { singleQuote: true, semi: false }],
    "@typescript-eslint/no-var-requires": "off",
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { allowSameFolder: true, rootDir: "src", prefix: "@" },
    ],
    // 서식 설정을 Prettier에게 위임하도록 ESLint 설정
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: "always",
        plugins: ["prettier-plugin-tailwindcss"],
      },
    ],
  },
  globals: {
    React: "writable",
  },
};
