const path = require('path');
require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Joshua Wootonnn`,
    description: `Cowboy Hacker`,
    author: `@joshuawootonn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joshua Wootonn`,
        short_name: `JW`,
        start_url: `/`,
        background_color: `#FBB02D`,
        theme_color: `#FBB02D`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/logo.png`,
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        helpers: path.join(__dirname, 'src/utils'),
        models: path.join(__dirname, 'src/models'),
        repositories: path.join(__dirname, 'src/repositories'),
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/images'),
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-vimeo`,
      options: {
        clientID: process.env.VIMEO_CLIENT_ID,
        clientSecret: process.env.VIMEO_CLIENT_SECRET,
        userID: 'horspistemovie'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
