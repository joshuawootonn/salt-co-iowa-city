const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [
        optimizedImages,
        {
            optimizeImages: true,
            optimizeImagesInDev: true,
        },
    ],

    // your other plugins here
]);

module.exports = {
    env: {
        CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
        CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    },
};
