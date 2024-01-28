import { defineConfig } from 'cypress'

const finalConfig = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {},
  e2e: {
    experimentalStudio: true,
    baseUrl: 'https://csgoempire.com',
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    chromeWebSecurity: false
  },
})

export default finalConfig
