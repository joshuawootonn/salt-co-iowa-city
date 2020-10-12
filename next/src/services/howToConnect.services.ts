import { getApolloClient } from '../../apollo/client';
import { gql } from '@apollo/client';

export interface HowToConnectBlock {
    title: string;
    body: string;
}

export const howToConnectQuery = gql`
    query blockWhoWeAre {
        blockHowToConnectCollection(limit: 1) {
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
