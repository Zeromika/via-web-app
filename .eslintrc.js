/**
 * @author thenrerise@gmail.com (Hamit Zor)
 */

module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "quotes": ["error", "double"],
    "indent": ["warn", 2],
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "never"],
    "no-console": "off",
    "no-inline-comments": "off"
  }
};