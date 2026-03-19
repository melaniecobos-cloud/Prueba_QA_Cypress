const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bsraxe',
 
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    defaultCommandTimeout: 10000,
    video: true
  },
});
