import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite",
  "viteFinal": async (config) => {
    return {
      ...config,
      base: process.env.NODE_ENV === 'production' ? `/${process.env.REPO_NAME || 'ppc_website'}/` : '/'
    };
  }
};
export default config;
