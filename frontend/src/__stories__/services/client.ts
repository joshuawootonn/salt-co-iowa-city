import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';

const SPACE = process.env.STORYBOOK_CONTENTFUL_SPACE_ID;
const ENVIRONMENT = process.env.STORYBOOK_CONTENTFUL_ENVIRONMENT;
const PREVIEW_TOKEN = process.env.STORYBOOK_CONTENTFUL_PREVIEW_ACCESS_TOKEN;
const CDA = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

const createLink = createHttpLink({
    fetch,
    uri: CDA,
    headers: {
        authorization: `Bearer ${PREVIEW_TOKEN}`,
        'Content-Language': 'en-us',
    },
});

export const getApolloClient = ({ initialState }: any) =>
    new ApolloClient({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        link: createLink,
        cache: new InMemoryCache(initialState || {}),
    });
