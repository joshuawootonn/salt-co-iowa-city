// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const previewHost = 'preview.contentful.com';
const cdnHost = 'cdn.contentful.com';
const isPreview = process.env.CONTENTFUL_HOST === previewHost;

module.exports = {
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: isPreview
                    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                    : process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
                host: isPreview ? previewHost : cdnHost,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-env-variables`,
            options: {
                allowList: ['EMAIL_API_ENDPOINT'],
            },
        },
    ],
};
