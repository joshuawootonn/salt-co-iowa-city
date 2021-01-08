exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage.startsWith('develop')) {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    'react-dom': '@hot-loader/react-dom',
                },
            },
        });
    }
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
    type ContentfulMinistryConnection implements Node
    @childOf(types: ["ContentfulMinistryConnectionConnection"]) {
        nextEvent: ContentfulEvent
    }
    `;
    createTypes(typeDefs);
};
