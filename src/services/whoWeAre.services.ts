import { getApolloClient } from '../../apollo/client';
import { gql } from '@apollo/client';

export interface WhoWeAreBlock {
    title: string;
    body: string;
}

export const whoWeAreBlockQuery = gql`
    query blockWhoWeAre {
        blockWhoWeAreCollection(limit: 1) {
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
