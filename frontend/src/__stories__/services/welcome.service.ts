import { gql } from '@apollo/client';
import { getApolloClient } from './client';
import { WelcomeBlock } from '../../models/welcome';
import { imageRawTransform } from '../../models/image';

export const getWelcomeQuery = gql`
    query blockWelcome {
        blockWelcomeCollection(limit: 1, preview: true) {
            items {
                title
                introWhoWeAre
                introGetConnected
                imagesCollection {
                    items {
                        url
                    }
                }
            }
        }
    }
`;

export const getWelcomeBlock = async (): Promise<WelcomeBlock> => {
    const client = getApolloClient({});

    const { data: rawWelcome } = await client.query({
        query: getWelcomeQuery,
    });

    const block = rawWelcome.blockWelcomeCollection.items[0];

    return {
        ...block,
        images: block.imagesCollection.items.map(imageRawTransform),
    };
};
