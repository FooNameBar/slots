/** @type {import("prettier").Config} */
const config = {
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
