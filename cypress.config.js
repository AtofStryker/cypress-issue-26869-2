const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 70000,
    defaultCommandTimeout: 70000,
    experimentalModifyObstructiveThirdPartyCode: true,
    viewportHeight: 1000,
    viewportWidth: 1280,
  },
  chromeWebSecurity: false,
});
