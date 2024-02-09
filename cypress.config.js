const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://acolhe-disciplina.innovagovlab.org/inicio",
  },
});
