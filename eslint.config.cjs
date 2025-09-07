module.exports = [
	{
		files: ['**/**/*.ts', '**/**/*.tsx'],
		ignores: ['node_modules/**'],
		languageOptions: {
			parser: require('@typescript-eslint/parser'),
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module'
			}
		},
		plugins: {
			'@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
			'sort-class-members': require('eslint-plugin-sort-class-members')
		},
		rules: {
			'sort-class-members/sort-class-members': [
				'error',
				{
					order: [
						'[properties]',
						'constructor',
						'[static-properties]',
						'[static-methods]',
						'[methods]'
					],
					accessorPairPositioning: 'getThenSet'
				}
			]
		}
	}
];
