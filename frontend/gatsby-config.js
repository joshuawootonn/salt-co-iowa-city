// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
                host: process.env.CONTENTFUL_HOST,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
};
