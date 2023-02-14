const { loadConfigFromFile, mergeConfig } = require("vite");
import type { StorybookViteConfig } from '@storybook/builder-vite';
import * as path from 'path';

const config: StorybookViteConfig = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "storybook-dark-mode"
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite"
  },
  async viteFinal(config) {
    // Add your configuration here
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    );
    return mergeConfig(config, {
      ...userConfig,
      
      // manually specify plugins to avoid conflict
      plugins: [],
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    })
  },
  features: {
    storyStoreV7: true,
    postcss: false
  },
}

export default config