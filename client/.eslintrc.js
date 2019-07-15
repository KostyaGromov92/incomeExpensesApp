module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",

    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },

    "globals": {
      "Generator": true,
      "afterEach": false,
      "beforeEach": false,
      "describe": false,
      "it": false
    },

    "env": {
      "browser": true,
      "es6": true,
      "mocha": true,
      "node": true
    },

    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true,
      }
    },


    "parser": "babel-eslint",
};
