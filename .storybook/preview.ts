import type { Preview } from "@storybook/react";
import {themes} from "@storybook/theming"
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';

import "../src/styles/globals.css";

initialize();

export const decorators = [mswDecorator];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
    loaders: [mswLoader],
  },
};

export default preview;
