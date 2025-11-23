import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>OurStory Research Agents</span>,
  project: {
    link: 'https://github.com/vespo92/OurStory',
  },
  docsRepositoryBase: 'https://github.com/vespo92/OurStory/tree/main/apps/docs',
  footer: {
    text: 'OurStory - Comprehensive Historical Timeline Research',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="OurStory Research Agents" />
      <meta property="og:description" content="AI Research Agents for Historical Truth Investigation" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - OurStory Research Agents',
    };
  },
};

export default config;
