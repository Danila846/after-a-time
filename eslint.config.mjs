import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
	// js.configs.recommended,

	{
		rules: {
			'react/jsx-indent': [2, "tab"],
			'react/jsx-indent-props': [2, "tab"],
			indent: [2, "tab"],
			'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
			'import/no-unresolved': 'off',
			'import/prefer-default-export': 'off',
			'no-unused-vars': 'warn',
			'react/require-default-props': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/jsx-props-no-spreading': 'warn',
			'react/function-component-definition': 'off',
			'no-shadow': 'off',
			'import/extensions': 'off',
			'import/no-extraneous-dependencies': 'off',
			'no-underscore-dangle': 'off',
		},
		globals: {
			"__IS_DEV__": true,
		},
		plugins: [
			"react-hooks"
		]
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
	},
	{
		languageOptions: { globals: globals.browser }
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
];