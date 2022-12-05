const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-dark-mode"
  ],
  staticDirs: ["./public", "./assets"],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite"
  },
  typescript: {
    check: false,
    checkOptions: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: (await import('../vite.config.ts')).default.resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
  features: {
    storyStoreV7: true,
    postcss: false
  },
  previewHead: (head) => (`
  ${head}
  <style>
    body {
      background-color: #fff !important;
    }
    body.dark {
      background-color: #161C26 !important;
    }
  </style>
`)
}