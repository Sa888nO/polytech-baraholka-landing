// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react"
    ],
    rules: {
        "no-unused-vars": "off",
        "no-undef": "warn",
        semi: "warn",
        "semi-spacing": [
            "warn",
            {
                before: false,
                after: false
            }
        ],
        "no-import-assign": "warn",
        "require-atomic-updates": "warn",
        "array-callback-return": "warn",
        "block-scoped-var": "warn",
        "default-case": "warn",
        "grouped-accessor-pairs": "warn",
        "no-alert": "warn",
        "no-empty-function": "warn",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-invalid-this": "warn",
        "no-iterator": "warn",
        "no-lone-blocks": "warn",
        "no-loop-func": "warn",
        "no-new": "warn",
        "no-new-func": "warn",
        "no-new-wrappers": "warn",
        "no-param-reassign": "warn",
        "no-proto": "warn",
        "no-return-assign": "warn",
        "no-script-url": "warn",
        "no-self-compare": "warn",
        "no-sequences": "error",
        "no-throw-literal": "warn",
        "no-unmodified-loop-condition": "warn",
        "no-unused-expressions": "off",
        "no-useless-concat": "warn",
        "no-void": "error",
        "prefer-promise-reject-errors": "off",
        "require-await": "warn",
        "vars-on-top": "warn",
        "no-restricted-globals": "warn",
        "no-use-before-define": "error",
        "no-mixed-requires": "warn",
        camelcase: "off",
        "brace-style": "warn",
        "func-name-matching": "warn",
        "func-style": "off",
        "id-length": "off",
        "jsx-quotes": "warn",
        "keyword-spacing": "warn",
        "linebreak-style": "off",
        quotes: ["warn", "double"],
        "lines-between-class-members": "warn",
        "new-cap": "warn",
        "new-parens": "warn",
        "newline-per-chained-call": "warn",
        "no-array-constructor": "warn",
        "no-bitwise": "warn",
        "no-continue": "warn",
        "no-mixed-operators": "warn",
        "no-mixed-spaces-and-tabs": "warn",
        "no-multi-assign": "warn",
        "no-nested-ternary": "off",
        "no-new-object": "warn",
        "no-plusplus": "warn",
        "no-tabs": "warn",
        "no-trailing-spaces": "off",
        "no-underscore-dangle": "off",
        "no-whitespace-before-property": "warn",
        "nonblock-statement-body-position": "warn",
        "object-curly-spacing": "warn",
        "object-property-newline": "warn",
        "operator-linebreak": "error",
        "quote-props": ["warn", "as-needed"],
        "space-infix-ops": "warn",
        "arrow-body-style": "off",
        "no-debugger": "warn",
        "arrow-parens": "warn",
        "arrow-spacing": "warn",
        "constructor-super": "warn",
        "no-confusing-arrow": "warn",
        "no-duplicate-imports": "warn",
        "no-new-symbol": "warn",
        "no-this-before-super": "warn",
        "no-useless-rename": "warn",
        "no-var": "error",
        "object-shorthand": "error",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-template": "warn",
        "require-yield": "error",
        "rest-spread-spacing": "error",
        "symbol-description": "warn",
        "yield-star-spacing": "warn",
        "react/display-name": "off",
        "prefer-const": "warn",
        "react/prop-types": "off",
        indent: [
            "warn",
            4,
            {
                SwitchCase: 1,
                MemberExpression: 1
            }
        ],
        "wrap-regex": "warn",
        "switch-colon-spacing": "warn",
    }
};
