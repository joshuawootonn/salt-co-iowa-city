import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import withApollo from 'next-with-apollo';

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
const DELIVERY_TOKEN = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;
const PREVIEW_TOKEN = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
const CDA = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

const env = process.env.ENV_OVERRIDE || process.env.NODE_ENV;

export const isProduction = env === 'production';

const httpLink = createHttpLink({
    fetch, // Switches between unfetch & node-fetch for client & server.
    uri: CDA,
    headers: {
        authorization: `Bearer ${
            isProduction ? DELIVERY_TOKEN : PREVIEW_TOKEN
        }`,
        'Content-Language': 'en-us',
    },
});

export const getApolloClient = ({ initialState }: any) =>
    new ApolloClient({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        link: httpLink,
        cache: new InMemoryCache(initialState || {}),
    });

export const withApolloClient = withApollo(getApolloClient);
