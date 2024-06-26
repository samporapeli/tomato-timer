/** @type { import("eslint").Linter.Config } */
module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
	],
	rules: {
		'indent': ['error', 'tab'],
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'comma-dangle': ['error', 'always-multiline'],
		'prefer-const': 'warn',
		'no-unused-vars': 'warn',
		'no-undef': 'error',
		'no-constant-condition': 'warn',
		'no-empty': 'warn',
		'no-extra-boolean-cast': 'warn',
		'no-extra-semi': 'warn',
		'no-extra-parens': 'warn',
		'no-irregular-whitespace': 'warn',
		'import/order': [
			'error',
			{
				'groups': [
					'builtin',
					'external',
					'internal',
					['sibling', 'parent'],
					'index',
					'object',
					'type',
				],
				'pathGroups': [
					{
						'pattern': 'svelte',
						'group': 'external',
						'position': 'before',
					},
				],
				'pathGroupsExcludedImportTypes': ['builtin'],
				'newlines-between': 'always',
				'alphabetize': {
					'order': 'asc',
					'caseInsensitive': true,
				},
			},
		],
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
};
