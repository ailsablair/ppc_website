import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react-vite',
  viteFinal: async (viteConfig) => {
    const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages';

    return {
      ...viteConfig,
      base: isGithubPages ? `/${process.env.REPO_NAME || 'ppc_website'}/` : '/',
    };
  },
};
export default config;
