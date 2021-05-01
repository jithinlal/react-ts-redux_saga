module.exports = {
  env: {
    browser: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-use-before-define": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "react/jsx-filename-extension": "off",
    "linebreak-style": 0,
  },
};
