import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: globals.node } },
	{
		rules: {
			'prettier/prettier': ['error', { tabWidth: 4, useTabs: true }],
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/explicit-function-return-type': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/consistent-type-definitions': [
				'error',
				'interface',
			],
			'@typescript-eslint/strict-boolean-expressions': 'warn',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/prefer-nullish-coalescing': 'error',
			'@typescript-eslint/no-unnecessary-condition': 'warn',
			'no-console': 'warn',
			'no-debugger': 'error',
			'no-var': 'error',
			'prefer-const': 'error',
			semi: 'error',
			indent: ['error', 'tab'],
			quotes: ['error', 'single'],
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
];
