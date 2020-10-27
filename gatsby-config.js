import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Sorted Property Services`,
    siteUrl: `https://wwww.nick-east.com`,
    description: `fill this in later`,
    twitter: `@comebacktothis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, 'images'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sorted`,
        short_name: `Sorted`,
        start_url: `/`,
        background_color: `#FFC82D`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        ssr: true,
        exclude: ['/404'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.sorted.co.uk/',
        sitemap: 'https://www.sorted.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#FFC82D`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        exclude: [
          `/dev-404-page/`,
          `/404/`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback/`,
        ],
        trailingSlashes: false,
      },
    },
  ],
};
