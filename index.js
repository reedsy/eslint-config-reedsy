const airBnbBase = require.resolve("eslint-config-airbnb-base");

const config = {
  "extends": airBnbBase,
  "rules": {
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }
    ],
    "no-param-reassign": "off",
    "template-curly-spacing": ["error", "always"],
    "import/no-extraneous-dependencies": "off",
    "object-shorthand": "off",
    "prefer-destructuring": "off",
    "class-methods-use-this": "warn",
    "no-plusplus": "off",
    "default-case": "warn",
    "consistent-return": "off",
    "no-restricted-syntax": "off",
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "no-continue": "off",
    "guard-for-in": "off",
    "radix": "off",
    "array-callback-return": "warn",
    "no-prototype-builtins": "off",
    "no-empty": "warn",
    "no-new": "warn",
    "no-use-before-define": "off",
    "no-underscore-dangle": "off"
  },
  "overrides": [
    {
      "files": "*.spec.js",
      "rules": {
        "no-unused-expressions": "off"
      }
    }
  ]
};

module.exports = config;
