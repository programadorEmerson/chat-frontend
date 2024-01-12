import type { StorybookConfig } from "@storybook/nextjs";
import type { Configuration } from "webpack"; // Importe a interface Configuration do webpack

import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@bbbtech/storybook-formik/register"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [path.join(__dirname, "../public")],

  webpackFinal: async (storybookWebpackConfig: Configuration) => {
    if (!storybookWebpackConfig.resolve) {
      storybookWebpackConfig.resolve = {}; 
    }
    if (!storybookWebpackConfig.resolve.alias) {
      storybookWebpackConfig.resolve.alias = {}; 
    }

    storybookWebpackConfig.resolve.alias['@'] = path.resolve(__dirname, '../src');
    return storybookWebpackConfig;
  },
};

export default config;
