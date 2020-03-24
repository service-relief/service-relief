const tailwind = require("tailwindcss");

module.exports = () => ({
  plugins: [tailwind(require.resolve("./tailwind.config.js"))]
});
