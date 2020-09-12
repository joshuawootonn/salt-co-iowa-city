import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import withApollo from 'next-with-apollo';

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

const httpLink = createHttpLink({
    fetch, // Switches between unfetch & node-fetch for client & server.
    uri: CONTENTFUL_URL,
    headers: {
        authorization: `Bearer ${TOKEN}`,
        'Content-Language': 'en-us',
    },
});

export default withApollo(
    ({ initialState }: any) =>
        new ApolloClient({
            link: httpLink,
            cache: new InMemoryCache(initialState || {}),
        })
);
