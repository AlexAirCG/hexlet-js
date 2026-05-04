import js from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier"; // Только этот конфиг!

export default [
  {
    ignores: ["**/*.html"],
  },
  js.configs.recommended, // Базовые правила логики (ошибки, неиспользуемые переменные)
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.browser,
      },
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": "warn",
      // Здесь ТОЛЬКО правила логики. Никаких кавычек и точек с запятой!
    },
  },
  prettierConfig, // ОБЯЗАТЕЛЬНО ПОСЛЕДНИМ. Он отключит все правила ESLint, которые могут мешать Prettier.
];
// =====================================================
// import js from "@eslint/js";
// import globals from "globals";
// import { defineConfig } from "eslint/config";
// import stylistic from "@stylistic/eslint-plugin";

// export default defineConfig([
//   stylistic.configs.recommended,
//   {
//     files: ["**/*.{js,mjs,cjs}"],
//     plugins: { js },
//     extends: ["js/recommended"],
//     languageOptions: { globals: globals.node },
//     rules: {
//       "@stylistic/quotes": ["error", "double"], // Разрешаем двойные кавычки
//       "@stylistic/semi": ["error", "always"], // Требуем точки с запятой
//     },
//   },
// ]);
