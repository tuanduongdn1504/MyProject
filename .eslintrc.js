export default {
    "extends": "airbnb",
    "rules": {
        // overrides
        "react-native/no-unused-styles": 2,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-use-before-define": 0,
        "react/forbid-prop-types": 0,
        "react/require-default-props": 0,
        "arrow-body-style": 0,
        "import/prefer-default-export": 0,
        "class-methods-use-this": 0
    },
   "eslint func-style": ["error", "declaration", { "allowArrowFunctions": true }],  //var foo = () => {};
   "eslint func-style": ["error", "expression"],    //var foo = function() { ... };
   "eslint func-style": ["error", "declaration"]    //function foo() { ... } + SomeObject.foo = function() { ... };
};