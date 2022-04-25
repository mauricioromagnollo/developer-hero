module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    "import/resolver": {
      "typescript": {},
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    'sort-imports': ["error", {
      "ignoreCase": true,
      "ignoreDeclarationSort": true,
    }],
    'import/order': [
      1,
      {
        "groups": ["external", "builtin", "internal", "sibling", "parent", "index"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    'import/namespace': "off"
  },
};
