/** @type {import("eslint").Linter.Config} */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
}
