module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    // "extends": "standard",
    // "rules": {
    //     "indent": [
    //         "error",
    //         4
    //     ],
    //     "semi": [
    //         "error",
    //         "always"
    //     ],
    //     "no-trailing-spaces": 0,
    //     "keyword-spacing": 0,
    //     "no-unused-vars": 1,
    //     "no-multiple-empty-lines": 0,
    //     "space-before-function-paren": 0,
    //     "eol-last": 0
    // }
};
