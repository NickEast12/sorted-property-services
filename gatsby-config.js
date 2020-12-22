require('dotenv').config({ path: '.env' });

const path = require(`path`);

console.log(process.env.GATSBY_GOOGLE_API_KEY);

module.exports = {
  siteMetadata: {
    title: `Sorted Property Services`,
    siteUrl: `https://www.sortedpropertyservices.co.uk`,
    description: `fill this in later`,
    twitter: `@`,
    facebook: `facebook`,
    linkedin: 'linkedin',
    image: `/favicon.png`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-52136219-2',
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
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
        host: 'https://www.sortedpropertyservices.co.uk',
        sitemap: 'https://www.sortedpropertyservices.co.uk/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#ffffff`,
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

    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-52136219-2',
          anonymize: true,
        },
        environments: ['production', 'development'],
      },
    },
  ],
};
