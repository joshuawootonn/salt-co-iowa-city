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
