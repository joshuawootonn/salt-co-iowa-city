import { gql } from '@apollo/client';
import { getApolloClient } from './client';
import { WhoWeAreBlock } from '../../models/whoWeAre';

export const whoWeAreBlockQuery = gql`
    query blockWhoWeAre {
        blockWhoWeAreCollection(limit: 1, preview: true) {
            items {
                title
                body
            }
        }
    }
`;

export const getWhoWeAreBlock = async (): Promise<WhoWeAreBlock> => {
    const client = getApolloClient({});

    const { data: rawWhoWeAre } = await client.query({
        query: whoWeAreBlockQuery,
    });

    return rawWhoWeAre.blockWhoWeAreCollection.items[0];
};
