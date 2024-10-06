import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			semi: ["warn", "always"],
			quotes: ["warn", "double"],
			"jsx-quotes": ["warn", "prefer-double"],
			indent: ["warn", "tab", { SwitchCase: 1 }],
			"no-tabs": 0,
			"max-len": ["warn", 120],
		},
	}
);
