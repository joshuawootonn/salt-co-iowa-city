import { gql } from '@apollo/client';
import { getApolloClient } from './client';
import { HowToConnectBlock } from '../../models/howToConnect';

export const howToConnectQuery = gql`
    query blockWhoWeAre {
        blockHowToConnectCollection(limit: 1, preview: true) {
            items {
                title
                body
            }
        }
    }
`;

export const getHowToConnectBlock = async (): Promise<HowToConnectBlock> => {
    const client = getApolloClient({});

    const { data: rawHowToConnect } = await client.query({
        query: howToConnectQuery,
    });

    return rawHowToConnect.blockHowToConnectCollection.items[0];
};
