import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import withApollo from 'next-with-apollo';

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
const DELIVERY_TOKEN = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;
const PREVIEW_TOKEN = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
const CDA = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

const env = process.env.NODE_ENV;

export const isProduction = env === 'production';

const createLink = (isPreview: boolean) =>
    createHttpLink({
        fetch,
        uri: CDA,
        headers: {
            authorization: `Bearer ${
                isPreview ? PREVIEW_TOKEN : DELIVERY_TOKEN
            }`,
            'Content-Language': 'en-us',
        },
    });

export const getApolloClient = ({ initialState }: any, isPreview = false) =>
    new ApolloClient({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        link: createLink(isPreview),
        cache: new InMemoryCache(initialState || {}),
    });

export const withApolloClient = withApollo(getApolloClient);
