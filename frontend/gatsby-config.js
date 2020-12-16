// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const previewHost = 'preview.contentful.com';
const cdnHost = 'cdn.contentful.com';
const isPreview = process.env.CONTENTFUL_HOST === previewHost;

const { VERCEL_URL = 'https://www.saltiowacity.com', VERCEL_ENV } = process.env;
const siteUrl = VERCEL_URL;

module.exports = {
    siteMetadata: {
        siteUrl,
        twitterUsername: `JoshWootonn`,
    },
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
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Salt Company Iowa City`,
                short_name: `Salt Co.`,
                description:
                    'Salt Company is a christian student ministry at the University of Iowa.',
                start_url: `/`,
                background_color: `#181A26`,
                theme_color: `#CFD7F2`,
                display: `standalone`,
                icon: `static/favicon.png`,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                resolveEnv: () => VERCEL_ENV,
                env: {
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                    preview: {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                    production: {
                        policy: [{ userAgent: '*' }],
                    },
                },
            },
        },
    ],
};
