import { gql } from '@apollo/client';
import { getApolloClient } from './client';
import { ConnectionGroupBlock } from '../../models/connectionGroup';

export const connectionGroupBlockQuery = gql`
    query blockConnectionGroup {
        blockConnectionGroupsCollection(limit: 1) {
            items {
                title
                description
                itemsCollection {
                    items {
                        leaders
                        description
                        gender
                        dateTime
                    }
                }
            }
        }
    }
`;

export const getConnectionGroupBlock = async (): Promise<
    ConnectionGroupBlock
> => {
    const client = getApolloClient({});

    const { data: rawQueryResult } = await client.query({
        query: connectionGroupBlockQuery,
    });

    const rawBlock = rawQueryResult.blockConnectionGroupsCollection.items[0];

    return {
        title: rawBlock.title,
        description: rawBlock.description,
        groups: rawBlock.itemsCollection.items,
    };
};
