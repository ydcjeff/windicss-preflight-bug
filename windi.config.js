const { defineConfig } = require("windicss/helpers");

module.exports = defineConfig({
  preflight: {
    safelist: 'h1 h2 h3 p img',
  }
})
