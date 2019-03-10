module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier/react",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "plugins": [
    ],
    "rules": {
        "no-unused-vars": 1,
        "no-console": 1,
        'react/prop-types': 0,
        'prettier/prettier': ['error', {
            'singleQuote': true,
            'trailingComma': 'all',
            'jsxBracketSameLine': true,
        }],
    }
};