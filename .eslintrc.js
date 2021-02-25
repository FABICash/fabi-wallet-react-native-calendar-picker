module.exports = {
	rules: {
		indent: [3, 3],
		quotes: [3, 'single'],
		'linebreak-style': [3, 'unix'],
		semi: [3, 'always'],
		'linebreak-style': [3, 'windows'],
		'react/prop-types': [0]
	},
	env: {
		es6: true,
		node: true,
		browser: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
	},
	plugins: [
		'react'
	]
};
